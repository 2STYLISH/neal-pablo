import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"

import locationHeroImg from "../images/contact/location-hero.png"
import vacanciesImg from "../images/contact/vacancies.png"
import partnersImg from "../images/contact/partners.png"
import iconPhone from "../images/contact/icon-phone.png"
import iconLocation from "../images/contact/icon-location.png"
import iconEmail from "../images/contact/icon-email.png"

const ContactPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="contact" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: Grab a latte and let's have a chat (#2257:1607, y:0, w:1921, h:1072) */}
        <section className="bg-brand-blue -mt-[72px] pt-[140px] sm:pt-[200px] lg:pt-[319px] pb-16 sm:pb-24 lg:pb-0 lg:h-[1072px] text-white">
          <div className="container-x">
            <div className="lg:pl-[9px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[69px]">
              {/* Left Heading & Intro (#2255:1178 & #2255:1183, x:249, w:636) */}
              <div className="max-w-[636px] shrink-0 lg:pt-[3px]">
                <h1 className="text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1] tracking-[-0.05em] text-white">
                  Grab a latte
                  <br />
                  and let&apos;s
                  <br />
                  have a chat
                </h1>

                <div className="mt-8 lg:mt-[46px] max-w-[599px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] lg:leading-[20px] tracking-[-0.05em] text-white space-y-5">
                  <p>
                    Want to talk about your new project with our video and photography agency team?
                  </p>
                  <p>
                    We aim to reply within <strong className="font-bold">1 hour</strong> during normal working hours,
                    so we can get you that quote and any more information as quickly as possible.
                  </p>
                  <p>We’d love to hear from you!</p>
                </div>
              </div>

              {/* Right Form (#2385:1295, x:954, y:319, w:738, h:661) */}
              <form
                onSubmit={e => e.preventDefault()}
                className="w-full lg:w-[738px] shrink-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[22px]">
                  <div>
                    <label
                      htmlFor="contact-page-name"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-white mb-[15px]"
                    >
                      What’s your name? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-page-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-page-email"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-white mb-[15px]"
                    >
                      Your email address? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-page-email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[16px] lg:text-[18px] text-black placeholder:text-black outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-page-phone"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-white mb-[15px]"
                    >
                      Your contact number? <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-page-phone"
                      type="tel"
                      className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 lg:mt-[15px]">
                  <label
                    htmlFor="contact-page-help"
                    className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-white mb-[15px]"
                  >
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-page-help"
                    rows={8}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
                    className="w-full lg:h-[395px] bg-white p-6 lg:px-[60px] lg:py-[50px] text-[16px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.05em] text-black placeholder:text-black outline-none resize-none"
                  />
                </div>

                <div className="mt-4 lg:mt-[15px] flex justify-end">
                  <button
                    type="submit"
                    className="w-[188px] h-[54px] rounded-[16px] bg-brand-yellow text-[20px] font-extrabold tracking-[-0.05em] text-black hover:brightness-105 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 2. LOCATION & CONTACT BAR (#2257:1610, x:249, y:1167, w:1443, h:949) */}
        <section className="pt-14 sm:pt-20 lg:pt-[95px] pb-16 sm:pb-24 lg:pb-[135px]">
          <div className="container-x">
            <div className="lg:pl-[9px] lg:-mr-[12px]">
              {/* 3 Contact Items (#2385:1361) */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <a
                  href="tel:02036338494"
                  className="flex items-center gap-6 lg:gap-[33px] group"
                >
                  <img
                    src={iconPhone}
                    alt=""
                    aria-hidden="true"
                    className="w-[72px] h-[72px] lg:w-[104px] lg:h-[104px] shrink-0"
                  />
                  <span className="text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.05em] text-brand-slate group-hover:text-brand-blue transition">
                    020 3633 8494
                  </span>
                </a>

                <a
                  href="https://maps.google.com/maps?q=wow+workspaces+battersea"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 lg:gap-[33px] group"
                >
                  <img
                    src={iconLocation}
                    alt=""
                    aria-hidden="true"
                    className="w-[72px] h-[72px] lg:w-[104px] lg:h-[104px] shrink-0"
                  />
                  <span className="text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.05em] text-brand-slate group-hover:text-brand-blue transition">
                    Wow Workspaces Battersea
                    <br />
                    Unit 3, 7-9 Ingate Place
                    <br />
                    Battersea, London SW8 3NS
                  </span>
                </a>

                <a
                  href="mailto:team@pocketcreatives.co.uk"
                  className="flex items-center gap-6 lg:gap-[33px] group"
                >
                  <img
                    src={iconEmail}
                    alt=""
                    aria-hidden="true"
                    className="w-[72px] h-[72px] lg:w-[104px] lg:h-[104px] shrink-0"
                  />
                  <span className="text-[18px] lg:text-[20px] font-extrabold leading-[20px] tracking-[-0.05em] text-brand-slate group-hover:text-brand-blue transition">
                    team@pocketcreatives.co.uk
                  </span>
                </a>
              </div>

              {/* Google Map Image (#2257:1611, w:1443, h:809) */}
              <a
                href="https://maps.google.com/maps?q=wow+workspaces+battersea"
                target="_blank"
                rel="noreferrer"
                className="block mt-8 lg:mt-[36px]"
              >
                <img
                  src={locationHeroImg}
                  alt="Pocket Creatives location map at Wow Workspaces Battersea"
                  className="w-full lg:w-[1443px] h-auto lg:h-[809px] object-cover"
                />
              </a>
            </div>
          </div>
        </section>

        {/* 3. VACANCIES & PARTNERS (#2257:1609, y:2251, w:1920, h:1187) */}
        <section className="bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[136px] lg:h-[1187px]">
          <div className="container-x">
            {/* Row 1: Vacancies (#2257:1622, x:239, y:2387, w:1269, h:415) */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[101px]">
              <img
                src={vacanciesImg}
                alt="Pocket Creatives team on sofa"
                className="w-full lg:w-[731px] h-auto lg:h-[415px] object-cover shrink-0"
              />

              <div className="lg:pt-[61px] max-w-[437px]">
                <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em] text-black">
                  Vacancies
                </h2>
                <p className="mt-6 lg:mt-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-black">
                  At our video and photography agency we always want to hear from great people and create regular
                  opportunities. Feel free to send us your information to the address below:
                </p>
                <a
                  href="mailto:jobs@pocketcreatives.co.uk"
                  className="mt-6 lg:mt-[26px] inline-flex items-center justify-center bg-brand-blue px-[15px] h-[37px] text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.05em] text-white hover:brightness-110 transition"
                >
                  jobs@pocketcreatives.co.uk
                </a>
              </div>
            </div>

            {/* Row 2: Partners (#2257:1616, x:367, y:2802, w:1374, h:491) */}
            <div className="mt-14 lg:mt-[76px] lg:pl-[127px] flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-[126px]">
              <div className="lg:pt-[62px] max-w-[381px] shrink-0">
                <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em] text-black">
                  Partners
                </h2>
                <p className="mt-6 lg:mt-[28px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-black">
                  Our video and photography agency also has links to some excellent partners who work in other creative
                  industries. If you think you’d make a good Pocket Partner, mail us below:
                </p>
                <a
                  href="mailto:partners@pocketcreatives.co.uk"
                  className="mt-6 lg:mt-[35px] inline-flex items-center justify-center bg-brand-blue px-[15px] h-[37px] text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.05em] text-white hover:brightness-110 transition"
                >
                  partners@pocketcreatives.co.uk
                </a>
              </div>

              <div className="relative w-full lg:w-[805px] shrink-0">
                <img
                  src={partnersImg}
                  alt="Pocket Creatives brand partners"
                  className="w-full lg:w-[805px] h-auto lg:h-[415px] object-cover"
                />
                {/* See Our Works Circular Badge (#2385:1399, x:1616, y:2802, w:125, h:125) */}
                <Link
                  to="/works"
                  className="absolute -top-10 right-2 lg:-top-[76px] lg:-right-[62px] w-[100px] h-[100px] lg:w-[125px] lg:h-[125px] rounded-full bg-brand-blue text-white flex items-center justify-center text-center text-[20px] lg:text-[25px] font-extrabold leading-[1] tracking-[-0.05em] rotate-[10deg] shadow-md hover:scale-105 transition-transform"
                >
                  See Our
                  <br />
                  Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default ContactPage

export const Head = () => (
  <>
    <title>Contact Us | Pocket Creatives</title>
    <meta
      name="description"
      content="Get in touch with Pocket Creatives for your next video production or photography project."
    />
  </>
)

