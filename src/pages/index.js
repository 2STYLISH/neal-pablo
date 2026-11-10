import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"
import SoundVideo from "../components/SoundVideo"
import {
  DEFAULT_HOMEPAGE_CONTENT,
  fetchLiveWpHomepage,
  findHomePageNode,
  parseHomepageFromWpPage,
} from "../utils/wpHomepage"

import logo from "../images/logo.png"
import heroImg from "../images/hero.png"
import heroPeople from "../images/hero-people.png"
import downArrow from "../images/down-arrow.svg"

// Partner logos — Page 1
import logoStudio from "../images/logo-studio.png"
import logoNursem from "../images/logo-nursem.png"
import logoColmans from "../images/logo-colmans.png"
import logoRightmove from "../images/logo-rightmove.png"
import logoQvc from "../images/logo-qvc.png"
import logoMasabi from "../images/logo-masabi.png"
import logoVidaGlow from "../images/logo-vidaglow.png"
import logoPrestigeFlowers from "../images/logo-prestigeflowers.png"
import logoSaputo from "../images/logo-saputo.png"

// Partner logos — Page 2
import logoArgos from "../images/logo-argos.png"
import logoSoapGlory from "../images/logo-soapglory.png"
import logoMacmillan from "../images/logo-macmillan.png"
import logoKopparberg from "../images/logo-kopparberg.png"
import logoLadbrokes from "../images/logo-ladbrokes.png"
import logoCoop from "../images/logo-coop.png"
import logoBusinessInsider from "../images/logo-businessinsider.png"
import logoGymGroup from "../images/logo-gymgroup.png"
import logoTelegraph from "../images/logo-telegraph.png"

// Video Thumbnails
import vidBeauty from "../images/vid-beauty.png"
import vidFood from "../images/vid-food.png"
import vidProduct from "../images/vid-product.png"
import vidEvents from "../images/vid-events.png"
import vidCrowdfunding from "../images/vid-crowdfunding.png"
import vidTv from "../images/vid-tv.png"

// Photography
import photoBeautyLarge from "../images/photo-beauty-large.png"
import photoBeauty from "../images/photo-beauty.png"
import photoPeople from "../images/photo-people.png"

// Team
import steven from "../images/steven.png"
import haider from "../images/haider.png"
import lauren from "../images/lauren.png"

// BTS & Reviews
import bts from "../images/bts.png"

/* ================================================================
   SHARED COMPONENTS
   ================================================================ */

const LetsTalk = ({ className = "" }) => {
  const { setIsOpen } = React.useContext(ModalContext)
  return (
    <button
      onClick={() => setIsOpen(true)}
      className={`blob-btn blob-btn-lg bg-brand-blue text-white/90 ${className}`}
    >
      Let's<br />Talk
    </button>
  )
}

const SectionLabel = ({ icon, children }) => (
  <div className="flex items-center gap-3 sm:gap-4">
    {icon}
    <span className="text-[20px] sm:text-[28px] lg:text-[40px] font-medium text-brand-slate tracking-[-0.05em]">
      {children}
    </span>
  </div>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] lg:h-[60px] lg:w-[60px] text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </svg>
)

const ApertureIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] lg:h-[60px] lg:w-[60px] text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.3 8l5.7 9.9M9.7 8h11.5M7.4 12l5.7-9.9M9.7 16L4 6.1M14.3 16H2.8M16.6 12l-5.7 9.9" />
  </svg>
)

const CheckMark = () => (
  <svg viewBox="0 0 24 24" className="inline-block h-[0.55em] w-[0.55em] ml-2 sm:ml-3 align-middle" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M3 13l6 6L21 5" />
  </svg>
)

const ArrowBtn = ({ dir, onClick }) => (
  <button
    onClick={onClick}
    aria-label={dir === "left" ? "Previous" : "Next"}
    className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-brand-yellow text-black hover:brightness-105 transition shrink-0"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
      {dir === "left" ? <path d="M19 12H5m6-6l-6 6 6 6" /> : <path d="M5 12h14m-6-6l6 6-6 6" />}
    </svg>
  </button>
)

/* ================================================================
   1. HERO
   ================================================================ */

const Hero = ({ content }) => (
  <section className="container-x pt-6 sm:pt-8 lg:pt-12">
    <div className="flex items-end justify-between">
      <img src={logo} alt="Pocket Creatives" className="h-[44px] sm:h-[70px] lg:h-[102px] w-auto object-contain" />
      <div className="hidden sm:flex gap-4">
        <img src={heroPeople} alt="Photographer and videographer" className="h-[80px] sm:h-[110px] lg:h-[149px] object-cover rounded" />
      </div>
    </div>
    <hr className="mt-3 border-brand-slate/40" />

    <h1
      className="mt-4 text-[18px] sm:text-[28px] lg:text-[48px] font-medium leading-[1.5em] lg:leading-[2em] tracking-[-0.05em] text-black"
      dangerouslySetInnerHTML={{ __html: content.headlineHtml }}
    />

    <p className="mt-6 text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em]">
      {content.videoCaption}
    </p>
    <div className="mt-2 relative overflow-hidden rounded-[12px] bg-black group cursor-pointer shadow-lg">
      <SoundVideo
        key={content.videoUrl}
        src={content.videoUrl || "/videos/showreel.mp4"}
        poster={content.posterUrl || heroImg}
        className="w-full aspect-video object-cover transition duration-300 group-hover:scale-[1.01]"
      />
    </div>
  </section>
)

/* ================================================================
   2. PARTNERS
   ================================================================ */

const partnersPage1 = [
  [logoStudio, "Studio"],
  [logoNursem, "Nursem"],
  [logoColmans, "Colman's"],
  [logoRightmove, "Rightmove"],
  [logoQvc, "QVC"],
  [logoMasabi, "Masabi"],
  [logoVidaGlow, "Vida Glow"],
  [logoPrestigeFlowers, "Prestige Flowers"],
  [logoSaputo, "Saputo"],
]

const partnersPage2 = [
  [logoArgos, "Argos"],
  [logoSoapGlory, "Soap & Glory"],
  [logoMacmillan, "Macmillan Cancer Support"],
  [logoKopparberg, "Kopparberg"],
  [logoLadbrokes, "Ladbrokes"],
  [logoCoop, "Co-op"],
  [logoBusinessInsider, "Business Insider"],
  [logoGymGroup, "The Gym Group"],
  [logoTelegraph, "The Telegraph"],
]

const partnerPages = [partnersPage1, partnersPage2]

const Partners = ({ content }) => {
  const [page, setPage] = React.useState(0)

  return (
    <section className="container-x py-14 sm:py-20 lg:py-24 grid gap-8 lg:grid-cols-[1fr_640px] lg:items-start">
      <div>
        <h2
          className="text-[22px] sm:text-[30px] lg:text-[40px] font-medium leading-[1.35em] tracking-[-0.05em] text-brand-slate"
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />
        <p className="mt-3 sm:mt-4 text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold tracking-[-0.05em] text-brand-blue">
          {content.subheading}
        </p>
        <p className="mt-4 sm:mt-6 text-[14px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.7em] tracking-[-0.05em] text-brand-slate max-w-[632px]">
          {content.description}
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {partnerPages[page].map(([src, alt]) => (
            <div
              key={alt}
              className="flex h-[68px] sm:h-[90px] lg:h-[100px] items-center justify-center rounded-[12px] sm:rounded-[16px] bg-white p-2 sm:p-3 transition hover:shadow-md"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.12)" }}
            >
              <img src={src} alt={alt} className="max-h-[50px] sm:max-h-[70px] max-w-[88%] object-contain" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <ArrowBtn dir="left" onClick={() => setPage(p => (p - 1 + partnerPages.length) % partnerPages.length)} />
          <div className="flex gap-2">
            {partnerPages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-3 w-3 rounded-full transition-colors ${i === page ? "bg-brand-yellow" : "bg-gray-300"}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <ArrowBtn dir="right" onClick={() => setPage(p => (p + 1) % partnerPages.length)} />
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   3. YELLOW VIDEO INTRO
   ================================================================ */

const VideoIntro = ({ content }) => (
  <section id="works" className="bg-brand-yellow text-white">
    <div className="container-x py-16 sm:py-24 lg:py-36 relative">
      <h2 className="heading-xl max-w-[1090px]">
        {content.heading}
      </h2>
      <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[610px_1fr] items-end">
        <p className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.7em] tracking-[-0.05em] text-black">
          {content.description}
        </p>
        <div className="flex justify-start lg:justify-end lg:pr-12">
          <img
            src={downArrow}
            alt="Scroll down"
            className="w-[80px] sm:w-[120px] lg:w-[180px] h-auto animate-bounce opacity-95"
          />
        </div>
      </div>
    </div>
  </section>
)

/* ================================================================
   4. VIDEO PRODUCTION  —  Draggable / Carousel
   ================================================================ */

const videoCategories = [
  { label: "Beauty", img: vidBeauty, video: "/videos/beauty-showreel.mp4" },
  { label: "Food&Drink", img: vidFood, video: "/videos/food-showreel.mp4" },
  { label: "Product", img: vidProduct, video: "/videos/product-masabi.mp4" },
  { label: "Events", img: vidEvents, video: "/videos/events-showreel.mp4" },
  { label: "Crowdfunding", img: vidCrowdfunding, video: "/videos/crowdfunding-hygie.mp4" },
  { label: "Tv Ads", img: vidTv, video: "/videos/tv-california-walnuts.mp4" },
  { label: "HR", img: vidBeauty, video: "/videos/client-film.mp4" },
  { label: "Education", img: vidFood, video: "/videos/water-texture-bts.mp4" },
  { label: "Explainers", img: vidProduct, video: "/videos/james-read-tan.mp4" },
  { label: "Social First", img: vidEvents, video: "/videos/hairo-advert.mp4" },
]

const VideoProduction = ({ content }) => {
  const dragScroll = useDragScroll()
  const scroll = dir => {
    if (!dragScroll.ref.current) return
    const card = dragScroll.ref.current.querySelector(".video-card")
    const step = card ? card.offsetWidth + 24 : 450
    dragScroll.ref.current.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section id="video-production" className="py-14 sm:py-20 lg:py-28">
      <div className="container-x flex items-center justify-between">
        <SectionLabel icon={<PlayIcon />}>{content.sectionLabel}</SectionLabel>
        <LetsTalk />
      </div>

      {/* Draggable carousel container */}
      <div
        role="presentation"
        ref={dragScroll.ref}
        onMouseDown={dragScroll.onMouseDown}
        onMouseLeave={dragScroll.onMouseLeave}
        onMouseUp={dragScroll.onMouseUp}
        onMouseMove={dragScroll.onMouseMove}
        className="no-scrollbar mt-8 sm:mt-10 flex gap-4 sm:gap-6 lg:gap-[60px] overflow-x-auto snap-x snap-mandatory pl-[20px] sm:pl-[37px] lg:pl-[240px] cursor-grab active:cursor-grabbing select-none"
      >
        {videoCategories.map(v => (
          <div key={v.label} className="video-card w-[290px] sm:w-[460px] lg:w-[712px] shrink-0 snap-start">
            <h3 className="text-[26px] sm:text-[48px] lg:text-[80px] font-extrabold tracking-[-0.05em] text-black mb-2 sm:mb-4">
              {v.label}
            </h3>
            <div className="relative group overflow-hidden rounded-[12px] bg-black aspect-video">
              <SoundVideo
                src={v.video}
                poster={v.img}
                className="w-full h-full aspect-video object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}

        <div className="shrink-0 snap-start flex items-end pb-8 sm:pb-16 lg:pb-[140px] pr-8">
          <Link
            to="/works"
            className="text-[44px] sm:text-[72px] lg:text-[120px] font-extrabold tracking-[-0.05em] leading-[1.1em] underline text-black hover:text-brand-blue transition-colors text-left"
          >
            View<br />All.
          </Link>
        </div>
      </div>

      <div className="container-x mt-6">
        <p className="text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em]">
          {content.caption}
        </p>
        <div className="mt-3 flex gap-3">
          <ArrowBtn dir="left" onClick={() => scroll(-1)} />
          <ArrowBtn dir="right" onClick={() => scroll(1)} />
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   5. CYAN PHOTO INTRO
   ================================================================ */

const PhotoIntro = ({ content }) => (
  <section className="bg-brand-blue text-white">
    <div className="container-x py-16 sm:py-24 lg:py-36">
      <h2
        className="heading-xl max-w-[1440px]"
        dangerouslySetInnerHTML={{ __html: content.headingHtml }}
      />
      <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-[610px_1fr]">
        <p className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.7em] tracking-[-0.05em] text-black">
          {content.description}
        </p>
        <p className="text-[20px] sm:text-[28px] lg:text-[40px] font-extrabold leading-[1.15em] tracking-[-0.05em] text-white">
          {content.rightHeading}
        </p>
      </div>
    </div>
  </section>
)

/* ================================================================
   6. PHOTOGRAPHY  —  Interactive Category + Picture Carousel
   ================================================================ */

const photoCats = ["Beauty", "Food&Drink", "Product", "Events", "Crowdfunding", "Fashion", "People", "Jewellery"]

const photoGalleries = {
  Beauty: [photoBeautyLarge, photoBeauty, vidBeauty],
  "Food&Drink": [vidFood, photoBeautyLarge, vidProduct],
  Product: [vidProduct, photoBeautyLarge, vidFood],
  Events: [photoPeople, vidEvents, photoBeautyLarge],
  Crowdfunding: [vidCrowdfunding, photoPeople, vidBeauty],
  Fashion: [photoBeauty, photoBeautyLarge, photoPeople],
  People: [photoPeople, photoBeauty, vidEvents],
  Jewellery: [photoBeautyLarge, vidProduct, photoBeauty],
}

const Photography = ({ content }) => {
  const [active, setActive] = React.useState("Beauty")
  const [slideIndex, setSlideIndex] = React.useState(0)

  const slides = photoGalleries[active] || [photoBeautyLarge]

  const nextSlide = () => setSlideIndex(i => (i + 1) % slides.length)
  const prevSlide = () => setSlideIndex(i => (i - 1 + slides.length) % slides.length)

  const handleCategoryChange = (cat) => {
    setActive(cat)
    setSlideIndex(0)
  }

  return (
    <section className="py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container-x flex items-center justify-between">
        <SectionLabel icon={<ApertureIcon />}>{content.sectionLabel}</SectionLabel>
        <LetsTalk />
      </div>

      <div className="container-x mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[362px_1fr] items-start">
        {/* Category list */}
        <ul>
          {photoCats.map(c => (
            <li key={c} className="border-b border-brand-slate/30">
              <button
                onClick={() => handleCategoryChange(c)}
                className={`w-full py-2.5 sm:py-3.5 text-left text-[18px] sm:text-[28px] lg:text-[40px] font-extrabold tracking-[-0.05em] transition-colors ${
                  active === c
                    ? "text-brand-yellow"
                    : "text-brand-slate hover:text-brand-blue"
                }`}
              >
                {active === c ? `View ${c}` : c}
              </button>
            </li>
          ))}
        </ul>

        {/* Featured Photo Carousel */}
        <div className="lg:-mr-[240px]">
          <div className="relative overflow-hidden rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-md group">
            <img
              key={`${active}-${slideIndex}`}
              src={slides[slideIndex]}
              alt={`${active} photography slide ${slideIndex + 1}`}
              className="h-[260px] sm:h-[420px] lg:h-[605px] w-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Carousel Navigation: [←] [● ○ ○] [→] */}
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
            <ArrowBtn dir="left" onClick={prevSlide} />
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    i === slideIndex ? "bg-brand-yellow scale-110" : "bg-gray-300"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <ArrowBtn dir="right" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   7. SERVICES
   ================================================================ */

const Services = ({ content }) => {
  const { setIsOpen } = React.useContext(ModalContext)

  return (
    <section id="services" className="bg-brand-yellow">
      <div className="container-x py-16 sm:py-24 lg:py-32">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[28px] sm:text-[48px] lg:text-[80px] font-extrabold leading-[1.05em] tracking-[-0.05em] text-white">
            {(content.checklistWords || ["Services", "Quality", "People"]).map(w => (
              <span key={w} className="block mb-1 sm:mb-2">
                {w} - <span className="text-brand-blue">Check<CheckMark /></span>
              </span>
            ))}
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="blob-btn blob-btn-lg bg-white text-brand-blue"
          >
            Say<br />Hello
          </button>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-3 text-black">
          {(content.values || []).map(v => (
            <div key={v.title}>
              <h3 className="text-[18px] sm:text-[24px] lg:text-[30px] font-medium mb-3 sm:mb-4 tracking-[-0.05em]">{v.title}</h3>
              <p className="text-[13px] sm:text-[17px] lg:text-[20px] leading-[1.4em] tracking-[-0.05em] text-black/90">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   8. TEAM
   ================================================================ */

const defaultTeamPhotos = [steven, haider, lauren, steven, haider, lauren]
const defaultTeamStyles = [
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-black" },
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-black" },
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
  { nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
]

const Team = ({ content }) => {
  const [sel, setSel] = React.useState(0)
  const { setIsOpen } = React.useContext(ModalContext)

  const members = (content.members || []).map((member, idx) => ({
    ...member,
    img: member.img || defaultTeamPhotos[idx % defaultTeamPhotos.length],
    ...defaultTeamStyles[idx % defaultTeamStyles.length],
  }))

  const m = members[sel] || members[0]

  return (
    <section id="about" className="container-x py-14 sm:py-20 lg:py-28">
      <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold tracking-[-0.05em] text-brand-slate mb-6 sm:mb-8">
        {content.heading}
      </h2>

      <div className="grid gap-8 lg:grid-cols-[550px_1fr] items-start">
        <div>
          <img
            src={m.img}
            alt={`${m.first} ${m.last}`}
            className="w-full h-[320px] sm:h-[480px] lg:h-[640px] rounded-[16px] object-cover shadow-md"
          />
        </div>

        <div>
          <div className="mb-6 sm:mb-8 space-y-2">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {members.slice(0, 3).map((t, i) => (
                <button
                  key={t.first}
                  onClick={() => setSel(i)}
                  className={`rounded-[12px] px-3.5 sm:px-5 py-1.5 sm:py-2 text-[13px] sm:text-[17px] lg:text-[20px] font-medium tracking-[-0.05em] min-w-[80px] sm:min-w-[103px] transition-colors ${
                    i === sel
                      ? "bg-brand-yellow text-white font-bold"
                      : "text-brand-slate hover:bg-gray-200"
                  }`}
                >
                  {t.first}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {members.slice(3).map((t, i) => (
                <button
                  key={t.first}
                  onClick={() => setSel(i + 3)}
                  className={`rounded-[12px] px-3.5 sm:px-5 py-1.5 sm:py-2 text-[13px] sm:text-[17px] lg:text-[20px] font-medium tracking-[-0.05em] min-w-[80px] sm:min-w-[103px] transition-colors ${
                    i + 3 === sel
                      ? "bg-brand-yellow text-white font-bold"
                      : "text-brand-slate hover:bg-gray-200"
                  }`}
                >
                  {t.first}
                </button>
              ))}
            </div>
          </div>

          <h3 className={`text-[32px] sm:text-[52px] lg:text-[80px] font-extrabold tracking-[-0.05em] ${m.nameColor} leading-[1.05em]`}>
            {m.first}{" "}
            <span className={`text-[20px] sm:text-[28px] lg:text-[40px] ${m.lastColor}`}>{m.last}</span>
          </h3>

          <div className="mt-4 sm:mt-5 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2">
            {(m.roles || []).map(r => (
              <span key={r} className={`text-[13px] sm:text-[17px] lg:text-[20px] font-extrabold ${m.rolesColor} tracking-[-0.05em]`}>
                {r}
              </span>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-[13px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.7em] tracking-[-0.05em] text-brand-slate max-w-[579px]">
            {m.bio || content.bioText}
          </p>

          <div className="mt-6 sm:mt-8 flex items-center gap-6 sm:gap-8">
            <button
              onClick={() => setIsOpen(true)}
              className="blob-btn blob-btn-sm bg-brand-blue text-white/90"
            >
              Msg<br />{m.first.split(" ")[0]}
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-90 transition"
            >
              <svg viewBox="0 0 24 24" className="h-[48px] w-[48px] sm:h-[64px] sm:w-[64px]">
                <rect width="24" height="24" rx="4" fill="#4E6B8A" />
                <path fill="#fff" d="M7 9.5h2.6V18H7zM8.3 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9.5h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V18H11z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   9. REVIEWS
   ================================================================ */

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] shrink-0">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
)

const Reviews = ({ content }) => {
  const reviewsDrag = useDragScroll()

  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container-x grid gap-8 sm:gap-10 lg:grid-cols-[1fr_667px] lg:items-start">
        <div>
          <h2 className="text-[28px] sm:text-[52px] lg:text-[80px] font-extrabold leading-[1.1em] tracking-[-0.05em]">
            <span className="text-brand-slate">{content.headingPrefix}</span>
            {content.headingLinkText && (
              <a
                href="https://www.google.com/maps/place/Pocket+Creatives"
                target="_blank"
                rel="noreferrer"
                className="text-brand-blue underline decoration-2 underline-offset-[8px]"
              >
                {content.headingLinkText}
              </a>
            )}
            <span className="text-brand-slate">{content.headingSuffix}</span>
          </h2>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <GoogleG />
            <span className="text-[16px] sm:text-[24px] lg:text-[30px] font-extrabold tracking-[-0.05em] text-brand-slate">
              {content.reviewCountLine1}<br />{content.reviewCountLine2}
            </span>
          </div>
        </div>

        <div>
          <p className="text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em] mb-2">
            {content.videoCaption}
          </p>
          <div className="w-full overflow-hidden rounded-[12px] shadow-md bg-black">
            <SoundVideo
              key={content.videoUrl}
              src={content.videoUrl || "/videos/ayumi-bts.mp4"}
              poster={bts}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>

      {/* Draggable Reviews Carousel matching Figma & prototype video */}
      <div
        role="presentation"
        ref={reviewsDrag.ref}
        onMouseDown={reviewsDrag.onMouseDown}
        onMouseLeave={reviewsDrag.onMouseLeave}
        onMouseUp={reviewsDrag.onMouseUp}
        onMouseMove={reviewsDrag.onMouseMove}
        className="no-scrollbar mt-8 sm:mt-12 flex gap-4 sm:gap-6 overflow-x-auto pl-[20px] sm:pl-[37px] lg:pl-[240px] cursor-grab active:cursor-grabbing select-none"
      >
        {(content.items || []).map(r => (
          <div key={r.name} className="w-[280px] sm:w-[357px] shrink-0 rounded-[24px] sm:rounded-[32px] bg-[#E6E6E6] p-2.5 sm:p-3 shadow-sm">
            <div className="h-[190px] sm:h-[226px] overflow-hidden rounded-[18px] sm:rounded-[24px] bg-white p-5 sm:p-7">
              <p className="text-[15px] sm:text-[18px] font-medium leading-[1.4em] tracking-[-0.05em] text-black">
                {r.text}
              </p>
            </div>
            <p className="px-4 sm:px-6 py-3 sm:py-4 text-[16px] sm:text-[20px] font-extrabold tracking-[-0.05em] text-brand-slate">
              {r.name}
            </p>
          </div>
        ))}
        <div className="shrink-0 w-8" />
      </div>
    </section>
  )
}

/* ================================================================
   10. PRICING  —  Matches HP 1920, HP 1440 & Mobile
   ================================================================ */

const Pricing = ({ content }) => {
  return (
    <section id="pricing" className="container-x py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-8">
        <h2 className="text-[28px] sm:text-[52px] lg:text-[80px] font-extrabold leading-[1em] tracking-[-0.05em]">
          <span className="text-brand-yellow">{content.headingYellow}</span>{" "}
          <span className="text-brand-blue">{content.headingBlue}</span>,<br />
          <span className="text-brand-slate">{content.headingSlate}</span>
        </h2>
        <Link
          to="/pricing"
          className="shrink-0 rounded-[16px] bg-brand-yellow px-5 sm:px-8 py-2.5 sm:py-3.5 text-[16px] sm:text-[24px] lg:text-[30px] font-medium text-black hover:brightness-105 transition self-start sm:self-auto shadow-btn"
          style={{ boxShadow: "3px 3px 6px 0px rgba(82,110,135,1)" }}
        >
          {content.buttonText}
        </Link>
      </div>

      <p className="mt-8 sm:mt-12 text-[18px] sm:text-[28px] lg:text-[40px] font-medium leading-[1.2em] tracking-[-0.05em] text-brand-slate max-w-[708px]">
        {content.subtitle}
      </p>

      <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[1fr_560px] lg:items-center">
        <p className="text-[14px] sm:text-[17px] lg:text-[20px] font-medium leading-[1.8em] tracking-[-0.05em] text-brand-slate max-w-[701px]">
          {content.description}
        </p>

        {/* Pocket Promise + Value Price Badge from HP 1440 & Mobile */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-end">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-sm p-1.5">
              <img src={logo} alt="Pocket Promise" className="h-6 w-auto object-contain" />
            </div>
            <span className="text-xl sm:text-2xl font-medium text-black tracking-tight">
              {content.promiseLabel}
            </span>
          </div>

          <div
            className="flex items-center justify-center gap-3 rounded-[16px] bg-brand-yellow py-3.5 px-6"
            style={{ boxShadow: "3px 3px 6px 0px rgba(82,110,135,1)" }}
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {content.badgeBold}
            </span>
            <span className="text-xl sm:text-2xl font-medium text-black">
              {content.badgeLight}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-blue">
              ✓
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PAGE
   ================================================================ */

const IndexPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const buildTimeHomeNode = React.useMemo(
    () => findHomePageNode(data?.allWpPage?.nodes || []),
    [data]
  )

  const [homeContent, setHomeContent] = React.useState(() =>
    buildTimeHomeNode
      ? parseHomepageFromWpPage(buildTimeHomeNode)
      : DEFAULT_HOMEPAGE_CONTENT
  )

  // Live fetch from WordPress GraphQL API on mount so the client can update the Homepage
  // directly from the WordPress Dashboard without needing to update or rebuild the repo!
  React.useEffect(() => {
    let isMounted = true
    fetchLiveWpHomepage()
      .then(liveHomepage => {
        if (isMounted && liveHomepage) {
          setHomeContent(liveHomepage)
        }
      })
      .catch(() => {})
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="home" onContactClick={() => setIsOpen(true)}>
        <ContactModal />
        <Hero content={homeContent.hero} />
        <Partners content={homeContent.partners} />
        <VideoIntro content={homeContent.videoIntro} />
        <VideoProduction content={homeContent.videoProduction} />
        <PhotoIntro content={homeContent.photoIntro} />
        <Photography content={homeContent.photography} />
        <Services content={homeContent.services} />
        <Team content={homeContent.team} />
        <Reviews content={homeContent.reviews} />
        <Pricing content={homeContent.pricing} />
      </Layout>
    </ModalContext.Provider>
  )
}

export const query = graphql`
  query HomePageWpQuery {
    allWpPage {
      nodes {
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

export default IndexPage

export const Head = () => (
  <>
    <title>Pocket Creatives — Video Production &amp; Photography</title>
    <meta
      name="description"
      content="Fast & friendly Video Production and Photography company in Battersea, London."
    />
  </>
)
