export const colorTokens = [
  { name: 'Background', var: '--bg', value: '#F5F2EC', usage: 'Page background' },
  { name: 'Ink', var: '--ink', value: '#1A1714', usage: 'Primary text, headings, inverted section backgrounds' },
  { name: 'Muted', var: '--muted', value: '#7A7570', usage: 'Reserved secondary muted tone' },
  { name: 'Muted Text', var: '--muted-text', value: '#6F6B66', usage: 'Body copy, descriptions, meta labels' },
  { name: 'Accent', var: '--accent', value: '#C85A2A', usage: 'Hover fills, active states, focus ring, stat bar' },
  { name: 'Accent Text', var: '--accent-text', value: '#AF4F25', usage: 'Accent tuned for text-level contrast — links, labels' },
  { name: 'Accent Light', var: '--accent-light', value: '#F0D5C5', usage: 'Hover backgrounds on light surfaces' },
  { name: 'Rule', var: '--rule', value: '#D8D3CC', usage: 'Borders, dividers, grid gaps' },
  { name: 'Card Background', var: '--card-bg', value: '#FDFAF6', usage: 'Card and stat block surfaces' },
  { name: 'Dark Background', var: '--dark-bg', value: '#1A1714', usage: 'Inverted sections — contact, case study hero' },
  { name: 'Dark Surface', var: '--dark-surface', value: '#221F1B', usage: 'Reserved secondary dark surface' },
];

export const spacingTokens = [
  { name: '--space-1', rem: '.25rem', px: '4px', usage: 'Tight gaps — icon-to-label, badge padding' },
  { name: '--space-2', rem: '.5rem', px: '8px', usage: 'Tag gaps, compact row spacing' },
  { name: '--space-3', rem: '.75rem', px: '12px', usage: 'Nav button padding, small stacks' },
  { name: '--space-4', rem: '1rem', px: '16px', usage: 'Base gap — skill rows, list items' },
  { name: '--space-5', rem: '1.5rem', px: '24px', usage: 'Card gaps, nav padding' },
  { name: '--space-6', rem: '2rem', px: '32px', usage: 'Stat block padding, pagination links' },
  { name: '--space-7', rem: '3rem', px: '48px', usage: 'Section side padding, hero padding' },
  { name: '--space-8', rem: '4rem', px: '64px', usage: 'Case-body vertical padding' },
  { name: '--space-9', rem: '6rem', px: '96px', usage: 'Section top/bottom padding' },
];

export const typeSpecimens = [
  { name: 'Hero Headline', family: "'Playfair Display', serif", weight: 700, size: 'clamp(2.8rem, 5.5vw, 5rem)', sample: 'Crafting Digital', usage: 'H1 — homepage hero only' },
  { name: 'Section Title', family: "'Playfair Display', serif", weight: 400, size: 'clamp(2rem, 3.5vw, 3rem)', sample: 'Selected Work', usage: 'H2 — section and case-study headings' },
  { name: 'Case Subheading', family: "'Playfair Display', serif", weight: 400, style: 'italic', size: '1.2rem', sample: 'Progressive Disclosure', usage: 'H3 — subheadings inside case study bodies' },
  { name: 'Body', family: "'DM Sans', sans-serif", weight: 300, size: '1rem', sample: 'Designed and built the iOS component library in Figma from the ground up.', usage: 'Paragraph copy' },
  { name: 'Eyebrow / Label', family: "'DM Mono', monospace", weight: 400, size: '.72rem', letterSpacing: '.18em', uppercase: true, sample: 'Case Study · 2025', usage: 'Uppercase labels, meta rows, nav links, tags' },
];
