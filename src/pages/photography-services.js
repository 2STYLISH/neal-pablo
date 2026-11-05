import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import SoundVideo from "../components/SoundVideo"

import heroVideoThumb from "../images/photography/hero-video-thumb.png"
import gridLeft1 from "../images/photography/grid-left-1.png"
import gridLeft2 from "../images/photography/grid-left-2.png"
import gridLeft3 from "../images/photography/grid-left-3.png"
import gridLeft4 from "../images/photography/grid-left-4.png"
import gridRight1 from "../images/photography/grid-right-1.png"
import gridRight2 from "../images/photography/grid-right-2.png"
import gridRight3 from "../images/photography/grid-right-3.png"
import gridRight4 from "../images/photography/grid-right-4.png"
import howWeWorkImg from "../images/photography/how-we-work.png"
import technicallySpeakingImg from "../images/photography/technically-speaking.png"
import wholePackageImg from "../images/photography/whole-package.png"

const PhotographyServicesPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="services" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO SECTION (#3599:1828, y:0, w:1920, h:1269, bg-[#179CBD]) */}
        <section className="bg-brand-blue -mt-[72px] pt-[120px] sm:pt-[140px] lg:pt-[161px] pb-16 sm:pb-24 lg:pb-0 lg:h-[1269px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-[310px]">
            {/* Heading (#3599:1832) */}
            <h1 className="text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-white">
              Photography Services
            </h1>

            {/* Subheading (#3599:1834 + #3599:1833) */}
            <div className="mt-2 lg:mt-[4px] flex flex-wrap items-baseline gap-x-3">
              <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium leading-[44px] tracking-[-0.05em] text-white">
                available from
              </span>
              <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[44px] tracking-[-0.05em] text-white lg:translate-y-[20px]">
                POCKET CREATIVES
              </span>
            </div>

            {/* Hero Video / Image (#3599:2053, x:310, y:365, w:1300, h:495) */}
            <div className="mt-8 lg:mt-[36px] w-full lg:w-[1300px] lg:h-[495px] overflow-hidden bg-black">
              <SoundVideo
                src="/videos/water-texture-bts.mp4"
                poster={heroVideoThumb}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Caption (#3599:2054, x:310, y:877) */}
            <p className="mt-2 lg:mt-[17px] text-[14px] sm:text-[16px] font-medium leading-[32px] tracking-[-0.05em] text-white">
              *Click on Video to toggle sound
            </p>

            {/* Bottom 2-Column Intro (#3599:1842 & #3599:1835) */}
            <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[40px]">
              {/* Left bold headline with yellow highlight (#3599:1842, x:310, y:930, w:689) */}
              <div className="lg:mt-[21px] max-w-[689px]">
                <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] lg:leading-[44px] tracking-[-0.05em] text-white">
                  If you’re looking for expert photography services, you’ve come to the{" "}
                  <span className="inline-block bg-brand-yellow px-2 py-0.5 text-black">
                    right place.
                  </span>
                </h2>
              </div>

              {/* Right body text + yellow button (#3599:1835 & #3599:1838, x:1039, y:893, w:571) */}
              <div className="lg:-mt-[16px] max-w-[571px] shrink-0">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-white text-justify">
                  We put quality and creativity at the heart of what we do, providing high quality and striking imagery
                  to use for websites, editorial, PR, marketing, advertising and social media. Take a look at some
                  examples of our photography below and then reach out to see how we might be able to help you.
                </p>

                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="mt-6 lg:mt-[16px] inline-flex w-[199px] h-[48px] items-center justify-center bg-brand-yellow text-[20px] font-bold leading-[24px] tracking-[-0.05em] text-black hover:brightness-105 transition"
                >
                  Have questions?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PHOTOGRAPHY SERVICES 2-COLUMN GRID SECTION (y:1400 to y:2529) */}
        <section className="py-16 sm:py-24 lg:pt-[131px] lg:pb-[97px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[302px] lg:w-[1316px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[33px]">
              {/* Left Column (x:302, w:647) */}
              <div className="w-full lg:w-[647px] shrink-0">
                {/* Yellow "Photography" box (#3599:1858, w:646, h:122) */}
                <div className="w-full lg:w-[646px] h-[90px] sm:h-[110px] lg:h-[122px] bg-brand-yellow flex items-center justify-center">
                  <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] font-extrabold leading-[80px] tracking-[-0.05em] text-black">
                    Photography
                  </h2>
                </div>

                {/* Left Description (#3599:1826, y:1582, w:646, h:240) */}
                <div className="mt-8 lg:mt-[60px] lg:w-[646px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-brand-slate text-justify space-y-6">
                  <p>
                    Whether you’re promoting food and drink, beauty and cosmetics, showcasing tech, products, property
                    or anything else, a visually impactful approach is always our priority when delivering our
                    professional photography services.
                  </p>
                  <p>
                    We also have extensive experience working with people, capturing corporate headshots, lifestyle
                    imagery and stunning portraiture, as well as the atmosphere of events.
                  </p>
                </div>

                {/* Left 2x2 Image Grid (#3599:1851, y:1882, w:647, h:647) */}
                <div className="mt-8 lg:mt-[60px] grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[33px] w-full lg:w-[647px]">
                  <img
                    src={gridLeft1}
                    alt="Food photography example"
                    className="w-full lg:w-[307px] aspect-square object-cover"
                  />
                  <img
                    src={gridLeft2}
                    alt="Product photography example"
                    className="w-full lg:w-[307px] aspect-square object-cover"
                  />
                  <img
                    src={gridLeft3}
                    alt="Portrait photography example"
                    className="w-full lg:w-[307px] aspect-square object-cover"
                  />
                  <img
                    src={gridLeft4}
                    alt="Event photography example"
                    className="w-full lg:w-[307px] aspect-square object-cover"
                  />
                </div>
              </div>

              {/* Right Column (x:982, w:636) */}
              <div className="w-full lg:w-[636px] shrink-0">
                {/* Right 2x2 Image Grid (#3599:1847 + #3599:2055, y:1400, w:636, h:636) */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px] w-full lg:w-[636px]">
                  <img
                    src={gridRight1}
                    alt="Cosmetics photography example"
                    className="w-full lg:w-[302px] aspect-square object-cover"
                  />
                  <img
                    src={gridRight2}
                    alt="Drinks photography example"
                    className="w-full lg:w-[302px] aspect-square object-cover"
                  />
                  <img
                    src={gridRight3}
                    alt="Studio photography example"
                    className="w-full lg:w-[302px] aspect-square object-cover"
                  />
                  <img
                    src={gridRight4}
                    alt="Lifestyle photography example"
                    className="w-full lg:w-[302px] aspect-square object-cover"
                  />
                </div>

                {/* Right Description (#3599:1827, y:2112, w:631, h:280) */}
                <div className="mt-8 lg:mt-[76px] lg:ml-[2px] lg:w-[631px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-brand-slate text-justify space-y-6">
                  <p>
                    Our{" "}
                    <span className="font-bold text-brand-blue">
                      photography studio in London Waterloo
                    </span>{" "}
                    is perfectly equipped to capture clean, isolated product images for e-commerce, through to
                    carefully crafted, styled and propped shots that look good enough to eat.
                  </p>
                  <p>
                    If your photography assignment requires a larger studio space or an interesting location to bring
                    your products to life, then we can jump in the car and bring the equipment to you, or organise
                    everything on your behalf to provide a completely turn-key photography solution.
                  </p>
                </div>

                {/* Blue "Services" box (#3599:1859, x:984, y:2436, w:631, h:88) */}
                <div className="mt-8 lg:mt-[44px] lg:ml-[2px] w-full lg:w-[631px] h-[76px] sm:h-[84px] lg:h-[88px] bg-brand-blue flex items-center justify-center">
                  <h2 className="text-[44px] sm:text-[64px] lg:text-[80px] font-extrabold leading-[80px] tracking-[-0.05em] text-white">
                    Services
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. YELLOW CONTACT CTA BAND (#3599:1875, y:2626, w:1920, h:606, bg-[#FCBE17]) */}
        <section className="bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[141px] lg:h-[606px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[302px] lg:w-[1367px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[46px]">
              {/* Left Heading (#3599:1878, w:583, h:320) */}
              <div className="max-w-[583px] shrink-0">
                <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold leading-[1] tracking-[-0.05em] text-black">
                  Ready to see what we could do with your next project?
                </h2>
              </div>

              {/* Right Form (#3599:1879, w:738, h:335) */}
              <form
                onSubmit={e => e.preventDefault()}
                className="w-full lg:w-[738px] shrink-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[22px]">
                  <div>
                    <label
                      htmlFor="photo-name"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      What’s your name? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="photo-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="photo-email"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your email address? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="photo-email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[16px] lg:text-[18px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="photo-phone"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your contact number? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="photo-phone"
                      type="tel"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4 lg:mt-[12px]">
                  <label
                    htmlFor="photo-help"
                    className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                  >
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="photo-help"
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
                    className="w-full lg:h-[139px] bg-white p-4 lg:px-[60px] lg:py-[18px] text-[15px] lg:text-[16px] font-medium leading-[22px] tracking-[-0.05em] text-black placeholder:text-black outline-none resize-none"
                  />
                </div>

                <div className="mt-4 lg:mt-[14px] flex justify-end">
                  <button
                    type="submit"
                    className="w-[188px] h-[42px] rounded-[16px] bg-brand-blue text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-white hover:brightness-110 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 4. LAST SECTION: HOW WE WORK / TECHNICALLY SPEAKING / THE WHOLE PACKAGE (#3599:1862, y:3368 to y:4731) */}
        <section className="py-16 sm:py-24 lg:pt-[136px] lg:pb-[146px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[263px] lg:w-[1399px] space-y-16 sm:space-y-24 lg:space-y-[40px]">
              {/* Row 1: How we work (#3599:1865) */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[61px]">
                <div className="w-full lg:w-[650px] shrink-0">
                  <img
                    src={howWeWorkImg}
                    alt="How we work on set"
                    className="w-full lg:w-[650px] h-auto lg:h-[426px] object-cover"
                  />
                </div>
                <div className="w-full lg:w-[693px] lg:pt-[48px] text-brand-slate">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    How we work
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>
                      It’s likely you’ve landed here because you’re looking for a photographer or a photography team to
                      deliver images for your next campaign or project. Rest assured, we carefully recruit and develop
                      the talents of our passionate in-house team to deliver stunning imagery, and excellent client
                      service alongside.
                    </p>
                    <p>
                      All of our editing and retouching is managed in-house too, making sure we retain full control
                      over the quality of the final product, and giving the ability to work to tight deadlines.
                    </p>
                    <p>
                      If you’re completely new to commissioning photography, we make the process simple and easy for
                      you, taking the lead at all stages while involving you in the creative narrative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Technically speaking (#3599:1867) */}
              <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 lg:gap-[79px]">
                <div className="w-full lg:w-[453px] lg:pt-[56px] text-brand-slate shrink-0">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    Technically speaking
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>
                      When capturing our photography, we trust Canon’s professional sensor technology alongside their
                      pristine L-Series lenses. They are workhorses that deliver phenomenal image quality at high
                      resolutions, with gorgeous colour rendition, time and time again.
                    </p>
                    <p>
                      In our photography studio, we choose Pixapro lighting with widespread compatibility across a huge
                      array of modifiers and shapes to give our clients endless creative choices.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[872px] shrink-0">
                  <img
                    src={technicallySpeakingImg}
                    alt="Canon professional camera and lighting equipment"
                    className="w-full lg:w-[872px] h-auto lg:h-[426px] object-cover"
                  />
                </div>
              </div>

              {/* Row 3: The whole package (#3599:1870) */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[64px]">
                <div className="w-full lg:w-[706px] shrink-0">
                  <img
                    src={wholePackageImg}
                    alt="The whole package creative team"
                    className="w-full lg:w-[706px] h-auto lg:h-[433px] object-cover"
                  />
                </div>
                <div className="w-full lg:w-[629px] lg:pt-[51px] text-brand-slate">
                  <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[40px] tracking-[-0.05em]">
                    The whole package
                  </h3>
                  <div className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                    <p>
                      Our photographers love making things look great with their camera and magical lighting
                      combinations.
                    </p>
                    <p>
                      We are also assisted by an enviable array of trusted industry talent who work alongside us on
                      shoots, such as food and prop stylists, hair and make up artists, set builders and art directors,
                      along with models and actors when required.
                    </p>
                    <p>
                      Add our access to endless location possibilities to shoot in and we’re confident of being able to
                      pull the right creative elements together to answer any client brief.
                    </p>
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

export default PhotographyServicesPage

export const Head = () => (
  <>
    <title>Photography Services | Pocket Creatives</title>
    <meta
      name="description"
      content="Expert commercial, product, food, lifestyle, and portrait photography services from Pocket Creatives in London Waterloo."
    />
  </>
)

