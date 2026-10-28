import * as React from "react"
import Layout from "../components/Layout"

import logo from "../images/logo.png"
import heroImg from "../images/hero.png"
import heroPeople from "../images/hero-people.png"
import videoBeauty from "../images/video-beauty.png"
import videoFood from "../images/video-food.png"
import videoProducts from "../images/video-products.png"
import videoEvents from "../images/video-events.png"
import photoBeauty from "../images/photo-beauty.png"
import photoPeople from "../images/photo-people.png"
import steven from "../images/steven.png"
import bts from "../images/bts.png"
import argos from "../images/logo-argos.png"
import soapglory from "../images/logo-soapglory.png"
import macmillan from "../images/logo-macmillan.png"
import kopparberg from "../images/logo-kopparberg.png"
import ladbrokes from "../images/logo-ladbrokes.png"
import coop from "../images/logo-coop.png"
import businessinsider from "../images/logo-businessinsider.png"
import gymgroup from "../images/logo-gymgroup.png"
import telegraph from "../images/logo-telegraph.png"

const LOREM =
  "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."

/* ---------- Shared UI Elements ---------- */

const LetsTalk = ({ className = "" }) => (
  <a href="#contact" className={`blob-btn bg-brand-blue text-white ${className}`}>
    <span>
      Let's
      <br />
      Talk
    </span>
  </a>
)

const SectionLabel = ({ icon, children }) => (
  <div className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl font-semibold text-brand-slate">
    {icon}
    <span>{children}</span>
  </div>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </svg>
)

const ApertureIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.3 8l5.7 9.9M9.7 8h11.5M7.4 12l5.7-9.9M9.7 16L4 6.1M14.3 16H2.8M16.6 12l-5.7 9.9" />
  </svg>
)

const CheckMark = () => (
  <svg viewBox="0 0 24 24" className="inline-block h-[0.7em] w-[0.7em] ml-2 sm:ml-3 align-middle" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M3 13l6 6L21 5" />
  </svg>
)

const ArrowBtn = ({ dir, onClick }) => (
  <button
    onClick={onClick}
    aria-label={dir === "left" ? "Previous" : "Next"}
    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-brand-yellow text-black hover:brightness-95 transition shadow-sm"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
      {dir === "left" ? <path d="M19 12H5m6-6l-6 6 6 6" /> : <path d="M5 12h14m-6-6l6 6-6 6" />}
    </svg>
  </button>
)

/* ---------- 1. Hero Section ---------- */

const Hero = () => (
  <section className="container-x pt-6 sm:pt-10 md:pt-14">
    <div className="flex items-end justify-between border-b border-brand-slate/30 pb-4">
      <img src={logo} alt="Pocket Creatives" className="h-10 sm:h-14 md:h-16 object-contain" />
      <img src={heroPeople} alt="Photographer and videographer" className="hidden sm:block h-16 sm:h-24 md:h-28 object-contain" />
    </div>

    <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.35] tracking-tight max-w-5xl">
      We're a <b className="text-brand-yellow font-bold">fast</b> &amp;{" "}
      <b className="text-brand-yellow font-bold">friendly</b>{" "}
      <b className="text-brand-blue font-bold">Video Production</b> and{" "}
      <b className="text-brand-blue font-bold">Photography</b> company
      <br className="hidden md:block" /> with{" "}
      <b className="text-brand-yellow font-bold">bags of experience</b> &amp; who{" "}
      <span className="text-brand-red">❤</span> what we do :)
    </h1>

    <div className="mt-8 sm:mt-12">
      <p className="text-xs sm:text-sm text-brand-slate/70 mb-2 font-medium">*Click on Video to toggle sound</p>
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-black">
        <img
          src={heroImg}
          alt="Pocket Creatives showreel"
          className="w-full max-h-[700px] object-cover hover:scale-[1.01] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
)

/* ---------- 2. Partners Section ---------- */

const partners = [
  [argos, "Argos"], [soapglory, "Soap & Glory"], [macmillan, "Macmillan Cancer Support"],
  [kopparberg, "Kopparberg"], [ladbrokes, "Ladbrokes"], [coop, "Co-op"],
  [businessinsider, "Business Insider"], [gymgroup, "The Gym Group"], [telegraph, "The Telegraph"],
]

const Partners = () => (
  <section className="container-x py-16 sm:py-24 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
    <div className="max-w-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight">
        As you can see, we've <b className="text-brand-yellow font-bold">partnered</b>
        <br />
        with a lot of amazing people
      </h2>
      <p className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-blue">
        in many different Industries:
      </p>
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-brand-slate max-w-xl">{LOREM}</p>
    </div>

    <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full lg:w-[480px]">
      {partners.map(([src, alt]) => (
        <div
          key={alt}
          className="flex h-16 sm:h-20 md:h-24 items-center justify-center rounded-xl bg-white shadow-btn p-3 transition hover:shadow-md hover:-translate-y-0.5"
        >
          <img src={src} alt={alt} className="max-h-10 sm:max-h-12 max-w-[85%] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

/* ---------- 3. Video Intro Banner ---------- */

const DownChevron = () => (
  <svg viewBox="0 0 120 64" className="w-20 sm:w-28 text-white hover:translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l54 52 54-52" />
  </svg>
)

const VideoIntro = () => (
  <section id="works" className="bg-brand-yellow">
    <div className="container-x py-20 sm:py-32 md:py-40">
      <div className="max-w-4xl">
        <h2 className="heading-xl text-white">
          Take a look at some
          <br />
          of our video work...
        </h2>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
          <p className="text-sm sm:text-base leading-relaxed font-medium text-black max-w-lg">{LOREM}</p>
          <a href="#video-production" aria-label="Scroll to videos" className="self-start sm:self-center">
            <DownChevron />
          </a>
        </div>
      </div>
    </div>
  </section>
)

/* ---------- 4. Video Production Carousel ---------- */

const videos = [
  { title: "Beauty", img: videoBeauty },
  { title: "Food&Drink", img: videoFood },
  { title: "Products", img: videoProducts },
  { title: "Events", img: videoEvents },
  { title: "Fashion", img: null },
]

const VideoProduction = () => {
  const scroller = React.useRef(null)
  const scroll = dir => {
    if (scroller.current) {
      const cardWidth = scroller.current.querySelector(".video-card")?.offsetWidth || 400
      scroller.current.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" })
    }
  }

  return (
    <section id="video-production" className="py-16 sm:py-24">
      <div className="container-x flex items-center justify-between mb-8">
        <SectionLabel icon={<PlayIcon />}>Video Production</SectionLabel>
        <LetsTalk className="-mt-4" />
      </div>

      <div
        ref={scroller}
        className="no-scrollbar flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory px-4 sm:px-8 md:px-12 lg:px-16"
      >
        {videos.map((v, i) => (
          <div
            key={v.title}
            className="video-card w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] shrink-0 snap-start"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-3">
              {v.title}
            </h3>
            {v.img ? (
              <img
                src={v.img}
                alt={`${v.title} video`}
                className="aspect-video w-full rounded-2xl object-cover shadow-md hover:shadow-lg transition-shadow"
              />
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-slate-300 flex items-center justify-center text-slate-600 font-semibold">
                {v.title}
              </div>
            )}
            {i === 0 && (
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-brand-slate/80 font-medium">*Drag to play the next Video, Click to toggle sound</p>
                <div className="flex gap-2">
                  <ArrowBtn dir="left" onClick={() => scroll(-1)} />
                  <ArrowBtn dir="right" onClick={() => scroll(1)} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- 5. Photography Intro Banner ---------- */

const PhotoIntro = () => (
  <section className="bg-brand-blue">
    <div className="container-x py-20 sm:py-32 md:py-40">
      <h2 className="heading-xl text-white">
        We <span className="text-brand-yellow">squeeze</span> quality into
        <br className="hidden sm:block" />
        every pixel...
      </h2>
      <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-10 md:grid-cols-2 max-w-4xl">
        <p className="text-sm sm:text-base leading-relaxed font-medium text-white/90">{LOREM}</p>
        <p className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-white">
          See some of our Photography work for different industries below.
        </p>
      </div>
    </div>
  </section>
)

/* ---------- 6. Photography Showcase ---------- */

const photoCats = ["Beauty", "Food & Drink", "Product", "Events", "Crowdfunding", "Fashion", "People", "Jewellery"]
const photoImages = { Beauty: photoBeauty, People: photoPeople }

const Photography = () => {
  const [active, setActive] = React.useState("Beauty")
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="container-x flex items-center justify-between mb-8 sm:mb-12">
        <SectionLabel icon={<ApertureIcon />}>Photography</SectionLabel>
        <LetsTalk className="-mt-4" />
      </div>

      <div className="container-x grid gap-8 lg:grid-cols-[280px_1fr] items-start">
        {/* Category tabs */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          {photoCats.map(c => {
            const isSelected = active === c
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`py-2 px-3 text-left text-lg sm:text-xl md:text-2xl font-bold tracking-tight rounded-lg transition-all border-b lg:border-b-2 ${
                  isSelected
                    ? "text-brand-yellow border-brand-yellow bg-yellow-50/50"
                    : "text-brand-slate border-brand-slate/20 hover:text-brand-blue hover:border-brand-blue"
                }`}
              >
                {isSelected ? `View ${c}` : c}
              </button>
            )
          })}
        </div>

        {/* Category Image */}
        <div className="w-full">
          {photoImages[active] ? (
            <img
              src={photoImages[active]}
              alt={`${active} photography`}
              className="h-[360px] sm:h-[480px] md:h-[580px] w-full rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className="flex h-[360px] sm:h-[480px] md:h-[580px] w-full items-center justify-center rounded-2xl bg-slate-200 text-slate-500 font-semibold text-xl">
              {active} photography
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------- 7. Services & Quality - Check ---------- */

const values = [
  {
    title: "Proactive",
    text: "We pride ourselves on our quality of service above everything else. We've taken the time to build a cracking little team at Pocket, and we make sure that you feel the benefits of working with a dedicated video production company who are there for you, and dedicated to the success of your project.",
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

const Services = () => (
  <section id="services" className="bg-brand-yellow">
    <div className="container-x py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-white">
          {["Services", "Quality", "People"].map(w => (
            <span key={w} className="block mb-2">
              {w} - <span className="text-brand-blue">Check<CheckMark /></span>
            </span>
          ))}
        </h2>
        <a href="#contact" className="blob-btn bg-white text-brand-blue">
          <span>
            Say
            <br />
            Hello
          </span>
        </a>
      </div>

      <div className="mt-12 sm:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-black">
        {values.map(v => (
          <div key={v.title} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{v.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed font-medium">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ---------- 8. Meet the Team ---------- */

const team = [
  {
    first: "Steven",
    last: "Mayatt",
    img: steven,
    roles: ["Managing Director", "Creative Director", "Photographer", "Entrepreneur", "Marketeer", "Coffee Drinker"],
  },
  { first: "Haider" },
  { first: "Lauren" },
  { first: "Ned" },
  { first: "Connor" },
  { first: "Rauchan" },
]

const Team = () => {
  const [selected, setSelected] = React.useState(0)
  const m = team[selected]

  return (
    <section id="about" className="container-x py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">Meet the Team</h2>

      <div className="grid gap-10 lg:grid-cols-[400px_1fr] items-start">
        {/* Team Photo */}
        <div>
          {m.img ? (
            <img
              src={m.img}
              alt={`${m.first} ${m.last || ""}`}
              className="w-full max-h-[520px] rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className="flex h-[400px] w-full items-center justify-center rounded-2xl bg-slate-200 text-slate-500 font-semibold text-2xl">
              {m.first}
            </div>
          )}
        </div>

        {/* Member Details */}
        <div>
          {/* Member selector tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {team.map((t, i) => (
              <button
                key={t.first}
                onClick={() => setSelected(i)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition ${
                  i === selected
                    ? "bg-brand-yellow text-black shadow-sm"
                    : "bg-white text-brand-slate hover:text-black border border-brand-slate/20"
                }`}
              >
                {t.first}
              </button>
            ))}
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-yellow">
            {m.first} <span className="text-2xl sm:text-3xl text-brand-blue font-bold">{m.last || ""}</span>
          </h3>

          <ul className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm font-bold text-black">
            {(m.roles || ["Team Member"]).map(r => (
              <li key={r} className="bg-slate-200/70 px-3 py-1 rounded-md">
                {r}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-brand-slate max-w-xl">{LOREM}</p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="flex h-12 w-12 -rotate-6 items-center justify-center rounded-full bg-brand-blue text-center text-xs font-bold leading-tight text-white hover:rotate-0 hover:scale-105 transition shadow-btn"
            >
              Msg
              <br />
              {m.first}
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" className="h-8 w-8">
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

/* ---------- 9. 5-Star Service & Reviews ---------- */

const reviews = [
  { name: "Winnie Asawakanjanakit", text: "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)" },
  { name: "Crime And Comedy Theatre Co..", text: "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating..." },
  { name: "John Bond", text: "Very professional company to deal with and delighted with the product videos received. Always a pleasure to dela with Steven and his team." },
  { name: "Marcus Ramtohul", text: "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with..." },
  { name: "Klara Niklewicz", text: "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!" },
  { name: "More reviews", text: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare." },
]

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
)

const Reviews = () => (
  <section className="py-16 sm:py-24">
    <div className="container-x grid gap-10 lg:grid-cols-[1fr_auto] items-center mb-12">
      <div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
          Go behind the
          <br />
          scenes of our
          <br />
          <span className="text-brand-blue underline decoration-4 underline-offset-8">5 Star</span> Service
        </h2>
        <div className="mt-6 flex items-center gap-3 text-base sm:text-lg font-bold">
          <GoogleG />
          <span>
            Based on
            <br />
            88 reviews
          </span>
        </div>
      </div>

      <div className="w-full lg:w-[480px]">
        <p className="text-xs text-brand-slate/80 font-medium mb-1">*Click on Video to toggle sound</p>
        <img src={bts} alt="Behind the scenes" className="w-full rounded-2xl shadow-lg object-cover" />
      </div>
    </div>

    {/* Review cards */}
    <div className="no-scrollbar flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 md:px-12 lg:px-16">
      {reviews.map(r => (
        <div
          key={r.name}
          className="w-[240px] sm:w-[280px] shrink-0 rounded-2xl bg-[#E3E3E3] p-2 flex flex-col justify-between shadow-sm"
        >
          <p className="h-[140px] overflow-hidden rounded-xl bg-white p-4 text-xs leading-relaxed text-black">
            {r.text}
          </p>
          <p className="px-3 py-2 text-xs font-bold text-black truncate">{r.name}</p>
        </div>
      ))}
    </div>
  </section>
)

/* ---------- 10. Pricing & CTA ---------- */

const Pricing = () => (
  <section id="pricing" className="container-x py-16 sm:py-24 border-t border-brand-slate/20">
    <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl">
        <span className="text-brand-yellow">We value</span>{" "}
        <span className="text-brand-blue">transparency</span>,
        <br />
        so let's talk about pricing.
      </h2>
      <a
        href="#pricing"
        className="shrink-0 rounded-xl bg-brand-yellow px-5 py-2.5 text-sm sm:text-base font-bold text-black shadow-btn hover:brightness-95 transition"
      >
        View Pricing
      </a>
    </div>

    <p className="mt-8 sm:mt-10 max-w-2xl text-lg sm:text-2xl font-normal leading-snug tracking-tight">
      Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
    </p>

    <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
      <p className="text-xs sm:text-sm leading-relaxed text-brand-slate max-w-xl">{LOREM}</p>
      <a
        href="#contact"
        className="flex items-center justify-center gap-4 rounded-2xl bg-brand-yellow px-8 py-5 shadow-btn hover:scale-[1.02] transition-transform w-full sm:w-auto"
      >
        <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Request</span>
        <span className="text-center text-lg sm:text-xl font-bold leading-tight text-black">
          a<br />quote
        </span>
      </a>
    </div>
  </section>
)

/* ---------- Main Index Page Component ---------- */

const IndexPage = () => (
  <Layout>
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
)

export default IndexPage

export const Head = () => (
  <>
    <title>Pocket Creatives | Video Production &amp; Photography</title>
    <meta name="description" content="Fast & friendly Video Production and Photography company with bags of experience." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
)
