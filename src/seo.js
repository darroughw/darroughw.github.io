import { SITE_URL, SITE_NAME } from './site-config';

const HOME_DESCRIPTION =
  "Darrough West is a UX/UI designer and front-end engineer with 15+ years of experience designing and building digital products, from Figma to production code.";

export function getRouteMeta(route) {
  if (route.type === 'project') {
    const p = route.project;
    return {
      title: `${p.title} — ${SITE_NAME}`,
      description: p.desc,
      path: `/work/${p.id}/`,
      image: `${SITE_URL}/og/${p.id}.png`,
      type: 'article',
    };
  }

  if (route.type === 'resume') {
    return {
      title: `Résumé — ${SITE_NAME}`,
      description: `${SITE_NAME}'s résumé: UX/UI design and front-end engineering experience, core skills, and career highlights.`,
      path: '/resume/',
      image: `${SITE_URL}/og/resume.png`,
      type: 'profile',
    };
  }

  return {
    title: `${SITE_NAME} — UX/UI Designer & Front-End Engineer`,
    description: HOME_DESCRIPTION,
    path: '/',
    image: `${SITE_URL}/og-image.png`,
    type: 'website',
  };
}

export function getJsonLd(route, canonicalUrl) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    jobTitle: 'UX/UI Designer & Front-End Engineer',
    email: 'mailto:darrough@gmail.com',
    sameAs: ['https://linkedin.com/in/darroughw', 'https://github.com/darroughw'],
  };

  if (route.type === 'project') {
    const p = route.project;
    return [
      person,
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: p.title,
        description: p.desc,
        url: canonicalUrl,
        creator: { '@type': 'Person', name: SITE_NAME },
        datePublished: p.year,
      },
    ];
  }

  return [person];
}
