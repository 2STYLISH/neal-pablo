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

/* ---------- Shared bits ---------- */

const LetsTalk = ({ className = "" }) => (
  <a href="#contact" className={`blob-btn bg-brand-blue text-white ${className}`}>
    Let's
    <br />
    Talk
  </a>
)

const SectionLabel = ({ icon, children }) => (
  <p className="flex items-center gap-4 text-xl text-brand-slate">
    {icon}
    {children}
  </p>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" />
  </svg>
)

const ApertureIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.3 8l5.7 9.9M9.7 8h11.5M7.4 12l5.7-9.9M9.7 16L4 6.1M14.3 16H2.8M16.6 12l-5.7 9.9" />
  </svg>
)

const CheckMark = () => (
  <svg viewBox="0 0 24 24" className="inline-block h-[0.55em] w-[0.55em] ml-3 align-middle" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M3 13l6 6L21 5" />
  </svg>
)

const ArrowBtn = ({ dir, onClick }) => (
  <button
    onClick={onClick}
    aria-label={dir === "left" ? "Previous" : "Next"}
    className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-yellow text-black"
  >
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
      {dir === "left" ? <path d="M19 12H5m6-6l-6 6 6 6" /> : <path d="M5 12h14m-6-6l6 6-6 6" />}
    </svg>
  </button>
)

/* ---------- Sections ---------- */

const Hero = () => (
  <section className="container-x pt-10">
    <div className="flex items-end justify-between border-b border-brand-slate/50">
      <img src={logo} alt="Pocket Creatives" className="h-12 mb-1" />
      <img src={heroPeople} alt="Photographer and videographer" className="hidden sm:block h-[84px]" />
    </div>
    <h1 className="mt-4 text-2xl md:text-[25px] font-normal leading-[1.5] tracking-[-0.02em]">
      We're a <b className="text-brand-yellow font-bold">fast</b> &amp;{" "}
      <b className="text-brand-yellow font-bold">friendly</b>{" "}
      <b className="text-brand-blue font-bold">Video Production</b> and{" "}
      <b className="text-brand-blue font-bold">Photography</b> company
      <br className="hidden md:block" /> with{" "}
      <b className="text-brand-yellow font-bold">bags of experience</b> &amp; who{" "}
      <span className="text-brand-red">❤</span> what we do :)
    </h1>
    <p className="mt-10 text-[8px]">*Click on Video to toggle sound</p>
    <img src={heroImg} alt="Pocket Creatives showreel" className="mt-1 w-full rounded-lg" />
  </section>
)

const partners = [
  [argos, "Argos"], [soapglory, "Soap & Glory"], [macmillan, "Macmillan Cancer Support"],
  [kopparberg, "Kopparberg"], [ladbrokes, "Ladbrokes"], [coop, "Co-op"],
  [businessinsider, "Business Insider"], [gymgroup, "The Gym Group"], [telegraph, "The Telegraph"],
]

const Partners = () => (
  <section className="container-x grid gap-10 py-16 md:grid-cols-[1fr_336px] md:items-start">
    <div>
      <h2 className="text-xl leading-[1.5] tracking-[-0.02em]">
        As you can see, we've <b className="text-brand-yellow font-bold">partnered</b>
        <br />
        with a lot of amazing people
      </h2>
      <p className="mt-2 text-xl font-bold tracking-[-0.03em] text-brand-blue">
        in many different Industries:
      </p>
      <p className="lorem mt-3 max-w-[330px]">{LOREM}</p>
    </div>
    <div className="grid grid-cols-3 gap-[13px]">
      {partners.map(([src, alt]) => (
        <div key={alt} className="flex h-[52px] items-center justify-center rounded-lg bg-white shadow-btn">
          <img src={src} alt={alt} className="max-h-[40px] max-w-[85%] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

const DownChevron = () => (
  <svg viewBox="0 0 120 64" className="w-28 text-white" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l54 52 54-52" />
  </svg>
)

const VideoIntro = () => (
  <section id="works" className="bg-brand-yellow">
    <div className="container-x py-40">
      <div className="md:pl-10">
        <h2 className="heading-xl text-white">
          Take a look at some
          <br />
          of our video work...
        </h2>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start">
          <p className="lorem max-w-[330px] font-medium text-black">{LOREM}</p>
          <a href="#video-production" aria-label="Scroll to videos" className="md:ml-14">
            <DownChevron />
          </a>
        </div>
      </div>
    </div>
  </section>
)

const videos = [
  { title: "Beauty", img: videoBeauty },
  { title: "Food&Drink", img: videoFood },
  { title: "Products", img: videoProducts },
  { title: "Events", img: videoEvents },
  { title: "Fashion", img: null },
]

const VideoProduction = () => {
  const scroller = React.useRef(null)
  const scroll = dir => scroller.current?.scrollBy({ left: dir * 410, behavior: "smooth" })
  return (
    <section id="video-production" className="py-14">
      <div className="container-x flex items-center justify-between">
        <SectionLabel icon={<PlayIcon />}>Video Production</SectionLabel>
        <LetsTalk className="md:mr-[-16px] -mt-6" />
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-6 flex gap-8 overflow-x-auto snap-x snap-mandatory pr-5 pl-5 lg:pl-[calc((100vw-756px)/2)]"
      >
        {videos.map((v, i) => (
          <div key={v.title} className="w-[378px] max-w-[85vw] shrink-0 snap-start">
            <h3 className="text-[40px] font-extrabold tracking-[-0.04em] text-black">{v.title}</h3>
            {v.img ? (
              <img src={v.img} alt={`${v.title} video`} className="mt-4 aspect-[378/210] w-full rounded-lg object-cover" />
            ) : (
              <div className="mt-4 aspect-[378/210] w-full rounded-lg bg-slate-300" />
            )}
            {i === 0 && (
              <>
                <p className="mt-1 text-[8px]">*Drag to play the next Video, Click to toggle sound</p>
                <div className="mt-3 flex gap-4">
                  <ArrowBtn dir="left" onClick={() => scroll(-1)} />
                  <ArrowBtn dir="right" onClick={() => scroll(1)} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const PhotoIntro = () => (
  <section className="bg-brand-blue">
    <div className="container-x py-32">
      <h2 className="heading-xl text-white">
        We <span className="text-brand-yellow">squeeze</span> quality into
        <br />
        every pixel...
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-[316px_1fr] md:gap-10">
        <p className="lorem font-medium text-black">{LOREM}</p>
        <p className="max-w-[280px] text-lg font-bold leading-[1.15] tracking-[-0.03em] text-white">
          See some of our Photography work for different industries below.
        </p>
      </div>
    </div>
  </section>
)

const photoCats = ["Beauty", "Food & Drink", "Product", "Events", "Crowdfunding", "Fashion", "People", "Jewellery"]

const photoImages = { Beauty: photoBeauty, People: photoPeople }

const Photography = () => {
  const [active, setActive] = React.useState("Beauty")
  return (
    <section className="py-14 overflow-hidden">
      <div className="container-x flex items-center justify-between">
        <SectionLabel icon={<ApertureIcon />}>Photography</SectionLabel>
        <LetsTalk className="md:mr-[-16px] -mt-6" />
      </div>
      <div className="container-x mt-8 grid gap-8 md:grid-cols-[192px_1fr] md:gap-[70px]">
        <ul>
          {photoCats.map(c => (
            <li key={c} className="border-b border-brand-slate/50">
              <button
                onClick={() => setActive(c)}
                className={`w-full py-1.5 text-left text-xl font-bold tracking-[-0.03em] ${
                  active === c ? "text-brand-yellow" : "text-brand-slate hover:text-brand-blue"
                }`}
              >
                {active === c ? `View ${c}` : c}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:mr-[calc((756px-100vw)/2)]">
          {photoImages[active] ? (
            <img src={photoImages[active]} alt={`${active} photography`} className="h-[321px] w-full object-cover object-left" />
          ) : (
            <div className="flex h-[321px] w-full items-center justify-center bg-slate-300 text-slate-500">
              {active} photography
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

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
    <div className="container-x py-20">
      <div className="flex items-start justify-between">
        <h2 className="text-4xl md:text-[42px] font-extrabold leading-[1] tracking-[-0.04em] text-white">
          {["Services", "Quality", "People"].map(w => (
            <span key={w} className="block">
              {w} - <span className="text-brand-blue">Check<CheckMark /></span>
            </span>
          ))}
        </h2>
        <a href="#contact" className="blob-btn bg-white text-brand-blue">
          Say
          <br />
          Hello
        </a>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 text-black">
        {values.map(v => (
          <div key={v.title}>
            <h3 className="text-[15px] font-medium">{v.title}</h3>
            <p className="mt-5 text-[9px] leading-[1.35]">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

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
    <section id="about" className="container-x py-14">
      <div className="grid gap-10 md:grid-cols-[288px_1fr] md:gap-[70px]">
        <div>
          <h2 className="text-xl font-bold tracking-[-0.03em]">Meet the Team</h2>
          {m.img ? (
            <img src={m.img} alt={`${m.first} ${m.last}`} className="mt-6 h-[335px] w-[288px] rounded-lg object-cover" />
          ) : (
            <div className="mt-6 flex h-[335px] w-[288px] items-center justify-center rounded-lg bg-slate-300 text-slate-500">
              {m.first}
            </div>
          )}
        </div>
        <div>
          <div className="grid max-w-[260px] grid-cols-3 gap-y-3 text-[10px] text-brand-slate">
            {team.map((t, i) => (
              <button
                key={t.first}
                onClick={() => setSelected(i)}
                className={`justify-self-start rounded-md px-3 py-1 ${i >= 3 ? "translate-x-[50%]" : ""} ${
                  i === selected ? "bg-brand-yellow text-white" : "hover:text-brand-blue"
                }`}
              >
                {t.first}
              </button>
            ))}
          </div>
          <h3 className="mt-6 text-[40px] font-extrabold tracking-[-0.04em] text-brand-yellow">
            {m.first} <span className="text-xl text-brand-blue">{m.last ?? "Surname"}</span>
          </h3>
          <ul className="mt-4 flex max-w-[230px] flex-wrap gap-x-3 gap-y-2 text-[10px] font-bold">
            {(m.roles ?? ["Role"]).map(r => <li key={r}>{r}</li>)}
          </ul>
          <p className="lorem mt-5 max-w-[310px]">{LOREM}</p>
          <div className="mt-8 flex items-center gap-8 pl-[86px]">
            <a href="#contact" className="flex h-[42px] w-[42px] -rotate-6 items-center justify-center rounded-full bg-brand-blue text-center text-[9px] font-bold leading-tight text-white">
              Msg
              <br />
              {m.first}
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-7 w-7"><rect width="24" height="24" rx="3" fill="#4E6B8A" /><path fill="#fff" d="M7 9.5h2.6V18H7zM8.3 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM11 9.5h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V18H11z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  { name: "Winnie Asawakanjanakit", text: "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)" },
  { name: "Crime And Comedy Theatre Co..", text: "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating..." },
  { name: "John Bond", text: "Very professional company to deal with and delighted with the product videos received. Always a pleasure to dela with Steven and his team." },
  { name: "Marcus Ramtohul", text: "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with..." },
  { name: "Klara Niklewicz", text: "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!" },
  { name: "More reviews", text: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare." },
]

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-6 w-6">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
)

const Reviews = () => (
  <section className="py-14">
    <div className="container-x grid gap-10 md:grid-cols-[1fr_340px] md:items-start">
      <div>
        <h2 className="text-[40px] font-extrabold leading-[1.15] tracking-[-0.04em]">
          Go behind the
          <br />
          scenes of our
          <br />
          <span className="text-brand-blue underline decoration-2 underline-offset-[10px]">5 Star</span> Service
        </h2>
        <div className="mt-5 flex items-center gap-3 text-sm font-bold leading-[1.05]">
          <GoogleG />
          <span>
            Based on
            <br />
            88 reviews
          </span>
        </div>
      </div>
      <div>
        <p className="text-[8px]">*Click on Video to toggle sound</p>
        <img src={bts} alt="Behind the scenes" className="mt-1 w-full rounded-lg" />
      </div>
    </div>
    <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto px-5 lg:pl-[calc((100vw-756px)/2-120px)]">
      {reviews.map(r => (
        <div key={r.name} className="w-[186px] shrink-0 rounded-2xl bg-[#E3E3E3] p-1.5">
          <p className="h-[118px] overflow-hidden rounded-xl bg-white p-3 text-[9px] leading-[1.45] text-black">{r.text}</p>
          <p className="px-2 py-2 text-[9px] font-bold">{r.name}</p>
        </div>
      ))}
    </div>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="container-x py-24">
    <div className="flex items-start justify-between gap-6">
      <h2 className="text-4xl md:text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em]">
        <span className="text-brand-yellow">We value</span>{" "}
        <span className="text-brand-blue">transparency</span>,
        <br />
        so let's talk about pricing.
      </h2>
      <a href="#pricing" className="shrink-0 rounded-lg bg-brand-yellow px-3 py-1 text-sm font-medium text-black shadow-btn">
        View Pricing
      </a>
    </div>
    <p className="mt-12 max-w-[370px] text-xl leading-[1.05] tracking-[-0.02em]">
      Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare.
    </p>
    <div className="mt-10 grid gap-8 md:grid-cols-[1fr_340px] md:items-start">
      <p className="text-[8px] leading-[21px] max-w-[350px]">{LOREM}</p>
      <a href="#contact" className="flex items-center justify-center gap-4 rounded-lg bg-brand-yellow py-3 shadow-btn">
        <span className="text-5xl font-extrabold tracking-[-0.04em] text-white">Request</span>
        <span className="text-center text-xl leading-[0.9] text-black">a<br />quote</span>
      </a>
    </div>
  </section>
)

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
  </>
)
