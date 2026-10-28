import * as React from "react"
import Layout from "../components/Layout"

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
   DRAG-TO-SCROLL HOOK
   Enables desktop mouse dragging + touch swiping like Figma
   ================================================================ */

const useDragScroll = () => {
  const ref = React.useRef(null)
  const isDragging = React.useRef(false)
  const startX = React.useRef(0)
  const scrollLeft = React.useRef(0)

  const onMouseDown = e => {
    if (!ref.current) return
    isDragging.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
  }
  const onMouseLeave = () => {
    isDragging.current = false
  }
  const onMouseUp = () => {
    isDragging.current = false
  }
  const onMouseMove = e => {
    if (!isDragging.current || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    ref.current.scrollLeft = scrollLeft.current - walk
  }

  return { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove }
}

/* ================================================================
   CONTACT MODAL  —  Exact Figma Node #325:1336
   "Have a project you want to discuss?"
   ================================================================ */

export const ModalContext = React.createContext({ isOpen: false, setIsOpen: () => {} })

const ContactModal = () => {
  const { isOpen, setIsOpen } = React.useContext(ModalContext)

  React.useEffect(() => {
    if (!isOpen) return
    const handler = e => { if (e.key === "Escape") setIsOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="modal-card relative w-full max-w-[1050px] rounded-[12px] bg-brand-blue p-6 sm:p-10 lg:p-14 shadow-2xl my-auto text-black"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.35)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-5 sm:top-6 sm:right-7 text-black hover:opacity-70 transition p-1"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" stroke="currentColor" strokeWidth="2.5" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 2-Column Layout matching Figma #325:1336 */}
        <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:gap-14 items-start">
          {/* Left Column: Heading + GDPR text */}
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-10">
            <h3 className="text-3xl sm:text-5xl lg:text-[72px] font-extrabold text-white leading-[1.0] tracking-[-0.05em]">
              Have a<br />
              project you<br />
              want to<br />
              discuss?
            </h3>

            {/* GDPR Checkbox & Text */}
            <div className="flex items-start gap-3 pt-4 sm:pt-10 max-w-[420px]">
              <input
                type="checkbox"
                id="gdpr-check"
                defaultChecked
                className="mt-1 h-4 w-4 shrink-0 rounded-none border border-black bg-white accent-brand-blue cursor-pointer"
              />
              <label
                htmlFor="gdpr-check"
                className="text-xs sm:text-[15px] font-medium leading-[1.4] tracking-[-0.03em] text-black cursor-pointer select-none"
              >
                Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
              </label>
            </div>
          </div>

          {/* Right Column: Form Fields */}
          <form className="space-y-4 w-full max-w-[390px]" onSubmit={e => e.preventDefault()}>
            {/* Full Name */}
            <div>
              <label className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Contact Number*
              </label>
              <input
                type="tel"
                placeholder="Contact Number"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Message
              </label>
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full h-[80px] sm:h-[90px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none resize-none"
              />
            </div>

            {/* Send Button (Yellow, rounded-12px, white text) */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="h-[40px] w-[103px] rounded-[12px] bg-brand-yellow text-[18px] font-medium text-white hover:brightness-105 transition flex items-center justify-center tracking-[-0.03em] shadow-sm"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

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
    <span className="text-[clamp(20px,2.1vw,40px)] font-medium text-brand-slate tracking-[-0.05em]">
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

const Hero = () => (
  <section className="container-x pt-6 sm:pt-8 lg:pt-12">
    <div className="flex items-end justify-between">
      <img src={logo} alt="Pocket Creatives" className="h-[44px] sm:h-[70px] lg:h-[102px] w-auto object-contain" />
      <div className="hidden sm:flex gap-4">
        <img src={heroPeople} alt="Photographer and videographer" className="h-[80px] sm:h-[110px] lg:h-[149px] object-cover rounded" />
      </div>
    </div>
    <hr className="mt-3 border-brand-slate/40" />

    <h1 className="mt-4 text-[clamp(18px,2.5vw,48px)] font-medium leading-[1.5em] lg:leading-[2em] tracking-[-0.05em] text-black">
      We’re a <b className="font-bold text-brand-yellow">fast</b> &amp;{" "}
      <b className="font-extrabold text-brand-yellow">friendly</b>{" "}
      <b className="font-bold text-brand-blue">Video Production</b> and{" "}
      <b className="font-bold text-brand-blue">Photography</b>{" "}
      <span className="font-normal text-brand-slate">company with</span>{" "}
      <b className="font-bold text-brand-yellow">bags of experience</b> &amp;{" "}
      <span className="font-normal text-brand-slate">who</span>{" "}
      <span className="text-[#FF1E00]">♥</span>{" "}
      <span className="font-normal text-brand-slate">what we do :)</span>
    </h1>

    <p className="mt-6 text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em]">
      *Click on Video to toggle sound
    </p>
    <div className="mt-2 relative overflow-hidden rounded-[12px] bg-black group cursor-pointer shadow-lg">
      <img
        src={heroImg}
        alt="Pocket Creatives showreel"
        className="w-full object-cover transition duration-300 group-hover:scale-[1.01]"
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

const Partners = () => {
  const [page, setPage] = React.useState(0)

  return (
    <section className="container-x py-14 sm:py-20 lg:py-24 grid gap-8 lg:grid-cols-[1fr_640px] lg:items-start">
      <div>
        <h2 className="text-[clamp(22px,2.1vw,40px)] font-medium leading-[1.35em] tracking-[-0.05em] text-brand-slate">
          As you can see, we’ve <b className="font-black text-brand-yellow">partnered</b> with a lot of amazing people
        </h2>
        <p className="mt-3 sm:mt-4 text-[clamp(22px,2.1vw,40px)] font-extrabold tracking-[-0.05em] text-brand-blue">
          in many different Industries:
        </p>
        <p className="mt-4 sm:mt-6 text-[clamp(14px,1vw,20px)] font-medium leading-[1.7em] tracking-[-0.05em] text-brand-slate max-w-[632px]">
          {LOREM}
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

const VideoIntro = () => (
  <section id="works" className="bg-brand-yellow text-white">
    <div className="container-x py-16 sm:py-24 lg:py-36 relative">
      <h2 className="heading-xl max-w-[1090px]">
        Take a look at some of our video work...
      </h2>
      <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[610px_1fr] items-end">
        <p className="text-[clamp(14px,1vw,20px)] font-medium leading-[1.7em] tracking-[-0.05em] text-black">
          {LOREM}
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
  { label: "Beauty", img: vidBeauty },
  { label: "Food&Drink", img: vidFood },
  { label: "Product", img: vidProduct },
  { label: "Events", img: vidEvents },
  { label: "Crowdfunding", img: vidCrowdfunding },
  { label: "Tv Ads", img: vidTv },
  { label: "HR", img: vidBeauty },
  { label: "Education", img: vidFood },
  { label: "Explainers", img: vidProduct },
  { label: "Social First", img: vidEvents },
]

const VideoProduction = () => {
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
        <SectionLabel icon={<PlayIcon />}>Video Production</SectionLabel>
        <LetsTalk />
      </div>

      {/* Draggable carousel container */}
      <div
        ref={dragScroll.ref}
        onMouseDown={dragScroll.onMouseDown}
        onMouseLeave={dragScroll.onMouseLeave}
        onMouseUp={dragScroll.onMouseUp}
        onMouseMove={dragScroll.onMouseMove}
        className="no-scrollbar mt-8 sm:mt-10 flex gap-4 sm:gap-6 lg:gap-[60px] overflow-x-auto snap-x snap-mandatory pl-[max(20px,calc((100vw-1440px)/2+20px))] cursor-grab active:cursor-grabbing select-none"
      >
        {videoCategories.map(v => (
          <div key={v.label} className="video-card w-[290px] sm:w-[460px] lg:w-[712px] shrink-0 snap-start">
            <h3 className="text-[clamp(26px,4.2vw,80px)] font-extrabold tracking-[-0.05em] text-black mb-2 sm:mb-4">
              {v.label}
            </h3>
            <div className="relative group overflow-hidden rounded-[12px] bg-black">
              <img
                src={v.img}
                alt={v.label}
                draggable="false"
                className="w-full aspect-video object-cover transition duration-300 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                <PlayIcon />
              </div>
            </div>
          </div>
        ))}

        <div className="shrink-0 snap-start flex items-end pb-8 sm:pb-16 lg:pb-[140px] pr-8">
          <button className="text-[clamp(44px,6.25vw,120px)] font-extrabold tracking-[-0.05em] leading-[1.1em] underline text-black hover:text-brand-blue transition-colors text-left">
            View<br />All.
          </button>
        </div>
      </div>

      <div className="container-x mt-6">
        <p className="text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em]">
          *Drag to play the next Video, Click to toggle sound
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

const PhotoIntro = () => (
  <section className="bg-brand-blue text-white">
    <div className="container-x py-16 sm:py-24 lg:py-36">
      <h2 className="heading-xl max-w-[1440px]">
        We <span className="text-brand-yellow tracking-[-0.15em]">squeeze</span> quality into every pixel...
      </h2>
      <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-[610px_1fr]">
        <p className="text-[clamp(14px,1vw,20px)] font-medium leading-[1.7em] tracking-[-0.05em] text-black">
          {LOREM}
        </p>
        <p className="text-[clamp(20px,2.1vw,40px)] font-extrabold leading-[1.15em] tracking-[-0.05em] text-white">
          See some of our Photography work for different industries below.
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

const Photography = () => {
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
        <SectionLabel icon={<ApertureIcon />}>Photography</SectionLabel>
        <LetsTalk />
      </div>

      <div className="container-x mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[362px_1fr] items-start">
        {/* Category list */}
        <ul>
          {photoCats.map(c => (
            <li key={c} className="border-b border-brand-slate/30">
              <button
                onClick={() => handleCategoryChange(c)}
                className={`w-full py-2.5 sm:py-3.5 text-left text-[clamp(18px,2.1vw,40px)] font-extrabold tracking-[-0.05em] transition-colors ${
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
        <div className="lg:mr-[calc((1440px-100vw)/2-40px)]">
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

const values = [
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
]

const Services = () => {
  const { setIsOpen } = React.useContext(ModalContext)

  return (
    <section id="services" className="bg-brand-yellow">
      <div className="container-x py-16 sm:py-24 lg:py-32">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[clamp(28px,4.2vw,80px)] font-extrabold leading-[1.05em] tracking-[-0.05em] text-white">
            {["Services", "Quality", "People"].map(w => (
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
          {values.map(v => (
            <div key={v.title}>
              <h3 className="text-[clamp(18px,1.5vw,30px)] font-medium mb-3 sm:mb-4 tracking-[-0.05em]">{v.title}</h3>
              <p className="text-[clamp(13px,1vw,20px)] leading-[1.4em] tracking-[-0.05em] text-black/90">{v.text}</p>
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

const teamMembers = [
  {
    first: "Steven",
    last: "Mayatt",
    img: steven,
    roles: ["Managing Director", "Creative Director", "Photographer", "Entrepreneur", "Marketeer", "Coffee Drinker"],
    nameColor: "text-brand-yellow",
    lastColor: "text-brand-blue",
    rolesColor: "text-brand-slate",
  },
  {
    first: "Haider",
    last: "Romero Perez",
    img: haider,
    roles: ["Technical Director", "Cinematographer", "Cameraman", "Editor", "Colourist", "Intrepid Cyclist"],
    nameColor: "text-brand-yellow",
    lastColor: "text-brand-blue",
    rolesColor: "text-black",
  },
  {
    first: "Lauren",
    last: "Hodge",
    img: lauren,
    roles: ["Production Director", "Organiser", "Planner", "Emergency Hand model", "Prop Shopper", "Recipe Wrangler"],
    nameColor: "text-brand-yellow",
    lastColor: "text-brand-blue",
    rolesColor: "text-black",
  },
  { first: "Ned", last: "", img: steven, roles: ["Team Member"], nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
  { first: "Connor", last: "", img: haider, roles: ["Team Member"], nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
  { first: "Rauchan", last: "", img: lauren, roles: ["Team Member"], nameColor: "text-brand-yellow", lastColor: "text-brand-blue", rolesColor: "text-brand-slate" },
]

const Team = () => {
  const [sel, setSel] = React.useState(0)
  const m = teamMembers[sel]
  const { setIsOpen } = React.useContext(ModalContext)

  return (
    <section id="about" className="container-x py-14 sm:py-20 lg:py-28">
      <h2 className="text-[clamp(22px,2.1vw,40px)] font-extrabold tracking-[-0.05em] text-brand-slate mb-6 sm:mb-8">
        Meet the Team
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
              {teamMembers.slice(0, 3).map((t, i) => (
                <button
                  key={t.first}
                  onClick={() => setSel(i)}
                  className={`rounded-[12px] px-3.5 sm:px-5 py-1.5 sm:py-2 text-[clamp(13px,1vw,20px)] font-medium tracking-[-0.05em] min-w-[80px] sm:min-w-[103px] transition-colors ${
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
              {teamMembers.slice(3).map((t, i) => (
                <button
                  key={t.first}
                  onClick={() => setSel(i + 3)}
                  className={`rounded-[12px] px-3.5 sm:px-5 py-1.5 sm:py-2 text-[clamp(13px,1vw,20px)] font-medium tracking-[-0.05em] min-w-[80px] sm:min-w-[103px] transition-colors ${
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

          <h3 className={`text-[clamp(32px,4.2vw,80px)] font-extrabold tracking-[-0.05em] ${m.nameColor} leading-[1.05em]`}>
            {m.first}{" "}
            <span className={`text-[clamp(20px,2.1vw,40px)] ${m.lastColor}`}>{m.last}</span>
          </h3>

          <div className="mt-4 sm:mt-5 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2">
            {m.roles.map(r => (
              <span key={r} className={`text-[clamp(13px,1vw,20px)] font-extrabold ${m.rolesColor} tracking-[-0.05em]`}>
                {r}
              </span>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-[clamp(13px,1vw,20px)] font-medium leading-[1.7em] tracking-[-0.05em] text-brand-slate max-w-[579px]">
            {LOREM}
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

const reviews = [
  { name: "Winnie Asawakanjanakit", text: "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)" },
  { name: "Crime And Comedy Theatre Co..", text: "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating..." },
  { name: "John Bond", text: "Very professional company to deal with and delighted with the product videos received. Always a pleasure to deal with Steven and his team." },
  { name: "Marcus Ramtohul", text: "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with..." },
  { name: "Klara Niklewicz", text: "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!" },
  { name: "Michelle Vellacott", text: "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great..." },
]

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] shrink-0">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
)

const Reviews = () => {
  const reviewsDrag = useDragScroll()

  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container-x grid gap-8 sm:gap-10 lg:grid-cols-[1fr_667px] lg:items-start">
        <div>
          <h2 className="text-[clamp(28px,4.2vw,80px)] font-extrabold leading-[1.1em] tracking-[-0.05em]">
            <span className="text-brand-slate">Go behind the scenes of our </span>
            <a
              href="https://www.google.com/maps/place/Pocket+Creatives"
              target="_blank"
              rel="noreferrer"
              className="text-brand-blue underline decoration-2 underline-offset-[8px]"
            >
              5 Star
            </a>
            <span className="text-brand-slate"> Service</span>
          </h2>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <GoogleG />
            <span className="text-[clamp(16px,1.5vw,30px)] font-extrabold tracking-[-0.05em] text-brand-slate">
              Based on<br />88 reviews
            </span>
          </div>
        </div>

        <div>
          <p className="text-[13px] sm:text-[16px] font-medium text-brand-slate tracking-[-0.05em] mb-2">
            *Click on Video to toggle sound
          </p>
          <img src={bts} alt="Behind the scenes" className="w-full rounded-[12px] shadow-md" />
        </div>
      </div>

      {/* Draggable Reviews Carousel matching Figma & prototype video */}
      <div
        ref={reviewsDrag.ref}
        onMouseDown={reviewsDrag.onMouseDown}
        onMouseLeave={reviewsDrag.onMouseLeave}
        onMouseUp={reviewsDrag.onMouseUp}
        onMouseMove={reviewsDrag.onMouseMove}
        className="no-scrollbar mt-8 sm:mt-12 flex gap-4 sm:gap-6 overflow-x-auto pl-[max(20px,calc((100vw-1440px)/2+20px))] cursor-grab active:cursor-grabbing select-none"
      >
        {reviews.map(r => (
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

const Pricing = () => {
  const { setIsOpen } = React.useContext(ModalContext)

  return (
    <section id="pricing" className="container-x py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-8">
        <h2 className="text-[clamp(28px,4.2vw,80px)] font-extrabold leading-[1em] tracking-[-0.05em]">
          <span className="text-brand-yellow">We value</span>{" "}
          <span className="text-brand-blue">transparency</span>,<br />
          <span className="text-brand-slate">so let's talk about pricing.</span>
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="shrink-0 rounded-[16px] bg-brand-yellow px-5 sm:px-8 py-2.5 sm:py-3.5 text-[clamp(16px,1.5vw,30px)] font-medium text-black hover:brightness-105 transition self-start sm:self-auto shadow-btn"
          style={{ boxShadow: "3px 3px 6px 0px rgba(82,110,135,1)" }}
        >
          View Pricing
        </button>
      </div>

      <p className="mt-8 sm:mt-12 text-[clamp(18px,2.1vw,40px)] font-medium leading-[1.2em] tracking-[-0.05em] text-brand-slate max-w-[708px]">
        Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
      </p>

      <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-[1fr_560px] lg:items-center">
        <p className="text-[clamp(14px,1vw,20px)] font-medium leading-[1.8em] tracking-[-0.05em] text-brand-slate max-w-[701px]">
          {LOREM}
        </p>

        {/* Pocket Promise + Value Price Badge from HP 1440 & Mobile */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-end">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-sm p-1.5">
              <img src={logo} alt="Pocket Promise" className="h-6 w-auto object-contain" />
            </div>
            <span className="text-xl sm:text-2xl font-medium text-black tracking-tight">
              Pocket Promise
            </span>
          </div>

          <div
            className="flex items-center justify-center gap-3 rounded-[16px] bg-brand-yellow py-3.5 px-6"
            style={{ boxShadow: "3px 3px 6px 0px rgba(82,110,135,1)" }}
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Value
            </span>
            <span className="text-xl sm:text-2xl font-medium text-black">
              Price
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

const IndexPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout>
        <ContactModal />
        <Hero />
        <Partners />
        <VideoIntro />
        <VideoProduction />
        <PhotoIntro />
        <Photography />
        <Services />
        <Team />
        <Reviews />
        <Pricing />
      </Layout>
    </ModalContext.Provider>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Pocket Creatives | Video Production &amp; Photography</title>
    <meta
      name="description"
      content="Fast & friendly Video Production and Photography company with bags of experience."
    />
  </>
)
