import { projects } from './data/projects.js';

export const ROUTE_PATHS = ['/', ...projects.map(p => `/work/${p.id}`), '/resume'];

export function getRouteFromPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/resume') return { type: 'resume' };

  const match = path.match(/^\/work\/([^/]+)$/);
  if (match) {
    const project = projects.find(p => p.id === match[1]);
    if (project) return { type: 'project', project };
  }

  return { type: 'home' };
}
