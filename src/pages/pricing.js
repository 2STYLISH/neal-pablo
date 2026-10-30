import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"

import heroVideoImg from "../images/pricing/hero-video.png"
import mainVideoImg from "../images/pricing/main-video.png"
import sliderSquareImg from "../images/pricing/slider-square.png"
import poundBurstLeft from "../images/pricing/pound-burst-left.png"
import poundBurstRight from "../images/pricing/pound-burst-right.png"

const PricingPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSlide, setActiveSlide] = React.useState("video")

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="pricing" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: Avoiding the taboo (#4436:2691, y:0, w:1920, h:985) */}
        <section className="relative bg-brand-yellow -mt-[72px] pt-[110px] sm:pt-[128px] pb-14 lg:pb-0 lg:h-[985px] overflow-hidden">
          {/* Giant outlined £ watermark (#4436:2692, x:352, y:128, fontSize:800px) */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none hidden lg:block absolute left-[352px] top-[128px] text-[800px] font-bold leading-[800px] tracking-[-0.05em] text-transparent"
            style={{ WebkitTextStroke: "40px rgba(0,0,0,0.08)" }}
          >
            £
          </div>

          <div className="relative z-10 mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:pl-[228px] lg:pr-[279px] flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
              {/* Left Text Column */}
              <div className="max-w-[1000px] lg:max-w-[920px]">
                <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[120px] tracking-[-0.05em] text-black">
                  Avoiding the taboo:
                </p>
                <h1 className="mt-1 lg:mt-[3px] text-[44px] sm:text-[72px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em] text-black lg:w-[1265px] relative z-20">
                  Pricing for
                  <br />
                  video production
                  <br />
                  and photography
                </h1>

                <div className="mt-8 lg:mt-[42px] max-w-[786px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.25] lg:leading-[20px] tracking-[-0.05em] text-black space-y-4">
                  <p>
                    Price is important to everybody, and we know this is a major factor in deciding who you’ll want to
                    work with. We like to think that clients work with us for a range of reasons, from our quality of
                    output to our project management, but getting the budget in the right place is something that we
                    spend a lot of time on.
                  </p>
                  <p>
                    We can either quote from scratch once we understand your brief, or work to your target spend. This
                    flexibility makes us a great fit for both small and large clients alike.
                    <br />
                    You can read a bit more below about how we structure our rates for both video production and
                    photography below, and we’re always here for any queries.
                  </p>
                </div>
              </div>

              {/* Right Video Image (#4436:2704, x:1185, y:188, w:456, h:643) */}
              <div className="w-full sm:w-[400px] lg:w-[456px] lg:mt-[60px] shrink-0 lg:-ml-[308px]">
                <img
                  src={heroVideoImg}
                  alt="Pocket Creatives outdoor billboard"
                  className="w-full lg:w-[456px] h-auto lg:h-[643px] object-cover"
                />
                <p className="mt-2 text-right text-[14px] sm:text-[16px] font-medium leading-[32px] tracking-[-0.05em] text-brand-slate">
                  *Click on Video to toggle sound
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MODULAR PRICING MODEL + VIDEO + 2 BLUE CARDS (#4449:2740, #4845:5289, #4475:4767) */}
        <section className="pt-14 sm:pt-20 lg:pt-[116px] pb-16 sm:pb-24 lg:pb-[56px]">
          <div className="container-x">
            {/* Heading & Checkmarks (#4449:2740, x:242, y:1101) */}
            <div className="lg:pl-[2px]">
              <h2 className="text-[36px] sm:text-[56px] lg:text-[80px] font-bold leading-[1.05] tracking-[-0.05em] text-brand-slate">
                We use a modular pricing model:
              </h2>
              <ul className="mt-6 lg:mt-[42px] space-y-2 text-[22px] sm:text-[30px] lg:text-[40px] font-medium leading-[1.25] lg:leading-[50px] tracking-[-0.05em] text-brand-slate">
                <li>
                  <span className="text-brand-blue font-bold">✓</span> Pay only for what you need
                </li>
                <li>
                  <span className="text-brand-blue font-bold">✓</span> No matter how large or small your project
                </li>
                <li>
                  <span className="text-brand-blue font-bold">✓</span> Oh, and no budget overruns!
                </li>
              </ul>
            </div>

            {/* Large Video Player (#4845:5289, x:251, y:1470, w:1353, h:761) */}
            <div className="mt-10 sm:mt-14 lg:mt-[93px] lg:pl-[11px]">
              <div className="relative w-full lg:w-[1353px] lg:h-[761px] overflow-hidden group cursor-pointer">
                <img
                  src={mainVideoImg}
                  alt="Pricing overview video"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay (#4845:5294 & #4845:5295) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[110px] h-[110px] sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px] rounded-full bg-[#D9D9D9]/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-[48px] h-[48px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] translate-x-2"
                    >
                      <polygon points="22,12 88,50 22,88" fill="#FF0000" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Blue Cards + Pound Bursts (#4475:4767, y:2324, w:620x547 each) */}
            <div className="relative mt-14 sm:mt-20 lg:mt-[93px] lg:pl-[52px] flex flex-col lg:flex-row items-stretch gap-8 lg:gap-[74px]">
              {/* Card 1 (#4449:2742, x:292, y:2324, w:620, h:547) */}
              <div className="relative w-full lg:w-[620px] lg:min-h-[547px] bg-brand-blue px-6 sm:px-12 lg:px-[62px] pt-16 sm:pt-20 lg:pt-[78px] pb-12 text-white">
                <img
                  src={poundBurstLeft}
                  alt=""
                  aria-hidden="true"
                  className="w-[110px] sm:w-[150px] lg:w-[210px] h-auto absolute -top-10 -left-4 lg:-top-[93px] lg:-left-[69px] pointer-events-none select-none"
                />
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.22] tracking-[-0.05em] text-center max-w-[546px] mx-auto">
                  Everything you need and no hidden costs.
                </h3>
                <p className="mt-8 lg:mt-[52px] max-w-[497px] mx-auto text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.25] tracking-[-0.05em]">
                  There are lots of factors that affect the overall price of video production and photography shoots,
                  such as props, backgrounds, models and locations. This is why there’s no one-size-fits all price,
                  and most creative agencies won’t put any prices on their websites – as they can be misleading without
                  a lot of description.
                </p>
              </div>

              {/* Card 2 (#4449:2743, x:986, y:2324, w:620, h:547) */}
              <div className="relative w-full lg:w-[620px] lg:min-h-[547px] bg-brand-blue px-6 sm:px-12 lg:px-[45px] pt-16 sm:pt-20 lg:pt-[78px] pb-16 text-white">
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.22] tracking-[-0.05em] text-center max-w-[546px] mx-auto">
                  We&apos;ll get you from brief to quote in a flash!
                </h3>
                <p className="mt-8 lg:mt-[52px] max-w-[530px] mx-auto text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.25] tracking-[-0.05em]">
                  We will work with you to understand your brief and the full photography and video production
                  requirements of your project, before delivering a budget breakdown to you at the beginning of the
                  process. This gives you a fully honest and transparent view of the resources that make up your
                  project. There’s always room for conversation and tweaks, and we’re also happy to start with your
                  ideal spend and work backwards.
                </p>
                <img
                  src={poundBurstRight}
                  alt=""
                  aria-hidden="true"
                  className="w-[105px] sm:w-[140px] lg:w-[195px] h-auto absolute -bottom-10 right-2 lg:-bottom-[71px] lg:-right-[35px] pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. CHEAP OR EXPENSIVE? & SO HOW DOES IT WORK? (#4845:5288, y:2927, w:1920, h:1052) */}
        <section className="bg-brand-blue py-16 sm:py-24 lg:py-0 lg:pt-[105px] lg:h-[1052px] text-white">
          <div className="container-x">
            <div className="lg:pl-[75px] max-w-[1309px]">
              {/* Box 1: Cheap or Expensive? (#4449:2752, x:315, w:849, h:128) */}
              <div className="inline-flex items-center justify-center bg-brand-yellow px-6 sm:px-10 lg:w-[849px] lg:h-[128px] py-4 lg:py-0">
                <h2 className="text-[36px] sm:text-[56px] lg:text-[80px] font-bold leading-[1.2] tracking-[-0.05em] text-black">
                  Cheap or Expensive?
                </h2>
              </div>

              <div className="mt-8 lg:mt-[40px] max-w-[1234px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.25] tracking-[-0.05em] space-y-5">
                <p>
                  To give you some context, we aim to be in the middle band in terms of our pricing structure, which
                  means that our typical daily rates for photography and video production will sit in between those
                  agencies who work at the very upper end of our industry, with individual freelancers at the lower end
                  of the pricing range.
                </p>
                <p>
                  It’s important to note that we’re not talking about quality here, just price. We’re often chosen
                  ahead of the largest of our competitors as we can deliver great quality photography and video
                  production services for a lower price. This is because we run an efficient setup, with less overheads
                  and no bloat.
                </p>
              </div>

              {/* Box 2: So how does it work? (#4449:2756, x:702, w:847, h:128) */}
              <div className="mt-8 lg:mt-[40px] flex lg:justify-end">
                <div className="inline-flex items-center justify-center bg-brand-yellow px-6 sm:px-10 lg:w-[847px] lg:h-[128px] py-4 lg:py-0">
                  <h2 className="text-[36px] sm:text-[56px] lg:text-[80px] font-bold leading-[1.2] tracking-[-0.05em] text-black">
                    So how does it work?
                  </h2>
                </div>
              </div>

              <div className="mt-8 lg:mt-[40px] lg:pl-[29px] max-w-[1234px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.25] tracking-[-0.05em] space-y-5">
                <p>
                  Our setup also makes us attractive to start-ups, those who are crowdfunding, and businesses who still
                  need great photography and video production, but are working within tighter budgets.
                </p>
                <p>
                  We do this by using modular pricing – knowing that each photography and video production project is
                  different, you pay for just what you need.
                </p>
                <p>
                  While some clients may need just an hour of photography to capture some simple pack shots for a new
                  addition to their range, others may need a multiple camera setup for a TV advert to showcase their
                  brand to the world. We have the ability to quote easily for both ends of that spectrum.
                </p>
                <p>
                  If you already have a total budget available, share that with us and we can work out how to deliver
                  as much as possible for what you have to spend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GET IN TOUCH FORM (#4845:5287, y:4141) */}
        <section className="py-16 sm:py-24 lg:pt-[162px] lg:pb-[183px]">
          <div className="container-x">
            <div className="lg:pl-[25px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[153px]">
              {/* Left Text (#4449:2793, x:265, y:4176, w:514) */}
              <div className="lg:pt-[35px] max-w-[514px] shrink-0">
                <h2 className="text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-[1] tracking-[-0.05em] text-brand-blue">
                  Get In Touch
                </h2>
                <p className="mt-6 lg:mt-[34px] text-[24px] sm:text-[32px] lg:text-[40px] font-medium leading-[1] tracking-[-0.05em] text-brand-slate">
                  Drop us a mail, let us know your budget, and we’ll share what we can offer
                </p>
              </div>

              {/* Right Form (#4449:2786, x:932, y:4141, w:738) */}
              <form
                onSubmit={e => e.preventDefault()}
                className="w-full lg:w-[738px] shrink-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[22px]">
                  <div>
                    <label
                      htmlFor="pricing-name"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      What’s your name? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pricing-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-[60px] lg:h-[70px] bg-white px-5 text-[18px] lg:text-[20px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pricing-email"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your email address? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pricing-email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full h-[60px] lg:h-[70px] bg-white px-5 text-[16px] lg:text-[18px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pricing-phone"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      Your contact number? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pricing-phone"
                      type="tel"
                      className="w-full h-[60px] lg:h-[70px] bg-white px-5 text-[18px] lg:text-[20px] text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 lg:mt-[25px]">
                  <label
                    htmlFor="pricing-help"
                    className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[19px]"
                  >
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="pricing-help"
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum."
                    className="w-full lg:h-[177px] bg-white p-6 lg:px-[60px] lg:py-[50px] text-[16px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.05em] text-black placeholder:text-black outline-none resize-none"
                  />
                </div>

                <div className="mt-5 lg:mt-[21px] flex justify-end">
                  <button
                    type="submit"
                    className="w-[188px] h-[53px] rounded-[16px] bg-brand-yellow text-[20px] font-extrabold tracking-[-0.05em] text-black hover:brightness-105 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 5. VIDEO PRODUCTION / PHOTOGRAPHY INTERACTIVE SLIDER (#4449:3089, y:4742, w:1920, h:976) */}
        <section
          className={`transition-colors duration-500 py-16 sm:py-24 lg:py-0 lg:pt-[142px] lg:h-[976px] ${
            activeSlide === "video" ? "bg-brand-yellow text-black" : "bg-brand-blue text-white"
          }`}
        >
          <div className="container-x">
            {activeSlide === "video" ? (
              <div>
                <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em]">
                  Video Production...
                </h2>

                <div className="mt-10 lg:mt-[53px] lg:pl-[17px] flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[24px]">
                  <img
                    src={sliderSquareImg}
                    alt="Video production on set"
                    className="w-full sm:w-[420px] lg:w-[490px] h-auto lg:h-[490px] object-cover shrink-0"
                  />

                  <div className="max-w-[646px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] lg:leading-[20px] tracking-[-0.05em] space-y-4">
                    <p>
                      <strong className="font-bold">Video production</strong> is a more complex process compared with
                      photography, both in planning, production and the fact that the edit time will span days rather
                      than hours, as it does it photography.
                    </p>
                    <p>
                      Similarly to a photo shoot, you’ll need to think about the location: from studio spaces to
                      Airbnbs for lifestyle work, and the consideration for sound as well.
                    </p>
                    <p>
                      We may need a bigger team, if lighting, sound, or set requirements are needed. Additional
                      equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion
                      may also be considered for more creative briefs.
                    </p>
                    <p>
                      Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists,
                      food stylists may required too.
                    </p>
                    <p>
                      Editing often needs multiple days to complete, and we’ll best estimate this for you, allowing for
                      time to feed back and make changes. We can also include music, sound effects and voiceover.
                    </p>
                    <p>
                      The <strong className="font-bold">Pocket Creatives</strong> team will always provide a full
                      breakdown when we quote for you, which then makes it easier to see what resources your project
                      needs to get made.
                    </p>
                    <p>
                      To give you a general idea, a full day of filming with us starts at{" "}
                      <strong className="font-bold">£940+VAT</strong>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSlide("photo")}
                    className="lg:ml-[17px] w-[140px] h-[140px] lg:w-[177px] lg:h-[177px] rounded-full bg-brand-blue text-white flex flex-col items-center justify-center gap-3 shrink-0 hover:scale-105 transition-transform"
                  >
                    <span className="text-[18px] lg:text-[20px] font-bold leading-[1] tracking-[-0.05em]">
                      Photography
                    </span>
                    <svg viewBox="0 0 18 12" className="w-[16px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 6h15M11 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="lg:pl-[130px]">
                  <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-bold leading-[1] tracking-[-0.05em]">
                    Photography...
                  </h2>
                </div>

                <div className="mt-10 lg:mt-[53px] flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[24px]">
                  <button
                    type="button"
                    onClick={() => setActiveSlide("video")}
                    className="w-[140px] h-[140px] lg:w-[177px] lg:h-[177px] rounded-full bg-brand-yellow text-black flex flex-col items-center justify-center gap-2 shrink-0 hover:scale-105 transition-transform lg:mr-[22px]"
                  >
                    <span className="text-[18px] lg:text-[20px] font-bold leading-[1] tracking-[-0.05em] text-center">
                      Video
                      <br />
                      Production
                    </span>
                    <svg viewBox="0 0 18 12" className="w-[16px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 6H2M7 1L2 6l5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <img
                    src={sliderSquareImg}
                    alt="Photography on set"
                    className="w-full sm:w-[420px] lg:w-[490px] h-auto lg:h-[490px] object-cover shrink-0"
                  />

                  <div className="max-w-[646px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] lg:leading-[20px] tracking-[-0.05em] space-y-4">
                    <p>
                      <strong className="font-bold">Video production</strong> is a more complex process compared with
                      photography, both in planning, production and the fact that the edit time will span days rather
                      than hours, as it does it photography.
                    </p>
                    <p>
                      Similarly to a photo shoot, you’ll need to think about the location: from studio spaces to
                      Airbnbs for lifestyle work, and the consideration for sound as well.
                    </p>
                    <p>
                      We may need a bigger team, if lighting, sound, or set requirements are needed. Additional
                      equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion
                      may also be considered for more creative briefs.
                    </p>
                    <p>
                      Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists,
                      food stylists may required too.
                    </p>
                    <p>
                      Editing often needs multiple days to complete, and we’ll best estimate this for you, allowing for
                      time to feed back and make changes. We can also include music, sound effects and voiceover.
                    </p>
                    <p>
                      The <strong className="font-bold">Pocket Creatives</strong> team will always provide a full
                      breakdown when we quote for you, which then makes it easier to see what resources your project
                      needs to get made.
                    </p>
                    <p>
                      To give you a general idea, a full day of filming with us starts at{" "}
                      <strong className="font-bold">£940+VAT</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default PricingPage

export const Head = () => (
  <>
    <title>Pricing | Pocket Creatives</title>
    <meta
      name="description"
      content="Transparent, modular pricing for video production and photography by Pocket Creatives."
    />
  </>
)

