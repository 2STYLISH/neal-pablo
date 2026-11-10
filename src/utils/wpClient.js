export const WP_GRAPHQL_ENDPOINT =
  "https://dev-pocket-creatives-cms.pantheonsite.io/graphql"

const POSTS_QUERY = `
  query FetchWordPressPosts {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        databaseId
        title
        slug
        date
        excerpt
        content
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
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

export function getOrdinalDay(day) {
  if (day > 3 && day < 21) return `${day}th`
  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

export function formatWpDate(dateStr, uppercase = false) {
  if (!dateStr) return uppercase ? "20TH MARCH 2025" : "20th March 2025"
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  const dayWithSuffix = getOrdinalDay(d.getDate())
  const month = d.toLocaleString("en-GB", { month: "long" })
  const year = d.getFullYear()
  const formatted = `${dayWithSuffix} ${month} ${year}`
  return uppercase ? formatted.toUpperCase() : formatted
}

export function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .trim()
}

export function extractHeadingsAndAddIds(html = "") {
  if (!html) return { htmlWithIds: "", headings: [] }
  const headings = []
  let index = 0
  const htmlWithIds = html.replace(
    /<(h[23])([^>]*)>(.*?)<\/\1>/gi,
    (match, tag, attrs, inner) => {
      const text = stripHtml(inner)
      if (!text) return match
      index += 1
      const slug =
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || `section-${index}`
      const existingIdMatch = attrs.match(/id=["']([^"']+)["']/i)
      const id = existingIdMatch ? existingIdMatch[1] : slug
      headings.push({ id, text })
      if (existingIdMatch) return match
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`
    }
  )
  return { htmlWithIds, headings }
}

export function normalizeWpPost(node, index = 0, fallbackImages = []) {
  const categoriesNodes = node?.categories?.nodes || []
  const categoryNames = categoriesNodes
    .map(c => c?.name)
    .filter(Boolean)
  const categoriesLabel =
    categoryNames.length > 0 ? categoryNames.join(", ") : "Beauty, Products, Video"
  const primaryCategory = categoryNames[0] || "Video"
  const fallbackImg =
    fallbackImages.length > 0 ? fallbackImages[index % fallbackImages.length] : null

  return {
    id: node.databaseId || node.id || index + 1,
    slug: node.slug || `post-${index + 1}`,
    title: stripHtml(node.title || "Untitled Post"),
    excerpt: stripHtml(node.excerpt || ""),
    content: node.content || "",
    date: node.date,
    dateUpper: formatWpDate(node.date, true),
    dateFormatted: formatWpDate(node.date, false),
    author: node?.author?.node?.name || "Pocket Creatives",
    categories: categoriesLabel,
    categoryList: categoryNames,
    primaryCategory,
    image: node?.featuredImage?.node?.sourceUrl || fallbackImg,
    imageAlt: node?.featuredImage?.node?.altText || stripHtml(node.title || "Blog image"),
  }
}

const WP_POSTS_CACHE_KEY = "pocket_wp_posts_cache_v1"

export function getCachedWpPosts() {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(WP_POSTS_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export async function fetchLiveWpPosts() {
  const response = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({ query: POSTS_QUERY }),
  })
  if (!response.ok) {
    throw new Error(`WPGraphQL request failed: ${response.status}`)
  }
  const json = await response.json()
  const nodes = json?.data?.posts?.nodes || []
  if (typeof window !== "undefined" && nodes.length > 0) {
    try {
      window.localStorage.setItem(WP_POSTS_CACHE_KEY, JSON.stringify(nodes))
    } catch (e) {
      // ignore storage errors
    }
  }
  return nodes
}

