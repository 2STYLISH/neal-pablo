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

