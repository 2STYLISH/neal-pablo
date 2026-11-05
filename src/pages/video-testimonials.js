import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"

import quoteOpenSm from "../images/testimonials/quote-open-sm.png"
import quoteCloseSm from "../images/testimonials/quote-close-sm.png"

const testimonialsData = [
  {
    id: 0,
    client: "Client Name",
    boldIntro: "Fun, innovative and unflappable.",
    text: "Pocket Creatives are great to work with – whether it’s finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
  },
  {
    id: 1,
    client: "Client Name 2",
    boldIntro: "Fun, innovative and unflappable.",
    text: "Pocket Creatives are great to work with – whether it’s finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
  },
  {
    id: 2,
    client: "Client Name 3",
    boldIntro: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis purus vestibulum, commodo ante vitae, dignissim ligula. Maecenas at sodales.",
  },
  {
    id: 3,
    client: "Client Name 4",
    boldIntro: "Fun, innovative and unflappable.",
    text: "Pocket Creatives are great to work with – whether it’s finding the perfect lighting for a trifle to capturing GoPro footage on a whisk, they always approach every situation with a steady yet game-changing attitude. I see the whole team as trusted creative partners to make great content together.",
  },
]

const VideoTestimonialsPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(1)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="works" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: VIDEO PRODUCTION TESTIMONIALS (#3698:3397 + #3698:3399, x:240, y:159, w:1452) */}
        <section className="pt-12 sm:pt-16 lg:pt-[63px] pb-8 lg:pb-[44px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[240px] lg:w-[1452px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
              {/* Left 3-Line Heading (#3698:3397, w:730, h:360) */}
              <h1 className="max-w-[730px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-brand-slate shrink-0">
                Video Production Testimonials
              </h1>

              {/* Right Copy (#3698:3399, x:970, y:173 -> pt:14px, w:722, h:360) */}
              <div className="lg:pt-[14px] max-w-[722px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-brand-slate space-y-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus velit sem, vitae mollis
                  dolor ultricies nec. Praesent odio mi, commodo accumsan libero vitae, finibus rhoncus mauris.
                  Praesent non libero mattis, vulputate diam sed, convallis nunc. Fusce augue tortor, aliquam vel
                  molestie volutpat, tincidunt at justo. Pellentesque lectus nunc, varius id posuere sit amet, finibus
                  vitae est. Morbi venenatis ac nunc vulputate dignissim. Aliquam et volutpat sem. Sed ullamcorper
                  suscipit viverra. Mauris auctor augue fringilla turpis aliquet commodo. Curabitur nunc augue,
                  faucibus non bibendum sit amet, sagittis ut neque. Vivamus ac felis vel eros accumsan congue.
                </p>
                <p>
                  Nunc eu maximus purus. Nunc posuere aliquet aliquam.
                  <br />
                  Aenean mauris nunc, mollis ut ornare vitae, venenatis fermentum purus. Nullam leo tortor, vestibulum
                  vitae felis nec, aliquam feugiat nibh. Donec turpis arcu, pretium in blandit vel, mattis a enim.
                  Aenean vestibulum urna eget efficitur luctus. Etiam sodales fringilla nisl non posuere. Duis posuere
                  venenatis turpis, a pharetra purus vehicula a. Quisque eu vestibulum lorem, id interdum eros. In
                  tempor vestibulum consequat. Aliquam sodales eu sapien nec consectetur. Etiam pulvinar scelerisque
                  ullamcorper.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TESTIMONIALS CAROUSEL (#3698:3398, y:577, h:804) */}
        <section className="relative overflow-hidden py-10 lg:py-0 lg:h-[868px]">
          {/* Mobile / Tablet Stack */}
          <div className="lg:hidden px-5 sm:px-9 space-y-12">
            {testimonialsData.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && setActiveIndex(idx)}
                  className={`relative rounded-none p-6 sm:p-10 pb-24 transition ${
                    isActive ? "bg-brand-blue text-white" : "bg-white text-black shadow-md"
                  }`}
                >
                  <img src={quoteOpenSm} alt="" aria-hidden="true" className="w-[60px] h-[60px] object-contain" />
                  <p className="mt-4 text-[16px] sm:text-[18px] font-medium leading-[26px] tracking-[-0.05em]">
                    {item.boldIntro && <span className="font-bold">{item.boldIntro} </span>}
                    {item.text}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-block bg-brand-yellow px-4 py-1 text-[24px] sm:text-[32px] font-bold leading-[1.1] tracking-[-0.05em] text-black">
                      {item.client}
                    </span>
                    <img src={quoteCloseSm} alt="" aria-hidden="true" className="w-[60px] h-[60px] object-contain" />
                  </div>
                  <div className="mt-6 mx-auto w-[150px] h-[150px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-[15px] text-black">
                    [company logo/photo]
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop 1920px Exact Horizontal Track (#I3698:3398;3350:1820) */}
          <div className="hidden lg:block relative mx-auto w-[1920px] h-[868px]">
            <div
              className="absolute top-[142px] left-0 flex items-start gap-[41px] transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${561 - activeIndex * 873}px)`,
              }}
            >
              {testimonialsData.map((item, idx) => {
                const isActive = idx === activeIndex
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && setActiveIndex(idx)}
                    className={`relative w-[832px] h-[662px] shrink-0 cursor-pointer text-left transition-transform duration-500 ${
                      isActive ? "-translate-y-[89px]" : "translate-y-0"
                    }`}
                  >
                    {/* Card Rectangle (w:832, h:547) */}
                    <div
                      className={`w-[832px] h-[547px] relative transition-colors duration-300 ${
                        isActive
                          ? "bg-brand-blue text-white"
                          : "bg-white text-black shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                      }`}
                    >
                      {/* Opening Quote (x:72, y:44, w:100, h:100) */}
                      <img
                        src={quoteOpenSm}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-[72px] top-[44px] w-[100px] h-[100px] object-contain pointer-events-none select-none"
                      />

                      {/* Quote Copy (x:104, y:160, w:624) */}
                      <p
                        className={`absolute left-[104px] ${
                          item.boldIntro ? "top-[160px]" : "top-[192px]"
                        } w-[624px] text-[20px] font-medium leading-[27px] tracking-[-0.05em]`}
                      >
                        {item.boldIntro && <span className="font-bold">{item.boldIntro} </span>}
                        {item.text}
                      </p>

                      {/* Client Name Yellow Box (x:104, y:315, h:56) */}
                      <div className="absolute left-[104px] top-[315px] h-[56px] bg-brand-yellow px-[20px] flex items-center justify-center">
                        <span className="text-[40px] font-bold leading-[40px] tracking-[-0.05em] text-black whitespace-nowrap">
                          {item.client}
                        </span>
                      </div>

                      {/* Closing Quote (x:661, y:315, w:100, h:100) */}
                      <img
                        src={quoteCloseSm}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-[661px] top-[315px] w-[100px] h-[100px] object-contain pointer-events-none select-none"
                      />
                    </div>

                    {/* Overlapping Bottom Circle (x:322, y:432, w:230, h:230) */}
                    <div className="absolute left-[322px] top-[432px] w-[230px] h-[230px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                      <span className="text-[18px] font-normal leading-[18px] tracking-[-0.05em] text-black">
                        [company logo/photo]
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. YELLOW CONTACT FORM BAND (#3698:3400, y:1445, w:1920, h:606, bg-[#FCBE17]) */}
        <section className="bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[109px] lg:h-[606px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:ml-[244px] lg:w-[1412px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[38px]">
              {/* Left Column (w:636) */}
              <div className="max-w-[636px] shrink-0">
                <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold leading-[1] tracking-[-0.05em] text-black">
                  We’d love to hear about you!
                </h2>
                <p className="mt-8 lg:mt-[55px] lg:ml-[8px] max-w-[599px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id massa aliquam, imperdiet risus
                  non, volutpat ligula. Nam pharetra eu leo a ultrices. Suspendisse potenti. Phasellus nunc enim,
                  bibendum nec leo eu, pellentesque ultrices ipsum. Praesent pretium nisl sapien, ac.
                </p>
              </div>

              {/* Right Form (#3698:3403, x:918, y:1554, w:738) */}
              <form
                onSubmit={e => e.preventDefault()}
                className="w-full lg:w-[738px] lg:pt-[10px] shrink-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[22px]">
                  <div>
                    <label
                      htmlFor="vt-name"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      What’s your name? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="vt-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vt-email"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your email address? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="vt-email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[16px] lg:text-[18px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vt-phone"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your contact number? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="vt-phone"
                      type="tel"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4 lg:mt-[15px]">
                  <label
                    htmlFor="vt-help"
                    className="block text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-black mb-[19px]"
                  >
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="vt-help"
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum."
                    className="w-full lg:h-[143px] bg-white p-5 lg:px-[60px] lg:py-[42px] text-[16px] lg:text-[20px] font-medium leading-[30px] tracking-[-0.05em] text-black placeholder:text-black outline-none resize-none"
                  />
                </div>

                <div className="mt-4 lg:mt-[33px] flex justify-end">
                  <button
                    type="submit"
                    className="w-[188px] h-[43px] rounded-[16px] bg-brand-blue text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-white hover:brightness-110 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 4. BOTTOM CONTENT SECTION (#3698:3396 + #3698:3407 + #3698:3408 + #3698:3412, y:2168 to y:2891) */}
        <section className="py-16 sm:py-24 lg:pt-[117px] lg:pb-[167px] overflow-hidden">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            {/* Heading (x:244, y:2168) */}
            <div className="lg:ml-[244px]">
              <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold leading-[1] tracking-[-0.05em] text-brand-slate">
                Lorem ipsum dolor sit amet
              </h2>
            </div>

            {/* 3-Column Row (x:240, y:2297) */}
            <div className="mt-8 lg:mt-[49px] lg:ml-[240px] flex flex-col lg:flex-row items-start gap-10 lg:gap-0">
              {/* Left Gray Placeholder (#3698:3407, w:640, h:594) */}
              <div className="w-full lg:w-[640px] h-[320px] sm:h-[440px] lg:h-[594px] bg-[#D9D9D9] shrink-0" />

              {/* Middle Column (#3698:3408, x:960 -> ml:80px, y:2326 -> pt:29px, w:562) */}
              <div className="lg:ml-[80px] lg:pt-[29px] w-full lg:w-[562px] shrink-0 text-brand-slate">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[48px] tracking-[-0.05em]">
                  Lorem ipsum
                </h3>
                <div className="mt-6 lg:mt-[33px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] space-y-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor
                    ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie.
                    Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi
                    convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam
                    imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet
                    vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.
                  </p>
                  <p>
                    Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget
                    libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra
                    eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a
                    sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien,
                    eget semper nulla.
                  </p>
                </div>
              </div>

              {/* Right Column (#3698:3412, x:1588 -> ml:66px, y:2331 -> pt:34px, w:562) */}
              <div className="lg:ml-[66px] lg:pt-[34px] w-full lg:w-[562px] shrink-0 text-brand-slate">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[48px] tracking-[-0.05em]">
                  Dolor Sit Amet
                </h3>
                <div className="mt-6 lg:mt-[33px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] space-y-8">
                  <p>
                    Sed fermentum libero et consectetur mattis. Duis ut dui suscipit dui aliquam elementum ac eget
                    libero. In eget enim nibh. Mauris eget ullamcorper leo. Mauris eget ante eu odio auctor pharetra
                    eget sit amet tellus. Ut hendrerit ipsum orci, quis tempor mi suscipit id. Pellentesque a
                    sollicitudin mauris. Vivamus rutrum orci sed felis eleifend fringilla. Mauris id fringilla sapien,
                    eget semper nulla.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt tellus leo, id tempor
                    ligula dignissim ac. Nullam vel metus eros. Integer non ligula vitae augue dignissim molestie.
                    Quisque bibendum massa vestibulum, convallis mi ac, dignissim urna. Praesent eu lorem a nisi
                    convallis pretium ac eu nisi. Sed convallis dolor tellus, ut egestas risus imperdiet a. Etiam
                    imperdiet felis ac pellentesque luctus. Quisque quis dui eu arcu sodales tempus. Duis sit amet
                    vehicula velit. Donec vulputate porta eros id egestas. Donec non lectus a diam varius scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default VideoTestimonialsPage

export const Head = () => (
  <>
    <title>Video Production Testimonials | Pocket Creatives</title>
    <meta
      name="description"
      content="Read what clients say about working with Pocket Creatives for video production and videography."
    />
  </>
)

