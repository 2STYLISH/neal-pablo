import * as React from "react"
import Layout from "../components/Layout"

const Img = ({ label, className = "" }) => (
  <div className={`placeholder-img ${className}`}>{label}</div>
)

const Hero = () => (
  <section className="container-x pb-16">
    <h1 className="text-2xl md:text-4xl font-semibold leading-snug max-w-4xl">
      We're <span className="text-brand-blue">Fast & Friendly</span> Video
      Production 🎬 Photography 📸 Studio with{" "}
      <span className="text-brand-yellow">Heaps of experience</span> & lots of{" "}
      <span className="text-brand-red">♥</span> for what we do.
    </h1>
    <Img label="Hero image / video" className="mt-8 aspect-[16/9] rounded-lg" />
    <div className="mt-10 grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-xl font-semibold">
          Since we started we've <span className="text-brand-blue">produced</span>{" "}
          content for 100+ brands
        </h2>
        <p className="mt-2 font-semibold text-brand-blue">
          In many different industries
        </p>
        <p className="mt-3 text-sm text-slate-600">
          From small local businesses to national brands, we create content that
          tells your story and gets results.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Img key={i} label="Logo" className="h-14 rounded" />
        ))}
      </div>
    </div>
  </section>
)

const VideoCta = () => (
  <section id="video" className="bg-brand-yellow">
    <div className="container-x py-24 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
        Take a look at some
        <br />
        of our video work...
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-brand-navy/80">
        A selection of recent projects across a range of industries — scroll
        down to explore.
      </p>
      <svg className="mx-auto mt-8 h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path d="M4 8l8 8 8-8" />
      </svg>
    </div>
  </section>
)

const categories = ["Beauty", "Food & Drink", "Products", "Events", "Fashion"]

const VideoCategories = () => (
  <section className="py-16">
    <div className="container-x flex items-center justify-between">
      <p className="font-semibold">▶ Video categories</p>
      <button aria-label="Next" className="h-10 w-10 rounded-full bg-brand-blue text-white">→</button>
    </div>
    <div className="mt-8 flex gap-6 overflow-x-auto px-5 md:px-8 snap-x">
      {categories.map(c => (
        <div key={c} className="min-w-[80%] md:min-w-[45%] snap-start">
          <h3 className="text-2xl font-bold mb-3">{c}</h3>
          <Img label={`${c} video`} className="aspect-video rounded-lg" />
        </div>
      ))}
    </div>
  </section>
)

const Quality = () => (
  <section id="photography" className="bg-brand-blue text-white">
    <div className="container-x py-24">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        We <span className="text-brand-yellow">squeeze</span> quality into
        <br />
        every pixel...
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 text-sm">
        <p className="opacity-90">
          Our photography service covers products, food, people and spaces —
          shot in our studio or on location.
        </p>
        <p className="font-semibold">
          Browse our photography work for different industries below.
        </p>
      </div>
    </div>
  </section>
)

const photoCats = ["Hair Beauty", "Food & Drink", "Products", "Events", "Brand Building", "Fashion", "People", "Jewellery"]

const PhotoCategories = () => {
  const [active, setActive] = React.useState(photoCats[0])
  return (
    <section className="container-x py-16">
      <p className="font-semibold mb-6">📷 Photographs</p>
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <ul className="space-y-2">
          {photoCats.map(c => (
            <li key={c}>
              <button
                onClick={() => setActive(c)}
                className={`w-full text-left px-3 py-1.5 text-sm border-b ${
                  active === c ? "bg-brand-yellow font-semibold" : "hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
        <Img label={`${active} photo`} className="aspect-[16/9] rounded-lg !from-brand-pink !to-pink-200" />
      </div>
    </section>
  )
}

const services = [
  { t: "Service", d: "We turn projects around fast without cutting corners." },
  { t: "Quality", d: "Professional kit, experienced crew and a sharp eye for detail." },
  { t: "People", d: "Friendly, easy to work with, and invested in your success." },
]

const Check = () => (
  <section id="about" className="bg-brand-yellow">
    <div className="container-x py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
        {services.map(s => (
          <span key={s.t} className="block">
            {s.t}s - <span className="text-brand-blue">Check ✓</span>
          </span>
        ))}
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3 text-sm">
        {services.map(s => (
          <div key={s.t}>
            <h3 className="font-bold mb-2">{s.t}</h3>
            <p className="text-brand-navy/80">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Team = () => (
  <section className="container-x py-20">
    <p className="font-semibold mb-6">Meet the Team</p>
    <div className="grid gap-10 md:grid-cols-[300px_1fr] items-start">
      <Img label="Team photo" className="aspect-[4/5] rounded-lg" />
      <div>
        <div className="flex gap-2 mb-4">
          {["Steven", "Member 2", "Member 3"].map((n, i) => (
            <span key={n} className={`rounded-full px-3 py-1 text-xs ${i === 0 ? "bg-brand-yellow font-semibold" : "bg-slate-100"}`}>{n}</span>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-brand-blue">
          Steven <span className="text-base text-slate-500">(he/him)</span>
        </h3>
        <p className="mt-1 text-sm font-semibold">Founder · Director · Videographer</p>
        <p className="mt-4 text-sm text-slate-600 max-w-xl">
          Short bio goes here — background, specialities, and what he loves
          about the work.
        </p>
      </div>
    </div>
  </section>
)

const Reviews = () => (
  <section className="bg-slate-50 py-20">
    <div className="container-x grid gap-10 md:grid-cols-2 items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Go behind the scenes of our{" "}
        <span className="text-brand-yellow">5 Star Service</span> ★
      </h2>
      <Img label="Behind the scenes" className="aspect-video rounded-lg" />
    </div>
    <div className="container-x mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg bg-white p-5 shadow-sm text-sm">
          <p className="text-brand-yellow">★★★★★</p>
          <p className="mt-2 text-slate-600">"Fantastic team, great results and super quick turnaround."</p>
          <p className="mt-3 font-semibold">Client {i + 1}</p>
        </div>
      ))}
    </div>
  </section>
)

const Pricing = () => (
  <section className="container-x py-20 grid gap-10 md:grid-cols-2 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
        We value <span className="text-brand-yellow">transparency</span>, so
        let's talk about pricing.
      </h2>
      <p className="mt-4 text-sm text-slate-600">
        Every project is different. Request our price guide to get a clear idea
        of costs up front.
      </p>
    </div>
    <div className="md:text-right">
      <a href="#contact" className="inline-block rounded bg-brand-yellow px-10 py-5 text-3xl font-extrabold text-white shadow hover:brightness-95">
        Request <span className="block text-base text-brand-navy">our price guide</span>
      </a>
    </div>
  </section>
)

const IndexPage = () => (
  <Layout>
    <Hero />
    <VideoCta />
    <VideoCategories />
    <Quality />
    <PhotoCategories />
    <Check />
    <Team />
    <Reviews />
    <Pricing />
  </Layout>
)

export default IndexPage

export const Head = () => <title>Neal Pablo | Video & Photography</title>
