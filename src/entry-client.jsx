import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { getRouteFromPath } from './routes.js';

const container = document.getElementById('root');
const route = getRouteFromPath(window.location.pathname);
const app = (
  <StrictMode>
    <App route={route} />
  </StrictMode>
);

if (import.meta.env.PROD) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
