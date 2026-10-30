import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"
import useDragScroll from "../components/useDragScroll"

import videoPreImg from "../images/services/video-pre.png"
import videoProdImg from "../images/services/video-prod.png"
import videoPostImg from "../images/services/video-post.png"

import photoPreImg from "../images/services/photo-pre.png"
import photoProdImg from "../images/services/photo-prod.png"
import photoPostImg from "../images/services/photo-post.png"

import wholePlanningImg from "../images/services/whole-planning.png"
import wholeTalentImg from "../images/services/whole-talent.png"
import wholeEditingImg from "../images/services/whole-editing.png"

const GoToArrow = () => (
  <svg viewBox="0 0 18 12" className="w-[16px] h-[12px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 6h15M11 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ProcessSection = ({ id, steps, invertHeadingColors = false }) => (
  <section id={id} className="pt-16 sm:pt-24 lg:pt-[135px] pb-16 sm:pb-24 lg:pb-[105px]">
    <div className="container-x">
      <div className="lg:pl-[37px]">
        <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-extrabold leading-[1] tracking-[-0.05em]">
          <span className={invertHeadingColors ? "text-brand-yellow" : "text-brand-blue"}>
            The process:{" "}
          </span>
          <span className={invertHeadingColors ? "text-brand-blue" : "text-brand-yellow"}>
            making it easy for you
          </span>
        </h2>
      </div>
    </div>

    <div className="mt-12 sm:mt-20 lg:mt-[120px] space-y-16 sm:space-y-24 lg:space-y-[120px]">
      {/* Step 1: Pre-production (Text left, Image right touching viewport edge) */}
      <div className="mx-auto max-w-[1920px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 px-5 sm:px-9 lg:px-0">
        <div className="w-full lg:w-[346px] lg:ml-[277px] lg:mt-[60px] shrink-0 text-brand-slate">
          <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em]">
            {steps[0].stage}
          </h3>
          <p className="mt-6 lg:mt-[60px] text-[22px] sm:text-[26px] lg:text-[30px] font-medium leading-[1] tracking-[-0.05em]">
            {steps[0].title}
          </p>
          <p className="mt-5 lg:mt-[32px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
            {steps[0].text}
          </p>
        </div>
        <div className="w-full lg:w-[1147px] shrink-0">
          <img
            src={steps[0].image}
            alt={steps[0].stage}
            className="w-full lg:w-[1147px] h-auto lg:h-[528px] object-cover"
          />
        </div>
      </div>

      {/* Step 2: Production (Image left touching viewport edge, Text right) */}
      <div className="mx-auto max-w-[1920px] flex flex-col-reverse lg:flex-row items-start justify-start gap-8 lg:gap-[150px] px-5 sm:px-9 lg:px-0">
        <div className="w-full lg:w-[1147px] shrink-0">
          <img
            src={steps[1].image}
            alt={steps[1].stage}
            className="w-full lg:w-[1147px] h-auto lg:h-[528px] object-cover"
          />
        </div>
        <div className="w-full lg:w-[346px] lg:mt-[60px] shrink-0 text-brand-slate">
          <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em]">
            {steps[1].stage}
          </h3>
          <p className="mt-6 lg:mt-[60px] text-[22px] sm:text-[26px] lg:text-[30px] font-medium leading-[1] tracking-[-0.05em]">
            {steps[1].title}
          </p>
          <p className="mt-5 lg:mt-[32px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
            {steps[1].text}
          </p>
        </div>
      </div>

      {/* Step 3: Post-production (Text left, Image right touching viewport edge) */}
      <div className="mx-auto max-w-[1920px] flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 px-5 sm:px-9 lg:px-0">
        <div className="w-full lg:w-[346px] lg:ml-[277px] lg:mt-[60px] shrink-0 text-brand-slate">
          <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em]">
            {steps[2].stage}
          </h3>
          <p className="mt-6 lg:mt-[60px] text-[22px] sm:text-[26px] lg:text-[30px] font-medium leading-[1] tracking-[-0.05em]">
            {steps[2].title}
          </p>
          <p className="mt-5 lg:mt-[32px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
            {steps[2].text}
          </p>
        </div>
        <div className="w-full lg:w-[1147px] shrink-0">
          <img
            src={steps[2].image}
            alt={steps[2].stage}
            className="w-full lg:w-[1147px] h-auto lg:h-[528px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)

const processText =
  "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies."

const videoSteps = [
  { stage: "Pre-production", title: "Meeting & Planning", text: processText, image: videoPreImg },
  { stage: "Production", title: "Lights, Camera, Action", text: processText, image: videoProdImg },
  { stage: "Post-production", title: "Review & Edit", text: processText, image: videoPostImg },
]

const photoSteps = [
  { stage: "Pre-production", title: "Meeting & Planning", text: processText, image: photoPreImg },
  { stage: "Production", title: "Lights, Camera, Action", text: processText, image: photoProdImg },
  { stage: "Post-production", title: "Review & Edit", text: processText, image: photoPostImg },
]

const wholePackageItems = [
  {
    title: "Planning",
    image: wholePlanningImg,
  },
  {
    title: "Talent & Location",
    image: wholeTalentImg,
  },
  {
    title: "Editing & Delivery",
    image: wholeEditingImg,
  },
]

const ServicesPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const sliderDrag = useDragScroll()

  const scrollSlider = dir => {
    const el = sliderDrag.ref.current
    if (!el) return
    el.scrollBy({ left: dir * 788, behavior: "smooth" })
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="services" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: Aaaand Action: Video Production (#317:3264) */}
        <section
          id="video-production"
          className="bg-brand-yellow -mt-[72px] pt-[120px] sm:pt-[180px] lg:pt-[240px] pb-16 sm:pb-24 lg:pb-0 lg:h-[1000px]"
        >
          <div className="container-x">
            <div className="lg:pl-[101px]">
              <h1 className="text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1] tracking-[-0.05em] text-white max-w-[1090px]">
                Aaaand Action:
                <br />
                Video Production
              </h1>

              <div className="mt-10 sm:mt-14 lg:mt-[60px] flex flex-col lg:flex-row items-start gap-10 lg:gap-[173px]">
                <p className="max-w-[610px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.8] lg:leading-[40px] tracking-[-0.05em] text-black">
                  Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
                  Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum
                  amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit
                  et velit morbi vitae dolor fames. Rhoncus.
                </p>

                <div className="lg:pt-[7px] space-y-[15px]">
                  <p className="text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-black">
                    Go to...
                  </p>
                  <a
                    href="#video-process"
                    className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                  >
                    <span className="text-black">
                      <GoToArrow />
                    </span>
                    Videography
                  </a>
                  <a
                    href="#photography"
                    className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                  >
                    <span className="text-black">
                      <GoToArrow />
                    </span>
                    Photography
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. VIDEO SERVICE PROCESS (#317:3243) */}
        <ProcessSection id="video-process" steps={videoSteps} />

        {/* 3. PIXEL PERFECTION: PHOTOGRAPHY (#317:3233) */}
        <section
          id="photography"
          className="bg-brand-blue py-16 sm:py-24 lg:py-0 lg:pt-[290px] lg:h-[1000px]"
        >
          <div className="container-x">
            <div className="lg:pl-[120px]">
              <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1] tracking-[-0.05em] text-white max-w-[1090px]">
                Pixel perfection:
                <br />
                Photography
              </h2>

              <div className="mt-10 sm:mt-14 lg:mt-[60px] flex flex-col lg:flex-row items-start gap-10 lg:gap-[173px]">
                <p className="max-w-[610px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.8] lg:leading-[40px] tracking-[-0.05em] text-black">
                  Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
                  Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum
                  amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit
                  et velit morbi vitae dolor fames. Rhoncus.
                </p>

                <div className="lg:pt-[7px] space-y-[15px]">
                  <p className="text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-black">
                    Go to...
                  </p>
                  <a
                    href="#video-production"
                    className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                  >
                    <span className="text-black">
                      <GoToArrow />
                    </span>
                    Video Production
                  </a>
                  <a
                    href="#the-whole-package"
                    className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                  >
                    <span className="text-black">
                      <GoToArrow />
                    </span>
                    The Rest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PHOTO SERVICE PROCESS (#317:3212) */}
        <ProcessSection id="photo-process" steps={photoSteps} invertHeadingColors />

        {/* 5. THE WHOLE PACKAGE (#317:3155) */}
        <section id="the-whole-package" className="pb-16 sm:pb-24 lg:pb-[144px]">
          <div className="bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[153px] lg:h-[823px]">
            <div className="container-x">
              <div className="lg:pl-[120px]">
                <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1] tracking-[-0.05em] text-white max-w-[1200px]">
                  We’ve got it covered:
                  <br />
                  The Whole Package
                </h2>

                <div className="mt-10 sm:mt-14 lg:mt-[60px] flex flex-col lg:flex-row items-start gap-10 lg:gap-[173px]">
                  <p className="max-w-[610px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.8] lg:leading-[40px] tracking-[-0.05em] text-black">
                    Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
                    Mollis sem scelerisque dictum nunc iaculis vivamus donec. Molestie sed mattis aenean sit arcu ipsum
                    amet vulputate tellus. Blandit pellentesque magna egestas eget rhoncus tincidunt. In ultrices velit
                    et velit morbi vitae dolor fames. Rhoncus.
                  </p>

                  <div className="lg:pt-[7px] space-y-[15px]">
                    <p className="text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-black">
                      Go to...
                    </p>
                    <a
                      href="#video-production"
                      className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                    >
                      <span className="text-black">
                        <GoToArrow />
                      </span>
                      Video Production
                    </a>
                    <a
                      href="#photography"
                      className="flex items-center gap-[13px] text-[18px] lg:text-[20px] font-extrabold leading-[25px] tracking-[-0.05em] text-white hover:opacity-80 transition"
                    >
                      <span className="text-black">
                        <GoToArrow />
                      </span>
                      Photography
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Whole Package Slider (#317:3156) */}
          <div className="container-x mt-12 sm:mt-20 lg:mt-[160px]">
            <div className="lg:pl-[37px] lg:-mr-[240px]">
              <div
                role="presentation"
                {...sliderDrag}
                className="flex gap-8 lg:gap-[48px] overflow-x-auto no-scrollbar pr-6 lg:pr-[120px] cursor-grab select-none"
              >
                {wholePackageItems.map(item => (
                  <React.Fragment key={item.title}>
                    <div className="w-[300px] sm:w-[346px] shrink-0 text-brand-slate">
                      <h3 className="text-[24px] sm:text-[30px] font-medium leading-[1] tracking-[-0.05em]">
                        {item.title}
                      </h3>
                      <div className="mt-6 lg:mt-[32px] text-[16px] sm:text-[20px] font-medium leading-[1.2] tracking-[-0.05em] space-y-5">
                        <ul className="list-disc pl-6 space-y-0.5">
                          <li>Lorem Ipsum dolor sit</li>
                          <li>Lorem Ipsum dolor sit</li>
                          <li>Lorem Ipsum dolor sit</li>
                          <li>Lorem Ipsum dolor sit</li>
                        </ul>
                        <p>
                          Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus
                          aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.
                        </p>
                      </div>
                    </div>
                    <div className="w-[300px] sm:w-[346px] h-[240px] sm:h-[280px] shrink-0 overflow-hidden rounded-[6px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable={false}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Slider Arrow Buttons */}
              <div className="mt-10 lg:mt-[62px] flex items-center gap-[24px]">
                <button
                  type="button"
                  onClick={() => scrollSlider(-1)}
                  aria-label="Previous slide"
                  className="w-[32px] h-[32px] rounded-full bg-brand-blue flex items-center justify-center text-black hover:brightness-110 transition"
                >
                  <svg viewBox="0 0 18 12" className="w-[16px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 6H2M7 1L2 6l5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider(1)}
                  aria-label="Next slide"
                  className="w-[32px] h-[32px] rounded-full bg-brand-blue flex items-center justify-center text-black hover:brightness-110 transition"
                >
                  <svg viewBox="0 0 18 12" className="w-[16px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 6h15M11 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default ServicesPage

export const Head = () => (
  <>
    <title>Services | Pocket Creatives</title>
    <meta
      name="description"
      content="Video production, photography, and full creative production services by Pocket Creatives."
    />
  </>
)
