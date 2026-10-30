import * as React from "react"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"

import iconStairs from "../images/how-we-work/icon-stairs.png"
import iconFlag from "../images/how-we-work/icon-flag.png"
import step2JoinShootImg from "../images/how-we-work/step2-join-shoot.png"
import step2RightFirstTimeImg from "../images/how-we-work/step2-right-first-time.png"

const accordionItems = [
  {
    title: "It starts by understanding",
    boxWidth: "lg:w-[1098px]",
    paragraphs: [
      "You’ll have to forgive us, but we ask a lot of questions at the start. There’s a good reason for this, stay with me…",
      "Our initial consultation is designed to get what’s in your head into ours. The more that we understand your brand and the context around your project, the better we can offer our expertise and tailor it to your needs. There are no templates here or off the shelf packages that 396 clients have bought before you, we’re responding to your individual requirements.",
    ],
  },
  {
    title: "It's not all about the money",
    boxWidth: "lg:w-[1140px]",
    paragraphs: [
      "We all hate talking about money, right, and we’re no different. Unless you tell us you have a million pounds to spend then that might change our feelings towards the conversation.",
      "The reality is that not many people get in touch with a million pounds to spend, but the important thing to understand is what you do have. The budget available will impact the route that we take to deliver your project. Once we’ve understood the scope of your project we can give you a really good idea of the likely spend. We’ll advise if we can cut any corners without the results suffering, and give plenty of recommendations at this point.",
      "We’re here because we want to work with you, not put you off with unrealistic costings. If we can understand either what you want to spend, what you need to bring the project in for, or we can walk you through all of the options with which to make an informed decision.",
      "Let’s get that out of the way early so that we can get on with the fun stuff!",
    ],
  },
  {
    title: "Planning is the most important stage",
    boxWidth: "lg:w-[1460px]",
    paragraphs: [
      "I’m not sure we could sound any more boring if we tried, but spending time planning, and then planning some more, is crucial in the success of any project we take on.",
      "Sure, the filming team will argue that the choice of lenses are crucial, and the editors will chip-in with any of a hundred different cutting techniques. But if your project has missed a beat in the planning stage, it gets felt further down the line. Fact.",
      "The idea here is that if we can be detailed with our decisions as we can about production, before any lens gets mounted or any lights get switched on, production will run smoother. And it takes the guesswork out of knowing what you’re going to get at the end.",
      "We have invested in a great team of Producers who will look after your project from start to finish, always on, running the show with your best interests at heart.",
    ],
  },
]

const HowWeWorkPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="about" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        {/* 1. HERO: Looking for a team (#2278:1351, y:96, w:1920, h:826) */}
        <section className="pt-12 sm:pt-20 lg:pt-[128px] pb-14 sm:pb-20 lg:pb-[128px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:pl-[205px] lg:pr-[253px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[70px]">
              {/* Left Column (#2278:1354, x:205, y:296, w:598) */}
              <div className="lg:pt-[72px] max-w-[598px] shrink-0">
                <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.24] tracking-[-0.05em] max-w-[580px]">
                  <span className="font-normal text-brand-slate">Looking for a </span>
                  <span className="font-extrabold text-brand-blue">team with a proven approach </span>
                  <span className="font-normal text-brand-slate">
                    to creating great video and photography?{" "}
                  </span>
                  <span className="font-extrabold text-brand-slate">Then this is for you.</span>
                </h1>

                <p className="mt-8 lg:mt-[56px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[26px] tracking-[-0.05em] text-brand-slate">
                  Why deliver boring and uninspiring content when visuals can be exciting, engaging and can work harder
                  to really impact your audience.
                </p>

                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="mt-8 lg:mt-[45px] inline-flex items-center justify-center gap-3 w-[199px] h-[48px] rounded-[16px] bg-brand-yellow text-[18px] font-medium tracking-[-0.02em] text-black shadow-[0_4px_10px_rgba(0,0,0,0.12)] hover:brightness-105 transition"
                >
                  <svg viewBox="0 0 24 18" className="w-[24px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="1" width="22" height="16" rx="2" />
                    <path d="M1 3l11 7 11-7" />
                  </svg>
                  Have questions?
                </button>
              </div>

              {/* Right Column: Blue Box + Yellow Box (#2723:1371 & #2723:1378, x:873, w:794) */}
              <div className="w-full lg:w-[794px] space-y-6 lg:space-y-[27px] shrink-0">
                {/* Blue Box (#2723:1372, w:794, h:265) */}
                <div className="bg-brand-blue text-white p-6 sm:p-10 lg:pl-[75px] lg:pr-[72px] lg:pt-[25px] lg:pb-[36px] lg:min-h-[265px]">
                  <div className="flex items-center gap-4 lg:gap-[11px]">
                    <img
                      src={iconStairs}
                      alt=""
                      aria-hidden="true"
                      className="w-[56px] sm:w-[72px] lg:w-[87px] h-auto shrink-0"
                    />
                    <h2 className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold leading-[1.1] lg:leading-[101px] tracking-[-0.05em]">
                      How we work
                    </h2>
                  </div>
                  <p className="mt-4 lg:mt-[4px] max-w-[647px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[25px] tracking-[-0.05em]">
                    It’s as important to understand how a company works, as it is to see the quality of their end
                    results. The way that we go about running our projects and constructing our service plays a big
                    part in deciding whether we get to work together.
                  </p>
                </div>

                {/* Yellow Box (#2723:1379, w:794, h:278) */}
                <div className="bg-brand-yellow text-black p-6 sm:p-10 lg:pl-[72px] lg:pr-[77px] lg:pt-[25px] lg:pb-[37px] lg:min-h-[278px]">
                  <div className="flex items-center gap-4 lg:gap-[20px] lg:pl-[9px]">
                    <img
                      src={iconFlag}
                      alt=""
                      aria-hidden="true"
                      className="w-[48px] sm:w-[60px] lg:w-[69px] h-auto shrink-0"
                    />
                    <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[50px] tracking-[-0.05em]">
                      A successful project starts
                      <br />
                      with great service
                    </h2>
                  </div>
                  <p className="mt-4 lg:mt-[17px] max-w-[645px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[25px] tracking-[-0.05em]">
                    Our current process is based on years of experience and learning: reflecting on the times that we
                    got it wrong, doing more of what we get right and constantly reviewing and refining. Every decision
                    that’s formed our creative approach is based on one of these factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STEP 1: ACCORDION BAND (#2611:2693, y:922, w:1920, h:932) */}
        <section className="relative bg-brand-blue py-16 sm:py-24 lg:pt-[229px] lg:pb-[160px] lg:min-h-[932px] overflow-hidden">
          {/* Giant outlined "1" watermark (#I2611:2693;2609:2259, x:190, y:-85, fontSize:1100px) */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none hidden lg:block absolute left-[190px] -top-[85px] text-[1100px] font-bold leading-[1100px] tracking-[-0.02em] text-transparent"
            style={{ WebkitTextStroke: "30px rgba(36,52,80,0.12)" }}
          >
            1
          </div>

          <div className="relative z-10 mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            <div className="lg:pl-[226px] space-y-8 lg:space-y-[36px]">
              {accordionItems.map((item, idx) => {
                const isActive = openIndex === idx
                return (
                  <div key={item.title}>
                    {isActive ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(idx)}
                          className={`inline-flex items-center justify-between gap-6 bg-brand-yellow px-6 sm:px-8 lg:px-[32px] py-4 lg:py-0 lg:h-[116px] ${item.boxWidth} max-w-full text-left`}
                        >
                          <span className="text-[32px] sm:text-[52px] lg:text-[80px] font-bold leading-[1] tracking-[-0.02em] text-black">
                            {item.title}
                          </span>
                          <svg
                            viewBox="0 0 34 20"
                            className="w-[24px] sm:w-[30px] h-auto shrink-0 text-black"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                          >
                            <path d="M3 17L17 4l14 13" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        <div className="mt-6 lg:mt-[23px] lg:pl-[5px] max-w-[1225px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] lg:leading-[20px] tracking-[-0.02em] text-white space-y-5">
                          {item.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenIndex(idx)}
                        className="flex items-center gap-6 text-left group"
                      >
                        <span className="text-[32px] sm:text-[52px] lg:text-[80px] font-bold leading-[1] tracking-[-0.02em] text-white group-hover:text-brand-yellow transition">
                          {item.title}
                        </span>
                        <svg
                          viewBox="0 0 34 20"
                          className="w-[24px] sm:w-[30px] h-auto shrink-0 text-white group-hover:text-brand-yellow transition"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="6"
                        >
                          <path d="M3 3l14 13L31 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. STEP 2: YES YOU CAN JOIN US & IF IT'S RIGHT FIRST TIME (#2491:1592, y:1854 to y:3470) */}
        <section className="relative py-16 sm:py-24 lg:pt-[206px] lg:pb-[235px] overflow-hidden">
          {/* Giant outlined "2" watermark (#2491:1720, x:591, fontSize:1800px) */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none hidden lg:block absolute left-[591px] -top-[115px] text-[1800px] font-bold leading-[1800px] tracking-[-0.02em] text-transparent"
            style={{ WebkitTextStroke: "30px rgba(36,52,80,0.08)" }}
          >
            2
          </div>

          <div className="relative z-10 mx-auto max-w-[1920px] space-y-16 sm:space-y-24 lg:space-y-[117px]">
            {/* Row 1: Yes, you can join us for the shoot! (#2491:1593) */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[136px] px-5 sm:px-9 lg:px-0">
              <div className="w-full lg:w-[755px] shrink-0">
                <img
                  src={step2JoinShootImg}
                  alt="Join us on set for the shoot"
                  className="w-full lg:w-[755px] h-auto lg:h-[529px] object-cover"
                />
              </div>

              <div className="max-w-[745px] text-brand-slate">
                <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em]">
                  Yes, you can join us for the shoot!
                </h2>
                <div className="mt-6 lg:mt-[43px] max-w-[740px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                  <p>
                    Crazily, we still hear stories about clients being banned from attending shoots when working with
                    some other agencies or production companies. It just doesn’t make sense to us. We love having
                    clients with us on set, and here’s why… If the shot isn’t as you like, you can tell us and we can
                    change it. As simple as it is brilliant! We can avoid all of those difficult conversations in the
                    edit about “wishing that cup was placed just a bit more to the left…” and just fix it there and
                    then.
                  </p>
                  <p>
                    The beauty of anything creative is that there’s no right and wrong, just loads of grey between the
                    black and white. Whether something looks right is often perception, and as you’re the client, we’re
                    here to make sure that the work we produce looks right to you.
                  </p>
                  <p>
                    And who doesn’t like those orgasmic sounds of pleasure when that shot is EXACTLY as you like it?
                    Believe it or not, most creatives suffer with imposter syndrome – we question every one of our own
                    decisions, but take tremendous pride in delivering high quality work. That little noise you make
                    when you like what you see on the screen means the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: If it's right first time, something's wrong (#2491:1598) */}
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 lg:gap-0 px-5 sm:px-9 lg:px-0">
              <div className="lg:pl-[190px] lg:pt-[118px] max-w-[1006px] text-brand-slate">
                <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em]">
                  If it&apos;s right first time, something&apos;s wrong
                </h2>
                <div className="mt-6 lg:mt-[43px] max-w-[816px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.05em] text-justify space-y-5">
                  <p>
                    With a million and one ways to edit a video or a still image, the distance between right and wrong
                    gets further apart. One great aspect of working digitally is that you get to move things, delete
                    things, put things back as they were four versions ago, all with relative ease.
                  </p>
                  <p>
                    We don’t expect you to know whether you’re happy until you’ve seen it, and if you don’t love it, we
                    can change it. Your budget will have included time for review, feedback and for us to deliver
                    updated versions back to you, so the pressure’s off. Unless you’re on a particularly tight
                    deadline, in which case, scrap all of the above, WE NEED TO KNOW NOW :)
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[718px] shrink-0">
                <img
                  src={step2RightFirstTimeImg}
                  alt="Editing and reviewing with client"
                  className="w-full lg:w-[718px] h-auto lg:h-[529px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. STEP 3: SEE YOU NEXT TIME + FORM (#2491:1739, y:3470, w:1920, h:955) */}
        <section className="relative bg-brand-yellow py-16 sm:py-24 lg:py-0 lg:pt-[111px] lg:h-[955px] overflow-hidden">
          {/* Giant outlined "3" watermark (#2491:1740, x:243, y:-65, fontSize:1100px) */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none hidden lg:block absolute left-[243px] -top-[65px] text-[1100px] font-bold leading-[1100px] tracking-[-0.02em] text-transparent"
            style={{ WebkitTextStroke: "30px rgba(36,52,80,0.10)" }}
          >
            3
          </div>

          <div className="relative z-10 container-x">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[45px]">
              {/* Left Column (#2491:1722 & #2491:1628, x:236, y:3666, w:636) */}
              <div className="lg:pt-[85px] max-w-[636px] shrink-0">
                <h2 className="text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold leading-[1] tracking-[-0.05em] text-white">
                  See you
                  <br />
                  next time
                </h2>

                <div className="mt-8 lg:mt-[44px] lg:pl-[7px] max-w-[599px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2] lg:leading-[20px] tracking-[-0.05em] text-black space-y-5">
                  <p>
                    The truth of the matter, is that we love all this. We’re here because we choose to be (and because
                    we failed the GCHQ entry quiz). We’ve built a team who genuinely care about delivering you the best
                    service that we’re able to.
                  </p>
                  <p>
                    The next step in the process is seeing how we can get it even better for you next time.
                  </p>
                </div>
              </div>

              {/* Right Column: Heading + Form (#2491:1708 & #2491:1723, x:917, w:738) */}
              <div className="w-full lg:w-[738px] shrink-0">
                <h3 className="max-w-[713px] text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1] tracking-[-0.05em] text-black">
                  Ready to see what we could do with your next project?
                </h3>

                <form
                  onSubmit={e => e.preventDefault()}
                  className="mt-8 lg:mt-[37px] w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[22px]">
                    <div>
                      <label
                        htmlFor="hww-name"
                        className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                      >
                        What’s your name? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hww-name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black placeholder:text-black outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hww-email"
                        className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                      >
                        Your email address? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hww-email"
                        type="email"
                        placeholder="johndoe@example.com"
                        className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[16px] lg:text-[18px] text-black placeholder:text-black outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hww-phone"
                        className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                      >
                        Your contact number? <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hww-phone"
                        type="tel"
                        className="w-full h-[60px] lg:h-[73px] bg-white px-5 text-[18px] lg:text-[20px] text-black outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-[15px]">
                    <label
                      htmlFor="hww-help"
                      className="block text-[18px] lg:text-[20px] font-extrabold leading-[1] tracking-[-0.05em] text-black mb-[15px]"
                    >
                      How can we help? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="hww-help"
                      rows={8}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum. Mauris euismod placerat elementum. Ut scelerisque leo mauris, a lobortis enim aliquam quis. Fusce aliquam ornare pharetra. Curabitur eros ligula, egestas at lacinia vitae, rutrum quis mauris."
                      className="w-full lg:h-[395px] bg-white p-6 lg:px-[60px] lg:py-[50px] text-[16px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.05em] text-black placeholder:text-black outline-none resize-none"
                    />
                  </div>

                  <div className="mt-4 lg:mt-[15px] flex justify-end">
                    <button
                      type="submit"
                      className="w-[188px] h-[54px] rounded-[16px] bg-brand-blue text-[20px] font-extrabold tracking-[-0.05em] text-white hover:brightness-110 transition"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ModalContext.Provider>
  )
}

export default HowWeWorkPage

export const Head = () => (
  <>
    <title>How We Work | Pocket Creatives</title>
    <meta
      name="description"
      content="Discover how Pocket Creatives plans, shoots, and edits video and photography projects."
    />
  </>
)

