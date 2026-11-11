import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"
import SoundVideo from "../components/SoundVideo"
import {
  DEFAULT_ABOUT_CONTENT,
  parseAboutFromWpPage,
  findAboutPageNode,
  fetchLiveWpAbout,
  getCachedWpAbout,
} from "../utils/wpPagesContent"

import heroVideo from "../images/about/hero-video.png"
import pocketLogoWide from "../images/about/pocket-logo-wide.png"
import teamSofa from "../images/about/team-sofa.png"
import carSoapGlory from "../images/about/carousel-soapglory.png"
import carHairo from "../images/about/carousel-hairo.png"
import carSmiles from "../images/about/carousel-smiles.png"
import videoCompany from "../images/about/video-company.png"
import photoCompany from "../images/about/photo-company.png"
import bts from "../images/bts.png"

import logoArgos from "../images/logo-argos.png"
import logoSoapGlory from "../images/logo-soapglory.png"
import logoMacmillan from "../images/logo-macmillan.png"
import logoKopparberg from "../images/logo-kopparberg.png"
import logoLadbrokes from "../images/logo-ladbrokes.png"
import logoCoop from "../images/logo-coop.png"
import logoBusinessInsider from "../images/logo-businessinsider.png"
import logoGymGroup from "../images/logo-gymgroup.png"
import logoTelegraph from "../images/logo-telegraph.png"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const MailIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

/* ================= 1. HERO (Exact Figma 1920 #2009:2130) ================= */
const Hero = ({ content = DEFAULT_ABOUT_CONTENT.hero }) => {
  const { setIsOpen } = React.useContext(ModalContext)
  return (
    <section className="container-x pt-12 sm:pt-20 lg:pt-[154px] pb-16 sm:pb-24 lg:pb-[145px]">
      <div className="mx-auto max-w-[1177px]">
        <h1 className="text-[44px] sm:text-[72px] lg:text-[120px] font-normal leading-none tracking-[-0.05em] text-brand-slate">
          {content.heading}
        </h1>
        <img
          src={pocketLogoWide}
          alt="Pocket Creatives"
          className="mt-2 w-full max-w-[1049px] h-auto object-contain"
        />

        <div className="mt-8 sm:mt-12 lg:mt-[60px] grid gap-8 lg:grid-cols-[598px_517px] lg:justify-between items-start">
          <div>
            <div className="w-full lg:w-[598px] lg:h-[352px] aspect-[598/352] overflow-hidden bg-black">
              <SoundVideo
                src={content.videoUrl || "/videos/showreel.mp4"}
                poster={heroVideo}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-0 text-[13px] sm:text-[16px] leading-[32px] font-medium tracking-[-0.05em] text-brand-slate">
              {content.videoCaption}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="w-full lg:w-[517px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[2] tracking-[-0.05em] text-brand-slate">
              {content.description}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 sm:mt-8 lg:mt-[43px] flex h-[56px] sm:h-[66px] w-[220px] sm:w-[253px] items-center justify-center gap-5 bg-[#55C8E4] px-6 text-[17px] sm:text-[20px] font-medium tracking-normal text-black hover:brightness-105 transition"
              style={{ boxShadow: "3px 3px 6px 0px rgba(82, 110, 135, 1)" }}
            >
              <MailIcon className="h-5 w-5 shrink-0" />
              <span>{content.buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= 2. VIDEO PRODUCTION & PHOTOGRAPHY (Blue #2017:1058) ================= */
const Intro = ({ content = DEFAULT_ABOUT_CONTENT.intro }) => {
  const { setIsOpen } = React.useContext(ModalContext)
  return (
    <section className="bg-brand-blue">
      <div className="container-x py-16 sm:py-24 lg:pt-[191px] lg:pb-[167px]">
        <h2 className="max-w-[1453px] text-[34px] sm:text-[52px] lg:text-[80px] font-extrabold leading-[1.0] tracking-[-0.05em] text-white">
          {content.heading}
        </h2>
        <div className="mt-10 sm:mt-14 lg:mt-[60px] grid gap-10 lg:grid-cols-[610px_689px] lg:justify-between items-start">
          <div>
            <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[2] tracking-[-0.05em] text-black">
              <span
                key={content.paragraph1Html}
                dangerouslySetInnerHTML={{ __html: content.paragraph1Html }}
              />
              <br />
              <span>{content.paragraph2}</span>
              <br />
              <span>{content.paragraph3}</span>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Email us"
              className="mt-5 flex h-[64px] w-[64px] sm:h-[70px] sm:w-[70px] items-center justify-center rounded-full bg-brand-yellow text-black hover:scale-105 transition"
              style={{ boxShadow: "3px 3px 6px 0px rgba(82, 110, 135, 1)" }}
            >
              <MailIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="relative pt-10 lg:pt-0">
            <span
              className="absolute left-0 top-0 lg:-left-[57px] lg:-top-[77px] z-10 flex h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] lg:h-[135px] lg:w-[135px] -rotate-6 items-center justify-center rounded-full bg-brand-yellow text-center text-[16px] sm:text-[20px] font-bold leading-tight tracking-[-0.05em] text-black"
              style={{ boxShadow: "3px 3px 6px 0px rgba(82, 110, 135, 1)" }}
            >
              {content.badgeLine1}
              <br />
              {content.badgeLine2}
            </span>
            <img
              src={teamSofa}
              alt="Steven, Haider and Lauren"
              className="w-full lg:w-[689px] lg:h-[399px] aspect-[689/399] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= 3. OUR WORKS (Click Carousel #2172:4493) ================= */
const defaultWorkPosters = [carSoapGlory, carHairo, carSmiles]

const WorkCard = ({ item, big, onClick }) => {
  const videoRef = React.useRef(null)
  const [muted, setMuted] = React.useState(true)

  const handleCardClick = e => {
    if (big && item.video && videoRef.current) {
      e.stopPropagation()
      const nextMuted = !videoRef.current.muted
      videoRef.current.muted = nextMuted
      setMuted(nextMuted)
      return
    }
    onClick()
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleCardClick(e)
        }
      }}
      className={`relative shrink-0 overflow-hidden text-left transition-all duration-500 cursor-pointer ${
        big
          ? "w-[280px] sm:w-[340px] lg:w-[430px] aspect-[430/819] z-10"
          : "w-[220px] sm:w-[270px] lg:w-[349px] aspect-[349/706] opacity-95 hover:opacity-100"
      }`}
    >
      {item.video ? (
        <video
          ref={videoRef}
          src={item.video}
          poster={item.img}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img src={item.img} alt={item.tag} className="absolute inset-0 h-full w-full object-cover" />
      )}
      {big && item.video && (
        <span
          className="pointer-events-none absolute top-3 right-3 z-20 inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/55 text-white backdrop-blur-sm"
          title={muted ? "Click to unmute" : "Click to mute"}
        >
          {muted ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </span>
      )}
      <div
        onClick={e => {
          if (big) {
            e.stopPropagation()
            onClick()
          }
        }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-yellow via-brand-yellow/95 to-transparent px-4 sm:px-6 pb-5 sm:pb-7 pt-20"
      >
        <span
          className={`inline-block bg-brand-blue px-2 py-0.5 font-bold tracking-[-0.04em] text-white ${
            big ? "text-[15px] sm:text-[20px]" : "text-[11px] sm:text-[14px]"
          }`}
        >
          {item.tag}
        </span>
        <p
          className={`mt-1.5 font-semibold tracking-[-0.04em] text-black ${
            big ? "text-[15px] sm:text-[20px]" : "text-[11px] sm:text-[14px]"
          }`}
        >
          {item.title}
        </p>
        <p
          className={`mt-2 tracking-[-0.04em] text-black leading-[1.15] ${
            big ? "text-[13px] sm:text-[18px] lg:text-[20px] font-bold" : "text-[10px] sm:text-[13px] lg:text-[14px] font-normal text-black/85"
          }`}
        >
          {item.text}
        </p>
      </div>
    </div>
  )
}

const OurWorks = ({ content = DEFAULT_ABOUT_CONTENT.ourWorks }) => {
  const [active, setActive] = React.useState(1)
  const works = (content.items || DEFAULT_ABOUT_CONTENT.ourWorks.items).map((item, idx) => ({
    ...item,
    img: item.img || defaultWorkPosters[idx] || carSoapGlory,
    poster: defaultWorkPosters[idx] || carSoapGlory,
  }))
  const n = works.length
  const left = (active - 1 + n) % n
  const right = (active + 1) % n

  return (
    <section className="container-x pt-16 sm:pt-24 lg:pt-[139px] pb-16 sm:pb-24 lg:pb-[101px]">
      <h2 className="text-center text-[48px] sm:text-[72px] lg:text-[120px] font-bold tracking-[-0.05em] text-brand-blue leading-[1.2]">
        {content.heading}
      </h2>
      <div className="mt-10 sm:mt-16 lg:mt-[77px] flex items-center justify-center gap-4 sm:gap-8 lg:gap-[59px]">
        <div className="hidden md:block">
          <WorkCard item={works[left]} onClick={() => setActive(left)} />
        </div>
        <WorkCard item={works[active]} big onClick={() => setActive(right)} />
        <div className="hidden md:block">
          <WorkCard item={works[right]} onClick={() => setActive(right)} />
        </div>
      </div>
      <div className="mx-auto mt-1.5 flex w-[280px] sm:w-[340px] lg:w-[430px] items-center justify-between">
        <p className="text-[13px] sm:text-[16px] leading-[32px] font-medium tracking-[-0.05em] text-brand-slate">
          {content.videoCaption}
        </p>
        <div className="flex gap-1.5 md:hidden">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === active ? "bg-brand-yellow" : "bg-gray-300"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= 4. VIDEO COMPANY / PHOTO COMPANY (#2040:983) ================= */
const Companies = ({ content = DEFAULT_ABOUT_CONTENT.companies }) => (
  <section className="pb-16 sm:pb-24 lg:pb-[118px]">
    {/* Row 1: text left (x=241, w=740), image bleeds to the right edge (x=1165, w=755, h=529) */}
    <div className="grid gap-8 lg:grid-cols-[1fr_755px] items-start">
      <div className="container-x lg:max-w-none lg:pl-[241px] lg:pr-8">
        <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.0] tracking-[-0.05em] text-brand-slate">
          {content.videoHeadingPrefix}{" "}
          <Link to="/videography-services" className="font-extrabold text-brand-blue hover:underline">
            {content.videoHeadingLink}
          </Link>
          <br />
          {content.videoHeadingSuffix}
        </h3>
        <div className="mt-8 sm:mt-12 lg:mt-[80px] lg:w-[740px] space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate text-justify">
          <p>{content.videoPara1}</p>
          <p>{content.videoPara2}</p>
        </div>
      </div>
      <img
        src={videoCompany}
        alt="Pocket Creatives video production set"
        className="w-full lg:w-[755px] lg:h-[529px] lg:justify-self-end aspect-[755/529] object-cover"
      />
    </div>

    {/* Row 2: image bleeds to the left edge (x=0, w=718, h=529), text right (x=868, w=816) */}
    <div className="mt-12 lg:-mt-[39px] grid gap-8 lg:grid-cols-[718px_1fr] items-start">
      <img
        src={photoCompany}
        alt="Pocket Creatives food photography"
        className="order-2 lg:order-1 w-full lg:w-[718px] lg:h-[529px] aspect-[718/529] object-cover"
      />
      <div className="order-1 lg:order-2 container-x lg:max-w-none lg:pl-[150px] lg:pt-[118px] lg:pr-[190px]">
        <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.0] tracking-[-0.05em] text-brand-slate">
          {content.photoHeadingPrefix}{" "}
          <Link to="/photography-services" className="font-extrabold text-brand-blue hover:underline">
            {content.photoHeadingLink}
          </Link>
          {content.photoHeadingSuffix}
        </h3>
        <div className="mt-8 sm:mt-12 lg:mt-[68px] lg:w-[816px] space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate text-justify">
          <p>{content.photoPara1}</p>
          <p>{content.photoPara2}</p>
        </div>
      </div>
    </div>
  </section>
)

/* ================= 5. WHY WORK WITH US (Yellow + Blue Drag Strip #2106:754) ================= */
const WhyUs = ({ content = DEFAULT_ABOUT_CONTENT.whyUs }) => {
  const drag = useDragScroll()
  const cards = content.cards || DEFAULT_ABOUT_CONTENT.whyUs.cards
  return (
    <section className="bg-brand-yellow pt-16 sm:pt-24 lg:pt-[101px] pb-16 sm:pb-24 lg:pb-[146px]">
      <div className="container-x">
        <h2 className="lg:-ml-[24px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
          {content.heading}
        </h2>
        <p className="mt-6 lg:mt-[23px] max-w-[1443px] text-[18px] sm:text-[24px] lg:text-[30px] font-medium leading-[1.43] tracking-[-0.05em] text-black">
          {content.subtitle}
        </p>
      </div>
      {/* Blue strip starts at x=216 and bleeds off the right side */}
      <div className="mt-8 sm:mt-14 lg:mt-[57px] ml-[20px] sm:ml-[37px] lg:ml-[216px] bg-brand-blue lg:min-h-[452px]">
        <div
          {...drag}
          className="no-scrollbar flex overflow-x-auto cursor-grab active:cursor-grabbing select-none py-10 sm:py-12 lg:pt-[48px] lg:pb-[48px] pl-6 sm:pl-12 lg:pl-[64px]"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="w-[280px] sm:w-[350px] lg:w-[394px] shrink-0 pr-8 sm:pr-[40px] text-white">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold leading-[1.05] tracking-[-0.05em]">
                {card.title}
              </h3>
              <div className="mt-6 space-y-4 text-[15px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
                {(card.paragraphs || []).map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= 6. BEHIND THE SCENES (#2106:1160) ================= */
const BehindScenes = ({ content = DEFAULT_ABOUT_CONTENT.behindScenes }) => (
  <section className="mx-auto w-full max-w-[1563px] px-5 sm:px-9 lg:px-0 pt-16 sm:pt-24 lg:pt-[113px] pb-16 sm:pb-24 lg:pb-[113px]">
    <p
      key={content.introHtml}
      className="max-w-[1411px] text-[22px] sm:text-[30px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.05em] text-black lg:pl-[69px]"
      dangerouslySetInnerHTML={{ __html: content.introHtml }}
    />
    <div className="mt-8 sm:mt-14 lg:mt-[84px] bg-black overflow-hidden">
      <SoundVideo
        src={content.videoUrl || "/videos/ayumi-bts.mp4"}
        poster={bts}
        className="w-full lg:w-[1563px] lg:h-[738px] aspect-[1563/738] object-cover"
      />
    </div>
    <p className="mt-0 text-[13px] sm:text-[16px] leading-[32px] font-medium tracking-[-0.05em] text-brand-slate">
      {content.videoCaption}
    </p>
  </section>
)

/* ================= 7. WHO WE WORK WITH (#2106:756) ================= */
const logos = [
  [logoArgos, "Argos"], [logoSoapGlory, "Soap & Glory"], [logoMacmillan, "Macmillan Cancer Support"],
  [logoKopparberg, "Kopparberg"], [logoLadbrokes, "Ladbrokes"], [logoCoop, "Co-op"],
  [logoBusinessInsider, "Business Insider"], [logoGymGroup, "The Gym Group"], [logoTelegraph, "The Telegraph"],
]

const WhoWeWorkWith = ({ content = DEFAULT_ABOUT_CONTENT.whoWeWorkWith }) => (
  <section className="bg-brand-blue">
    <div className="container-x py-16 sm:py-24 lg:pt-[241px] lg:pb-[159px]">
      <h2 className="lg:-ml-[21px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
        {content.heading}
      </h2>
      <div className="mt-8 sm:mt-12 lg:mt-[34px] grid gap-10 lg:grid-cols-[638px_632px] lg:gap-[78px] lg:pl-[48px]">
        <div className="space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
          <p>{content.para1}</p>
          <p>{content.para2}</p>
          <p
            key={content.para3Html}
            dangerouslySetInnerHTML={{ __html: content.para3Html }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-[632px]">
          {logos.map(([src, alt]) => (
            <div
              key={alt}
              className="flex aspect-[2/1] lg:h-[100px] items-center justify-center rounded-[12px] sm:rounded-[16px] bg-white p-2 sm:p-3"
              style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.12)" }}
            >
              <img src={src} alt={alt} className="max-h-[80%] max-w-[85%] object-contain" />
            </div>
          ))}
          <Link
            to="/video-testimonials"
            className="col-start-3 flex aspect-[2/1] lg:h-[100px] items-center justify-end rounded-[12px] sm:rounded-[16px] bg-brand-yellow p-2 sm:p-4 text-right text-[11px] sm:text-[16px] lg:text-[20px] font-medium leading-[1.2] tracking-normal text-black hover:brightness-105 transition"
            style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.12)" }}
          >
            <span
              key={content.ctaTextHtml}
              dangerouslySetInnerHTML={{ __html: content.ctaTextHtml }}
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
)

/* ================= 8. OUR STORY (Timeline Drag Scroll #2187:1714) ================= */
const StoryText = ({ children, large }) => (
  <p
    className={
      large
        ? "text-[18px] sm:text-[26px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate"
        : "text-[13px] sm:text-[16px] lg:text-[20px] font-bold leading-[1.2] tracking-[-0.05em] text-brand-slate"
    }
  >
    {children}
  </p>
)

const OurStory = ({ content = DEFAULT_ABOUT_CONTENT.ourStory }) => {
  const drag = useDragScroll()
  const scrollNext = () => drag.ref.current?.scrollBy({ left: 500, behavior: "smooth" })

  const milestones = content.milestones || DEFAULT_ABOUT_CONTENT.ourStory.milestones
  const story = [
    { type: "year", label: content.startYear || "2017" },
    { type: "dot", pos: "below", text: milestones[0] },
    { type: "dot", pos: "above", text: milestones[1] },
    { type: "dot", pos: "below", text: milestones[2] },
    { type: "dot", pos: "above", text: milestones[3] },
    { type: "dot", pos: "below", text: milestones[4] },
    {
      type: "year",
      label: content.endYear || "2025",
      text: content.endText || DEFAULT_ABOUT_CONTENT.ourStory.endText,
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24 lg:pt-[165px] lg:pb-[54px]">
      <div className="container-x">
        <div className="mx-auto max-w-[1177px]">
          <h2 className="text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-brand-blue">
            {content.heading}
          </h2>
          <p
            key={content.introHtml}
            className="mt-6 lg:mt-[36px] max-w-[721px] text-[20px] sm:text-[28px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate"
            dangerouslySetInnerHTML={{ __html: content.introHtml }}
          />
        </div>
      </div>

      <div
        {...drag}
        className="no-scrollbar mt-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
      >
        <div className="relative inline-flex items-stretch pl-[20px] sm:pl-[37px] lg:pl-[312px] pr-[120px]">
          {/* the line */}
          <div className="absolute left-[20px] sm:left-[37px] lg:left-[312px] right-0 top-1/2 h-[3px] -translate-y-1/2 bg-brand-slate" />
          {/* start diamond */}
          <div className="relative z-10 flex items-center">
            <span className="block h-4 w-4 rotate-45 bg-brand-slate" />
          </div>

          {story.map((s, i) => (
            <div
              key={i}
              className={`relative z-10 grid grid-rows-[1fr_auto_1fr] ${
                s.type === "year"
                  ? s.text
                    ? "w-[300px] sm:w-[460px] lg:w-[721px]"
                    : "w-[240px] sm:w-[340px] lg:w-[460px]"
                  : "w-[260px] sm:w-[380px] lg:w-[530px]"
              }`}
            >
              <div className="flex items-end justify-center px-4 pb-6 min-h-[140px] sm:min-h-[220px]">
                {(s.pos === "above" || (s.type === "year" && s.text)) && (
                  <StoryText large={s.type === "year"}>{s.text}</StoryText>
                )}
              </div>
              <div className="flex justify-center">
                {s.type === "year" ? (
                  <span className="flex h-[140px] w-[140px] sm:h-[200px] sm:w-[200px] lg:h-[244px] lg:w-[244px] items-center justify-center rounded-full bg-brand-yellow text-[40px] sm:text-[64px] lg:text-[80px] font-bold tracking-[-0.05em] text-white">
                    {s.label}
                  </span>
                ) : (
                  <span className="my-auto block h-[50px] w-[50px] sm:h-[83px] sm:w-[83px] rounded-full bg-brand-blue" />
                )}
              </div>
              <div className="flex items-start justify-center px-4 pt-6 min-h-[140px] sm:min-h-[220px]">
                {s.pos === "below" && <StoryText>{s.text}</StoryText>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-[1177px]">
          <button
            onClick={scrollNext}
            aria-label="Next milestone"
            className="mt-2 p-2 text-black hover:text-brand-blue transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12h15m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

/* ================= PAGE ================= */
const AboutPage = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const buildTimePageNodes = data?.allWpPage?.nodes || []
  const buildTimeAboutNode = findAboutPageNode(buildTimePageNodes)
  const [aboutContent, setAboutContent] = React.useState(() =>
    parseAboutFromWpPage(buildTimeAboutNode)
  )

  useIsomorphicLayoutEffect(() => {
    const cached = getCachedWpAbout()
    if (cached) {
      setAboutContent(cached)
    }
  }, [])

  React.useEffect(() => {
    let isMounted = true
    fetchLiveWpAbout()
      .then(liveContent => {
        if (isMounted && liveContent) {
          setAboutContent(liveContent)
        }
      })
      .catch(() => {
        // Keep cached or build-time fallback if offline
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="about" onContactClick={() => setIsOpen(true)}>
        <ContactModal />
        <Hero content={aboutContent.hero} />
        <Intro content={aboutContent.intro} />
        <OurWorks content={aboutContent.ourWorks} />
        <Companies content={aboutContent.companies} />
        <WhyUs content={aboutContent.whyUs} />
        <BehindScenes content={aboutContent.behindScenes} />
        <WhoWeWorkWith content={aboutContent.whoWeWorkWith} />
        <OurStory content={aboutContent.ourStory} />
      </Layout>
    </ModalContext.Provider>
  )
}

export const query = graphql`
  query AboutPageWordPressQuery {
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

export default AboutPage

export const Head = () => (
  <>
    <title>About Us | Pocket Creatives</title>
    <meta
      name="description"
      content="Find out more about the Pocket Creatives production team, what we stand for and why you'd choose us."
    />
  </>
)
