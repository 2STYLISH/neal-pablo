const path = require("path")

const WP_GRAPHQL_URL =
  process.env.GATSBY_WP_GRAPHQL_URL ||
  "https://dev-pocket-creatives-cms.pantheonsite.io/graphql"

const WP_DATA_QUERY = `
  query GetWordPressPostsAndPages {
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type WpAuthorNode {
      name: String
    }
    type WpAuthorEdge {
      node: WpAuthorNode
    }
    type WpCategoryNode {
      name: String
      slug: String
    }
    type WpCategoryConnection {
      nodes: [WpCategoryNode]
    }
    type WpMediaItemNode {
      sourceUrl: String
      altText: String
    }
    type WpMediaItemEdge {
      node: WpMediaItemNode
    }
    type WpPost implements Node {
      wpId: String
      databaseId: Int
      title: String
      slug: String
      date: Date @dateformat
      excerpt: String
      content: String
      author: WpAuthorEdge
      categories: WpCategoryConnection
      featuredImage: WpMediaItemEdge
    }
    type WpPage implements Node {
      wpId: String
      databaseId: Int
      title: String
      slug: String
      isFrontPage: Boolean
      content: String
      featuredImage: WpMediaItemEdge
    }
  `)
}

async function fetchWpData(reporter) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: WP_DATA_QUERY }),
    })
    if (!res.ok) {
      reporter.warn(`WPGraphQL responded with status ${res.status}`)
      return { posts: [], pages: [] }
    }
    const json = await res.json()
    return {
      posts: json?.data?.posts?.nodes || [],
      pages: json?.data?.pages?.nodes || [],
    }
  } catch (err) {
    reporter.warn(
      `Failed to fetch data from WPGraphQL (${WP_GRAPHQL_URL}): ${err.message}`
    )
    return { posts: [], pages: [] }
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions
  const { posts, pages } = await fetchWpData(reporter)

  reporter.info(
    `Fetched ${posts.length} post(s) and ${pages.length} page(s) from Headless WordPress (${WP_GRAPHQL_URL})`
  )

  posts.forEach(post => {
    createNode({
      ...post,
      wpId: post.id,
      id: createNodeId(`WpPost-${post.databaseId || post.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "WpPost",
        contentDigest: createContentDigest(post),
      },
    })
  })

  pages.forEach(page => {
    createNode({
      ...page,
      wpId: page.id,
      id: createNodeId(`WpPage-${page.databaseId || page.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "WpPage",
        contentDigest: createContentDigest(page),
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogInnerTemplate = path.resolve("./src/pages/blog-inner.js")

  const result = await graphql(`
    {
      allWpPost(sort: { date: DESC }) {
        nodes {
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
  `)

  if (result.errors) {
    reporter.warn("Error querying allWpPost in createPages", result.errors)
    return
  }

  const posts = result?.data?.allWpPost?.nodes || []

  posts.forEach(post => {
    if (!post.slug) return
    createPage({
      path: `/blogs/${post.slug}`,
      component: blogInnerTemplate,
      context: {
        slug: post.slug,
        post,
      },
    })
  })
}
