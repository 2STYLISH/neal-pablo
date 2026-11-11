import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"
import {
  DEFAULT_WORKS_CONTENT,
  parseWorksFromWpPage,
  findWorksPageNode,
  fetchLiveWpWorks,
  getCachedWpWorks,
} from "../utils/wpPagesContent"

// Gallery reel (Figma: Gallery Reel v2)
import reelHairo from "../images/works/reel-hairo.png"
import reelNursem from "../images/works/reel-nursem.png"
import reelSoapGlory from "../images/works/reel-soapglory.png"

// Videography grid (Figma: Vid Grid 1–13)
import vid01 from "../images/works/vid-01.png"
import vid02 from "../images/works/vid-02.png"
import vid03 from "../images/works/vid-03.png"
import vid04 from "../images/works/vid-04.png"
import vid05 from "../images/works/vid-05.png"
import vid06 from "../images/works/vid-06.png"
import vid07 from "../images/works/vid-07.png"
import vid08 from "../images/works/vid-08.png"
import vid09 from "../images/works/vid-09.png"
import vid10 from "../images/works/vid-10.png"
import vid11 from "../images/works/vid-11.png"
import vid12 from "../images/works/vid-12.png"

// Photography grid (Figma: Rectangle 126–136 + Hover gif photos)
import photo02 from "../images/works/photo-02.png"
import photo03 from "../images/works/photo-03.png"
import photo04 from "../images/works/photo-04.png"
import photo05 from "../images/works/photo-05.png"
import photo06 from "../images/works/photo-06.png"
import photo07 from "../images/works/photo-07.png"
import photo08 from "../images/works/photo-08.png"
import photo09 from "../images/works/photo-09.png"
import photo10 from "../images/works/photo-10.png"
import photo11 from "../images/works/photo-11.png"
import photo12 from "../images/works/photo-12.png"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const defaultReelVisuals = [
  { img: "/videos/soap-glory-comp.gif", poster: reelSoapGlory, w: "aspect-square" },
  { img: reelHairo, video: "/videos/hairo-advert.mp4", w: "aspect-[16/9]" },
  { img: reelNursem, w: "aspect-[2/3]" },
]

const defaultVideoPosters = [
  vid01,
  vid02,
  vid03,
  vid04,
  vid05,
  vid06,
  vid07,
  vid08,
  vid09,
  vid10,
  vid11,
  vid12,
]

const defaultPhotoSources = [
  "/videos/figma-gif-1.gif",
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
]

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-[0.9em] w-[0.9em] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
)

/* ---------------- Gallery Reel (auto-scrolling, drag, play/pause) ---------------- */
const GalleryReel = ({ playing, onOpen, reelItems }) => {
  const drag = useDragScroll()
  const reel = (reelItems || DEFAULT_WORKS_CONTENT.reel).map((item, idx) => ({
    ...defaultReelVisuals[idx],
    ...item,
    img: item.img || defaultReelVisuals[idx]?.img || reelSoapGlory,
    video: item.video || defaultReelVisuals[idx]?.video || "",
    w: defaultReelVisuals[idx]?.w || "aspect-square",
  }))
  const items = [...reel, ...reel, ...reel, ...reel]

  React.useEffect(() => {
    if (!playing) return
    const el = drag.ref.current
    if (!el) return
    let raf
    const step = () => {
      el.scrollLeft += 0.6
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [playing, drag.ref])

  return (
    <div
      {...drag}
      className="no-scrollbar flex gap-5 sm:gap-10 lg:gap-[80px] overflow-x-auto cursor-grab active:cursor-grabbing select-none"
    >
      {items.map((it, i) => (
        <button key={i} onClick={() => onOpen(it.video || it.img)} className="shrink-0 text-left">
          <div className={`h-[220px] sm:h-[340px] lg:h-[450px] ${it.w} overflow-hidden bg-black`}>
            {it.video ? (
              <video
                src={it.video}
                poster={it.img}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover pointer-events-none"
              />
            ) : (
              <img src={it.img} alt={it.name} draggable="false" className="h-full w-full object-cover pointer-events-none" />
            )}
          </div>
          <div className="mt-2 flex items-baseline justify-between gap-4 text-brand-slate tracking-[-0.05em]">
            <span className="text-[16px] sm:text-[20px] font-medium">{it.name}</span>
            <span className="text-[13px] sm:text-[16px] font-medium">{it.type}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

/* ---------------- Lightbox ---------------- */
const Lightbox = ({ src, onClose }) => {
  React.useEffect(() => {
    if (!src) return
    const h = e => e.key === "Escape" && onClose()
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [src, onClose])
  if (!src) return null
  const isVideo = typeof src === "string" && src.endsWith(".mp4")
  return (
    <div role="presentation" className="modal-overlay fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-6 text-white text-3xl leading-none" aria-label="Close">×</button>
      <div role="presentation" onClick={e => e.stopPropagation()}>
        {isVideo ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="modal-card max-h-[88vh] max-w-full object-contain bg-black"
          />
        ) : (
          <img src={src} alt="" className="modal-card max-h-[88vh] max-w-full object-contain" />
        )}
      </div>
    </div>
  )
}

const WorksPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [cat, setCat] = React.useState("Beauty")
  const [playing, setPlaying] = React.useState(true)
  const [lightbox, setLightbox] = React.useState(null)

  const buildTimePageNodes = data?.allWpPage?.nodes || []
  const buildTimeWorksNode = findWorksPageNode(buildTimePageNodes)
  const [worksContent, setWorksContent] = React.useState(() =>
    parseWorksFromWpPage(buildTimeWorksNode)
  )

  useIsomorphicLayoutEffect(() => {
    const cached = getCachedWpWorks()
    if (cached) {
      setWorksContent(cached)
    }
  }, [])

  React.useEffect(() => {
    let isMounted = true
    fetchLiveWpWorks()
      .then(liveContent => {
        if (isMounted && liveContent) {
          setWorksContent(liveContent)
        }
      })
      .catch(() => {
        // Keep cached or build-time fallback if offline
      })
    return () => {
      isMounted = false
    }
  }, [])

  const categories =
    worksContent.categorySection?.categories ||
    DEFAULT_WORKS_CONTENT.categorySection.categories

  const videos = (
    worksContent.videography?.items || DEFAULT_WORKS_CONTENT.videography.items
  ).map((item, idx) => [
    defaultVideoPosters[idx] || vid01,
    item.label,
    item.videoUrl || DEFAULT_WORKS_CONTENT.videography.items[idx]?.videoUrl,
  ])

  const photos = (
    worksContent.photography?.items || DEFAULT_WORKS_CONTENT.photography.items
  ).map((item, idx) => [
    defaultPhotoSources[idx] || photo02,
    item.label,
  ])

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="works" onContactClick={() => setIsOpen(true)}>
        <ContactModal />
        <Lightbox src={lightbox} onClose={() => setLightbox(null)} />

        {/* View By Category */}
        <section className="container-x pt-10 sm:pt-14 lg:pt-[52px] text-center">
          <h1 className="text-[28px] sm:text-[40px] leading-none font-extrabold tracking-[-0.05em] text-brand-blue">
            {worksContent.categorySection?.heading || "View By Category"}
          </h1>
          <div className="mx-auto mt-4 sm:mt-6 lg:mt-[30px] flex max-w-[360px] sm:max-w-none flex-wrap justify-center gap-x-2 sm:gap-x-0 gap-y-1">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`h-[34px] sm:h-[40px] px-[8px] sm:px-[10px] text-[16px] sm:text-[20px] font-medium tracking-[-0.05em] transition-colors ${
                  c === cat ? "text-brand-yellow" : "text-brand-slate hover:text-brand-blue"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Reel — full bleed */}
        <section className="mt-8 sm:mt-10 lg:mt-[42px]">
          <GalleryReel
            playing={playing}
            onOpen={setLightbox}
            reelItems={worksContent.reel}
          />
        </section>

        {/* Category title + play/pause */}
        <section className="container-x mt-6 sm:mt-8 lg:mt-[66px] flex items-center justify-between">
          <h2 className="text-[40px] sm:text-[64px] lg:text-[80px] font-extrabold uppercase tracking-[-0.05em] text-brand-blue leading-none">
            {cat}
          </h2>
          <button
            onClick={() => setPlaying(p => !p)}
            aria-label={playing ? "Pause gallery" : "Play gallery"}
            className="mr-0 lg:mr-[88px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-black"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 ml-0.5" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>
        </section>

        {/* Yellow Category block */}
        <section className="mt-8 sm:mt-14 lg:mt-[56px] bg-brand-yellow">
          <div className="container-x py-14 sm:py-20 lg:pt-[157px] lg:pb-[201px]">
            <div className="lg:px-[120px]">
              <h2 className="text-[52px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1.0] tracking-[-0.05em] text-white">
                {worksContent.categoryHighlight?.headingPrefix || "Category:"}
                <br />
                {cat}
              </h2>
              <div className="mt-8 sm:mt-12 lg:mt-[60px] grid gap-8 lg:grid-cols-[610px_1fr] lg:gap-[173px]">
                <p className="text-[16px] sm:text-[20px] font-medium leading-[2] tracking-[-0.05em] text-black">
                  {worksContent.categoryHighlight?.description}
                </p>
                <div className="text-[18px] sm:text-[20px] font-extrabold tracking-[-0.05em]">
                  <p className="text-black">
                    {worksContent.categoryHighlight?.goToLabel || "Go to..."}
                  </p>
                  <a href="#videography" className="mt-3 flex items-center gap-2 text-white hover:underline">
                    <Arrow /> {cat} Videography
                  </a>
                  <a href="#photography" className="mt-3 flex items-center gap-2 text-white hover:underline">
                    <Arrow /> {cat} Photography
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videography grid */}
        <section id="videography" className="container-x pt-14 sm:pt-20 lg:pt-[172px] scroll-mt-28">
          <div className="lg:px-[37px]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="text-[28px] sm:text-[40px] leading-none font-extrabold tracking-[-0.05em] text-brand-blue">
                {cat} Videography
              </h2>
              <p className="text-[13px] sm:text-[16px] font-medium tracking-[-0.05em] text-brand-slate">
                {worksContent.videography?.caption || "*Click on Video to play in large view"}
              </p>
            </div>
            <div className="mt-4 lg:mt-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[28px] gap-y-6 sm:gap-y-[32px]">
              {videos.map(([src, label, videoSrc], idx) => (
                <button key={idx} onClick={() => setLightbox(videoSrc)} className="group text-left">
                  <div className="relative aspect-[320/157] overflow-hidden bg-black">
                    <video
                      src={videoSrc}
                      poster={src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={e => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={e => {
                        e.currentTarget.pause()
                        e.currentTarget.currentTime = 0
                      }}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition bg-black/20">
                      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white drop-shadow" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                  <p className="mt-2.5 text-[16px] sm:text-[20px] leading-none font-medium tracking-[-0.05em] text-brand-slate">
                    {label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Photography */}
        <section id="photography" className="container-x pt-16 sm:pt-24 lg:pt-[147px] pb-20 sm:pb-28 lg:pb-[250px] scroll-mt-28">
          <div className="lg:px-[37px]">
            <h2 className="text-[52px] sm:text-[80px] lg:text-[120px] font-extrabold tracking-[-0.05em] text-brand-yellow leading-none">
              {worksContent.photography?.sectionTitle || "Photography ↓"}
            </h2>
            <div className="mt-10 sm:mt-16 lg:mt-[120px] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="text-[28px] sm:text-[40px] leading-none font-extrabold tracking-[-0.05em] text-brand-blue">
                {cat} Photography
              </h2>
              <p className="text-[13px] sm:text-[16px] font-medium tracking-[-0.05em] text-brand-slate">
                {worksContent.photography?.caption || "*Click on thumbnail for large view"}
              </p>
            </div>

            {/* 2-col mobile, 3 pairs per row on desktop (pairs spaced like Figma) */}
            <div className="mt-4 lg:mt-[32px] grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-[98px] gap-y-5 sm:gap-y-[32px]">
              {Array.from({ length: photos.length / 2 }).map((_, g) => (
                <div key={g} className="contents lg:grid lg:grid-cols-2 lg:gap-x-[20px]">
                  {photos.slice(g * 2, g * 2 + 2).map(([src, label], pIdx) => (
                    <button key={pIdx} onClick={() => setLightbox(src)} className="group text-left">
                      <div className="aspect-[185/192] overflow-hidden">
                        <img src={src} alt={label} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      </div>
                      <p className="mt-2.5 text-[16px] sm:text-[20px] leading-none font-medium tracking-[-0.05em] text-brand-slate">
                        {label}
                      </p>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export const query = graphql`
  query WorksPageWordPressQuery {
    allWpPage {
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

export default WorksPage

export const Head = () => (
  <>
    <title>Works | Pocket Creatives</title>
    <meta name="description" content="Explore Pocket Creatives video production and photography work by category." />
  </>
)
