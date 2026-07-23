import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { getRouteFromPath } from './routes.js';
import { getRouteMeta, getJsonLd } from './seo.js';
import { SITE_URL, SITE_NAME } from './site-config.js';

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function render(pathname) {
  const route = getRouteFromPath(pathname);
  const html = renderToString(<App route={route} />);
  const meta = getRouteMeta(route);
  const canonical = `${SITE_URL}${meta.path}`;
  const jsonLd = getJsonLd(route, canonical);

  const head = `
    <title>${escapeAttr(meta.title)}</title>
    <meta name="description" content="${escapeAttr(meta.description)}" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:type" content="${meta.type}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${escapeAttr(meta.title)}" />
    <meta property="og:description" content="${escapeAttr(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(meta.title)}" />
    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />
    <meta name="twitter:image" content="${meta.image}" />

    ${jsonLd
      .map(
        obj =>
          `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`
      )
      .join('\n    ')}
  `.trim();

  return { html, head };
}
