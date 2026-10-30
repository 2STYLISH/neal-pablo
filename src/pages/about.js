import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"

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

const MailIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

/* ================= 1. HERO (Exact Figma 1920 #2009:2130) ================= */
const Hero = () => {
  const { setIsOpen } = React.useContext(ModalContext)
  return (
    <section className="container-x pt-12 sm:pt-20 lg:pt-[154px] pb-16 sm:pb-24 lg:pb-[145px]">
      <div className="mx-auto max-w-[1177px]">
        <h1 className="text-[44px] sm:text-[72px] lg:text-[120px] font-normal leading-none tracking-[-0.05em] text-brand-slate">
          About us at
        </h1>
        <img
          src={pocketLogoWide}
          alt="Pocket Creatives"
          className="mt-2 w-full max-w-[1049px] h-auto object-contain"
        />

        <div className="mt-8 sm:mt-12 lg:mt-[60px] grid gap-8 lg:grid-cols-[598px_517px] lg:justify-between items-start">
          <div>
            <img
              src={heroVideo}
              alt="Pocket Creatives at work"
              className="w-full lg:w-[598px] lg:h-[352px] aspect-[598/352] object-cover"
            />
            <p className="mt-0 text-[13px] sm:text-[16px] leading-[32px] font-medium tracking-[-0.05em] text-brand-slate">
              *Click on Video to toggle sound
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <p className="w-full lg:w-[517px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[2] tracking-[-0.05em] text-brand-slate">
              Find out more about our production team, what we stand
              <br className="hidden lg:inline" /> for and why you would choose us for your next video
              <br className="hidden lg:inline" /> production or photography shoot.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 sm:mt-8 lg:mt-[43px] flex h-[56px] sm:h-[66px] w-[220px] sm:w-[253px] items-center justify-center gap-5 bg-[#55C8E4] px-6 text-[17px] sm:text-[20px] font-medium tracking-normal text-black hover:brightness-105 transition"
              style={{ boxShadow: "3px 3px 6px 0px rgba(82, 110, 135, 1)" }}
            >
              <MailIcon className="h-5 w-5 shrink-0" />
              <span>I’D LIKE TO CHAT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= 2. VIDEO PRODUCTION & PHOTOGRAPHY (Blue #2017:1058) ================= */
const Intro = () => {
  const { setIsOpen } = React.useContext(ModalContext)
  return (
    <section className="bg-brand-blue">
      <div className="container-x py-16 sm:py-24 lg:pt-[191px] lg:pb-[167px]">
        <h2 className="max-w-[1453px] text-[34px] sm:text-[52px] lg:text-[80px] font-extrabold leading-[1.0] tracking-[-0.05em] text-white">
          Video production and photography at Pocket Creatives
        </h2>
        <div className="mt-10 sm:mt-14 lg:mt-[60px] grid gap-10 lg:grid-cols-[610px_689px] lg:justify-between items-start">
          <div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[2] tracking-[-0.05em] text-black">
              Pocket Creatives is a video production and photography team built on over 16 years of experience in the
              visual and creative industries. Run by co-owners <b className="font-bold text-white">Steven</b>,{" "}
              <b className="font-bold text-white">Haider</b> and <b className="font-bold text-white">Lauren</b>, our
              team loves producing great video and photography, and we like to think that it shows in the work we
              deliver.
              <br />
              We’ve worked hard to assemble a talented team who can deliver high quality video production services, as
              well as video and photography content creation.
              <br />
              Drop us a mail, we’re a friendly bunch and are more than happy to chat about what we could offer on your
              next project!
            </p>
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
              This is
              <br />
              us...
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
const works = [
  {
    img: carSoapGlory,
    tag: "Soap And Glory",
    title: "People & Portrait Photography",
    text: "Expertly delivered product photography and product videos. From simple pack shots to creative product photography and engaging product video, high quality imagery is designed to entice the viewer and convert to a customer.",
  },
  {
    img: carHairo,
    tag: "HairO Brand Advert",
    title: "Beauty Video Production",
    text: "Expertly crafted cosmetics, personal care and beauty video and beauty photography. Creating both usage and creative product content, high quality photography shows your beauty brand in its best light.",
  },
  {
    img: carSmiles,
    tag: "Smiles Alliance",
    title: "People & Portrait Photography",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida metus eget orci iaculis, eu ornare augue auctor. Donec at sagittis magna.",
  },
]

const WorkCard = ({ item, big, onClick }) => (
  <button
    onClick={onClick}
    className={`relative shrink-0 overflow-hidden text-left transition-all duration-500 ${
      big
        ? "w-[280px] sm:w-[340px] lg:w-[430px] aspect-[430/819] z-10"
        : "w-[220px] sm:w-[270px] lg:w-[349px] aspect-[349/706] opacity-95 hover:opacity-100"
    }`}
  >
    <img src={item.img} alt={item.tag} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-yellow via-brand-yellow/95 to-transparent px-4 sm:px-6 pb-5 sm:pb-7 pt-20">
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
  </button>
)

const OurWorks = () => {
  const [active, setActive] = React.useState(1)
  const n = works.length
  const left = (active - 1 + n) % n
  const right = (active + 1) % n

  return (
    <section className="container-x pt-16 sm:pt-24 lg:pt-[139px] pb-16 sm:pb-24 lg:pb-[101px]">
      <h2 className="text-center text-[48px] sm:text-[72px] lg:text-[120px] font-bold tracking-[-0.05em] text-brand-blue leading-[1.2]">
        Our Works
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
          *Click on Video to toggle sound
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
const Companies = () => (
  <section className="pb-16 sm:pb-24 lg:pb-[118px]">
    {/* Row 1: text left (x=241, w=740), image bleeds to the right edge (x=1165, w=755, h=529) */}
    <div className="grid gap-8 lg:grid-cols-[1fr_755px] items-start">
      <div className="container-x lg:max-w-none lg:pl-[241px] lg:pr-8">
        <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.0] tracking-[-0.05em] text-brand-slate">
          We’re a <b className="font-extrabold text-brand-blue">video production</b>
          <br />
          company
        </h3>
        <div className="mt-8 sm:mt-12 lg:mt-[80px] lg:w-[740px] space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate text-justify">
          <p>
            As a video production company, we deliver high quality and engaging content for commercial, corporate,
            and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos,
            and video content for social media. Our professional video team knows how to craft the right elements
            together to convey your messages and tell your story.
          </p>
          <p>
            What are you looking for in a video production company? If it’s a creative team who are trustworthy,
            knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.
          </p>
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
          and a <b className="font-extrabold text-brand-blue">photography company too</b>…
        </h3>
        <div className="mt-8 sm:mt-12 lg:mt-[68px] lg:w-[816px] space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate text-justify">
          <p>
            As a photography company, we’re able to squeeze every pixel to deliver images that perform. A photographer
            must know how to communicate, and view a project from different perspectives, knowing how to create images
            that jump out and catch attention. We strive to do just that. We offer product photography, people
            photography and lifestyle photography across a wide range of sectors.
          </p>
          <p>
            As a content creation company, we know how to give you the best of both worlds: through the use of video
            production to tell a story across multiple shots, or where a single photograph has to say it all.
          </p>
        </div>
      </div>
    </div>
  </section>
)

/* ================= 5. WHY WORK WITH US (Yellow + Blue Drag Strip #2106:754) ================= */
const whyCards = [
  ["We care about how it feels", ["Good content matters—but so does the experience. From first chat to final edit, we keep things easy, honest, and collaborative. We listen, we guide, and we make sure the process feels smooth from start to finish."]],
  ["We work around you", ["Every client’s different, so we don’t approach projects the same way. We’re flexible with pricing, clear about costs, and always happy to find smart ways to make your budget go further."]],
  ["We make visuals that speak", ["We don’t just shoot pretty pictures.  We tell stories.  We use styling, locations, and talent to help your brand stand out and feel real. We want to help you surpass expectations and achieve more than simply keeping up with your competition."]],
  ["Values You Can Feel", ["We treat every client like a partner and stay flexible across industries.  We work fast when needed, stay kind always, and commit to working transparently.  We believe in being kind, honest, and easy to work with because that’s how great work gets made."]],
  ["We understand urgency!", ["We know how important it is for you to have it done yesterday and capitalise on the now.", "Getting your content in front of your audience at the right time is so important, particularly in today’s trend and time-driven world. Good planning, organisation and communication is the key."]],
  ["We want to help you stand out", ["Our video and photography content says more, shouts louder, and travels further. We want to stay true to the quote that an image is worth a thousand words… and counting!", "There’s a time and a place for simple product images isolated against white backgrounds, and we offer those as well. But to get the best from us, we want to make use of locations, props, styling, and models as they all help to tell your story for a greater visual impact."]],
  ["We always put our clients first", ["You’re more important to us than anything.", "We wouldn’t exist without you, we know that, so we’ll do our very best to make sure that you’re always happy with our video and photography content, and you want to work with us time and again. We’ve built long-standing and trustworthy relationships with our clients since we started, so that we can partner each other as we grow."]],
  ["We champion young talent", ["Fresh ideas, energy and drive, and a sense of ownership and responsibility, guided by experience… at your disposal.", "So whether you’re looking for content creation for social media, event filming in London, or just a video editor, we can deliver the talent.", "This year, we have also been a part of the government’s Kickstart scheme to help a new entrant into the industry."]],
]

const WhyUs = () => {
  const drag = useDragScroll()
  return (
    <section className="bg-brand-yellow pt-16 sm:pt-24 lg:pt-[101px] pb-16 sm:pb-24 lg:pb-[146px]">
      <div className="container-x">
        <h2 className="lg:-ml-[24px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
          Why work with us?
        </h2>
        <p className="mt-6 lg:mt-[23px] max-w-[1443px] text-[18px] sm:text-[24px] lg:text-[30px] font-medium leading-[1.43] tracking-[-0.05em] text-black">
          We make content that feels real and works hard. You get a team that listens, adapts, and delivers with care,
          creativity, and no fuss. We’re here to help you stand out without making things complicated.
        </p>
      </div>
      {/* Blue strip starts at x=216 and bleeds off the right side */}
      <div className="mt-8 sm:mt-14 lg:mt-[57px] ml-[20px] sm:ml-[37px] lg:ml-[216px] bg-brand-blue lg:min-h-[452px]">
        <div
          {...drag}
          className="no-scrollbar flex overflow-x-auto cursor-grab active:cursor-grabbing select-none py-10 sm:py-12 lg:pt-[48px] lg:pb-[48px] pl-6 sm:pl-12 lg:pl-[64px]"
        >
          {whyCards.map(([title, paras]) => (
            <div key={title} className="w-[280px] sm:w-[350px] lg:w-[394px] shrink-0 pr-8 sm:pr-[40px] text-white">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold leading-[1.05] tracking-[-0.05em]">
                {title}
              </h3>
              <div className="mt-6 space-y-4 text-[15px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
                {paras.map((t, i) => (
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
const BehindScenes = () => (
  <section className="mx-auto w-full max-w-[1563px] px-5 sm:px-9 lg:px-0 pt-16 sm:pt-24 lg:pt-[113px] pb-16 sm:pb-24 lg:pb-[113px]">
    <p className="max-w-[1411px] text-[22px] sm:text-[30px] lg:text-[40px] font-normal leading-[1.2] tracking-[-0.05em] text-black lg:pl-[69px]">
      Want to know a bit more about who we work with, and <b className="font-bold">what makes a ‘Pocket Person’?</b> Go
      behind the scenes to see{" "}
      <Link to="/how-we-work" className="underline hover:text-brand-blue transition">
        how we work
      </Link>{" "}
      in action…
    </p>
    <div className="mt-8 sm:mt-14 lg:mt-[84px] bg-white">
      <img src={bts} alt="Behind the scenes at Pocket Creatives" className="w-full lg:w-[1563px] lg:h-[738px] aspect-[1563/738] object-cover" />
    </div>
    <p className="mt-0 text-[13px] sm:text-[16px] leading-[32px] font-medium tracking-[-0.05em] text-brand-slate">
      *Click on Video to toggle sound
    </p>
  </section>
)

/* ================= 7. WHO WE WORK WITH (#2106:756) ================= */
const logos = [
  [logoArgos, "Argos"], [logoSoapGlory, "Soap & Glory"], [logoMacmillan, "Macmillan Cancer Support"],
  [logoKopparberg, "Kopparberg"], [logoLadbrokes, "Ladbrokes"], [logoCoop, "Co-op"],
  [logoBusinessInsider, "Business Insider"], [logoGymGroup, "The Gym Group"], [logoTelegraph, "The Telegraph"],
]

const WhoWeWorkWith = () => (
  <section className="bg-brand-blue">
    <div className="container-x py-16 sm:py-24 lg:pt-[241px] lg:pb-[159px]">
      <h2 className="lg:-ml-[21px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
        Who We Work With
      </h2>
      <div className="mt-8 sm:mt-12 lg:mt-[34px] grid gap-10 lg:grid-cols-[638px_632px] lg:gap-[78px] lg:pl-[48px]">
        <div className="space-y-6 text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[1.2] tracking-[-0.05em] text-white">
          <p>
            We have provided video and photography services to a huge variety of clients in our history, from
            crowdfunders and startups through to more established names and global businesses. We love that mix, and
            being entrusted with the visuals for clients of any size is extremely satisfying.
          </p>
          <p>
            We work with most clients directly, and we’re also able to provide our services to agencies and other
            creative companies who don’t have access to video and photography services in house.
          </p>
          <p>
            We’re very proud to have worked with known clients such as{" "}
            <span className="bg-brand-yellow px-1.5 font-bold text-black">Prestige Flowers</span> and many more
            emerging names that you’ll come to know very soon.
          </p>
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
          <a
            href="#contact"
            className="col-start-3 flex aspect-[2/1] lg:h-[100px] items-center justify-end rounded-[12px] sm:rounded-[16px] bg-brand-yellow p-2 sm:p-4 text-right text-[11px] sm:text-[16px] lg:text-[20px] font-medium leading-[1.2] tracking-normal text-black"
            style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.12)" }}
          >
            <span>
              You can see what they say about us <span className="underline">here</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

/* ================= 8. OUR STORY (Timeline Drag Scroll #2187:1714) ================= */
const story = [
  { type: "year", label: "2017" },
  { type: "dot", pos: "below", text: "Steven’s professional history started in broadcasting, supporting mainstream television programmes such as BBC’s Watchdog, Crimewatch and Horizon and leading a 10-person team running 24/7 to make this happen." },
  { type: "dot", pos: "above", text: "But photography and video production was always the passion, and he burnt all the hours in the day running a small, innovative corporate video production company alongside called Screensaver which could boast clients such as Tower Bridge, the Museum of London and the National Portrait Gallery. This paved the way to progress full time into the production world and merged into Tailwind Media into 2010." },
  { type: "dot", pos: "below", text: "For 6 years, Steven oversaw the production team, making impressive in-roads into the UK corporate video market, working with some of the country’s biggest names. Highlights would include a huge change campaign for Arcadia; helping to update the internal communications video magazine for electronics giant Philips, working with pop star Olly Murs for the Pringles 25th birthday adverts, and overseeing a multitude of projects for Tesco, Currys PC World and Groupon to name just a few." },
  { type: "dot", pos: "above", text: "2015 saw the creation of SMC, after Steven wanted to take a different direction, by offering both video and photography. Haider Romero Perez and Lauren Hodge were invited to join, bringing a wealth of skill, enthusiasm, and drive and within 2 years have become co-owners of the newly incorporated Pocket Creatives." },
  { type: "dot", pos: "below", text: "“SMC provided a wonderful opportunity to meet new business owners and establish ourselves in new markets, offering new video and photography services and building a friendly and creative business where we’re building long-term working relationships with our clients. Pocket Creatives couldn’t have been launched without the faith and trust shown in us by our clients, and we look forward to growing alongside them over the years to come.”" },
  { type: "year", label: "2025", text: "Now, embarking on our 6th year in business together, we’ve reached one milestone after the next. We boast an enviable client list, with impressive client retention numbers and have built a a genuinely wonderful team around us." },
]

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

const OurStory = () => {
  const drag = useDragScroll()
  const scrollNext = () => drag.ref.current?.scrollBy({ left: 500, behavior: "smooth" })

  return (
    <section className="bg-white py-16 sm:py-24 lg:pt-[165px] lg:pb-[54px]">
      <div className="container-x">
        <div className="mx-auto max-w-[1177px]">
          <h2 className="text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1.2] tracking-[-0.05em] text-brand-blue">
            Our Story
          </h2>
          <p className="mt-6 lg:mt-[36px] max-w-[721px] text-[20px] sm:text-[28px] lg:text-[40px] font-medium leading-[1.2] tracking-[-0.05em] text-brand-slate">
            <b className="font-bold">Pocket Creatives</b> launched in the winter of 2017, formed as a limited company following the team working
            under the name of Steven Mayatt Creative since 2015. Pocket is the next step in our evolution.
          </p>
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
const AboutPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="about" onContactClick={() => setIsOpen(true)}>
        <ContactModal />
        <Hero />
        <Intro />
        <OurWorks />
        <Companies />
        <WhyUs />
        <BehindScenes />
        <WhoWeWorkWith />
        <OurStory />
      </Layout>
    </ModalContext.Provider>
  )
}

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
