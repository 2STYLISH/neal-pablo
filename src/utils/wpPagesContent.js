import { WP_GRAPHQL_ENDPOINT, stripHtml } from "./wpClient"

const WORKS_LOREM =
  "Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus."

/* ==========================================================================
   1. ABOUT PAGE DEFAULT CONTENT & PARSER
   ========================================================================== */

export const DEFAULT_ABOUT_CONTENT = {
  hero: {
    heading: "About us at",
    videoUrl: "/videos/showreel.mp4",
    videoCaption: "*Click on Video to toggle sound",
    description:
      "Find out more about our production team, what we stand for and why you would choose us for your next video production or photography shoot.",
    buttonText: "I’D LIKE TO CHAT",
  },
  intro: {
    heading: "Video production and photography at Pocket Creatives",
    paragraph1Html: `Pocket Creatives is a video production and photography team built on over 16 years of experience in the visual and creative industries. Run by co-owners <b class="font-bold text-white">Steven</b>, <b class="font-bold text-white">Haider</b> and <b class="font-bold text-white">Lauren</b>, our team loves producing great video and photography, and we like to think that it shows in the work we deliver.`,
    paragraph2:
      "We’ve worked hard to assemble a talented team who can deliver high quality video production services, as well as video and photography content creation.",
    paragraph3:
      "Drop us a mail, we’re a friendly bunch and are more than happy to chat about what we could offer on your next project!",
    badgeLine1: "This is",
    badgeLine2: "us...",
  },
  ourWorks: {
    heading: "Our Works",
    videoCaption: "*Click on Video to toggle sound",
    items: [
      {
        tag: "Soap And Glory",
        title: "People & Portrait Photography",
        text: "Expertly delivered product photography and product videos. From simple pack shots to creative product photography and engaging product video, high quality imagery is designed to entice the viewer and convert to a customer.",
        img: "/videos/soap-glory-comp.gif",
        video: "",
      },
      {
        tag: "HairO Brand Advert",
        title: "Beauty Video Production",
        text: "Expertly crafted cosmetics, personal care and beauty video and beauty photography. Creating both usage and creative product content, high quality photography shows your beauty brand in its best light.",
        img: "",
        video: "/videos/hairo-advert.mp4",
      },
      {
        tag: "Smiles Alliance",
        title: "People & Portrait Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida metus eget orci iaculis, eu ornare augue auctor. Donec at sagittis magna.",
        img: "",
        video: "/videos/beauty-showreel.mp4",
      },
    ],
  },
  companies: {
    videoHeadingPrefix: "We’re a",
    videoHeadingLink: "video production",
    videoHeadingSuffix: "company",
    videoPara1:
      "As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media. Our professional video team knows how to craft the right elements together to convey your messages and tell your story.",
    videoPara2:
      "What are you looking for in a video production company? If it’s a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.",
    photoHeadingPrefix: "and a",
    photoHeadingLink: "photography company too",
    photoHeadingSuffix: "…",
    photoPara1:
      "As a photography company, we’re able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention. We strive to do just that. We offer product photography, people photography and lifestyle photography across a wide range of sectors.",
    photoPara2:
      "As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all.",
  },
  whyUs: {
    heading: "Why work with us?",
    subtitle:
      "We make content that feels real and works hard. You get a team that listens, adapts, and delivers with care, creativity, and no fuss. We’re here to help you stand out without making things complicated.",
    cards: [
      {
        title: "We care about how it feels",
        paragraphs: [
          "Good content matters—but so does the experience. From first chat to final edit, we keep things easy, honest, and collaborative. We listen, we guide, and we make sure the process feels smooth from start to finish.",
        ],
      },
      {
        title: "We work around you",
        paragraphs: [
          "Every client’s different, so we don’t approach projects the same way. We’re flexible with pricing, clear about costs, and always happy to find smart ways to make your budget go further.",
        ],
      },
      {
        title: "We make visuals that speak",
        paragraphs: [
          "We don’t just shoot pretty pictures.  We tell stories.  We use styling, locations, and talent to help your brand stand out and feel real. We want to help you surpass expectations and achieve more than simply keeping up with your competition.",
        ],
      },
      {
        title: "Values You Can Feel",
        paragraphs: [
          "We treat every client like a partner and stay flexible across industries.  We work fast when needed, stay kind always, and commit to working transparently.  We believe in being kind, honest, and easy to work with because that’s how great work gets made.",
        ],
      },
      {
        title: "We understand urgency!",
        paragraphs: [
          "We know how important it is for you to have it done yesterday and capitalise on the now.",
          "Getting your content in front of your audience at the right time is so important, particularly in today’s trend and time-driven world. Good planning, organisation and communication is the key.",
        ],
      },
      {
        title: "We want to help you stand out",
        paragraphs: [
          "Our video and photography content says more, shouts louder, and travels further. We want to stay true to the quote that an image is worth a thousand words… and counting!",
          "There’s a time and a place for simple product images isolated against white backgrounds, and we offer those as well. But to get the best from us, we want to make use of locations, props, styling, and models as they all help to tell your story for a greater visual impact.",
        ],
      },
      {
        title: "We always put our clients first",
        paragraphs: [
          "You’re more important to us than anything.",
          "We wouldn’t exist without you, we know that, so we’ll do our very best to make sure that you’re always happy with our video and photography content, and you want to work with us time and again. We’ve built long-standing and trustworthy relationships with our clients since we started, so that we can partner each other as we grow.",
        ],
      },
      {
        title: "We champion young talent",
        paragraphs: [
          "Fresh ideas, energy and drive, and a sense of ownership and responsibility, guided by experience… at your disposal.",
          "So whether you’re looking for content creation for social media, event filming in London, or just a video editor, we can deliver the talent.",
          "This year, we have also been a part of the government’s Kickstart scheme to help a new entrant into the industry.",
        ],
      },
    ],
  },
  behindScenes: {
    introHtml: `Want to know a bit more about who we work with, and <b class="font-bold">what makes a ‘Pocket Person’?</b> Go behind the scenes to see <a href="/how-we-work" class="underline hover:text-brand-blue transition">how we work</a> in action…`,
    videoUrl: "/videos/ayumi-bts.mp4",
    videoCaption: "*Click on Video to toggle sound",
  },
  whoWeWorkWith: {
    heading: "Who We Work With",
    para1:
      "We have provided video and photography services to a huge variety of clients in our history, from crowdfunders and startups through to more established names and global businesses. We love that mix, and being entrusted with the visuals for clients of any size is extremely satisfying.",
    para2:
      "We work with most clients directly, and we’re also able to provide our services to agencies and other creative companies who don’t have access to video and photography services in house.",
    para3Html: `We’re very proud to have worked with known clients such as <span class="bg-brand-yellow px-1.5 font-bold text-black">Prestige Flowers</span> and many more emerging names that you’ll come to know very soon.`,
    ctaTextHtml: `You can see what they say about us <span class="underline">here</span>`,
  },
  ourStory: {
    heading: "Our Story",
    introHtml: `<b class="font-bold">Pocket Creatives</b> launched in the winter of 2017, formed as a limited company following the team working under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution.`,
    startYear: "2017",
    milestones: [
      "Steven’s professional history started in broadcasting, supporting mainstream television programmes such as BBC’s Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen.",
      "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media into 2010.",
      "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country’s biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few.",
      "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives.",
      "“SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we’re building long-term working relationships with our clients. Pocket Creatives couldn’t have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.”",
    ],
    endYear: "2025",
    endText:
      "Now, embarking on our 6th year in business together, we’ve reached one milestone after the next. We boast an enviable client list, with impressive client retention numbers and have built a a genuinely wonderful team around us.",
  },
}

/* ==========================================================================
   2. WORKS PAGE DEFAULT CONTENT & PARSER
   ========================================================================== */

export const DEFAULT_WORKS_CONTENT = {
  categorySection: {
    heading: "View By Category",
    categories: [
      "Beauty",
      "Product",
      "Events",
      "Crowdfunding",
      "Fashion",
      "People",
      "Jewellery",
      "TV Ads",
      "HR",
      "Education",
      "Explainers",
      "Social First",
    ],
  },
  reel: [
    {
      name: "Soap & Glory",
      type: "Photo Comp",
      img: "/videos/soap-glory-comp.gif",
      video: "",
    },
    {
      name: "HairO Brand Advert",
      type: "Video",
      img: "",
      video: "/videos/hairo-advert.mp4",
    },
    {
      name: "Nursem",
      type: "Photo",
      img: "",
      video: "",
    },
  ],
  categoryHighlight: {
    headingPrefix: "Category:",
    description: WORKS_LOREM,
    goToLabel: "Go to...",
  },
  videography: {
    caption: "*Click on Video to play in large view",
    items: [
      { label: "Client 1.1", videoUrl: "/videos/hairo-advert.mp4" },
      { label: "Client 1.2", videoUrl: "/videos/beauty-showreel.mp4" },
      { label: "Client 2", videoUrl: "/videos/james-read-tan.mp4" },
      { label: "Client 3.1", videoUrl: "/videos/water-texture-bts.mp4" },
      { label: "Client 3.2", videoUrl: "/videos/ayumi-bts.mp4" },
      { label: "Client 3.3", videoUrl: "/videos/healthy-mummy-bts.mp4" },
      { label: "Client 4", videoUrl: "/videos/food-showreel.mp4" },
      { label: "Client 5", videoUrl: "/videos/product-masabi.mp4" },
      { label: "Client 6.1", videoUrl: "/videos/events-showreel.mp4" },
      { label: "Client 6.2", videoUrl: "/videos/crowdfunding-hygie.mp4" },
      { label: "Client 7", videoUrl: "/videos/tv-california-walnuts.mp4" },
      { label: "Client 8", videoUrl: "/videos/client-film.mp4" },
    ],
  },
  photography: {
    sectionTitle: "Photography ↓",
    caption: "*Click on thumbnail for large view",
    items: [
      { label: "Hover ex. here" },
      { label: "Client 2" },
      { label: "Client 3" },
      { label: "Client 4" },
      { label: "Client 5" },
      { label: "Client 6" },
      { label: "Client 7" },
      { label: "Client 8" },
      { label: "Client 9" },
      { label: "Client 10" },
      { label: "Client 11" },
      { label: "Client 12" },
    ],
  },
}

const PAGES_QUERY = `
  query FetchWordPressPages {
    pages(first: 50, where: { status: PUBLISH }) {
      nodes {
        id
        databaseId
        title
        slug
        isFrontPage
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

function decodeEntities(str = "") {
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&hellip;/g, "...")
}

function extractLinesFromHtml(rawHtml = "") {
  const blockMatches =
    rawHtml.match(/<(p|li|h1|h2|h3|h4|div)[^>]*>[\s\S]*?<\/\1>/gi) || []
  return blockMatches
    .map(block => {
      const inner = block.replace(/^<[^>]+>|<\/[^>]+>$/g, "").trim()
      return {
        rawInner: inner,
        text: decodeEntities(stripHtml(inner)),
      }
    })
    .filter(item => item.text.length > 0)
}

/* ---------------- About Page Parser ---------------- */
export function parseAboutFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_ABOUT_CONTENT))
  if (!pageNode) return merged

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  const lines = extractLinesFromHtml(rawHtml)
  let matchedAnyKey = false

  lines.forEach(({ rawInner, text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    const rawVal = rawInner.includes(":")
      ? rawInner.slice(rawInner.indexOf(":") + 1).trim()
      : val

    if (!val) return

    switch (key) {
      // 1. Hero
      case "hero_heading":
      case "hero_title":
        merged.hero.heading = val
        matchedAnyKey = true
        break
      case "hero_video_url":
      case "hero_video":
        merged.hero.videoUrl = val
        matchedAnyKey = true
        break
      case "hero_video_caption":
        merged.hero.videoCaption = val
        matchedAnyKey = true
        break
      case "hero_description":
      case "hero_text":
        merged.hero.description = val
        matchedAnyKey = true
        break
      case "hero_button":
      case "hero_button_text":
        merged.hero.buttonText = val
        matchedAnyKey = true
        break

      // 2. Intro
      case "intro_heading":
      case "intro_title":
        merged.intro.heading = val
        matchedAnyKey = true
        break
      case "intro_paragraph_1":
      case "intro_para_1":
        merged.intro.paragraph1Html = rawVal
        matchedAnyKey = true
        break
      case "intro_paragraph_2":
      case "intro_para_2":
        merged.intro.paragraph2 = val
        matchedAnyKey = true
        break
      case "intro_paragraph_3":
      case "intro_para_3":
        merged.intro.paragraph3 = val
        matchedAnyKey = true
        break

      // 3. Our Works Carousel
      case "our_works_heading":
      case "works_heading":
        merged.ourWorks.heading = val
        matchedAnyKey = true
        break
      case "our_works_caption":
        merged.ourWorks.videoCaption = val
        matchedAnyKey = true
        break
      case "work_1_tag":
        merged.ourWorks.items[0].tag = val
        matchedAnyKey = true
        break
      case "work_1_title":
        merged.ourWorks.items[0].title = val
        matchedAnyKey = true
        break
      case "work_1_text":
        merged.ourWorks.items[0].text = val
        matchedAnyKey = true
        break
      case "work_2_tag":
        merged.ourWorks.items[1].tag = val
        matchedAnyKey = true
        break
      case "work_2_title":
        merged.ourWorks.items[1].title = val
        matchedAnyKey = true
        break
      case "work_2_text":
        merged.ourWorks.items[1].text = val
        matchedAnyKey = true
        break
      case "work_2_video_url":
        merged.ourWorks.items[1].video = val
        matchedAnyKey = true
        break
      case "work_3_tag":
        merged.ourWorks.items[2].tag = val
        matchedAnyKey = true
        break
      case "work_3_title":
        merged.ourWorks.items[2].title = val
        matchedAnyKey = true
        break
      case "work_3_text":
        merged.ourWorks.items[2].text = val
        matchedAnyKey = true
        break
      case "work_3_video_url":
        merged.ourWorks.items[2].video = val
        matchedAnyKey = true
        break

      // 4. Companies
      case "video_company_paragraph_1":
      case "video_company_para_1":
        merged.companies.videoPara1 = val
        matchedAnyKey = true
        break
      case "video_company_paragraph_2":
      case "video_company_para_2":
        merged.companies.videoPara2 = val
        matchedAnyKey = true
        break
      case "photo_company_paragraph_1":
      case "photo_company_para_1":
        merged.companies.photoPara1 = val
        matchedAnyKey = true
        break
      case "photo_company_paragraph_2":
      case "photo_company_para_2":
        merged.companies.photoPara2 = val
        matchedAnyKey = true
        break

      // 5. Why Work With Us
      case "why_us_heading":
        merged.whyUs.heading = val
        matchedAnyKey = true
        break
      case "why_us_subtitle":
      case "why_us_description":
        merged.whyUs.subtitle = val
        matchedAnyKey = true
        break
      case "why_card_1_title":
        merged.whyUs.cards[0].title = val
        matchedAnyKey = true
        break
      case "why_card_1_text":
        merged.whyUs.cards[0].paragraphs = [val]
        matchedAnyKey = true
        break
      case "why_card_2_title":
        merged.whyUs.cards[1].title = val
        matchedAnyKey = true
        break
      case "why_card_2_text":
        merged.whyUs.cards[1].paragraphs = [val]
        matchedAnyKey = true
        break
      case "why_card_3_title":
        merged.whyUs.cards[2].title = val
        matchedAnyKey = true
        break
      case "why_card_3_text":
        merged.whyUs.cards[2].paragraphs = [val]
        matchedAnyKey = true
        break
      case "why_card_4_title":
        merged.whyUs.cards[3].title = val
        matchedAnyKey = true
        break
      case "why_card_4_text":
        merged.whyUs.cards[3].paragraphs = [val]
        matchedAnyKey = true
        break

      // 6. Behind the Scenes
      case "bts_intro":
      case "bts_text":
        merged.behindScenes.introHtml = rawVal
        matchedAnyKey = true
        break
      case "bts_video_url":
        merged.behindScenes.videoUrl = val
        matchedAnyKey = true
        break
      case "bts_video_caption":
        merged.behindScenes.videoCaption = val
        matchedAnyKey = true
        break

      // 7. Who We Work With
      case "who_we_work_with_heading":
      case "clients_heading":
        merged.whoWeWorkWith.heading = val
        matchedAnyKey = true
        break
      case "clients_paragraph_1":
      case "clients_para_1":
        merged.whoWeWorkWith.para1 = val
        matchedAnyKey = true
        break
      case "clients_paragraph_2":
      case "clients_para_2":
        merged.whoWeWorkWith.para2 = val
        matchedAnyKey = true
        break
      case "clients_paragraph_3":
      case "clients_para_3":
        merged.whoWeWorkWith.para3Html = rawVal
        matchedAnyKey = true
        break

      // 8. Our Story
      case "our_story_heading":
      case "story_heading":
        merged.ourStory.heading = val
        matchedAnyKey = true
        break
      case "our_story_intro":
      case "story_intro":
        merged.ourStory.introHtml = rawVal
        matchedAnyKey = true
        break
      case "story_start_year":
        merged.ourStory.startYear = val
        matchedAnyKey = true
        break
      case "story_milestone_1":
        merged.ourStory.milestones[0] = val
        matchedAnyKey = true
        break
      case "story_milestone_2":
        merged.ourStory.milestones[1] = val
        matchedAnyKey = true
        break
      case "story_milestone_3":
        merged.ourStory.milestones[2] = val
        matchedAnyKey = true
        break
      case "story_milestone_4":
        merged.ourStory.milestones[3] = val
        matchedAnyKey = true
        break
      case "story_milestone_5":
        merged.ourStory.milestones[4] = val
        matchedAnyKey = true
        break
      case "story_end_year":
        merged.ourStory.endYear = val
        matchedAnyKey = true
        break
      case "story_end_text":
        merged.ourStory.endText = val
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  if (!matchedAnyKey && lines.length > 0) {
    merged.hero.description = lines[0].text
    if (lines[1]) {
      merged.intro.heading = lines[1].text
    }
  }

  return merged
}

/* ---------------- Works Page Parser ---------------- */
export function parseWorksFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_WORKS_CONTENT))
  if (!pageNode) return merged

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  const lines = extractLinesFromHtml(rawHtml)
  let matchedAnyKey = false

  lines.forEach(({ text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    if (!val) return

    // Check dynamic video/photo item keys first (e.g. video_1_label, video_1_url, photo_1_label)
    const videoLabelMatch = key.match(/^video_(\d+)_label$/)
    if (videoLabelMatch) {
      const idx = parseInt(videoLabelMatch[1], 10) - 1
      if (merged.videography.items[idx]) {
        merged.videography.items[idx].label = val
        matchedAnyKey = true
      }
      return
    }

    const videoUrlMatch = key.match(/^video_(\d+)_url$/)
    if (videoUrlMatch) {
      const idx = parseInt(videoUrlMatch[1], 10) - 1
      if (merged.videography.items[idx]) {
        merged.videography.items[idx].videoUrl = val
        matchedAnyKey = true
      }
      return
    }

    const photoLabelMatch = key.match(/^photo_(\d+)_label$/)
    if (photoLabelMatch) {
      const idx = parseInt(photoLabelMatch[1], 10) - 1
      if (merged.photography.items[idx]) {
        merged.photography.items[idx].label = val
        matchedAnyKey = true
      }
      return
    }

    switch (key) {
      case "category_heading":
      case "view_by_category_heading":
        merged.categorySection.heading = val
        matchedAnyKey = true
        break
      case "categories_list":
      case "categories": {
        const list = val
          .split(",")
          .map(s => s.trim())
          .filter(Boolean)
        if (list.length > 0) {
          merged.categorySection.categories = list
          matchedAnyKey = true
        }
        break
      }
      case "reel_1_name":
        merged.reel[0].name = val
        matchedAnyKey = true
        break
      case "reel_1_type":
        merged.reel[0].type = val
        matchedAnyKey = true
        break
      case "reel_2_name":
        merged.reel[1].name = val
        matchedAnyKey = true
        break
      case "reel_2_type":
        merged.reel[1].type = val
        matchedAnyKey = true
        break
      case "reel_2_video_url":
        merged.reel[1].video = val
        matchedAnyKey = true
        break
      case "reel_3_name":
        merged.reel[2].name = val
        matchedAnyKey = true
        break
      case "reel_3_type":
        merged.reel[2].type = val
        matchedAnyKey = true
        break
      case "category_prefix":
      case "category_heading_prefix":
        merged.categoryHighlight.headingPrefix = val
        matchedAnyKey = true
        break
      case "category_description":
      case "category_text":
        merged.categoryHighlight.description = val
        matchedAnyKey = true
        break
      case "go_to_label":
        merged.categoryHighlight.goToLabel = val
        matchedAnyKey = true
        break
      case "videography_caption":
        merged.videography.caption = val
        matchedAnyKey = true
        break
      case "photography_section_title":
      case "photography_heading":
        merged.photography.sectionTitle = val
        matchedAnyKey = true
        break
      case "photography_caption":
        merged.photography.caption = val
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  if (!matchedAnyKey && lines.length > 0) {
    merged.categoryHighlight.description = lines[0].text
  }

  return merged
}

/* ---------------- Node Finders ---------------- */
export function findAboutPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "about" ||
        p.slug?.toLowerCase() === "about-us" ||
        p.title?.toLowerCase() === "about" ||
        p.title?.toLowerCase() === "about us"
    ) || null
  )
}

export function findWorksPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "works" ||
        p.slug?.toLowerCase() === "our-works" ||
        p.slug?.toLowerCase() === "work" ||
        p.title?.toLowerCase() === "works" ||
        p.title?.toLowerCase() === "our works"
    ) || null
  )
}

/* ---------------- LocalStorage Cache & Live Fetch ---------------- */
const ABOUT_CACHE_KEY = "pocket_wp_about_cache_v1"
const WORKS_CACHE_KEY = "pocket_wp_works_cache_v1"

export function getCachedWpAbout() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(ABOUT_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpAbout(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(ABOUT_CACHE_KEY, JSON.stringify(data))
  } catch (e) {
    // ignore storage quota errors
  }
}

export function getCachedWpWorks() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(WORKS_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpWorks(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(WORKS_CACHE_KEY, JSON.stringify(data))
  } catch (e) {
    // ignore storage quota errors
  }
}

export async function fetchLiveWpAbout() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL about page request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const aboutNode = findAboutPageNode(pages)
  const parsed = parseAboutFromWpPage(aboutNode)
  setCachedWpAbout(parsed)
  return parsed
}

export async function fetchLiveWpWorks() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL works page request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const worksNode = findWorksPageNode(pages)
  const parsed = parseWorksFromWpPage(worksNode)
  setCachedWpWorks(parsed)
  return parsed
}

/* ==========================================================================
   3. SERVICES PAGE DEFAULT CONTENT & PARSER (/services)
   ========================================================================== */

const SERVICES_PROCESS_TEXT =
  "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies."

export const DEFAULT_SERVICES_CONTENT = {
  videoHero: {
    headingLine1: "Aaaand Action:",
    headingLine2: "Video Production",
    description: WORKS_LOREM,
    goToLabel: "Go to...",
    link1Text: "Videography",
    link2Text: "Photography",
  },
  videoProcess: {
    headingPrefix: "The process: ",
    headingHighlight: "making it easy for you",
    steps: [
      {
        stage: "Pre-production",
        title: "Meeting & Planning",
        text: SERVICES_PROCESS_TEXT,
      },
      {
        stage: "Production",
        title: "Lights, Camera, Action",
        text: SERVICES_PROCESS_TEXT,
      },
      {
        stage: "Post-production",
        title: "Review & Edit",
        text: SERVICES_PROCESS_TEXT,
      },
    ],
  },
  photoHero: {
    headingLine1: "Pixel perfection:",
    headingLine2: "Photography",
    description: WORKS_LOREM,
    goToLabel: "Go to...",
    link1Text: "Video Production",
    link2Text: "The Rest",
  },
  photoProcess: {
    headingPrefix: "The process: ",
    headingHighlight: "making it easy for you",
    steps: [
      {
        stage: "Pre-production",
        title: "Meeting & Planning",
        text: SERVICES_PROCESS_TEXT,
      },
      {
        stage: "Production",
        title: "Lights, Camera, Action",
        text: SERVICES_PROCESS_TEXT,
      },
      {
        stage: "Post-production",
        title: "Review & Edit",
        text: SERVICES_PROCESS_TEXT,
      },
    ],
  },
  wholePackage: {
    headingLine1: "We’ve got it covered:",
    headingLine2: "The Whole Package",
    description: WORKS_LOREM,
    goToLabel: "Go to...",
    link1Text: "Video Production",
    link2Text: "Photography",
    items: [
      {
        title: "Planning",
        bullets: [
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
        ],
        text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      },
      {
        title: "Talent & Location",
        bullets: [
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
        ],
        text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      },
      {
        title: "Editing & Delivery",
        bullets: [
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
          "Lorem Ipsum dolor sit",
        ],
        text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      },
    ],
  },
}

export function parseServicesFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_SERVICES_CONTENT))
  if (!pageNode) return merged

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  const lines = extractLinesFromHtml(rawHtml)
  let matchedAnyKey = false

  lines.forEach(({ text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    if (!val) return

    switch (key) {
      // 1. Video Hero
      case "video_hero_heading_line_1":
        merged.videoHero.headingLine1 = val
        matchedAnyKey = true
        break
      case "video_hero_heading_line_2":
        merged.videoHero.headingLine2 = val
        matchedAnyKey = true
        break
      case "video_hero_description":
      case "video_production_description":
        merged.videoHero.description = val
        matchedAnyKey = true
        break

      // 2. Video Process
      case "video_step_1_stage":
        merged.videoProcess.steps[0].stage = val
        matchedAnyKey = true
        break
      case "video_step_1_title":
        merged.videoProcess.steps[0].title = val
        matchedAnyKey = true
        break
      case "video_step_1_text":
        merged.videoProcess.steps[0].text = val
        matchedAnyKey = true
        break
      case "video_step_2_stage":
        merged.videoProcess.steps[1].stage = val
        matchedAnyKey = true
        break
      case "video_step_2_title":
        merged.videoProcess.steps[1].title = val
        matchedAnyKey = true
        break
      case "video_step_2_text":
        merged.videoProcess.steps[1].text = val
        matchedAnyKey = true
        break
      case "video_step_3_stage":
        merged.videoProcess.steps[2].stage = val
        matchedAnyKey = true
        break
      case "video_step_3_title":
        merged.videoProcess.steps[2].title = val
        matchedAnyKey = true
        break
      case "video_step_3_text":
        merged.videoProcess.steps[2].text = val
        matchedAnyKey = true
        break

      // 3. Photo Hero
      case "photo_hero_heading_line_1":
        merged.photoHero.headingLine1 = val
        matchedAnyKey = true
        break
      case "photo_hero_heading_line_2":
        merged.photoHero.headingLine2 = val
        matchedAnyKey = true
        break
      case "photo_hero_description":
      case "photography_description":
        merged.photoHero.description = val
        matchedAnyKey = true
        break

      // 4. Photo Process
      case "photo_step_1_stage":
        merged.photoProcess.steps[0].stage = val
        matchedAnyKey = true
        break
      case "photo_step_1_title":
        merged.photoProcess.steps[0].title = val
        matchedAnyKey = true
        break
      case "photo_step_1_text":
        merged.photoProcess.steps[0].text = val
        matchedAnyKey = true
        break
      case "photo_step_2_stage":
        merged.photoProcess.steps[1].stage = val
        matchedAnyKey = true
        break
      case "photo_step_2_title":
        merged.photoProcess.steps[1].title = val
        matchedAnyKey = true
        break
      case "photo_step_2_text":
        merged.photoProcess.steps[1].text = val
        matchedAnyKey = true
        break
      case "photo_step_3_stage":
        merged.photoProcess.steps[2].stage = val
        matchedAnyKey = true
        break
      case "photo_step_3_title":
        merged.photoProcess.steps[2].title = val
        matchedAnyKey = true
        break
      case "photo_step_3_text":
        merged.photoProcess.steps[2].text = val
        matchedAnyKey = true
        break

      // 5. Whole Package
      case "whole_package_heading_line_1":
        merged.wholePackage.headingLine1 = val
        matchedAnyKey = true
        break
      case "whole_package_heading_line_2":
        merged.wholePackage.headingLine2 = val
        matchedAnyKey = true
        break
      case "whole_package_description":
        merged.wholePackage.description = val
        matchedAnyKey = true
        break
      case "package_1_title":
        merged.wholePackage.items[0].title = val
        matchedAnyKey = true
        break
      case "package_1_text":
        merged.wholePackage.items[0].text = val
        matchedAnyKey = true
        break
      case "package_2_title":
        merged.wholePackage.items[1].title = val
        matchedAnyKey = true
        break
      case "package_2_text":
        merged.wholePackage.items[1].text = val
        matchedAnyKey = true
        break
      case "package_3_title":
        merged.wholePackage.items[2].title = val
        matchedAnyKey = true
        break
      case "package_3_text":
        merged.wholePackage.items[2].text = val
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  if (!matchedAnyKey && lines.length > 0) {
    merged.videoHero.description = lines[0].text
  }

  return merged
}

/* ==========================================================================
   4. PRICING PAGE DEFAULT CONTENT & PARSER (/pricing)
   ========================================================================== */

export const DEFAULT_PRICING_CONTENT = {
  hero: {
    eyebrow: "Avoiding the taboo:",
    headingLine1: "Pricing for",
    headingLine2: "video production",
    headingLine3: "and photography",
    para1:
      "Price is important to everybody, and we know this is a major factor in deciding who you’ll want to work with. We like to think that clients work with us for a range of reasons, from our quality of output to our project management, but getting the budget in the right place is something that we spend a lot of time on.",
    para2:
      "We can either quote from scratch once we understand your brief, or work to your target spend. This flexibility makes us a great fit for both small and large clients alike.",
    para3:
      "You can read a bit more below about how we structure our rates for both video production and photography below, and we’re always here for any queries.",
    videoUrl: "/videos/showreel.mp4",
    videoCaption: "*Click on Video to toggle sound",
  },
  modular: {
    heading: "We use a modular pricing model:",
    bullet1: "Pay only for what you need",
    bullet2: "No matter how large or small your project",
    bullet3: "Oh, and no budget overruns!",
    mainVideoUrl: "/videos/james-read-tan.mp4",
    card1Title: "Everything you need and no hidden costs.",
    card1Text:
      "There are lots of factors that affect the overall price of video production and photography shoots, such as props, backgrounds, models and locations. This is why there’s no one-size-fits all price, and most creative agencies won’t put any prices on their websites – as they can be misleading without a lot of description.",
    card2Title: "We'll get you from brief to quote in a flash!",
    card2Text:
      "We will work with you to understand your brief and the full photography and video production requirements of your project, before delivering a budget breakdown to you at the beginning of the process. This gives you a fully honest and transparent view of the resources that make up your project. There’s always room for conversation and tweaks, and we’re also happy to start with your ideal spend and work backwards.",
  },
  howItWorks: {
    box1Title: "Cheap or Expensive?",
    box1Para1:
      "To give you some context, we aim to be in the middle band in terms of our pricing structure, which means that our typical daily rates for photography and video production will sit in between those agencies who work at the very upper end of our industry, with individual freelancers at the lower end of the pricing range.",
    box1Para2:
      "It’s important to note that we’re not talking about quality here, just price. We’re often chosen ahead of the largest of our competitors as we can deliver great quality photography and video production services for a lower price. This is because we run an efficient setup, with less overheads and no bloat.",
    box2Title: "So how does it work?",
    box2Para1:
      "Our setup also makes us attractive to start-ups, those who are crowdfunding, and businesses who still need great photography and video production, but are working within tighter budgets.",
    box2Para2:
      "We do this by using modular pricing – knowing that each photography and video production project is different, you pay for just what you need.",
    box2Para3:
      "While some clients may need just an hour of photography to capture some simple pack shots for a new addition to their range, others may need a multiple camera setup for a TV advert to showcase their brand to the world. We have the ability to quote easily for both ends of that spectrum.",
    box2Para4:
      "If you already have a total budget available, share that with us and we can work out how to deliver as much as possible for what you have to spend.",
  },
  getInTouch: {
    heading: "Get In Touch",
    subtitle:
      "Drop us a mail, let us know your budget, and we’ll share what we can offer",
    buttonText: "Send",
  },
  slider: {
    videoHeading: "Video Production...",
    photoHeading: "Photography...",
    para1Html: `<strong class="font-bold">Video production</strong> is a more complex process compared with photography, both in planning, production and the fact that the edit time will span days rather than hours, as it does it photography.`,
    para2:
      "Similarly to a photo shoot, you’ll need to think about the location: from studio spaces to Airbnbs for lifestyle work, and the consideration for sound as well.",
    para3:
      "We may need a bigger team, if lighting, sound, or set requirements are needed. Additional equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion may also be considered for more creative briefs.",
    para4:
      "Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists, food stylists may required too.",
    para5:
      "Editing often needs multiple days to complete, and we’ll best estimate this for you, allowing for time to feed back and make changes. We can also include music, sound effects and voiceover.",
    para6Html: `The <strong class="font-bold">Pocket Creatives</strong> team will always provide a full breakdown when we quote for you, which then makes it easier to see what resources your project needs to get made.`,
    para7Html: `To give you a general idea, a full day of filming with us starts at <strong class="font-bold">£940+VAT</strong>.`,
  },
}

export function parsePricingFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_PRICING_CONTENT))
  if (!pageNode) return merged

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  const lines = extractLinesFromHtml(rawHtml)
  let matchedAnyKey = false

  lines.forEach(({ rawInner, text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    const rawVal = rawInner.includes(":")
      ? rawInner.slice(rawInner.indexOf(":") + 1).trim()
      : val
    if (!val) return

    switch (key) {
      // 1. Hero
      case "hero_eyebrow":
        merged.hero.eyebrow = val
        matchedAnyKey = true
        break
      case "hero_heading_line_1":
        merged.hero.headingLine1 = val
        matchedAnyKey = true
        break
      case "hero_heading_line_2":
        merged.hero.headingLine2 = val
        matchedAnyKey = true
        break
      case "hero_heading_line_3":
        merged.hero.headingLine3 = val
        matchedAnyKey = true
        break
      case "hero_paragraph_1":
      case "hero_para_1":
        merged.hero.para1 = val
        matchedAnyKey = true
        break
      case "hero_paragraph_2":
      case "hero_para_2":
        merged.hero.para2 = val
        matchedAnyKey = true
        break
      case "hero_paragraph_3":
      case "hero_para_3":
        merged.hero.para3 = val
        matchedAnyKey = true
        break
      case "hero_video_url":
        merged.hero.videoUrl = val
        matchedAnyKey = true
        break
      case "hero_video_caption":
        merged.hero.videoCaption = val
        matchedAnyKey = true
        break

      // 2. Modular Pricing
      case "modular_heading":
        merged.modular.heading = val
        matchedAnyKey = true
        break
      case "modular_bullet_1":
        merged.modular.bullet1 = val
        matchedAnyKey = true
        break
      case "modular_bullet_2":
        merged.modular.bullet2 = val
        matchedAnyKey = true
        break
      case "modular_bullet_3":
        merged.modular.bullet3 = val
        matchedAnyKey = true
        break
      case "modular_video_url":
      case "main_video_url":
        merged.modular.mainVideoUrl = val
        matchedAnyKey = true
        break
      case "card_1_title":
        merged.modular.card1Title = val
        matchedAnyKey = true
        break
      case "card_1_text":
        merged.modular.card1Text = val
        matchedAnyKey = true
        break
      case "card_2_title":
        merged.modular.card2Title = val
        matchedAnyKey = true
        break
      case "card_2_text":
        merged.modular.card2Text = val
        matchedAnyKey = true
        break

      // 3. Cheap or Expensive / How Does It Work
      case "box_1_title":
        merged.howItWorks.box1Title = val
        matchedAnyKey = true
        break
      case "box_1_paragraph_1":
      case "box_1_para_1":
        merged.howItWorks.box1Para1 = val
        matchedAnyKey = true
        break
      case "box_1_paragraph_2":
      case "box_1_para_2":
        merged.howItWorks.box1Para2 = val
        matchedAnyKey = true
        break
      case "box_2_title":
        merged.howItWorks.box2Title = val
        matchedAnyKey = true
        break
      case "box_2_paragraph_1":
      case "box_2_para_1":
        merged.howItWorks.box2Para1 = val
        matchedAnyKey = true
        break
      case "box_2_paragraph_2":
      case "box_2_para_2":
        merged.howItWorks.box2Para2 = val
        matchedAnyKey = true
        break
      case "box_2_paragraph_3":
      case "box_2_para_3":
        merged.howItWorks.box2Para3 = val
        matchedAnyKey = true
        break
      case "box_2_paragraph_4":
      case "box_2_para_4":
        merged.howItWorks.box2Para4 = val
        matchedAnyKey = true
        break

      // 4. Get In Touch
      case "contact_heading":
      case "get_in_touch_heading":
        merged.getInTouch.heading = val
        matchedAnyKey = true
        break
      case "contact_subtitle":
      case "get_in_touch_subtitle":
        merged.getInTouch.subtitle = val
        matchedAnyKey = true
        break
      case "contact_button":
        merged.getInTouch.buttonText = val
        matchedAnyKey = true
        break

      // 5. Slider (Video Production / Photography rates)
      case "slider_video_heading":
        merged.slider.videoHeading = val
        matchedAnyKey = true
        break
      case "slider_photo_heading":
        merged.slider.photoHeading = val
        matchedAnyKey = true
        break
      case "slider_paragraph_1":
        merged.slider.para1Html = rawVal
        matchedAnyKey = true
        break
      case "slider_paragraph_2":
        merged.slider.para2 = val
        matchedAnyKey = true
        break
      case "slider_paragraph_3":
        merged.slider.para3 = val
        matchedAnyKey = true
        break
      case "slider_paragraph_4":
        merged.slider.para4 = val
        matchedAnyKey = true
        break
      case "slider_paragraph_5":
        merged.slider.para5 = val
        matchedAnyKey = true
        break
      case "slider_paragraph_6":
        merged.slider.para6Html = rawVal
        matchedAnyKey = true
        break
      case "slider_starting_rate":
      case "slider_paragraph_7":
        merged.slider.para7Html = rawVal
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  if (!matchedAnyKey && lines.length > 0) {
    merged.hero.para1 = lines[0].text
  }

  return merged
}

/* ==========================================================================
   5. VIDEOGRAPHY SERVICES, PHOTOGRAPHY SERVICES & TRAINING COURSES
   ========================================================================== */

export const DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT = {
  hero: {
    heading: "Video Production Services",
    subheading: "by POCKET CREATIVES",
    videoUrl: "/videos/showreel.mp4",
    videoCaption: "*Click on Video to toggle sound",
    introHeading:
      "Our professional video production and videography services are easy to commission...",
    introSubtext:
      "whether you’re a seasoned pro or if you’re producing video for the first time.",
    rightText:
      "We take the time to understand your requirements: how your video will be used and what it needs to achieve.",
    buttonText: "Have questions?",
  },
  helpSection: {
    para1:
      "As a video production company in London, we work as a close-knit team across every aspect of corporate, promotional and marketing videos. Whether it’s producing a captivating crowdfunding video, filming at events, showcasing products in use, or talking to camera in an interview, we can support you.",
    para2:
      "Watch some examples from our video production portfolio below and then reach out to see how we can help bring your next video project to life.",
  },
  portfolio: {
    heading: "A Snapshot of our Video Production Portfolio",
    categories: [
      {
        tab: "Beauty & Cosmetics",
        client: "James Read Tan",
        title: "Beauty and Cosmetics Video",
        video: "/videos/james-read-tan.mp4",
        description:
          "Working directly with brand founder James Read, we planned and produced a new brand visual for tanning brand James Read Tan for an exclusive event launch and subsequent online campaign.",
      },
      {
        tab: "Food & Drink",
        client: "Kopparberg",
        title: "Food and Drink Video",
        video: "/videos/food-showreel.mp4",
        description:
          "High-impact commercial food and beverage cinematography styled in-house to showcase texture, freshness, and brand personality across social and broadcast campaigns.",
      },
      {
        tab: "Products",
        client: "Argos",
        title: "Product Showcase Video",
        video: "/videos/product-masabi.mp4",
        description:
          "Clean, dynamic product demonstrations and lifestyle films designed to drive conversions across e-commerce platforms and digital ad placements.",
      },
      {
        tab: "Events",
        client: "Macmillan",
        title: "Event Coverage & Highlights",
        video: "/videos/events-showreel.mp4",
        description:
          "Capturing the atmosphere, keynote moments, and attendee stories at live corporate, brand launch, and charity events across London and the UK.",
      },
      {
        tab: "Crowdfunding",
        client: "Startup Launch",
        title: "Crowdfunding Campaign Video",
        video: "/videos/crowdfunding-hygie.mp4",
        description:
          "Story-driven founder pitches and product explainers engineered to engage backers and exceed funding targets on Kickstarter, Indiegogo, and Crowdcube.",
      },
      {
        tab: "All Others",
        client: "The Telegraph",
        title: "Brand & Corporate Video",
        video: "/videos/tv-california-walnuts.mp4",
        description:
          "Bespoke brand storytelling, internal communications, interviews, and social-first video content tailored to your marketing objectives.",
      },
    ],
  },
  details: {
    howWeWorkHeading: "How we work",
    howWeWorkPara1:
      "We know you’re here because you’re looking for a videographer or a video production team to deliver a great piece of video content for your next campaign or project. Rest assured, we carefully recruit and develop the talents of our passionate in-house team to deliver stunning visuals and excellent client service alongside.",
    howWeWorkPara2:
      "All of our editing and colour grading is managed in-house too, making sure we retain full control over the quality of the final video, and giving the ability to work to tight deadlines.",
    howWeWorkPara3:
      "If you’re completely new to commissioning video production, we make the process simple and easy for you, taking the lead at all stages while involving you in the creative narrative.",
    techHeading: "Technically speaking",
    techPara2:
      "We combine these with pristine Canon L-Series lenses along with an array of movement and stabilisation tools and modifiers to give your videos the edge.",
    wholePackageHeading: "The whole package",
    wholePackagePara1:
      "Our videographers love making things look great with their cameras and magical lighting combinations.",
    wholePackagePara2:
      "We are also assisted by an enviable array of trusted industry talent who work alongside us on shoots, such as food and prop stylists, hair and make up artists, set builders and art directors, along with models, actors and voiceover artists when required.",
    wholePackagePara3:
      "Add our access to endless location possibilities to shoot in and we’re confident of being able to pull the right creative elements together to answer any client brief.",
  },
}

export function parseVideographyServicesFromWpPage(pageNode) {
  const merged = JSON.parse(
    JSON.stringify(DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT)
  )
  if (!pageNode?.content) return merged
  const lines = extractLinesFromHtml(pageNode.content)
  lines.forEach(({ text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    if (!val) return
    switch (key) {
      case "hero_heading":
        merged.hero.heading = val
        break
      case "hero_subheading":
        merged.hero.subheading = val
        break
      case "hero_video_url":
        merged.hero.videoUrl = val
        break
      case "hero_intro_heading":
        merged.hero.introHeading = val
        break
      case "hero_intro_subtext":
        merged.hero.introSubtext = val
        break
      case "hero_right_text":
        merged.hero.rightText = val
        break
      case "help_paragraph_1":
        merged.helpSection.para1 = val
        break
      case "help_paragraph_2":
        merged.helpSection.para2 = val
        break
      case "portfolio_heading":
        merged.portfolio.heading = val
        break
      case "how_we_work_heading":
        merged.details.howWeWorkHeading = val
        break
      case "how_we_work_paragraph_1":
        merged.details.howWeWorkPara1 = val
        break
      case "how_we_work_paragraph_2":
        merged.details.howWeWorkPara2 = val
        break
      case "how_we_work_paragraph_3":
        merged.details.howWeWorkPara3 = val
        break
      default:
        break
    }
  })
  return merged
}

export const DEFAULT_PHOTOGRAPHY_SERVICES_CONTENT = {
  hero: {
    heading: "Photography Services",
    subheadingPrefix: "available from",
    subheadingBrand: "POCKET CREATIVES",
    videoUrl: "/videos/water-texture-bts.mp4",
    videoCaption: "*Click on Video to toggle sound",
    rightText:
      "We put quality and creativity at the heart of what we do, providing high quality and striking imagery to use for websites, editorial, PR, marketing, advertising and social media. Take a look at some examples of our photography below and then reach out to see how we might be able to help you.",
    buttonText: "Have questions?",
  },
  gridSection: {
    leftBoxTitle: "Photography",
    leftPara1:
      "Whether you’re promoting food and drink, beauty and cosmetics, showcasing tech, products, property or anything else, a visually impactful approach is always our priority when delivering our professional photography services.",
    leftPara2:
      "We also have extensive experience working with people, capturing corporate headshots, lifestyle imagery and stunning portraiture, as well as the atmosphere of events.",
    rightPara2:
      "If your photography assignment requires a larger studio space or an interesting location to bring your products to life, then we can jump in the car and bring the equipment to you, or organise everything on your behalf to provide a completely turn-key photography solution.",
    rightBoxTitle: "Services",
  },
  ctaBand: {
    heading: "Ready to see what we could do with your next project?",
    buttonText: "Send",
  },
  details: {
    howWeWorkHeading: "How we work",
    howWeWorkPara1:
      "It’s likely you’ve landed here because you’re looking for a photographer or a photography team to deliver images for your next campaign or project. Rest assured, we carefully recruit and develop the talents of our passionate in-house team to deliver stunning imagery, and excellent client service alongside.",
    howWeWorkPara2:
      "All of our editing and retouching is managed in-house too, making sure we retain full control over the quality of the final product, and giving the ability to work to tight deadlines.",
    howWeWorkPara3:
      "If you’re completely new to commissioning photography, we make the process simple and easy for you, taking the lead at all stages while involving you in the creative narrative.",
    techHeading: "Technically speaking",
    techPara1:
      "When capturing our photography, we trust Canon’s professional sensor technology alongside their pristine L-Series lenses. They are workhorses that deliver phenomenal image quality at high resolutions, with gorgeous colour rendition, time and time again.",
    techPara2:
      "In our photography studio, we choose Pixapro lighting with widespread compatibility across a huge array of modifiers and shapes to give our clients endless creative choices.",
    wholePackageHeading: "The whole package",
    wholePackagePara1:
      "Our photographers love making things look great with their camera and magical lighting combinations.",
    wholePackagePara2:
      "We are also assisted by an enviable array of trusted industry talent who work alongside us on shoots, such as food and prop stylists, hair and make up artists, set builders and art directors, along with models and actors when required.",
    wholePackagePara3:
      "Add our access to endless location possibilities to shoot in and we’re confident of being able to pull the right creative elements together to answer any client brief.",
  },
}

export function parsePhotographyServicesFromWpPage(pageNode) {
  const merged = JSON.parse(
    JSON.stringify(DEFAULT_PHOTOGRAPHY_SERVICES_CONTENT)
  )
  if (!pageNode?.content) return merged
  const lines = extractLinesFromHtml(pageNode.content)
  lines.forEach(({ text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    if (!val) return
    switch (key) {
      case "hero_heading":
        merged.hero.heading = val
        break
      case "hero_video_url":
        merged.hero.videoUrl = val
        break
      case "hero_description":
      case "hero_right_text":
        merged.hero.rightText = val
        break
      case "left_paragraph_1":
        merged.gridSection.leftPara1 = val
        break
      case "left_paragraph_2":
        merged.gridSection.leftPara2 = val
        break
      case "right_paragraph_2":
        merged.gridSection.rightPara2 = val
        break
      case "cta_heading":
        merged.ctaBand.heading = val
        break
      case "how_we_work_heading":
        merged.details.howWeWorkHeading = val
        break
      case "how_we_work_paragraph_1":
        merged.details.howWeWorkPara1 = val
        break
      default:
        break
    }
  })
  return merged
}

/* ---------------- Node Finders for Services & Pricing ---------------- */

export function findServicesPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "services" ||
        p.slug?.toLowerCase() === "our-services" ||
        p.title?.toLowerCase() === "services" ||
        p.title?.toLowerCase() === "our services"
    ) || null
  )
}

export function findPricingPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "pricing" ||
        p.slug?.toLowerCase() === "prices" ||
        p.title?.toLowerCase() === "pricing" ||
        p.title?.toLowerCase() === "prices"
    ) || null
  )
}

export function findVideographyServicesPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "videography-services" ||
        p.slug?.toLowerCase() === "video-production-services" ||
        p.title?.toLowerCase() === "videography services" ||
        p.title?.toLowerCase() === "video production services"
    ) || null
  )
}

export function findPhotographyServicesPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "photography-services" ||
        p.title?.toLowerCase() === "photography services"
    ) || null
  )
}

/* ---------------- Cache & Live Fetch for Services & Pricing ---------------- */

const SERVICES_CACHE_KEY = "pocket_wp_services_cache_v1"
const PRICING_CACHE_KEY = "pocket_wp_pricing_cache_v1"
const VIDEO_SERVICES_CACHE_KEY = "pocket_wp_video_services_cache_v1"
const PHOTO_SERVICES_CACHE_KEY = "pocket_wp_photo_services_cache_v1"

export function getCachedWpServices() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(SERVICES_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpServices(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(SERVICES_CACHE_KEY, JSON.stringify(data))
  } catch (e) {}
}

export function getCachedWpPricing() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(PRICING_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpPricing(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(PRICING_CACHE_KEY, JSON.stringify(data))
  } catch (e) {}
}

export function getCachedWpVideographyServices() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(VIDEO_SERVICES_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpVideographyServices(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(VIDEO_SERVICES_CACHE_KEY, JSON.stringify(data))
  } catch (e) {}
}

export function getCachedWpPhotographyServices() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(PHOTO_SERVICES_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpPhotographyServices(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(PHOTO_SERVICES_CACHE_KEY, JSON.stringify(data))
  } catch (e) {}
}

export async function fetchLiveWpServices() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL services page request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const node = findServicesPageNode(pages)
  const parsed = parseServicesFromWpPage(node)
  setCachedWpServices(parsed)
  return parsed
}

export async function fetchLiveWpPricing() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL pricing page request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const node = findPricingPageNode(pages)
  const parsed = parsePricingFromWpPage(node)
  setCachedWpPricing(parsed)
  return parsed
}

export async function fetchLiveWpVideographyServices() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL videography services request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const node = findVideographyServicesPageNode(pages)
  const parsed = parseVideographyServicesFromWpPage(node)
  setCachedWpVideographyServices(parsed)
  return parsed
}

export async function fetchLiveWpPhotographyServices() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL photography services request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const node = findPhotographyServicesPageNode(pages)
  const parsed = parsePhotographyServicesFromWpPage(node)
  setCachedWpPhotographyServices(parsed)
  return parsed
}

/* ==========================================================================
   6. CONTACT PAGE DEFAULT CONTENT & PARSER (/contact)
   ========================================================================== */

export const DEFAULT_CONTACT_CONTENT = {
  hero: {
    headingLine1: "Grab a latte",
    headingLine2: "and let's",
    headingLine3: "have a chat",
    para1:
      "Want to talk about your new project with our video and photography agency team?",
    para2Html: `We aim to reply within <strong class="font-bold">1 hour</strong> during normal working hours, so we can get you that quote and any more information as quickly as possible.`,
    para3: "We’d love to hear from you!",
    buttonText: "Send",
  },
  locationBar: {
    phone: "020 3633 8494",
    addressLine1: "Wow Workspaces Battersea",
    addressLine2: "Unit 3, 7-9 Ingate Place",
    addressLine3: "Battersea, London SW8 3NS",
    mapUrl: "https://maps.google.com/maps?q=wow+workspaces+battersea",
    email: "team@pocketcreatives.co.uk",
  },
  vacanciesAndPartners: {
    vacanciesHeading: "Vacancies",
    vacanciesText:
      "At our video and photography agency we always want to hear from great people and create regular opportunities. Feel free to send us your information to the address below:",
    vacanciesEmail: "jobs@pocketcreatives.co.uk",
    partnersHeading: "Partners",
    partnersText:
      "Our video and photography agency also has links to some excellent partners who work in other creative industries. If you think you’d make a good Pocket Partner, mail us below:",
    partnersEmail: "partners@pocketcreatives.co.uk",
    badgeLine1: "See Our",
    badgeLine2: "Works",
  },
}

export function parseContactFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_CONTACT_CONTENT))
  if (!pageNode) return merged

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  const lines = extractLinesFromHtml(rawHtml)
  let matchedAnyKey = false

  lines.forEach(({ rawInner, text }) => {
    const colonIdx = text.indexOf(":")
    if (colonIdx === -1) return
    const key = text
      .slice(0, colonIdx)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "")
    const val = text.slice(colonIdx + 1).trim()
    const rawVal = rawInner.includes(":")
      ? rawInner.slice(rawInner.indexOf(":") + 1).trim()
      : val
    if (!val) return

    switch (key) {
      // 1. Hero
      case "hero_heading_line_1":
        merged.hero.headingLine1 = val
        matchedAnyKey = true
        break
      case "hero_heading_line_2":
        merged.hero.headingLine2 = val
        matchedAnyKey = true
        break
      case "hero_heading_line_3":
        merged.hero.headingLine3 = val
        matchedAnyKey = true
        break
      case "hero_paragraph_1":
      case "hero_para_1":
        merged.hero.para1 = val
        matchedAnyKey = true
        break
      case "hero_paragraph_2":
      case "hero_para_2":
        merged.hero.para2Html = rawVal
        matchedAnyKey = true
        break
      case "hero_paragraph_3":
      case "hero_para_3":
        merged.hero.para3 = val
        matchedAnyKey = true
        break
      case "hero_button":
      case "form_button":
        merged.hero.buttonText = val
        matchedAnyKey = true
        break

      // 2. Location & Contact Bar
      case "contact_phone":
      case "phone":
      case "phone_number":
        merged.locationBar.phone = val
        matchedAnyKey = true
        break
      case "address_line_1":
        merged.locationBar.addressLine1 = val
        matchedAnyKey = true
        break
      case "address_line_2":
        merged.locationBar.addressLine2 = val
        matchedAnyKey = true
        break
      case "address_line_3":
        merged.locationBar.addressLine3 = val
        matchedAnyKey = true
        break
      case "map_url":
      case "google_maps_url":
        merged.locationBar.mapUrl = val
        matchedAnyKey = true
        break
      case "contact_email":
      case "email":
      case "email_address":
        merged.locationBar.email = val
        matchedAnyKey = true
        break

      // 3. Vacancies & Partners
      case "vacancies_heading":
        merged.vacanciesAndPartners.vacanciesHeading = val
        matchedAnyKey = true
        break
      case "vacancies_text":
      case "vacancies_description":
        merged.vacanciesAndPartners.vacanciesText = val
        matchedAnyKey = true
        break
      case "vacancies_email":
        merged.vacanciesAndPartners.vacanciesEmail = val
        matchedAnyKey = true
        break
      case "partners_heading":
        merged.vacanciesAndPartners.partnersHeading = val
        matchedAnyKey = true
        break
      case "partners_text":
      case "partners_description":
        merged.vacanciesAndPartners.partnersText = val
        matchedAnyKey = true
        break
      case "partners_email":
        merged.vacanciesAndPartners.partnersEmail = val
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  if (!matchedAnyKey && lines.length > 0) {
    merged.hero.para1 = lines[0].text
  }

  return merged
}

export function findContactPageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "contact" ||
        p.slug?.toLowerCase() === "contact-us" ||
        p.slug?.toLowerCase() === "contacts" ||
        p.title?.toLowerCase() === "contact" ||
        p.title?.toLowerCase() === "contact us" ||
        p.title?.toLowerCase() === "contacts"
    ) || null
  )
}

const CONTACT_CACHE_KEY = "pocket_wp_contact_cache_v1"

export function getCachedWpContact() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(CONTACT_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpContact(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(CONTACT_CACHE_KEY, JSON.stringify(data))
  } catch (e) {}
}

export async function fetchLiveWpContact() {
  const response = await fetch(`${WP_GRAPHQL_ENDPOINT}?cb=${Date.now()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: PAGES_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL contact page request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const node = findContactPageNode(pages)
  const parsed = parseContactFromWpPage(node)
  setCachedWpContact(parsed)
  return parsed
}



