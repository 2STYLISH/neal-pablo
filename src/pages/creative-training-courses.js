import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import SoundVideo from "../components/SoundVideo"

import heroVideoThumb from "../images/training/hero-video-thumb.png"
import btsSlide1 from "../images/training/bts-slide-1.png"
import btsSlide2 from "../images/training/bts-slide-2.png"
import btsSlide3 from "../images/training/bts-slide-3.png"
import btsSlide4 from "../images/training/bts-slide-4.png"
import riverGroupImg from "../images/training/river-group.png"
import quoteOpenLg from "../images/training/quote-open-lg.png"
import quoteCloseLg from "../images/training/quote-close-lg.png"

const exampleCourses = [
  {
    front: "Those new to the industry might be interested in",
    backItems: [
      "Camera setup and best practice",
      "Lighting techniques",
      "Getting started with professional video editing",
    ],
    backFontSize: "text-[26px] sm:text-[32px] lg:text-[40px] leading-[1]",
  },
  {
    front: "Photographers adding video production to their offering",
    backItems: [
      "How to take what you know in photography and apply it to moving imagery",
      "Editing for video",
    ],
    backFontSize: "text-[26px] sm:text-[32px] lg:text-[40px] leading-[1]",
  },
  {
    front: "Video production professionals adding new services or sectors",
    backItems: [
      "You might work in food & drink but are keen to add the ability to shoot products",
      "Tackling events",
      "Working in the studio",
      "Building confidence with recording sound",
    ],
    backFontSize: "text-[22px] sm:text-[28px] lg:text-[38px] leading-[1]",
  },
]

const btsSlides = [
  { poster: btsSlide1, video: "/videos/water-texture-bts.mp4", alt: "Behind the scenes creative training course slide 1" },
  { poster: btsSlide2, video: "/videos/ayumi-bts.mp4", alt: "Behind the scenes creative training course slide 2" },
  { poster: btsSlide3, video: "/videos/james-read-tan.mp4", alt: "Behind the scenes creative training course slide 3" },
  { poster: btsSlide4, video: "/videos/hazzys-bts.mp4", alt: "Behind the scenes creative training course slide 4" },
]

const CardArrow = ({ className = "text-black" }) => (
  <svg
    viewBox="0 0 44 20"
    className={`w-[42px] h-[18px] ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M1 10h40M33 2l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CreativeTrainingCoursesPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [flipped, setFlipped] = React.useState([false, false, false])
  const [activeSlide, setActiveSlide] = React.useState(0)

  const toggleCard = idx => {
    setFlipped(prev => prev.map((v, i) => (i === idx ? !v : v)))
  }

  const prevBts = () => {
    setActiveSlide(prev => (prev - 1 + btsSlides.length) % btsSlides.length)
  }

  const nextBts = () => {
    setActiveSlide(prev => (prev + 1) % btsSlides.length)
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="services" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: CHECK OUT OUR NEW IN-PERSON CREATIVE TRAINING COURSES (#2850:1928, x:240, y:221, w:1440, h:712) */}
        <section className="pt-12 sm:pt-16 lg:pt-[125px] pb-16 sm:pb-24 lg:pb-[123px]">
          <div className="container-x">
            {/* Heading (#2850:1929, w:1440, h:240) */}
            <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-medium leading-[1] tracking-[-0.05em] text-brand-slate max-w-[1440px]">
              Check out our new in-person{" "}
              <span className="font-bold text-brand-yellow">creative</span>{" "}
              <span className="font-bold text-brand-blue">training courses</span> in video production and photography
            </h1>

            {/* 2-Column Content Row (y:549, mt:88px) */}
            <div className="mt-10 sm:mt-14 lg:mt-[88px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[75px]">
              {/* Left Copy (#2850:1930, w:763, h:240) */}
              <div className="w-full lg:w-[763px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-brand-slate text-justify space-y-6">
                <p>
                  Sometimes you want to do it for yourself. And in some ways it has never been easier! Cameras,
                  lighting and microphones have never been so affordable, with technology and capability moving forward
                  leaps and bounds since the days of the Lumiere Brothers.
                </p>
                <p>
                  Now the missing piece is knowing how to take that equipment and make it do what you want to. To make
                  you look good! That’s where our creative training courses in video production and photography come
                  in. Read on to see how we might be able to help you…
                </p>
              </div>

              {/* Right Video (#2944:1709 + #2905:3137, x:1078, y:549, w:598) */}
              <div className="w-full lg:w-[598px] shrink-0">
                <div className="w-full lg:w-[598px] lg:h-[352px] overflow-hidden bg-black">
                  <SoundVideo
                    src="/videos/showreel.mp4"
                    poster={heroVideoThumb}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-1 text-[14px] sm:text-[16px] font-medium leading-[32px] tracking-[-0.05em] text-brand-slate">
                  *Click on Video to toggle sound
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HOW DOES IT WORK? (#2850:1946, y:1056, w:1920, h:779, bg-[#179CBD]) */}
        <section className="bg-brand-blue py-16 sm:py-24 lg:py-0 lg:pt-[205px] lg:h-[779px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[309px] lg:w-[1281px] flex flex-col lg:flex-row items-start justify-between gap-10">
              {/* Left Text Column */}
              <div className="max-w-[956px]">
                <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-white">
                  How does it work?
                </h2>
                <div className="mt-8 lg:mt-[69px] lg:ml-[5px] max-w-[951px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-white text-justify space-y-6">
                  <p>
                    We design bespoke creative training courses for your individuals or teams to help bring those
                    creative skills in-house. Rather than offering set courses in the masses, we create custom training
                    around your existing capability and equipment (we can advise on what you should buy too!).
                  </p>
                  <p>
                    And if it helps, you can take advantage of our studio and editing spaces to learn without
                    distraction.
                  </p>
                </div>
              </div>

              {/* Right Down Chevron (#2850:1937, x:1396, y:1344, w:194, h:97) */}
              <a
                href="#example-courses"
                aria-label="Scroll to Example Courses"
                className="lg:mt-[83px] self-center lg:self-start text-white hover:translate-y-2 transition-transform"
              >
                <svg
                  viewBox="0 0 214 117"
                  className="w-[100px] sm:w-[140px] lg:w-[194px] h-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 10l97 97 97-97" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 3. EXAMPLE COURSES (#2902:1515, y:1992 to y:2731) */}
        <section id="example-courses" className="py-16 sm:py-24 lg:pt-[157px] lg:pb-[157px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            {/* Heading (#2850:1951, x:533, y:1992, w:854, h:120) */}
            <h2 className="text-center text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-brand-slate">
              Example Courses
            </h2>

            {/* 3 Interactive Flip Cards (y:2190, x:252..1650) */}
            <div className="mt-10 sm:mt-14 lg:mt-[78px] lg:ml-[252px] lg:w-[1398px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[67px]">
              {exampleCourses.map((course, idx) => {
                const isFlipped = flipped[idx]
                return (
                  <button
                    key={course.front}
                    type="button"
                    onClick={() => toggleCard(idx)}
                    className={`relative w-full lg:w-[418px] min-h-[360px] sm:min-h-[418px] lg:h-[418px] p-8 sm:p-10 lg:px-[25px] lg:pt-[29px] lg:pb-[32px] text-left flex flex-col justify-between transition-colors duration-300 ${
                      isFlipped ? "bg-brand-blue text-white" : "bg-brand-yellow text-black"
                    }`}
                  >
                    {!isFlipped ? (
                      <div className="my-auto">
                        <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1] tracking-[-0.05em]">
                          {course.front}
                        </h3>
                      </div>
                    ) : (
                      <div className={`space-y-6 font-bold tracking-[-0.05em] ${course.backFontSize}`}>
                        {course.backItems.map(item => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    )}

                    <div className="self-end mt-4">
                      <CardArrow className={isFlipped ? "text-white" : "text-black"} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* "How Much?" Button (#2856:3958, x:1418, y:2648, w:237, h:83) */}
            <div className="mt-8 lg:mt-[40px] lg:ml-[252px] lg:w-[1403px] flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-[237px] h-[83px] bg-brand-yellow px-[18px] flex items-center justify-between hover:brightness-105 transition"
              >
                <span className="w-[58px] h-[58px] rounded-full bg-brand-blue flex items-center justify-center text-[40px] font-bold leading-[1] tracking-[-0.05em] text-white">
                  £
                </span>
                <span className="pr-[18px] text-[20px] font-bold leading-[24px] tracking-[-0.05em] text-black">
                  How Much?
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 4. BTS: WANT TO SEE US AT WORK? (#2905:3138, y:2888, w:1920, h:1220, bg-[#FCBE17]) */}
        <section className="bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[136px] lg:h-[1220px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            {/* Heading (#2905:1525, x:323, y:3024) */}
            <h2 className="text-center text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-black">
              Want to see us at work?
            </h2>

            {/* Subtitle (#2905:1526, x:337, y:3193, w:1128) */}
            <p className="mt-6 lg:mt-[49px] lg:ml-[337px] max-w-[1128px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-black text-justify">
              Take a look at a few examples of our work and some behind the scenes from our shoots to give you a
              flavour of what you could learn through our creative training courses
            </p>

            {/* Carousel (#2905:3108, x:270, y:3302, w:1380, h:618) */}
            <div className="mt-8 lg:mt-[61px] lg:ml-[270px] lg:w-[1380px] flex items-center justify-between gap-4">
              {/* Left Chevron */}
              <button
                type="button"
                onClick={prevBts}
                aria-label="Previous behind the scenes slide"
                className="text-black hover:opacity-70 transition shrink-0"
              >
                <svg
                  viewBox="0 0 46 80"
                  className="w-[24px] sm:w-[36px] lg:w-[46px] h-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M40 6L6 40l34 34" />
                </svg>
              </button>

              {/* Active Slide Video (w:1060, h:618) */}
              <div className="w-full lg:w-[1060px] lg:h-[618px] overflow-hidden bg-black">
                <SoundVideo
                  key={btsSlides[activeSlide].video}
                  src={btsSlides[activeSlide].video}
                  poster={btsSlides[activeSlide].poster}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Chevron */}
              <button
                type="button"
                onClick={nextBts}
                aria-label="Next behind the scenes slide"
                className="text-black hover:opacity-70 transition shrink-0"
              >
                <svg
                  viewBox="0 0 46 80"
                  className="w-[24px] sm:w-[36px] lg:w-[46px] h-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l34 34L6 74" />
                </svg>
              </button>
            </div>

            {/* Video Caption (#2905:3136, x:429, y:3920) */}
            <p className="mt-2 lg:mt-0 lg:ml-[429px] text-[14px] sm:text-[16px] font-medium leading-[32px] tracking-[-0.05em] text-brand-slate">
              *Click on Video to toggle sound
            </p>
          </div>
        </section>

        {/* 5. WHAT THEY SAY (#2942:3816, x:252, y:4258, w:1440, h:591) */}
        <section className="py-16 sm:py-24 lg:pt-[150px] lg:pb-[168px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="relative lg:ml-[252px] lg:w-[1440px] lg:h-[591px] flex flex-col lg:block items-center gap-8">
              {/* Top-Left Opening Quote (#I2942:3816;2942:3761, x:252, y:4258, w:308, h:308) */}
              <img
                src={quoteOpenLg}
                alt=""
                aria-hidden="true"
                className="hidden lg:block absolute left-0 top-0 w-[308px] h-[308px] object-contain pointer-events-none select-none"
              />

              {/* Top-Right Blue Circle "What They Say" (#2942:3827, x:1473 -> left:1221, y:4258 -> top:0, w:205, h:205) */}
              <div className="lg:absolute lg:left-[1221px] lg:top-0 w-[160px] h-[160px] sm:w-[185px] sm:h-[185px] lg:w-[205px] lg:h-[205px] rounded-full bg-brand-blue flex items-center justify-center text-center p-4 z-10">
                <span className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em] text-white">
                  What
                  <br />
                  They Say
                </span>
              </div>

              {/* River Group Image (#I2942:3816;2942:3767, x:328 -> left:76, y:4446 -> top:188, w:308, h:308) */}
              <img
                src={riverGroupImg}
                alt="River Group"
                className="lg:absolute lg:left-[76px] lg:top-[188px] w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[308px] lg:h-[308px] object-cover z-10"
              />

              {/* Quote Copy (#I2942:3816;2942:3768, x:699 -> left:447, y:4531 -> top:273, w:795, h:108) */}
              <p className="lg:absolute lg:left-[447px] lg:top-[273px] max-w-[795px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[27px] tracking-[-0.05em] text-brand-slate z-10">
                <span className="font-bold text-brand-blue">
                  Fun, innovative and unflappable.{" "}
                </span>
                Pocket Creatives are great to work with – whether it’s finding the perfect lighting for a trifle to
                capturing GoPro footage on a whisk, they always approach every situation with a steady yet
                game-changing attitude. I see the whole team as trusted creative partners to make great content
                together.
              </p>

              {/* Bottom-Right Closing Quote (#I2942:3816;2942:3764, x:1384 -> left:1132, y:4541 -> top:283, w:308, h:308) */}
              <img
                src={quoteCloseLg}
                alt=""
                aria-hidden="true"
                className="hidden lg:block absolute left-[1132px] top-[283px] w-[308px] h-[308px] object-contain pointer-events-none select-none"
              />

              {/* Author Name + Yellow Highlight Bar (#I2942:3816;2942:3769 & 3770) */}
              <div className="lg:absolute lg:left-[802px] lg:top-[456px] relative inline-block z-10">
                <div className="hidden lg:block absolute left-0 top-[23px] w-[432px] h-[24px] bg-brand-yellow" />
                <p className="relative z-10 lg:pl-[20px] text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[40px] tracking-[-0.05em] text-black text-center">
                  Kitty Aldis, River Group
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default CreativeTrainingCoursesPage

export const Head = () => (
  <>
    <title>Creative Training Courses | Pocket Creatives</title>
    <meta
      name="description"
      content="Bespoke in-person creative training courses in video production and photography by Pocket Creatives."
    />
  </>
)
