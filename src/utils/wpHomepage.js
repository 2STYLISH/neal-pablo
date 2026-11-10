import { WP_GRAPHQL_ENDPOINT, stripHtml } from "./wpClient"

const LOREM =
  "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."

export const DEFAULT_HOMEPAGE_CONTENT = {
  hero: {
    headlineHtml: `We’re a <b class="font-bold text-brand-yellow">fast</b> &amp; <b class="font-extrabold text-brand-yellow">friendly</b> <b class="font-bold text-brand-blue">Video Production</b> and <b class="font-bold text-brand-blue">Photography</b> <span class="font-normal text-brand-slate">company with</span> <b class="font-bold text-brand-yellow">bags of experience</b> &amp; <span class="font-normal text-brand-slate">who</span> <span class="text-[#FF1E00]">♥</span> <span class="font-normal text-brand-slate">what we do :)</span>`,
    videoCaption: "*Click on Video to toggle sound",
    videoUrl: "/videos/showreel.mp4",
    posterUrl: "",
  },
  partners: {
    headingHtml: `As you can see, we’ve <b class="font-black text-brand-yellow">partnered</b> with a lot of amazing people`,
    subheading: "in many different Industries:",
    description: LOREM,
  },
  videoIntro: {
    heading: "Take a look at some of our video work...",
    description: LOREM,
  },
  videoProduction: {
    sectionLabel: "Video Production",
    caption: "*Drag to play the next Video, Click to toggle sound",
    viewAllText: "View\nAll.",
  },
  photoIntro: {
    headingHtml: `We <span class="text-brand-yellow tracking-[-0.15em]">squeeze</span> quality into every pixel...`,
    description: LOREM,
    rightHeading:
      "See some of our Photography work for different industries below.",
  },
  photography: {
    sectionLabel: "Photography",
  },
  services: {
    checklistWords: ["Services", "Quality", "People"],
    buttonText: "Say\nHello",
    values: [
      {
        title: "Proactive",
        text: "We pride ourselves on our quality of service above everything else. We’ve taken the time to build a cracking little team at Pocket, and we make sure that you feel the benefits of working with a dedicated video production company who are there for you, and dedicated to the success of your project.",
      },
      {
        title: "Nerds for Visuals",
        text: "Lorem ipsum dolor sit amet consectetur. Fermentum ut laoreet nunc at amet. Pretium sed tristique eu erat dui elementum eu duis. Sem posuere congue pellentesque duis in. Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis. Id at.",
      },
      {
        title: "Valuable",
        text: "Lorem ipsum dolor sit amet consectetur. Varius tempor id nulla aliquet gravida. Quis at auctor quis lectus velit id parturient bibendum. Amet a erat faucibus enim orci. Praesent magna facilisi erat eget dictumst nulla nunc. Scelerisque cras viverra ipsum at accumsan a. Sed sollicitudin lacinia amet arcu volutpat. Id.",
      },
    ],
  },
  team: {
    heading: "Meet the Team",
    bioText: LOREM,
    members: [
      {
        first: "Steven",
        last: "Mayatt",
        roles: [
          "Managing Director",
          "Creative Director",
          "Photographer",
          "Entrepreneur",
          "Marketeer",
          "Coffee Drinker",
        ],
        bio: LOREM,
      },
      {
        first: "Haider",
        last: "Romero Perez",
        roles: [
          "Technical Director",
          "Cinematographer",
          "Cameraman",
          "Editor",
          "Colourist",
          "Intrepid Cyclist",
        ],
        bio: LOREM,
      },
      {
        first: "Lauren",
        last: "Hodge",
        roles: [
          "Production Director",
          "Organiser",
          "Planner",
          "Emergency Hand model",
          "Prop Shopper",
          "Recipe Wrangler",
        ],
        bio: LOREM,
      },
      {
        first: "Ned",
        last: "",
        roles: ["Team Member"],
        bio: LOREM,
      },
      {
        first: "Connor",
        last: "",
        roles: ["Team Member"],
        bio: LOREM,
      },
      {
        first: "Rauchan",
        last: "",
        roles: ["Team Member"],
        bio: LOREM,
      },
    ],
  },
  reviews: {
    headingPrefix: "Go behind the scenes of our ",
    headingLinkText: "5 Star",
    headingSuffix: " Service",
    reviewCountLine1: "Based on",
    reviewCountLine2: "88 reviews",
    videoCaption: "*Click on Video to toggle sound",
    videoUrl: "/videos/ayumi-bts.mp4",
    items: [
      {
        name: "Winnie Asawakanjanakit",
        text: "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)",
      },
      {
        name: "Crime And Comedy Theatre Co..",
        text: "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating...",
      },
      {
        name: "John Bond",
        text: "Very professional company to deal with and delighted with the product videos received. Always a pleasure to deal with Steven and his team.",
      },
      {
        name: "Marcus Ramtohul",
        text: "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with...",
      },
      {
        name: "Klara Niklewicz",
        text: "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!",
      },
      {
        name: "Michelle Vellacott",
        text: "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great...",
      },
    ],
  },
  pricing: {
    headingYellow: "We value",
    headingBlue: "transparency",
    headingSlate: "so let's talk about pricing.",
    buttonText: "View Pricing",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.",
    description: LOREM,
    promiseLabel: "Pocket Promise",
    badgeBold: "Value",
    badgeLight: "Price",
  },
}

const HOMEPAGE_QUERY = `
  query FetchWordPressHomepage {
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

/**
 * Parses `Key: Value` pairs or section blocks from the WordPress "Home" page HTML content.
 * This allows the client to edit the Home page in standard WordPress (Gutenberg or Classic Editor)
 * without needing any paid plugins or touching the code repository.
 */
export function parseHomepageFromWpPage(pageNode) {
  const merged = JSON.parse(JSON.stringify(DEFAULT_HOMEPAGE_CONTENT))
  if (!pageNode) return merged

  if (pageNode?.featuredImage?.node?.sourceUrl) {
    merged.hero.posterUrl = pageNode.featuredImage.node.sourceUrl
  }

  const rawHtml = pageNode.content || ""
  if (!rawHtml.trim()) return merged

  // 1. Check if there is an embedded JSON config block (from our optional WP admin helper plugin)
  const jsonMatch = rawHtml.match(
    /<!--\s*POCKET_HOMEPAGE_JSON_START\s*([\s\S]*?)\s*POCKET_HOMEPAGE_JSON_END\s*-->/
  )
  if (jsonMatch && jsonMatch[1]) {
    try {
      const parsedJson = JSON.parse(jsonMatch[1])
      return deepMergeHomepage(merged, parsedJson)
    } catch (e) {
      // Fall through to line/heading parser
    }
  }

  // 2. Parse `Key: Value` lines from paragraphs/list items inside the WordPress Home page
  const blockMatches =
    rawHtml.match(/<(p|li|h1|h2|h3|h4|div)[^>]*>[\s\S]*?<\/\1>/gi) || []
  const lines = blockMatches
    .map(block => {
      const inner = block.replace(/^<[^>]+>|<\/[^>]+>$/g, "").trim()
      return {
        rawInner: inner,
        text: decodeEntities(stripHtml(inner)),
      }
    })
    .filter(item => item.text.length > 0)

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
      case "hero_headline":
      case "hero_title":
      case "hero_text":
        merged.hero.headlineHtml = rawVal
        matchedAnyKey = true
        break
      case "hero_video_caption":
        merged.hero.videoCaption = val
        matchedAnyKey = true
        break
      case "hero_video_url":
      case "hero_video":
        merged.hero.videoUrl = val
        matchedAnyKey = true
        break
      case "partners_heading":
      case "partners_title":
        merged.partners.headingHtml = rawVal
        matchedAnyKey = true
        break
      case "partners_subheading":
      case "partners_subtitle":
        merged.partners.subheading = val
        matchedAnyKey = true
        break
      case "partners_description":
      case "partners_text":
        merged.partners.description = val
        matchedAnyKey = true
        break
      case "video_intro_heading":
      case "video_work_heading":
        merged.videoIntro.heading = val
        matchedAnyKey = true
        break
      case "video_intro_description":
      case "video_work_description":
        merged.videoIntro.description = val
        matchedAnyKey = true
        break
      case "video_production_label":
        merged.videoProduction.sectionLabel = val
        matchedAnyKey = true
        break
      case "video_production_caption":
        merged.videoProduction.caption = val
        matchedAnyKey = true
        break
      case "photo_intro_heading":
        merged.photoIntro.headingHtml = rawVal
        matchedAnyKey = true
        break
      case "photo_intro_description":
        merged.photoIntro.description = val
        matchedAnyKey = true
        break
      case "photo_intro_subheading":
      case "photo_intro_right_heading":
        merged.photoIntro.rightHeading = val
        matchedAnyKey = true
        break
      case "photography_label":
        merged.photography.sectionLabel = val
        matchedAnyKey = true
        break
      case "service_1_title":
        merged.services.values[0].title = val
        matchedAnyKey = true
        break
      case "service_1_text":
        merged.services.values[0].text = val
        matchedAnyKey = true
        break
      case "service_2_title":
        merged.services.values[1].title = val
        matchedAnyKey = true
        break
      case "service_2_text":
        merged.services.values[1].text = val
        matchedAnyKey = true
        break
      case "service_3_title":
        merged.services.values[2].title = val
        matchedAnyKey = true
        break
      case "service_3_text":
        merged.services.values[2].text = val
        matchedAnyKey = true
        break
      case "team_heading":
        merged.team.heading = val
        matchedAnyKey = true
        break
      case "team_bio":
      case "team_description":
        merged.team.bioText = val
        merged.team.members.forEach(m => {
          m.bio = val
        })
        matchedAnyKey = true
        break
      case "reviews_heading":
        merged.reviews.headingPrefix = val
        merged.reviews.headingLinkText = ""
        merged.reviews.headingSuffix = ""
        matchedAnyKey = true
        break
      case "reviews_count":
        merged.reviews.reviewCountLine2 = val
        matchedAnyKey = true
        break
      case "bts_video_url":
        merged.reviews.videoUrl = val
        matchedAnyKey = true
        break
      case "review_1_name":
        merged.reviews.items[0].name = val
        matchedAnyKey = true
        break
      case "review_1_text":
        merged.reviews.items[0].text = val
        matchedAnyKey = true
        break
      case "review_2_name":
        merged.reviews.items[1].name = val
        matchedAnyKey = true
        break
      case "review_2_text":
        merged.reviews.items[1].text = val
        matchedAnyKey = true
        break
      case "review_3_name":
        merged.reviews.items[2].name = val
        matchedAnyKey = true
        break
      case "review_3_text":
        merged.reviews.items[2].text = val
        matchedAnyKey = true
        break
      case "pricing_subtitle":
        merged.pricing.subtitle = val
        matchedAnyKey = true
        break
      case "pricing_description":
      case "pricing_text":
        merged.pricing.description = val
        matchedAnyKey = true
        break
      case "pricing_button":
        merged.pricing.buttonText = val
        matchedAnyKey = true
        break
      default:
        break
    }
  })

  // 3. If the client wrote free-form paragraphs/headings on the "Home" page without `Key: Value` labels,
  // map the first paragraph/heading to the Hero headline so free-form edits also show up immediately!
  if (!matchedAnyKey && lines.length > 0) {
    const isDefaultSamplePage =
      pageNode.slug === "sample-page" &&
      rawHtml.includes("This is an example page.")
    if (!isDefaultSamplePage) {
      merged.hero.headlineHtml = lines[0].rawInner
      if (lines[1]) {
        merged.partners.description = lines[1].text
      }
      if (lines[2]) {
        merged.videoIntro.description = lines[2].text
      }
    }
  }

  return merged
}

function deepMergeHomepage(target, source) {
  if (!source || typeof source !== "object") return target
  const out = Array.isArray(target) ? [...target] : { ...target }
  Object.keys(source).forEach(key => {
    const val = source[key]
    if (val === undefined || val === null || val === "") return
    if (
      typeof val === "object" &&
      !Array.isArray(val) &&
      typeof out[key] === "object" &&
      !Array.isArray(out[key])
    ) {
      out[key] = deepMergeHomepage(out[key], val)
    } else {
      out[key] = val
    }
  })
  return out
}

export function findHomePageNode(pageNodes = []) {
  if (!Array.isArray(pageNodes) || pageNodes.length === 0) return null
  return (
    pageNodes.find(p => p.isFrontPage) ||
    pageNodes.find(
      p =>
        p.slug?.toLowerCase() === "home" ||
        p.slug?.toLowerCase() === "homepage" ||
        p.title?.toLowerCase() === "home" ||
        p.title?.toLowerCase() === "homepage"
    ) ||
    null
  )
}

const HOMEPAGE_CACHE_KEY = "pocket_wp_homepage_cache_v1"

export function getCachedWpHomepage() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(HOMEPAGE_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export function setCachedWpHomepage(data) {
  if (typeof window === "undefined" || !data) return
  try {
    window.localStorage.setItem(HOMEPAGE_CACHE_KEY, JSON.stringify(data))
  } catch (e) {
    // ignore storage quota errors
  }
}

export async function fetchLiveWpHomepage() {
  const response = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: HOMEPAGE_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL homepage request failed: ${response.status}`)
  }
  const json = await response.json()
  const pages = json?.data?.pages?.nodes || []
  const homeNode = findHomePageNode(pages)
  const parsed = parseHomepageFromWpPage(homeNode)
  setCachedWpHomepage(parsed)
  return parsed
}

