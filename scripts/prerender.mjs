import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrOutDir = path.join(root, 'dist-ssr');

async function main() {
  // 1. Client build (produces the real dist/ output: JS, CSS, copied public/ assets)
  await build({ root, logLevel: 'warn' });

  // 2. SSR build of the server entry, used only to prerender — not deployed
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
  });

  const { render } = await import(pathToFileURL(path.join(ssrOutDir, 'entry-server.js')));
  const { ROUTE_PATHS } = await import(pathToFileURL(path.join(root, 'src/routes.js')));
  const { SITE_URL } = await import(pathToFileURL(path.join(root, 'src/site-config.js')));

  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  for (const routePath of ROUTE_PATHS) {
    const { html, head } = render(routePath);
    const page = template
      .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, head)
      .replace('<!--app-html-->', html);

    const outPath =
      routePath === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    console.log('prerendered', routePath, '->', path.relative(root, outPath));
  }

  // 3. Regenerate the sitemap from the same route list, single source of truth
  const urls = ROUTE_PATHS.map(r => `${SITE_URL}${r === '/' ? '/' : r + '/'}`);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u =>
      `  <url><loc>${u}</loc><changefreq>monthly</changefreq><priority>${u === `${SITE_URL}/` ? '1.0' : '0.8'}</priority></url>`
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

  // 4. Clean up the temporary SSR build
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
