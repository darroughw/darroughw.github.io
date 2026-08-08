export const projects = [
  {
    id: 'delta',
    num: '001',
    title: 'Delta Shower Doors: Search Behavior & UX Redesign',
    desc: 'Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder and content strategy to eliminate user friction.',
    role: 'UX Researcher & Designer',
    tools: 'Hotjar, Algolia, Shopify',
    year: '2024–2025',
    tags: ['UX Research', 'Behavioral Analytics', 'Content Strategy', 'Interaction Design', 'Shopify'],
    imgSrc: '/images/delta.jpg',
    imgW: 1200,
    imgH: 1200,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Delta's shower door website (<a href="https://www.deltashowerdoors.com" target="_blank" rel="noopener">deltashowerdoors.com</a>) was growing in traffic but quietly failing its users. Visitors were searching for "installation" and "installation and care" at high rates: not because they wanted to buy, but because the site wasn't answering a basic question before they asked it. As a UX researcher and designer embedded in the project, I used behavioral analytics to identify the gap, developed a content strategy to close it, and redesigned the site's core product finder tool based on what users were actually doing, not what we assumed they were doing.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'subheading', text: '1. Users were searching for help the site wasn\'t providing.' },
            { type: 'paragraph', text: `When I began tracking Algolia search data in April 2024, "installation" and "installation and care" were among the top queries on the site, accounting for dozens of searches per week despite a growing traffic base. This was a signal, not a coincidence. Users arriving at a hardware product site had real questions about installation that the content wasn't answering proactively. They were resorting to search as a workaround.` },
            { type: 'subheading', text: '2. The product finder tool was creating confusion, not clarity.' },
            { type: 'paragraph', text: 'Hotjar heatmap analysis of the Shower Door Finder Tool revealed two critical UX failures. The most popular click on the page was not on a button. Users were clicking on images and labels that weren\'t interactive, revealing that the affordances were invisible. And the third most popular click was on Question 2 (style selection) before users had answered Question 1 (door type), a step that was logically impossible but visually available. The interface was inviting failure.' },
          ],
        },
        {
          heading: 'Research & Discovery',
          body: [
            { type: 'paragraph', text: 'I used a combination of Algolia search data and Hotjar session recordings and heatmaps to build a clear picture of behavior. The Algolia data provided a longitudinal view of what users were searching for over time, which allowed me to correlate content changes with search behavior shifts. The Hotjar heatmaps showed exactly where users were clicking, hesitating, and abandoning. That gave me qualitative texture to pair with the quantitative search trends.' },
            { type: 'paragraph', text: `The key insight from the heatmap analysis: users understood the question being asked ("What type of door do you want?") but couldn't figure out how to answer it. The buttons looked like design elements, not interactive controls. This is a classic affordance failure: the interface looked right but didn't behave right.` },
          ],
        },
        {
          heading: 'What I Did',
          body: [
            { type: 'subheading', text: 'Content Strategy for Installation' },
            { type: 'paragraph', text: 'Working from the search data, I developed a targeted content strategy to surface installation information before users needed to search for it. At launch the site had 3 blog posts, 31 FAQs, 19 videos, and no Installation Center. Over the following year, we built that out to 16 blog posts, 38 FAQs, 31 videos, 8 Installation Center articles, and 4 Finder Tool tips: a comprehensive instructional layer woven into the site architecture rather than buried in search results.' },
            { type: 'subheading', text: 'Finder Tool Redesign: Progressive Disclosure' },
            { type: 'paragraph', text: 'Based on the heatmap findings, I redesigned the Shower Door Finder Tool around a progressive disclosure model. The changes addressed both failure modes directly:' },
            { type: 'bullets', items: [
              'One question at a time. Instead of displaying all five questions simultaneously (which allowed users to attempt Q2 before completing Q1), the redesign surfaces each question sequentially. Users cannot skip ahead.',
              `Explicit, labeled Select buttons. The image-only clickable areas were replaced with clear "⊕ Select" buttons beneath each option: unambiguous interactive affordances.`,
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
            { type: 'paragraph', text: 'This project is a good example of what continuous UX research actually looks like in practice. The insights didn\'t come from a single research sprint. They emerged from sustained attention to behavioral signals over time. The Algolia data told me what users needed. The Hotjar heatmaps told me where the interface was letting them down. The redesign addressed both.' },
            { type: 'paragraph', text: 'Reduced search dependency is a positive signal of improved user experience and findability. When users stop asking a question, it usually means the interface finally answered it.' },
          ],
        },
      ],
    },
  },
  {
    id: 'fidelity-fds',
    num: '002',
    title: 'Fidelity Design System: iOS Mobile Workstream',
    desc: 'Led the iOS mobile workstream for a company-wide design system unifying 150+ designers across Fidelity\'s products. Delivered the full Figma component library in 9 months.',
    role: 'Principal UX Designer, iOS Mobile Lead',
    tools: 'Figma, iOS / HIG, Design Tokens',
    year: '2022-23',
    tags: ['Design Systems', 'iOS', 'Figma', 'Component Library', 'UX Leadership'],
    imgSrc: '/images/fidelity.jpg',
    imgW: 1200,
    imgH: 655,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Fidelity Investments is one of the largest financial services companies in the world, with a design organization of 150+ UX designers and researchers working across dozens of products: mobile apps, web platforms, internal tools, and customer-facing experiences. In 2022, the company made a strategic decision to unify all of those surfaces under a single design system: FDS.` },
            { type: 'paragraph', text: `I was brought onto the FDS team as a Principal UX Designer and led the iOS mobile workstream, responsible for designing, structuring, and delivering the Figma component library and templates that would serve as the source of truth for every iOS experience at Fidelity. We had nine months to launch version 1.0. We shipped on time.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'paragraph', text: `Fidelity's design organization had grown organically over years. Individual product teams had built their own component libraries, their own patterns, and their own interpretations of the brand. The result was an ecosystem of inconsistency: similar UI patterns built differently across products, design decisions made in isolation, and no shared language between the teams building iOS, web, and internal tools.` },
            { type: 'paragraph', text: `For a company where customers interact with their retirement savings, investment accounts, and financial planning tools, inconsistency isn't just a design problem: it's a trust problem. When the experience feels different from one screen to the next, it introduces friction and doubt at exactly the moments that require confidence.` },
            { type: 'paragraph', text: `The challenge was not just to build a library. It was to build one that all the designers would actually adopt and trust, across different product areas, different levels of seniority, and different ways of working.` },
          ],
        },
        {
          heading: 'My Role: iOS Mobile Workstream Lead',
          body: [
            { type: 'subheading', text: 'Defining the iOS component architecture' },
            { type: 'paragraph', text: `I established which components were needed for v1.0, how they would be structured within Figma, and how they would map to iOS native patterns while staying aligned with Fidelity's brand. This required balancing fidelity to Apple's Human Interface Guidelines with the design language the FDS team was building: knowing when to follow platform conventions and when to establish Fidelity-specific patterns.` },
            { type: 'subheading', text: 'Building the Figma library' },
            { type: 'paragraph', text: `I designed and built the iOS component library in Figma from the ground up: variants, auto layout, interactive components, and documentation annotations baked directly into the file. The library was structured to be intuitive for designers who had never used a shared system before, not just designers who understood how to work in Figma at a technical level.` },
            { type: 'subheading', text: 'Coordinating with the broader FDS team' },
            { type: 'paragraph', text: `iOS components don't exist in isolation: they needed to align with the token system, the web component library, and the overall FDS design language being developed in parallel. I worked closely with the other workstream leads to ensure visual and behavioral consistency across surfaces without creating bottlenecks.` },
            { type: 'subheading', text: 'Supporting adoption' },
            { type: 'paragraph', text: `After launch, the work didn't stop. I participated in the team's ongoing support structure (office hours, Teams channels, and direct designer support), helping iOS-focused product teams understand how to use the library, when to use it as-is, and how to flag gaps for v1.1.` },
          ],
        },
        {
          heading: 'The Approach',
          body: [
            { type: 'subheading', text: 'Starting with inventory, not components' },
            { type: 'paragraph', text: `Before building anything, I audited the existing iOS design files across Fidelity's product teams to understand what patterns were already in use. The goal was not to start from scratch but to identify what was working, what was inconsistent, and what was missing entirely. This inventory work shaped the component priority list for v1.0: ensuring we shipped the things designers needed most, not just the things that were easiest to build.` },
            { type: 'subheading', text: 'Tokens first, components second' },
            { type: 'paragraph', text: `In close coordination with the tokens workstream, I ensured every iOS component was built on the FDS token system: color, typography, spacing, and elevation values that could be updated globally rather than component by component. This was a deliberate investment in the long-term maintainability of the library and a decision that would pay dividends as FDS evolved past v1.0.` },
            { type: 'subheading', text: 'Designing for designers' },
            { type: 'paragraph', text: `A design system is a product. Its users are designers. I treated the Figma library with the same UX rigor I would apply to a consumer product: thinking about how designers would navigate it, how they would understand the component variants, and how much they would need to read before they could use it. Components were named predictably. Variants were structured to match how designers think about states, not how engineers think about props. Documentation was embedded in the file itself, not in a separate wiki that would fall out of date.` },
            { type: 'subheading', text: 'Phasing scope ruthlessly' },
            { type: 'paragraph', text: `Nine months is not a lot of time to build a comprehensive iOS component library for one of the world's largest financial institutions. I worked with the team to phase v1.0 scope aggressively: prioritizing the components that would unblock the most product teams and deferring edge cases and lower-frequency patterns to v1.1. Shipping a solid, trusted v1.0 on time was more valuable than shipping a comprehensive v1.0 late.` },
          ],
        },
        {
          heading: 'Launch & Adoption',
          body: [
            { type: 'paragraph', text: `FDS v1.0 launched on schedule, with the iOS library fully delivered alongside the web and Android components and Figma templates. The 150+ person design organization was onboarded through a structured rollout: documentation, live training sessions, dedicated Teams channels for questions, and recurring open office hours where designers could bring real problems and get real answers.` },
            { type: 'stat', items: [
              { value: '150+', label: 'Designers onboarded at launch' },
              { value: '9 mo', label: 'From kickoff to v1.0 ship' },
            ]},
            { type: 'paragraph', text: `The qualitative signal from the iOS workstream was strong. Product teams that had previously maintained their own ad hoc component sets adopted the FDS library because it solved a real problem: they no longer had to make foundational decisions from scratch on every project. The shared language created by FDS made design reviews faster, design handoff cleaner, and cross-team collaboration more natural.` },
            { type: 'paragraph', text: `Perhaps most importantly, the system earned trust: that it would be maintained, that questions would be answered, that building on FDS meant building on something stable.` },
          ],
        },
        {
          heading: 'What This Work Demonstrates',
          body: [
            { type: 'paragraph', text: `Design systems are infrastructure. They're unglamorous, they're complex, and their value is most visible in the work they make possible rather than the work themselves. Leading the iOS workstream on FDS required technical depth in Figma and iOS patterns, strategic judgment about scope and prioritization, cross-functional collaboration across a large organization, and a genuine conviction that the designers using the system deserved something that worked as well as the products they were building.` },
            { type: 'paragraph', text: `Shipping v1.0 in nine months at Fidelity's scale wasn't just a delivery achievement. It was a systems thinking challenge, and one of the most consequential design contributions I've made.` },
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
    imgSrc: '/images/liberty.jpg',
    imgW: 1200,
    imgH: 800,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Liberty Hardware, a leading cabinet hardware manufacturer, needed their Shopify storefront rebuilt from the ground up. The existing site buried products in navigation that hadn't scaled with the catalog, and it was failing to convert the professional buyers who make up the bulk of the business.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'subheading', text: '1. Product discovery was broken.' },
            { type: 'paragraph', text: `The catalog had grown past 4,000 SKUs, but the navigation and search experience hadn't grown with it. Buyers who already knew what they needed still had to fight the site to find it, and every extra step between landing page and product page cost conversions.` },
            { type: 'subheading', text: "2. The visual and technical system couldn't scale." },
            { type: 'paragraph', text: `Product presentation was inconsistent across those 4,000+ SKUs, varying by category depending on who had built the page last. Mobile performance degraded under product filtering, the exact moment buyers needed the site to be fast. And SEO had been an afterthought, so a manufacturer with real product depth wasn't showing up for the searches that mattered.` },
          ],
        },
        {
          heading: 'What I Did',
          body: [
            { type: 'subheading', text: 'A design system for the storefront' },
            { type: 'paragraph', text: `I built a comprehensive Shopify Liquid design system to bring consistency across the catalog: reusable templates, components, and content patterns so pages didn't have to be reinvented for every product category.` },
            { type: 'subheading', text: 'Faceted search architecture' },
            { type: 'paragraph', text: `The core of the discovery fix was a faceted search architecture that let professional buyers filter down to the exact product instead of browsing for it. That addressed the discovery failure directly: search became a tool for buyers who already knew what they wanted, not a fallback for buyers who didn't.` },
            { type: 'subheading', text: 'Photography and content standards' },
            { type: 'paragraph', text: `I set smart product photography guidelines to standardize how the catalog looked page to page, and built an AIO-optimized content structure so pages would perform in both traditional search and the newer generation of AI-driven answer engines.` },
            { type: 'subheading', text: 'Cross-functional execution' },
            { type: 'paragraph', text: `None of this happened in isolation. I worked directly with engineering on the technical build and with marketing on content and photography standards throughout the rebuild.` },
          ],
        },
        {
          heading: 'Results',
          body: [
            { type: 'stat', items: [
              { value: '28%', label: 'Increase in product page conversion' },
              { value: '41%', label: 'Increase in mobile session duration' },
              { value: '60+', label: 'Target terms ranking page 1' },
            ]},
            { type: 'paragraph', text: `Conversion and session duration are demand-side signals: they only move when the underlying experience gets easier to use, not just easier to look at. Ranking on page 1 for 60+ target terms is the supply-side half of the same fix, proof that the content structure earned trust from search engines. Together, they show the rebuild solved discovery from both directions: whether someone found the site through search, or landed on it and needed to find a product once they were there.` },
          ],
        },
      ],
    },
  },
  {
    id: 'youfit',
    num: '004',
    title: 'YouFit Livestream Virtual 5K',
    desc: `Transformed a local Miami charity race into a nationwide live-streamed event: turning every YouFit gym into an official starting line, with treadmill-synced live video that made runners feel like they were truly running in Miami.`,
    role: 'Lead Design / Development',
    year: '2016',
    tags: ['Mobile Design', 'UX Research', 'Prototyping', 'iOS', 'Live Streaming'],
    imgSrc: '/images/youfit.jpg',
    imgW: 1200,
    imgH: 800,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `The Miami Children's Health Foundation raises funds for a program that helps children around the world through virtual checkups. Every year they host a local 5K in Miami. But their mission was anything but local. YouFit saw an opportunity: use the same virtual technology that powers the foundation's healthcare model to reimagine what a charity race could be. The result was the first-ever livestream virtual 5K.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'paragraph', text: `A local 5K can only raise so much. The challenge was figuring out how to dramatically expand participation and donations without diluting the race-day experience that makes people show up and give. Simply letting people log their own miles remotely wasn't enough: we needed remote runners to genuinely feel like they were part of the event in Miami, competing in real time, not just tracking steps on their own. That's a UX problem before it's a technology problem: remote participation only works if it doesn't feel remote.` },
          ],
        },
        {
          heading: 'What I Did',
          body: [
            { type: 'subheading', text: 'Turning every gym into a starting line' },
            { type: 'paragraph', text: `On race day, YouFit converted all of its gyms across the country into official starting lines. Official pace runners in Miami wore GoPro cameras and streamed first-person live video of the race course, so remote runners saw exactly what they would have seen on the ground in Miami.` },
            { type: 'subheading', text: 'Treadmill-synced live video' },
            { type: 'paragraph', text: `Each treadmill was equipped with a pace tracker that collected real-time running data and a tablet that displayed the live stream, dynamically synced to match the runner's treadmill speed. Run faster, the video sped up. Slow down, it slowed with you. The same virtual connection technology that lets the Miami Children's Health Foundation reach sick children worldwide was now making a gym treadmill feel like a Miami street.` },
            { type: 'paragraph', text: `That sync was the whole design bet. A livestream alone would have been passive, something to watch while running rather than something tied to the running itself. Linking playback speed to treadmill speed made the remote runner's own effort the input, closing the gap between logging miles and actually racing.` },
          ],
        },
        {
          heading: 'What This Demonstrates',
          body: [
            { type: 'paragraph', text: `YouFit spiked participation well beyond what a local race could achieve, bringing in record-breaking donations for the Miami Children's Health Foundation.` },
            { type: 'paragraph', text: `The first-ever livestream virtual 5K proved that the right UX doesn't just improve an experience: it can fundamentally expand who gets to have it. A charity race that used to be bounded by a single city street became something anyone with a treadmill and a gym membership could genuinely take part in.` },
          ],
        },
      ],
    },
  },
  {
    id: 'nc-lottery',
    num: '005',
    title: 'NC Education Lottery: Proud Moments 10th Anniversary Campaign',
    desc: `Designed a $20,000 sweepstakes microsite for the NC Education Lottery's 10th anniversary, turning a decade of lottery-funded education spending into personal stories people could submit, vote on, and explore county by county.`,
    role: 'Lead Designer',
    year: '2017',
    tags: ['Campaign Microsite', 'Web Design', 'Data Visualization', 'Contest & Sweepstakes', 'Responsive'],
    imgSrc: '/images/nc-lottery.jpg',
    imgW: 664,
    imgH: 401,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `2017 marked ten years since North Carolina created its Education Lottery, and by then it had raised billions of dollars for schools statewide. To mark the anniversary, I designed "Proud Moments": a microsite built around a $20,000 sweepstakes that asked North Carolinians to share a personal moment involving education, no matter how big or small, for a chance to win.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'paragraph', text: `A decade of lottery funding for education is, on paper, a budget line: a total raised, a list of programs funded. That framing doesn't make anyone feel anything. The campaign needed to turn an abstract statewide total into something personal enough that people would actually stop, share their own story, and vote on someone else's, while still making the real scale of the funding (down to the county level) easy to find for anyone who wanted it.` },
          ],
        },
        {
          heading: 'The Solution',
          body: [
            { type: 'paragraph', text: `The site centered on a simple loop: submit your own proud moment, then browse and vote for favorites, with a $20,000 prize as the incentive to participate. A short explainer video ("Watch & Learn What a Proud Moment Is") set expectations up front for what counted as a submission, since "share a proud moment" is vague enough to need an example.` },
            { type: 'paragraph', text: `Submissions populated a mosaic-style wall mixing user photos, quote cards, and prompts ("What would you do with $20,000?") so the grid stayed visually varied rather than reading as a repetitive list of entries.` },
            { type: 'images', items: [
              { src: '/images/nc-lottery-wall.jpg', alt: 'The Proud Moments wall, a mosaic grid mixing user-submitted photos, quote cards, and prompt cards', width: 664, height: 401 },
              { src: '/images/nc-lottery-map.jpg', alt: 'The Across the State page, showing an interactive North Carolina county map with category and county filters alongside statewide lottery funding totals since 2006', width: 664, height: 401 },
            ], caption: `The Proud Moments wall of submissions, and the "Across the State" page pairing a county-by-county map with the real statewide funding totals behind the anniversary.` },
            { type: 'paragraph', text: `For anyone who wanted the numbers behind the anniversary, an "Across the State" page paired an interactive North Carolina county map with filters by category (Academics, Athletics, Clubs, Music, Arts) and county, surfacing the lottery's actual cumulative funding since its 2006 launch: over $70 million for teachers' salaries, nearly $59 million for school construction projects, and over $45 million for prekindergarten programs. The homepage carried its own version of that specificity in miniature, a live per-county ticker (Forsyth County: $350,027 raised for education since 2006) that made the statewide total feel local no matter where a visitor was from.` },
          ],
        },
        {
          heading: 'The Outcome',
          body: [
            { type: 'paragraph', text: `The site launched as part of the NC Education Lottery's 10th-anniversary campaign in 2017, giving a decade of lottery-funded education spending a front door built around real stories and real county-level numbers instead of a single statewide total.` },
          ],
        },
      ],
    },
  },
  {
    id: 'can-your-lions',
    num: '006',
    title: 'Can Your Lions: MullenLowe × World Food Program',
    desc: `Built the interactive experience for MullenLowe's Cannes Lions pledge campaign, turning advertising awards into meals for families affected by the 2015 Nepal earthquake.`,
    role: 'Lead Creative Technologist / UX Designer',
    year: '2015–2016',
    tags: ['Cause Marketing', 'Interactive Campaign', 'Data Visualization', 'Advertising', 'Nonprofit Partnership'],
    imgSrc: '/images/can-your-lions.jpg',
    imgW: 1070,
    imgH: 295,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Cannes Lions is the advertising industry's biggest stage, and every June, agencies fly home with a trophy count. In June 2015, at the Cannes Lions International Festival of Creativity, MullenLowe Group launched "Can Your Lions": a pledge to donate the value of every Lion the agency won to the World Food Program (WFP), to help feed people in earthquake-ravaged Nepal, and a challenge to the rest of the industry to make the same pledge. I designed and built the interactive web experience that carried that pledge beyond the festival grounds.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'paragraph', text: `Cannes is unforgiving toward anything that reads as performative, and the creative industry has high standards for craft and low tolerance for self-congratulation. An awards-show cause campaign that centers the agency's own trophy case is worse than no campaign at all. The experience had to keep the focus on the WFP's mission and the families it served, not on MullenLowe's Lions count, while still making the industry's competitive instincts feel like they were pointed at something worth competing for.` },
          ],
        },
        {
          heading: 'The Solution',
          body: [
            { type: 'paragraph', text: `The site reframed an abstract donation into something concrete: a Grand Prix Lion ($2,906) converted to 5,812 days of food; a Gold, Silver, or Bronze Lion ($1,280) converted to 2,560 days, at the WFP's rate of roughly 50 cents to feed a person for a day in a country in need of humanitarian aid. A "Facts" page laid out that math, a "Goal" page carried the mission and an explainer video, and a "Pledge" page tracked the running total as Lions were won and converted, extending the campaign beyond the festival grounds so the broader creative community could follow along and add their own pledges.` },
            { type: 'images', items: [
              { src: '/images/can-your-lions-facts.jpg', alt: 'The Facts page, showing the conversion of Grand Prix and Gold/Silver/Bronze Lion values into days of food provided', width: 1070, height: 543 },
              { src: '/images/can-your-lions-pledge.jpg', alt: 'The Pledge page, showing 2015 results and the 2016 goal to exceed 1 million days of food', width: 1070, height: 543 },
            ], caption: 'The Facts page\'s Lion-to-meals conversion, and the Pledge page tracking 2015 results against the 2016 goal.' },
          ],
        },
        {
          heading: 'The Outcome',
          body: [
            { type: 'paragraph', text: `In 2015, the industry pledged 81 Lions, providing 210,612 days of food through the WFP. For 2016, MullenLowe and the WFP set a bigger target: pledge 400 more Lions and exceed 1 million days of food, continuing the partnership into a second year.` },
            { type: 'stat', items: [
              { value: '81', label: 'Lions pledged in 2015' },
              { value: '210,612', label: 'Days of food provided in 2015' },
              { value: '1M+', label: 'Days of food targeted for 2016' },
            ]},
          ],
        },
      ],
    },
  },
  {
    id: 'joy-to-the-girl',
    num: '007',
    title: 'Joy to the Girl: ULTA Beauty Holiday Pay-It-Forward Campaign',
    desc: `Built the experience behind ULTA Beauty's 2016 holiday campaign, where 40 seeded gift boxes grew into a nationwide chain of women surprising two more women each, tracked live on an interactive map.`,
    role: 'Lead Creative Technologist / UX Designer',
    year: '2016',
    tags: ['Cause Marketing', 'Campaign Microsite', 'UX Design', 'Content Strategy', 'Advertising'],
    imgSrc: '/images/joy-to-the-girl.jpg',
    imgW: 1200,
    imgH: 675,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `ULTA Beauty wanted to do something real with the holiday season. The idea was a pay-it-forward chain built around beauty and generosity: forty women across the country each surprised two people with a curated beauty box. Each of those recipients got to surprise two more. And so on, with the whole chain visualized live on an interactive map.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'paragraph', text: `The mechanic is simple on paper. Building the experience that powers it is not. Every person in the chain needed to understand what they received, feel the weight of passing it on, and have a clear, easy way to choose their two. The design had to hold across every link: seed gifter to recipient, recipient to her two, and so on as the chain grew.` },
          ],
        },
        {
          heading: 'The Solution',
          body: [
            { type: 'paragraph', text: `The flow ran in three steps: verify a gift code, enter each recipient's shipping details and a personalized message (which would print inside her actual box and could surface on the public map), then swipe through a gift carousel to choose what to send. A companion campaign site visualized the chain forming in real time on a map of the country, connecting every link with an animated trail, backed by a live counter of miles traveled and women reached, alongside a real social feed of unboxing videos and reactions from participants.` },
            { type: 'images', items: [
              { src: '/images/joy-to-the-girl-flow-desktop.jpg', alt: 'Step 1 of the gifting flow on desktop, verifying a gift code and entering account information', width: 637, height: 394 },
              { src: '/images/joy-to-the-girl-flow-mobile.jpg', alt: "Step 2 of the gifting flow on mobile, entering a recipient's shipping details and a personalized message, then swiping to select a gift", width: 255, height: 595 },
            ], caption: 'The gifting flow across desktop and mobile: verify a code, then address and personalize the next gift.' },
            { type: 'paragraph', text: `The video captured what happened when someone was chosen: the box arriving, the reaction, the moment of deciding who gets it next. That content was the campaign. The experience I built existed to make those moments possible and to keep the chain moving.` },
            { type: 'images', items: [
              { src: '/images/joy-to-the-girl-map.jpg', alt: "The campaign site's interactive US map, tracking the chain's spread with connected trails and embedded video at each link", width: 750, height: 790 },
              { src: '/images/joy-to-the-girl-social.jpg', alt: 'A social proof grid of real photos and videos from participants unboxing and reacting to their gifts', width: 750, height: 790 },
            ], caption: "The interactive map tracking the chain's spread, alongside real unboxing photos and videos from participants." },
          ],
        },
        {
          heading: 'The Outcome',
          body: [
            { type: 'paragraph', text: `Over 600 women were surprised across hundreds of miles. The chain worked because the mechanic was honest: real people, real choices, real reactions.` },
          ],
        },
      ],
    },
  },
  {
    id: 'agent-console',
    num: '008',
    title: 'Agent Status Console: Designing Trust Into AI Output',
    desc: `A self-directed exploration of what an interface owes a user when an AI agent is doing work they can't watch happen: legible confidence, honest failure states, and real control.`,
    role: 'Design & Engineering (self-directed)',
    tools: 'Next.js, TypeScript, Storybook',
    year: '2026',
    tags: ['AI/Agent UX', 'Design Systems', 'Accessibility', 'TypeScript', 'Prototyping'],
    imgSrc: '/images/agent-console.png',
    imgW: 2606,
    imgH: 1262,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Most AI-agent interfaces are designed for the happy path: a prompt goes in, a clean answer comes out. This project starts from a harder question: when an agent is doing work you can't watch happen minute by minute, what does the interface owe you so you still feel in control? I built a status console for a small fleet of background agents (health monitoring, warranty reconciliation, device provisioning, support triage) as a self-directed exploration of that question, in working code rather than a mockup.` },
          ],
        },
        {
          heading: 'The Problem',
          body: [
            { type: 'subheading', text: "One confidence score doesn't give you anything to reason with." },
            { type: 'paragraph', text: `Most AI tools that surface a confidence score show a single number: 72% confident. Confident about what, exactly? Whether the facts are right? Whether the answer is complete? Whether the source was any good? A single blended number asks you to trust the system's judgment about its own judgment, with no vocabulary for questioning it.` },
            { type: 'subheading', text: 'Collapsing "uncertain" and "broken" into one error state teaches people to distrust the system.' },
            { type: 'paragraph', text: `The easy engineering move is two states: it worked, or it didn't. But a result that's 58% confident and flagged for human review is a different situation than an upstream API timing out. Treating them the same trains users to distrust the agent even in the common case where it's still doing something useful, it just needs a second pair of eyes.` },
          ],
        },
        {
          heading: 'What I Did',
          body: [
            { type: 'subheading', text: 'Confidence, broken into dimensions' },
            { type: 'paragraph', text: `The confidence indicator scores accuracy, completeness, and source quality separately instead of blending them into one number. That's a UX decision about what vocabulary you give someone to reason about AI output, not a progress-bar detail: "I'm not sure this is complete" and "I'm not sure this is accurate" call for different next actions.` },
            { type: 'subheading', text: 'Five states, not two' },
            { type: 'paragraph', text: `Every agent renders as one of five distinct states: idle, running, queued, needs-review, or error. Distinguishing needs-review from error was the deliberate part: a low-confidence result is a different trust situation than a failure, and collapsing them into one "something's wrong" treatment would erode more trust than necessary.` },
            { type: 'subheading', text: 'Streaming output, and the same anxiety for screen reader users' },
            { type: 'paragraph', text: `Agent output renders token by token with a live cursor, because a blank loading state during a real processing gap reads as broken, not thinking. The output region is also <code>aria-live="polite"</code>: a screen reader user has the same "is this still working?" anxiety a sighted user does watching a cursor blink, and the interface owes them the same signal.` },
            { type: 'subheading', text: 'A stop button wired to real cancellation' },
            { type: 'paragraph', text: `Start, Stop, and Reset are wired to genuine cancellation, not just hidden UI. The principle: any AI action with a duration needs an exit, so the system never feels like it's running without the human's consent.` },
            { type: 'images', items: [
              { src: '/images/agent-console.png', alt: 'The agent status console showing four agents in different states (running, needs review, queued, error), a live output panel with Start/Stop/Reset controls, and a task queue', width: 2606, height: 1262 },
            ], caption: 'All five states are visible at once in normal use: Fleet Health Monitor running, Warranty Reconciliation needs review with its confidence note, Provisioning Assistant queued, and Support Ticket Triage in error with the actual failure reason surfaced.' },
          ],
        },
        {
          heading: 'Built as a System, Not a Screen',
          body: [
            { type: 'paragraph', text: `Each component's Storybook file documents all five states (idle, running, queued, needs-review, error) as explicit, reusable variants rather than one-off screens. That's what lets a team ship consistent AI-status treatment across a product instead of every screen inventing its own rules for what "uncertain" looks like.` },
          ],
        },
        {
          heading: "What's Still Open",
          body: [
            { type: 'paragraph', text: `There's no agent-detail panel yet, and no visualized task-completion history. The next design problem is what a user does after they've decided to trust or distrust an agent, and this version doesn't answer that yet. It was built in close collaboration with Claude: working code, not a spec handed to someone else to build.` },
          ],
        },
      ],
    },
  },
  {
    id: 'fintech-dashboard',
    num: '009',
    title: 'Fintech Transaction Dashboard: Verifying an AI-Directed Build',
    desc: 'A dense, filterable transaction table and balance-over-time chart, built end to end with Claude Code and put through a real accessibility and testing pass instead of just looking finished on the first screenshot.',
    role: 'Design & Engineering (self-directed)',
    tools: 'Next.js, TypeScript, SCSS Modules, Recharts, Vitest, React Testing Library',
    year: '2026',
    tags: ['AI/Agent UX', 'Data Visualization', 'Accessibility', 'TypeScript', 'Testing'],
    imgSrc: '/images/fintech-dashboard.png',
    imgW: 2880,
    imgH: 2614,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `Most AI-generated dashboards look the same: dark background, one neon accent, a chart library's default colors bolted onto the page. I wanted to test something specific: can an AI-directed build, Claude Code end to end, with me setting the requirements and verifying every claim, produce a dashboard with an actual point of view, one that holds up under a real accessibility and testing pass instead of just looking finished on the first screenshot.` },
            { type: 'paragraph', text: `The target was a transaction history dashboard: a dense, sortable, filterable table and a balance-over-time chart. Those two components show up in every fintech product, and they're the two hardest things to make both usable and distinctive.` },
          ],
        },
        {
          heading: 'What It Is',
          body: [
            { type: 'paragraph', text: `100 transactions, each carrying a running balance. The table sorts on five columns, filters by date range and category, paginates at 10, 25, or 50 rows, and collapses to a card layout below 640px instead of squeezing a table onto a phone screen. The chart is a 30/90/365-day area chart with a tooltip that shows the exact date and balance on hover, styled entirely from the app's own CSS custom properties. Not one color came from Recharts' defaults.` },
            { type: 'paragraph', text: `The type stack, Archivo, Archivo Black, Space Mono, comes from an existing Storybook design system. I built the color palette out from there: a teal accent instead of the default fintech blue or green, tabular Space Mono for every number in the interface, status badges styled like stamped ledger seals instead of Bootstrap pills. Small decisions, but they're the difference between a dashboard that looks like every other dashboard and one that looks like it belongs to this product.` },
            { type: 'images', items: [
              { src: '/images/fintech-dashboard-chart-dark.png', alt: 'The balance-over-time chart in dark mode, with a tooltip showing a Rocket Mortgage payment of $7,541.82 on July 13', width: 2880, height: 1440 },
              { src: '/images/fintech-dashboard-table-dark.png', alt: 'The transactions table in dark mode, sorted by amount descending, showing payroll deposits and a 401k contribution', width: 2880, height: 1440 },
            ], caption: "The chart's hover tooltip and the transactions table sorted by amount, both in the app's dark theme — every color here comes from a CSS custom property, none from Recharts' defaults." },
            { type: 'paragraph', text: `See it live at <a href="https://dwest.foo/fintech" target="_blank" rel="noopener">dwest.foo/fintech</a>.` },
          ],
        },
        {
          heading: 'Where It Got Interesting: Accessibility',
          body: [
            { type: 'paragraph', text: `Running a full accessibility pass instead of assuming the design looked accessible turned up real problems.` },
            { type: 'subheading', text: 'Status badges: contrast computed, not eyeballed' },
            { type: 'paragraph', text: `Computing actual WCAG contrast ratios, not eyeballing them, showed the "cleared" status badge at 4.26:1 against its own tinted background and "pending" at 4.06:1. Both sit under the 4.5:1 minimum for normal text. Darkening both colors, success from <code>#2f7d5c</code> to <code>#256149</code>, warning from <code>#9a6b00</code> to <code>#8a5f00</code>, brought them to 6.07:1 and 4.67:1 without changing what they read as.` },
            { type: 'subheading', text: 'Borders that looked fine and measured at 1.3:1' },
            { type: 'paragraph', text: `Borders were worse: 1.3:1 against their backgrounds, where WCAG 1.4.11 requires 3:1 for interactive boundaries. Rather than darkening every hairline in the UI and losing the intentionally subtle divider style, I added a second token, <code>--color-border-strong</code>, used only on inputs, buttons, and toggles: the places a user actually needs to see a boundary to operate the control.` },
            { type: 'subheading', text: "A focusable, hidden chart: the bug you can't catch by looking" },
            { type: 'paragraph', text: `The most interesting bug: Recharts v3 auto-enables a keyboard-focusable accessibility layer on the chart SVG. I'd wrapped that same SVG in <code>aria-hidden="true"</code> because I was providing a separate text summary for screen readers instead of exposing ninety individually-announced data points. Focusable but hidden from the accessibility tree is a real WCAG violation, not a style nitpick. Setting <code>accessibilityLayer={false}</code> on the chart fixed it, once a keyboard tab-order trace surfaced the problem in the first place. That's not a bug you catch by looking at the screen.` },
            { type: 'stat', items: [
              { value: '6.07:1', label: 'Cleared badge contrast, up from a failing 4.26:1' },
              { value: '4.67:1', label: 'Pending badge contrast, up from a failing 4.06:1' },
              { value: '3:1', label: 'WCAG 1.4.11 minimum for interactive borders, up from 1.3:1' },
            ]},
          ],
        },
        {
          heading: 'Testing',
          body: [
            { type: 'paragraph', text: `19 tests, Vitest and React Testing Library, covering sorting, filtering, pagination, and all three load states, loading, error, empty, across both components. The tests query by role and label, not CSS class: the way a screen reader or a keyboard user actually navigates the page.` },
            { type: 'paragraph', text: `Two infrastructure problems surfaced before the tests were trustworthy at all. Recharts needs a real <code>ResizeObserver</code> and non-zero element dimensions to lay out an SVG, and jsdom provides neither, so I stubbed both in test setup. And without an explicit <code>afterEach(cleanup)</code>, DOM from one test leaked into the next, producing "multiple elements found" failures that had nothing to do with the components and everything to do with the test harness.` },
          ],
        },
        {
          heading: 'Responsive & Deploy',
          body: [
            { type: 'paragraph', text: `The layout held at 375, 768, and 1024px, checked against a real headless Chrome instance rather than a resized browser window: zero horizontal overflow at any width, the table-to-card breakpoint firing exactly at 640px, every touch target on the mobile layout measuring 44px or larger. The one deliberate exception is documented, not hidden: desktop sort buttons run 33px tall for information density, since the touch-friendly control at that breakpoint is a 44px "Sort by" select, not those buttons.` },
            { type: 'images', items: [
              { src: '/images/fintech-dashboard-tablet-dark.png', alt: 'The dashboard at a narrower tablet width in dark mode, chart and transactions table stacked in a single column', width: 1536, height: 2676 },
            ], caption: 'The chart and table stacked into a single column at a narrower width, well above the 640px table-to-card breakpoint.' },
            { type: 'paragraph', text: `From there it went to Vercel. Later I reconfigured <code>basePath</code> and <code>assetPrefix</code> to run under a subpath instead of domain root, a change I verified against an actual production build and server before redeploying rather than trusting the config would just work.` },
          ],
        },
        {
          heading: 'What This Demonstrates',
          body: [
            { type: 'paragraph', text: `Not "AI can build a dashboard." Any tool produces something that looks finished. The actual claim: directing an AI build well enough to catch a WCAG violation that isn't visible on screen, compute contrast ratios instead of eyeballing them, and verify every claim, responsive, accessible, tested, against real headless-browser output instead of trusting the code that generated it, is a skill. That's the workflow I run daily now. This dashboard is the proof, not the pitch.` },
          ],
        },
      ],
    },
  },
  {
    id: 'timewarp-trivia',
    num: '010',
    title: 'TimeWarp Trivia: Realtime Party Trivia, Built Solo',
    desc: 'A four-decade, Jackbox-style trivia game built solo in about 27 hours: one shared TV screen, up to ten phones as buzzers, and a design-token system that reskins the whole app by decade without touching a single component.',
    role: 'Product, Design & Engineering (solo)',
    tools: 'Next.js 14, TypeScript, Supabase (Postgres + Realtime), SCSS, Vercel',
    year: '2026',
    tags: ['Full-Stack Engineering', 'Realtime', 'Game Design', 'Design Systems', 'TypeScript'],
    imgSrc: '/images/timewarp-trivia-cover.png',
    imgW: 1474,
    imgH: 1292,
    detail: {
      sections: [
        {
          heading: 'Overview',
          body: [
            { type: 'paragraph', text: `TimeWarp Trivia is a Jackbox-style party trivia game: one shared screen for the room, everyone else's phone as the buzzer. Built solo, product through full-stack, in about 27 hours across two days. It's live and playable in-browser at <a href="https://www.timewarptrivia.com" target="_blank" rel="noopener">timewarptrivia.com</a>, with 728 questions across four decades and 18 shipped feature/fix issues tracked in Linear.` },
            { type: 'paragraph', text: `Party trivia games like Jackbox split the experience across two kinds of screens: one shared display everyone in the room looks at, and private controllers everyone holds. That split is the whole game: the shared screen can't show private information (like which answer you picked), and the private screen can't show the room's full state (like who's winning). Getting that split right, over a real network, for up to ten players at once, was the actual engineering problem. The trivia content is the theme; the sync model is the product.` },
            { type: 'paragraph', text: `The decade angle, 80s through 2010s, gave the content a natural filter and, later, a natural hook for visual theming.` },
            { type: 'stat', items: [
              { value: '~27 hrs', label: 'From first commit to live, solo' },
              { value: '728', label: 'Trivia questions across four decades' },
              { value: '10', label: 'Max players per room, phone only, no app' },
            ]},
          ],
        },
        {
          heading: 'How It Works',
          body: [
            { type: 'bullets', items: [
              'Host opens the shared screen and gets a 4-character room code.',
              'Up to 10 players join from their phones with the code and a name. No app, no download.',
              'Host picks a decade filter (or all four) and starts the game.',
              '3 rounds of 5 questions each, speed-based scoring (1000 points decaying to 500 over the time limit).',
              "Before the final round, whoever's in last place picks one question to answer alone. Everyone else just watches.",
              'Final round pays double points.',
              'Ranked leaderboard and podium at the end.',
            ]},
            { type: 'images', items: [
              { src: '/images/timewarp-trivia.png', alt: 'The TimeWarp Trivia landing page, with a decade filter strip for the 80s through 2010s and Host a Game / Join a Game buttons', width: 1920, height: 1572 },
              { src: '/images/timewarp-trivia-lobby.png', alt: 'The shared TV lobby screen showing a room code and four joined players, each with their own colored avatar', width: 1920, height: 1080 },
              { src: '/images/timewarp-trivia-podium.png', alt: 'The final results podium on the shared screen, ranking all four players by final score', width: 1920, height: 1080 },
            ], caption: "The shared-screen side of the game: the landing page's decade filter, a populated lobby waiting on the host to start, and the final podium." },
          ],
        },
        {
          heading: 'Architecture',
          body: [
            { type: 'subheading', text: 'Realtime sync' },
            { type: 'paragraph', text: `One Supabase Realtime channel per room. The TV is the authoritative host: it's the only client that ever advances round state, writes the current question, or ends the game. Phones subscribe to that same row for question/timer state and write their own answers directly to an <code>answers</code> table. Scoring happens client-side on the phone that answered, which is a deliberate scope cut, documented as a known limitation, rather than an oversight. A fully server-validated version would need an edge function or RPC in front of every score write.` },
            { type: 'subheading', text: 'Data-driven content' },
            { type: 'paragraph', text: `Decades and categories are rows in their own tables, not hardcoded enums. A category like "Internet Memes" gates itself to 2000s-and-later decades via a nullable <code>min_decade_id</code> foreign key. Adding a new decade or category is a data change, not a deploy.` },
            { type: 'subheading', text: 'Design system reuse' },
            { type: 'paragraph', text: `Every color, type scale, and spacing value is mirrored from an existing personal design system rather than invented fresh for this project, to prove the same token system holds up across a third, very different surface: a 10-foot TV UI and a touch-first phone UI, instead of a typical web app.` },
          ],
        },
        {
          heading: 'Technical Highlights',
          body: [
            { type: 'paragraph', text: `A few problems along the way were worth solving properly rather than papering over.` },
            { type: 'subheading', text: 'A CSS animation was quietly burning CPU on every screen, forever' },
            { type: 'paragraph', text: `A user reported their fan spinning up just from having the site open. Chrome performance traces showed roughly 2.2% sustained main-thread cost on an otherwise idle page: not JavaScript, paint. The ambient scanline overlay, a decorative CRT-style texture on every screen, animated <code>background-position</code> in an infinite loop, which forces a full repaint every frame indefinitely. Switching the same visual effect to animate <code>transform</code> instead, a compositor-only property, dropped that cost to roughly 0.09%, measured before and after with the same trace. Same look, no repaint.` },
            { type: 'stat', items: [
              { value: '2.2%', label: 'Sustained main-thread cost before the fix' },
              { value: '0.09%', label: 'Same trace, after background-position → transform' },
            ]},
            { type: 'subheading', text: 'Decade-based visual theming, built to cascade without touching components' },
            { type: 'paragraph', text: `The spec called for the visual theme to shift once a decade's picked, without a rewrite of every screen. The trick: SCSS variables can hold a <code>var()</code> CSS function as their value. Changing <code>$marigold: #ffb238;</code> to <code>$marigold: var(--marigold, #ffb238);</code> means every existing component that already referenced <code>$marigold</code> compiles to <code>var(--marigold, #ffb238)</code> automatically. No component file touched. A single override block, <code>[data-decade-theme="80s"] { --marigold: #ff3fa4; ... }</code>, driven by a small hook then re-themes the entire app the moment a decade's selected, TV and phone both, session-wide.` },
            { type: 'images', items: [
              { src: '/images/timewarp-trivia-phone-80s-waiting.png', alt: "A player's phone in the 80s decade theme, showing a magenta and gold diagonal-stripe background while waiting for the host to start", width: 390, height: 844 },
              { src: '/images/timewarp-trivia-phone-80s-question.png', alt: "A trivia question on a player's phone in the 80s decade theme, still carrying the same diagonal-stripe background", width: 390, height: 844 },
            ], caption: "The 80s decade theme applied session-wide on a player's phone, from the waiting screen through an active question, with zero changes to either component." },
            { type: 'subheading', text: 'Diagnosing a silent analytics gap' },
            { type: 'paragraph', text: `Vercel Analytics showed roughly 20 pageviews; PostHog showed 1. Both were correctly configured with valid tokens in the right environments. The actual bug was a malformed <code>POSTHOG_HOST</code> value that wasn't a valid absolute URL, so the browser resolved every PostHog request as relative to the app's own origin instead of PostHog's servers, 404ing silently in the background. Confirmed via the dev server's own request logs before touching any config.` },
            { type: 'subheading', text: 'Small-screen gating to prevent orphaned game state' },
            { type: 'paragraph', text: `The host screen is a 10-foot UI meant for a TV or laptop. Without a check, a phone visitor landing on <code>/host</code> would silently create a real, unusable game room. A <code>matchMedia</code>-based hook gates the real game behind a simple "use a bigger screen" screen below a 768px breakpoint, so a stray visit never spins up state nobody can use.` },
          ],
        },
        {
          heading: 'What Shipped',
          body: [
            { type: 'bullets', items: [
              'Full realtime multiplayer game: lobby, 3-round structure, speed scoring, the block mechanic, podium.',
              '728 original trivia questions across four decades, sourced and fact-checked, written in a consistent dry/deadpan voice.',
              'A browser-playable web version (no app install required), the primary way to play today. A packaged Android TV app is a planned next step, not yet built.',
              'Full observability stack: Vercel Analytics + PostHog for product analytics, Sentry for error/performance tracking, Vercel Speed Insights for Core Web Vitals.',
              'One working decade theme (80s) proving out the theming architecture end to end.',
            ]},
          ],
        },
        {
          heading: "What's Next",
          body: [
            { type: 'bullets', items: [
              '90s, 2000s, and 2010s visual themes, using the same token-override system.',
              'Packaged Android TV app (WebView or React Native for TV).',
              'Server-side answer validation.',
              'Roku and Apple TV ports (stretch goals, after Android TV).',
            ]},
          ],
        },
      ],
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
