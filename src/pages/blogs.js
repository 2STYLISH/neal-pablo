import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"
import { fetchLiveWpPosts, getCachedWpPosts, normalizeWpPost } from "../utils/wpClient"

import blog1 from "../images/blogs/blog-1.png"
import blog2 from "../images/blogs/blog-2.png"
import blog3 from "../images/blogs/blog-3.png"
import blog4 from "../images/blogs/blog-4.png"
import blog5 from "../images/blogs/blog-5.png"
import blog6 from "../images/blogs/blog-6.png"
import blog7 from "../images/blogs/blog-7.png"
import blog8 from "../images/blogs/blog-8.png"
import blog9 from "../images/blogs/blog-9.png"
import blog10 from "../images/blogs/blog-10.png"
import blog11 from "../images/blogs/blog-11.png"
import blog12 from "../images/blogs/blog-12.png"

const fallbackImages = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  blog11,
  blog12,
]

const defaultFeaturedBlogs = [
  {
    slug: "what-is-an-explainer-video",
    title: "What is an Explainer Video? Benefits and Uses Explained",
    categories: "Beauty, Products, Video",
    image: blog1,
    titleSize: "text-[22px] sm:text-[28px] lg:text-[35px] lg:leading-[43px]",
  },
  {
    slug: "beauty-product-photography-for-pony-revolution",
    title: "Beauty Product Photography for Pony Revolution",
    categories: "Beauty, Photography, Products, Video",
    image: blog2,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "meeting-gouri-kubair-at-holy-lama",
    title: "Meeting Gouri Kubair at Holy Lama",
    categories: "Beauty",
    image: blog3,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "shooting-stop-motion-video",
    title: "Shooting Stop Motion Video",
    categories: "Beauty, Video",
    image: blog4,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "christmas-photography-2020",
    title: "Christmas Photography 2020",
    categories: "Photography, Beauty, Jewellery, Products",
    image: blog5,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "6-beauty-photography-tips",
    title: "6 Beauty Photography Tips",
    categories: "Beauty",
    image: blog6,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "model-behaviour",
    title: "Model Behaviour",
    categories: "Beauty, People, Photography, Portraits",
    image: blog7,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "created-at-home",
    title: "Created at home",
    categories: "Photography, Beauty, Food, Food & Drink, Products",
    image: blog8,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "christmas-photography-content",
    title: "Christmas Photography Content",
    categories: "Photography, Beauty, Food, Food & Drink, Watches",
    image: blog9,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "fantastic-flat-lay",
    title: "Fantastic Flat Lay",
    categories: "Photography, Beauty, Food, Food & Drink",
    image: blog10,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "getting-our-nails-into-beauty",
    title: "Getting our nails into beauty",
    categories: "Beauty, Video",
    image: blog11,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
  {
    slug: "scrubs-up-well",
    title: "Scrubs Up Well",
    categories: "Crowdfunding, Beauty, Video",
    image: blog12,
    titleSize: "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
  },
]

const filterCategories = [
  "BEAUTY",
  "COMPANY",
  "CROWFUNDING",
  "EVENTS",
  "FASHION",
  "FOOD",
  "FOOD & DRINK",
  "JEWELLERY",
  "PEOPLE",
  "PHOTOGRAPHY",
  "PORTAITS",
  "PRODUCTS",
  "VIDEO",
]

const SmallRightArrow = () => (
  <svg viewBox="0 0 13 11" className="w-[13px] h-[11px] shrink-0" fill="currentColor">
    <path d="M7.5 0.5L6.4 1.6L9.6 4.8H0V6.2H9.6L6.4 9.4L7.5 10.5L12.5 5.5L7.5 0.5Z" />
  </svg>
)

const BlogsPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeCategory, setActiveCategory] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const drag = useDragScroll()

  const buildTimeNodes = data?.allWpPost?.nodes || []
  const [wpNodes, setWpNodes] = React.useState(
    () => getCachedWpPosts() || buildTimeNodes
  )

  React.useLayoutEffect(() => {
    const cached = getCachedWpPosts()
    if (cached && cached.length > 0) {
      setWpNodes(cached)
    }
  }, [])

  React.useEffect(() => {
    let isMounted = true
    fetchLiveWpPosts()
      .then(liveNodes => {
        if (isMounted && Array.isArray(liveNodes) && liveNodes.length > 0) {
          setWpNodes(liveNodes)
        }
      })
      .catch(() => {})
    return () => {
      isMounted = false
    }
  }, [])

  const wpPosts = React.useMemo(
    () => wpNodes.map((node, idx) => normalizeWpPost(node, idx, fallbackImages)),
    [wpNodes]
  )

  const featuredBlogs = React.useMemo(() => {
    const wpFeatured = wpPosts.map((post, idx) => ({
      slug: post.slug,
      title: post.title,
      categories: post.categories,
      image: post.image,
      titleSize:
        idx === 0 && post.title.length > 42
          ? "text-[22px] sm:text-[28px] lg:text-[35px] lg:leading-[43px]"
          : "text-[24px] sm:text-[32px] lg:text-[40px] lg:leading-[49px]",
    }))
    return [...wpFeatured, ...defaultFeaturedBlogs]
  }, [wpPosts])

  const filteredPosts = React.useMemo(() => {
    if (!activeCategory) return wpPosts
    const target = activeCategory.toLowerCase()
    const matches = wpPosts.filter(p =>
      p.categories.toLowerCase().includes(target)
    )
    return matches.length > 0 ? matches : wpPosts
  }, [wpPosts, activeCategory])

  const pageSize = 9
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize))
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  const scrollFeaturedNext = () => {
    if (!drag.ref.current) return
    drag.ref.current.scrollBy({ left: 1160, behavior: "smooth" })
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="blogs" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. TOP FEATURED BLOGS CAROUSEL (#2825:4082, y:84 to y:1142) */}
        <section className="pt-8 sm:pt-12 lg:pt-[52px]">
          <div className="mx-auto max-w-[1920px] overflow-hidden">
            <div
              role="presentation"
              {...drag}
              className="no-scrollbar flex gap-6 sm:gap-10 lg:gap-[60px] overflow-x-auto px-5 sm:px-9 lg:pl-[414px] lg:pr-[240px] cursor-grab active:cursor-grabbing select-none"
            >
              {featuredBlogs.map((item, idx) => (
                <div
                  key={`${item.slug}-${idx}`}
                  className="relative w-[320px] sm:w-[680px] lg:w-[1100px] h-[420px] sm:h-[580px] lg:h-[822px] shrink-0 overflow-hidden bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Bottom Yellow Linear Gradient Overlay (#I2825:4082;2825:2500) */}
                  <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-brand-yellow via-brand-yellow/75 to-transparent pointer-events-none" />

                  {/* Card Text Overlay (x:+80, y:+637) */}
                  <div className="absolute left-5 sm:left-10 lg:left-[80px] right-5 bottom-8 sm:bottom-12 lg:bottom-[59px]">
                    <div className="inline-block bg-brand-blue px-3 py-1.5 lg:px-[11px] lg:py-[7px]">
                      <h2
                        className={`font-bold tracking-[-0.05em] text-white ${item.titleSize}`}
                      >
                        {item.title}
                      </h2>
                    </div>

                    <p className="mt-2 sm:mt-3 lg:mt-[12px] text-[15px] sm:text-[18px] lg:text-[20px] font-bold leading-[25px] tracking-[-0.05em] text-black">
                      {item.categories}
                    </p>

                    <Link
                      to={`/blog-inner?slug=${encodeURIComponent(item.slug)}`}
                      className="mt-2 lg:mt-[6px] inline-flex items-center gap-[6px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-black hover:underline"
                    >
                      <span>Read More</span>
                      <SmallRightArrow />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Circle Button (#I2825:4082;2825:2633, x:968, y:1019, w:50, h:50) */}
            <div className="mt-6 lg:mt-[49px] flex justify-center">
              <button
                type="button"
                onClick={scrollFeaturedNext}
                aria-label="Next featured blog"
                className="w-[50px] h-[50px] rounded-full bg-brand-blue text-white flex items-center justify-center hover:brightness-110 transition"
              >
                <SmallRightArrow />
              </button>
            </div>
          </div>
        </section>

        {/* 2. ALL BLOGS HEADING & CATEGORY FILTER BAR (#2723:4653, x:248, y:1278, w:1428) */}
        <section className="pt-16 sm:pt-24 lg:pt-[209px] pb-16 sm:pb-24 lg:pb-[237px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[248px] lg:w-[1428px]">
              <h1 className="text-center text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-brand-blue">
                Our Blogs
              </h1>

              {/* Categories Row (#2723:4655, y:1452, mt:54px) */}
              <div className="mt-8 lg:mt-[54px] flex flex-wrap items-center justify-center lg:justify-between gap-x-4 gap-y-2">
                {filterCategories.map(cat => {
                  const isActive = cat === activeCategory
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setActiveCategory(prev => (prev === cat ? null : cat))
                        setPage(1)
                      }}
                      className={`text-[15px] sm:text-[18px] lg:text-[20px] leading-[20px] tracking-[-0.05em] transition ${
                        isActive
                          ? "font-bold text-brand-yellow"
                          : "font-medium text-brand-slate hover:text-brand-blue"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3x3 Blog Cards Grid (#2848:1785, x:244, y:1528, w:1423, h:1864) */}
            <div className="mt-10 sm:mt-14 lg:mt-[56px] lg:ml-[244px] lg:w-[1423px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-[35px] lg:gap-y-[35px]">
              {paginatedPosts.map(card => (
                <article
                  key={card.id}
                  className="w-full lg:w-[451px] lg:h-[598px] border-[3px] border-brand-slate p-[12px] sm:p-[13px] flex flex-col justify-between"
                >
                  <div>
                    <Link
                      to={`/blog-inner?slug=${encodeURIComponent(card.slug)}`}
                      className="block w-full lg:w-[419px] h-[240px] sm:h-[280px] lg:h-[314px] overflow-hidden bg-gray-200"
                    >
                      <img
                        src={card.image}
                        alt={card.imageAlt || card.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </Link>

                    <div className="mt-[21px] px-[14px]">
                      <h3 className="text-[18px] sm:text-[20px] font-bold leading-[25px] tracking-[-0.05em] text-brand-slate line-clamp-2">
                        <Link
                          to={`/blog-inner?slug=${encodeURIComponent(card.slug)}`}
                          className="hover:text-brand-blue transition"
                        >
                          {card.title}
                        </Link>
                      </h3>

                      <div className="mt-[5px] inline-flex h-[28px] items-center bg-brand-yellow px-[6px]">
                        <span className="text-[14px] font-medium leading-[17px] tracking-[-0.05em] text-black">
                          {card.categories}
                        </span>
                      </div>

                      <div className="mt-[6px] flex items-center gap-[8px]">
                        <span className="text-[14px] font-extrabold leading-[17px] tracking-[-0.05em] text-brand-blue uppercase">
                          {card.author === "pocketadmin"
                            ? "POCKET CREATIVES"
                            : card.author}
                        </span>
                        <span className="text-[14px] font-medium leading-[17px] tracking-[-0.05em] text-brand-slate">
                          {card.dateUpper}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0 px-[14px] pb-[16px]">
                    <Link
                      to={`/blog-inner?slug=${encodeURIComponent(card.slug)}`}
                      className="inline-flex items-center gap-[6px] text-[18px] sm:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-brand-slate hover:text-brand-blue transition"
                    >
                      <span>Read More</span>
                      <SmallRightArrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (#2735:5165, y:3445, mt:53px) */}
            <div className="mt-10 lg:mt-[53px] flex items-center justify-center gap-[28px] text-[18px] sm:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-black">
              <button
                type="button"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="inline-flex items-center gap-[8px] hover:text-brand-blue transition"
              >
                <svg viewBox="0 0 10 18" className="w-[10px] h-[18px]" fill="currentColor">
                  <path d="M9 1L1 9l8 8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <span>Prev</span>
              </button>

              <span>
                {page} of {totalPages}
              </span>

              <button
                type="button"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                className="inline-flex items-center gap-[8px] hover:text-brand-blue transition"
              >
                <span>Next</span>
                <svg viewBox="0 0 10 18" className="w-[10px] h-[18px]" fill="currentColor">
                  <path d="M1 1l8 8-8 8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export const query = graphql`
  query BlogsLandingPageQuery {
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
`

export default BlogsPage

export const Head = () => (
  <>
    <title>Our Blogs | Pocket Creatives</title>
    <meta
      name="description"
      content="Explore video production, photography, beauty, food, and creative marketing insights on the Pocket Creatives blog."
    />
  </>
)
