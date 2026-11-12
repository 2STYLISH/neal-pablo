import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import SoundVideo from "../components/SoundVideo"
import {
  DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT,
  parseVideographyServicesFromWpPage,
  findVideographyServicesPageNode,
  fetchLiveWpVideographyServices,
  getCachedWpVideographyServices,
} from "../utils/wpPagesContent"

import heroVideoThumb from "../images/videography/hero-video-thumb.png"
import cameraIllustration from "../images/videography/camera-illustration.png"
import portfolioVideoThumb from "../images/videography/portfolio-video-thumb.png"
import howWeWorkImg from "../images/videography/how-we-work.png"
import technicallySpeakingImg from "../images/videography/technically-speaking.png"
import wholePackageImg from "../images/videography/whole-package.png"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const VideographyServicesPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isMuted, setIsMuted] = React.useState(true)
  const portfolioVideoRef = React.useRef(null)

  const buildTimePageNodes = data?.allWpPage?.nodes || []
  const buildTimeNode = findVideographyServicesPageNode(buildTimePageNodes)
  const [pageContent, setPageContent] = React.useState(() =>
    parseVideographyServicesFromWpPage(buildTimeNode)
  )

  useIsomorphicLayoutEffect(() => {
    const cached = getCachedWpVideographyServices()
    if (cached) {
      setPageContent(cached)
    }
  }, [])

  React.useEffect(() => {
    let isMounted = true
    fetchLiveWpVideographyServices()
      .then(liveContent => {
        if (isMounted && liveContent) {
          setPageContent(liveContent)
        }
      })
      .catch(() => {})
    return () => {
      isMounted = false
    }
  }, [])

  const portfolioCategories =
    pageContent.portfolio?.categories ||
    DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT.portfolio.categories
  const currentItem = portfolioCategories[activeTab] || portfolioCategories[0]

  React.useEffect(() => {
    const vid = portfolioVideoRef.current
    if (!vid) return
    vid.load()
    vid.muted = isMuted
    if (isPlaying) {
      vid.play().catch(() => {})
    }
  }, [activeTab])

  const togglePlayPause = () => {
    const vid = portfolioVideoRef.current
    if (!vid) return
    if (vid.paused) {
      vid.play().catch(() => {})
      setIsPlaying(true)
    } else {
      vid.pause()
      setIsPlaying(false)
    }
  }

  const togglePortfolioMute = () => {
    const vid = portfolioVideoRef.current
    if (!vid) return
    const nextMuted = !vid.muted
    vid.muted = nextMuted
    setIsMuted(nextMuted)
    if (vid.paused) {
      vid.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  const prevSlide = () => {
    setActiveTab(prev => (prev - 1 + portfolioCategories.length) % portfolioCategories.length)
  }

  const nextSlide = () => {
    setActiveTab(prev => (prev + 1) % portfolioCategories.length)
  }

  const hero = pageContent.hero || DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT.hero
  const helpSection = pageContent.helpSection || DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT.helpSection
  const details = pageContent.details || DEFAULT_VIDEOGRAPHY_SERVICES_CONTENT.details

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="services" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: VIDEO PRODUCTION SERVICES (#3599:2061, y:0, w:1920, h:1253, bg-[#FCBE17]) */}
        <section className="bg-brand-yellow -mt-[72px] pt-[120px] sm:pt-[140px] lg:pt-[164px] pb-16 sm:pb-24 lg:pb-0 lg:h-[1253px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            {/* Heading (#3599:2062, x:244, y:164) */}
            <div className="lg:ml-[244px]">
              <h1 className="text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-black">
                {hero.heading}
              </h1>
            </div>

            {/* Main Hero Container aligned at x:264 (w:1411) */}
            <div className="lg:ml-[264px] lg:w-[1411px]">
              {/* Subheading (#3599:2063, x:264, y:308) */}
              <p className="mt-3 lg:mt-[24px] text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[44px] tracking-[-0.05em] text-black">
                {hero.subheading}
              </p>

              {/* Hero Video (#3599:2073, x:264, y:368, w:1411, h:495) */}
              <div className="mt-6 lg:mt-[16px] w-full lg:w-[1411px] lg:h-[495px] overflow-hidden bg-black">
                <SoundVideo
                  src={hero.videoUrl || "/videos/showreel.mp4"}
                  poster={heroVideoThumb}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Caption (#3599:2072, x:264, y:880) */}
              <p className="mt-2 lg:mt-[17px] text-[14px] sm:text-[16px] font-medium leading-[32px] tracking-[-0.05em] text-black">
                {hero.videoCaption}
              </p>

              {/* Bottom 2-Column Row (#3599:2071 + #3599:2065, y:933) */}
              <div className="mt-6 lg:mt-[21px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[60px]">
                {/* Left Column (w:959) */}
                <div className="max-w-[959px]">
                  <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] lg:leading-[44px] tracking-[-0.05em] text-black">
                    {hero.introHeading}
                  </h2>
                  <p className="mt-3 lg:mt-[11px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-black">
                    {hero.introSubtext}
                  </p>
                </div>

                {/* Right Column (x:1353, w:317) */}
                <div className="lg:mt-[9px] w-full lg:w-[317px] flex flex-col items-start lg:items-end shrink-0">
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[21px] tracking-[-0.05em] text-black lg:text-right">
                    {hero.rightText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="mt-5 lg:mt-[16px] inline-flex w-[199px] h-[48px] items-center justify-center rounded-[16px] bg-brand-blue text-[20px] font-bold leading-[24px] tracking-[-0.05em] text-white hover:brightness-110 transition"
                  >
                    {hero.buttonText || "Have questions?"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT EXACTLY CAN POCKET CREATIVES HELP ME WITH? (y:1333 to y:1684) */}
        <section className="py-16 sm:py-24 lg:pt-[80px] lg:pb-[154px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[267px] lg:w-[1348px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[106px]">
              {/* Left Text Column (x:267, y:1405, w:911) */}
              <div className="lg:pt-[72px] w-full lg:w-[911px]">
                <div className="relative inline-block w-full">
                  <h2 className="relative z-10 text-[28px] sm:text-[34px] lg:text-[40px] font-medium leading-[44px] tracking-[-0.05em] text-brand-slate">
                    What exactly can{" "}
                    <span className="font-bold text-brand-yellow">Pocket</span>{" "}
                    <span className="font-bold text-brand-blue">Creatives</span> help me with?
                  </h2>
                  {/* Highlight underline bar (#3599:1979, w:911, h:20, bg-[#179CBD]/10) */}
                  <div className="hidden lg:block absolute left-0 bottom-[-5px] w-[911px] h-[20px] bg-brand-blue/10 pointer-events-none" />
                </div>

                <div className="mt-8 lg:mt-[59px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-brand-slate text-justify space-y-6">
                  <p>{helpSection.para1}</p>
                  <p>{helpSection.para2}</p>
                </div>
              </div>

              {/* Right Camera Illustration (#3599:1992, x:1284, y:1333, w:331, h:351) */}
              <div className="w-[240px] sm:w-[280px] lg:w-[331px] shrink-0">
                <img
                  src={cameraIllustration}
                  alt="Cinema camera illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SNAPSHOT OF OUR VIDEO PRODUCTION PORTFOLIO (#3599:1993, y:1838, w:1920, h:1537, bg-[#179CBD]) */}
        <section className="bg-brand-blue py-16 sm:py-24 lg:py-0 lg:pt-[112px] lg:h-[1537px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[267px] lg:w-[1409px]">
              {/* Section Heading (#3599:1996, x:267, y:1950, fontSize:70px) */}
              <h2 className="text-[36px] sm:text-[52px] lg:text-[70px] font-bold leading-[1] tracking-[-0.05em] text-white">
                {pageContent.portfolio?.heading || "A Snapshot of our Video Production Portfolio"}
              </h2>

              {/* Category Filter Tabs (y:2050) */}
              <div className="mt-6 lg:mt-[30px] flex flex-wrap items-center justify-start lg:justify-end gap-2 sm:gap-4 lg:gap-[28px] lg:pr-[34px]">
                {portfolioCategories.map((item, idx) => {
                  const isActive = idx === activeTab
                  return (
                    <button
                      key={item.tab}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`h-[40px] lg:h-[44px] px-4 lg:px-[18px] rounded-[20px] text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.05em] transition ${
                        isActive
                          ? "bg-brand-yellow text-black"
                          : "bg-transparent text-white hover:bg-white/10"
                      }`}
                    >
                      {item.tab}
                    </button>
                  )
                })}
              </div>

              {/* Video Player Frame (#3599:2005, x:267, y:2134, w:1409, h:890) */}
              <div className="mt-6 lg:mt-[40px] w-full lg:w-[1409px] lg:h-[890px] border-[4px] border-white px-3 sm:px-6 lg:px-[24px] pt-3 sm:pt-5 lg:pt-[20px] pb-4 lg:pb-0 flex flex-col justify-between">
                {/* Video Viewport (#3599:2006, w:1353, h:761) */}
                <div
                  className="relative w-full lg:w-[1353px] lg:h-[761px] overflow-hidden bg-black cursor-pointer"
                  onClick={togglePortfolioMute}
                  title={isMuted ? "Click to unmute" : "Click to mute"}
                >
                  <video
                    ref={portfolioVideoRef}
                    src={currentItem.video}
                    poster={portfolioVideoThumb}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Transport Controls Bar (h:101) */}
                <div className="h-[72px] lg:h-[101px] flex items-center justify-between px-2 lg:px-[16px]">
                  <div className="w-[34px] hidden sm:block" />

                  {/* Prev / Play-Pause / Next */}
                  <div className="flex items-center gap-6 sm:gap-[32px]">
                    {/* Prev Button */}
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous video"
                      className="text-white hover:text-brand-yellow transition"
                    >
                      <svg viewBox="0 0 30 30" className="w-[26px] h-[26px] lg:w-[30px] lg:h-[30px]" fill="currentColor">
                        <path d="M4 5h4v20H4V5zm7 10L26 5v20L11 15z" />
                      </svg>
                    </button>

                    {/* Pause / Play Circle Button (62x62) */}
                    <button
                      type="button"
                      onClick={togglePlayPause}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-[52px] h-[52px] lg:w-[62px] lg:h-[62px] rounded-full bg-white flex items-center justify-center text-brand-blue hover:scale-105 transition"
                    >
                      {!isPlaying ? (
                        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px]" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <div className="flex items-center gap-[5px]">
                          <span className="w-[7px] h-[28px] bg-brand-blue block" />
                          <span className="w-[7px] h-[28px] bg-brand-blue block" />
                        </div>
                      )}
                    </button>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next video"
                      className="text-white hover:text-brand-yellow transition"
                    >
                      <svg viewBox="0 0 30 30" className="w-[26px] h-[26px] lg:w-[30px] lg:h-[30px]" fill="currentColor">
                        <path d="M22 5h4v20h-4V5zM4 5l15 10L4 25V5z" />
                      </svg>
                    </button>
                  </div>

                  {/* Volume Icon */}
                  <button
                    type="button"
                    onClick={togglePortfolioMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="text-white hover:text-brand-yellow transition"
                  >
                    {isMuted ? (
                      <svg viewBox="0 0 24 24" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[33px]" fill="currentColor">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 34 33" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[33px]" fill="currentColor">
                        <path d="M3 12v9h6l8 8V4L9 12H3zm18.5 4.5c0-2.5-1.5-4.6-3.7-5.6v11.1c2.2-.9 3.7-3 3.7-5.5zM17.8 3.2v3.1c4.3 1.3 7.5 5.3 7.5 10.2s-3.2 8.9-7.5 10.2v3.1c6-1.4 10.5-6.8 10.5-13.3S23.8 4.6 17.8 3.2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Client Info Row (y:3024, h:226) */}
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* White Client Box (#3599:2010, w:430, h:226) */}
                <div className="w-full lg:w-[430px] h-[120px] sm:h-[160px] lg:h-[226px] bg-white flex items-center justify-center px-6 shrink-0">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em] text-brand-slate text-center">
                    {currentItem.client}
                  </h3>
                </div>

                {/* Right Description Box with L-corner Bottom/Right Border (#3599:2009 + #3599:2011 + #3599:2014) */}
                <div className="relative flex-1 lg:h-[226px] pt-6 sm:pt-8 lg:pt-[52px] pb-8 lg:pb-0 lg:pl-[63px] lg:pr-[30px] border-b-[4px] border-white">
                  {/* Right vertical tick (#3599:2014, h:58 at bottom-right corner) */}
                  <div className="hidden lg:block absolute right-0 bottom-0 w-[4px] h-[58px] bg-white" />

                  <h4 className="text-[18px] sm:text-[20px] font-bold leading-[24px] tracking-[-0.05em] text-white">
                    {currentItem.title}
                  </h4>
                  <p className="mt-4 lg:mt-[24px] max-w-[886px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-white text-justify">
                    {currentItem.description}{" "}
                    <a
                      href="#case-study"
                      onClick={e => {
                        e.preventDefault()
                        setIsOpen(true)
                      }}
                      className="underline hover:text-brand-yellow transition"
                    >
                      Read the full case study here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LAST SECTION: HOW WE WORK / TECHNICALLY SPEAKING / THE WHOLE PACKAGE (#4117:3290, y:3375 to y:5151) */}
        <section className="py-16 sm:py-24 lg:pt-[207px] lg:pb-[231px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[259px] lg:w-[1404px] space-y-16 sm:space-y-24 lg:space-y-[40px]">
              {/* Row 1: How we work (#4117:3291) */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[61px]">
                <div className="w-full lg:w-[650px] shrink-0">
                  <img
                    src={howWeWorkImg}
                    alt="Videographer filming on set"
                    className="w-full lg:w-[650px] h-auto lg:h-[426px] object-cover"
                  />
                </div>
                <div className="w-full lg:w-[693px] lg:pt-[48px] text-brand-slate">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    {details.howWeWorkHeading}
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>{details.howWeWorkPara1}</p>
                    <p>{details.howWeWorkPara2}</p>
                    <p>{details.howWeWorkPara3}</p>
                  </div>
                </div>
              </div>

              {/* Row 2: Technically speaking (#4117:3295) */}
              <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 lg:gap-[78px]">
                <div className="w-full lg:w-[453px] lg:pt-[56px] text-brand-slate shrink-0">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    {details.techHeading}
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>
                      Our cameras of choice are the Netflix-approved{" "}
                      <span className="font-bold text-brand-blue">Panasonic S1H</span> for glorious 6k resolution and
                      low light capability. And depending on the nature of the project, we shoot with{" "}
                      <span className="font-bold text-brand-blue">RED</span>,{" "}
                      <span className="font-bold text-brand-blue">Blackmagic</span>,{" "}
                      <span className="font-bold text-brand-blue">Canon C Series</span> cameras and{" "}
                      <span className="font-bold text-brand-blue">GoPros</span> too.
                    </p>
                    <p>{details.techPara2}</p>
                  </div>
                </div>
                <div className="w-full lg:w-[869px] shrink-0">
                  <img
                    src={technicallySpeakingImg}
                    alt="Cinema camera rig on set"
                    className="w-full lg:w-[869px] h-auto lg:h-[426px] object-cover"
                  />
                </div>
              </div>

              {/* Row 3: The whole package (#4117:3299) */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[64px]">
                <div className="w-full lg:w-[706px] shrink-0">
                  <img
                    src={wholePackageImg}
                    alt="Full video production crew on location"
                    className="w-full lg:w-[706px] h-auto lg:h-[433px] object-cover"
                  />
                </div>
                <div className="w-full lg:w-[629px] lg:pt-[51px] text-brand-slate">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    {details.wholePackageHeading}
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>{details.wholePackagePara1}</p>
                    <p>{details.wholePackagePara2}</p>
                    <p>{details.wholePackagePara3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export const query = graphql`
  query VideographyServicesPageWordPressQuery {
    allWpPage {
      nodes {
        id
        databaseId
        title
        slug
        isFrontPage
        content
      }
    }
  }
`

export default VideographyServicesPage

export const Head = () => (
  <>
    <title>Video Production Services | Pocket Creatives</title>
    <meta
      name="description"
      content="Professional video production and videography services in London by Pocket Creatives."
    />
  </>
)
