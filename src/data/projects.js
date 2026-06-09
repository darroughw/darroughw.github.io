export const projects = [
  {
    id: 'youfit',
    num: '001',
    title: 'YouFit Virtual 5k',
    desc: 'A real-time virtual running event platform that connected runners nationwide, tracked progress in real-time, and created engaging community challenges.',
    role: 'Lead Design / Development',
    year: '2016',
    tags: ['Mobile Design', 'UX Research', 'Prototyping', 'iOS'],
    imgSrc: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=80',
    detail: {
      overview: 'YouFit wanted to launch a virtual 5k during a period when in-person fitness events were impossible. The challenge: make a screen-based running event feel just as electric and communal as a real race.',
      problem: 'Runners had no way to experience the motivation and community of a race event. Progress tracking was fragmented across devices, and the social layer was missing entirely.',
      solution: 'Designed and built a real-time event platform with live leaderboards, push notification pacing support, and community challenge mechanics. The iOS-first interface kept runners engaged before, during, and after their run.',
      outcome: 'Over 3,000 runners participated nationwide. Average completion rate exceeded typical virtual events by 34%.',
    },
  },
  {
    id: 'delta',
    num: '002',
    title: 'Delta Shower Doors — Search Behavior & UX Redesign',
    desc: 'Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder and content strategy to eliminate user friction.',
    role: 'UX Researcher & Designer',
    tools: 'Hotjar, Algolia, Shopify',
    year: '2024–2025',
    tags: ['UX Research', 'Behavioral Analytics', 'Content Strategy', 'Interaction Design', 'Shopify'],
    imgSrc: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Delta's shower door website (DSWD.com) was growing in traffic but quietly failing its users. Visitors were searching for "installation" and "installation and care" at high rates — not because they wanted to buy, but because the site wasn't answering a basic question before they asked it. As a UX researcher and designer embedded in the project, I used behavioral analytics to identify the gap, developed a content strategy to close it, and redesigned the site's core product finder tool based on what users were actually doing — not what we assumed they were doing.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'subheading', text: '1. Users were searching for help the site wasn\'t providing.' },
            { type: 'paragraph', text: `When I began tracking Algolia search data in April 2024, "installation" and "installation and care" were among the top queries on the site — accounting for dozens of searches per week despite a growing traffic base. This was a signal, not a coincidence. Users arriving at a hardware product site had real questions about installation that the content wasn't answering proactively. They were resorting to search as a workaround.` },
            { type: 'subheading', text: '2. The product finder tool was creating confusion, not clarity.' },
            { type: 'paragraph', text: 'Hotjar heatmap analysis of the Shower Door Finder Tool revealed two critical UX failures. The most popular click on the page was not on a button — users were clicking on images and labels that weren\'t interactive, revealing that the affordances were invisible. And the third most popular click was on Question 2 (style selection) before users had answered Question 1 (door type) — a step that was logically impossible but visually available. The interface was inviting failure.' },
          ],
        },
        {
          heading: 'Research & Discovery',
          body: [
            { type: 'paragraph', text: 'I used a combination of Algolia search data and Hotjar session recordings and heatmaps to build a clear picture of behavior. The Algolia data provided a longitudinal view of what users were searching for over time, which allowed me to correlate content changes with search behavior shifts. The Hotjar heatmaps showed exactly where users were clicking, hesitating, and abandoning — giving me qualitative texture to pair with the quantitative search trends.' },
            { type: 'paragraph', text: `The key insight from the heatmap analysis: users understood the question being asked ("What type of door do you want?") but couldn't figure out how to answer it. The buttons looked like design elements, not interactive controls. This is a classic affordance failure — the interface looked right but didn't behave right.` },
          ],
        },
        {
          heading: 'What I Did',
          body: [
            { type: 'subheading', text: 'Content Strategy for Installation' },
            { type: 'paragraph', text: 'Working from the search data, I developed a targeted content strategy to surface installation information before users needed to search for it. At launch the site had 3 blog posts, 31 FAQs, 19 videos, and no Installation Center. Over the following year, we built that out to 16 blog posts, 38 FAQs, 31 videos, 8 Installation Center articles, and 4 Finder Tool tips — a comprehensive instructional layer woven into the site architecture rather than buried in search results.' },
            { type: 'subheading', text: 'Finder Tool Redesign — Progressive Disclosure' },
            { type: 'paragraph', text: 'Based on the heatmap findings, I redesigned the Shower Door Finder Tool around a progressive disclosure model. The changes addressed both failure modes directly:' },
            { type: 'bullets', items: [
              'One question at a time. Instead of displaying all five questions simultaneously (which allowed users to attempt Q2 before completing Q1), the redesign surfaces each question sequentially. Users cannot skip ahead.',
              `Explicit, labeled Select buttons. The image-only clickable areas were replaced with clear "⊕ Select" buttons beneath each option — unambiguous interactive affordances.`,
              'Progress bar. A step indicator (Type of door → Style → Track Style → Glass Thickness → Collection) was added to orient users and reduce cognitive load.',
            ]},
          ],
        },
        {
          heading: 'Results',
          body: [
            { type: 'paragraph', text: 'The results were measurable and significant across both initiatives. Traffic more than quintupled over the period. Installation-related searches dropped by 92%.' },
            { type: 'table',
              headers: ['Date', 'Installation-Related Searches', 'Site Traffic'],
              rows: [
                ['April 2024', '83', '3,238'],
                ['May 2024', '99', '4,427'],
                ['March 2025', '33', '8,593'],
                ['April 2025', '7', '21,072'],
              ],
            },
            { type: 'stat', items: [
              { value: '92%', label: 'Drop in installation searches' },
              { value: '6×', label: 'Traffic growth over period' },
            ]},
            { type: 'paragraph', text: 'The pattern is the finding. In most analytics contexts, more traffic means more searches. Here, traffic grew 6x while a specific friction-related search category nearly disappeared. That only happens when the content is genuinely resolving user needs before they become search queries.' },
          ],
        },
        {
          heading: 'What This Demonstrates',
          body: [
            { type: 'paragraph', text: 'This project is a good example of what continuous UX research actually looks like in practice. The insights didn\'t come from a single research sprint — they emerged from sustained attention to behavioral signals over time. The Algolia data told me what users needed. The Hotjar heatmaps told me where the interface was letting them down. The redesign addressed both.' },
            { type: 'paragraph', text: 'Reduced search dependency is a positive signal of improved user experience and findability. When users stop asking a question, it usually means the interface finally answered it.' },
          ],
        },
      ],
    },
  },
  {
    id: 'liberty',
    num: '003',
    title: 'Liberty Hardware Shopify Platform',
    desc: 'Complete redesign for a hardware manufacturer, modernizing their Shopify platform to improve product discovery and streamline the customer journey.',
    role: 'Lead Design / Development',
    year: '2025',
    tags: ['Web Design', 'Design System', 'UX Research', 'Responsive', 'Liquid', 'AIO', 'SEO'],
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    detail: {
      overview: 'Liberty Hardware — a leading cabinet hardware manufacturer — needed their Shopify storefront rebuilt from the ground up. The existing site buried products in navigation and failed to convert professional buyers.',
      problem: 'Product discovery was broken. The visual system was inconsistent across 4,000+ SKUs. Mobile performance tanked under product filtering. SEO was an afterthought.',
      solution: 'Built a comprehensive Shopify Liquid design system with a faceted search architecture, smart product photography guidelines, and an AIO-optimized content structure. Collaborated directly with engineering and marketing teams throughout.',
      outcome: 'Improved product page conversion by 28%. Mobile session duration increased by 41%. Site now ranks on page 1 for 60+ target category terms.',
    },
  },
];

export const skills = [
  { name: 'UX/UI & Interaction Design', w: 0.97 },
  { name: 'Design Systems', w: 0.95 },
  { name: 'React / Angular / JS', w: 0.90 },
  { name: 'Figma & Adobe Creative Suite', w: 0.95 },
  { name: 'Accessibility (WCAG)', w: 0.88 },
  { name: 'AI-Driven UX / LLM Interfaces', w: 0.85 },
  { name: 'SEO / GEO', w: 0.82 },
  { name: 'Wireframing & Prototyping', w: 0.93 },
];
