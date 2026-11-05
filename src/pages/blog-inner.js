import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ContactModal, { ModalContext } from "../components/ContactModal"

import innerHeroImg from "../images/blogs/inner-hero.png"
import related1 from "../images/blogs/related-1.png"
import related2 from "../images/blogs/related-2.png"
import related3 from "../images/blogs/related-3.png"
import related4 from "../images/blogs/related-4.png"
import related5 from "../images/blogs/related-5.png"
import related6 from "../images/blogs/related-6.png"
import related7 from "../images/blogs/related-7.png"
import related8 from "../images/blogs/related-8.png"

const relatedArticles = [
  {
    image: related1,
    title: "What is DP in Video Production? Role & Importance Explained",
  },
  {
    image: related2,
    title: "What Are The 5 Stages of Video Production? (Essential Guide)",
  },
  {
    image: related3,
    title: "Crowdfunding video for Synergised UK",
  },
  {
    image: related4,
    title: "Our Product Videographers Shoot With Skinny Tan",
  },
  {
    image: related5,
    title: "Beauty Product Photography for Pony Revolution",
  },
  {
    image: related6,
    title: "Video Production For Publishing",
  },
  {
    image: related7,
    title: "Photography and video production with energy",
  },
  {
    image: related8,
    title: "Our first TV ad as a Video Production Company",
  },
]

const ThumbsUpIcon = ({ className = "w-[24px] h-[24px]" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
)

const BlogInnerPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [likes, setLikes] = React.useState(999)
  const [liked, setLiked] = React.useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(l => l - 1)
      setLiked(false)
    } else {
      setLikes(l => l + 1)
      setLiked(true)
    }
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout active="blogs" onContactClick={() => setIsOpen(true)}>
        <ContactModal />

        <div className="bg-white -mt-[96px] pt-[120px] sm:pt-[140px] lg:pt-[147px] pb-16 sm:pb-24 lg:pb-[132px]">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-9 lg:px-0">
            {/* 1. HEADER & HERO IMAGE */}
            <div className="lg:ml-[239px] lg:w-[1442px]">
              {/* Go back to blogs (#4263:3705, x:279, y:147) */}
              <div className="lg:ml-[40px]">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-[8px] text-[15px] sm:text-[16px] font-medium leading-[16px] tracking-[-0.05em] text-brand-blue hover:underline"
                >
                  <svg viewBox="0 0 8 12" className="w-[7px] h-[11px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 1L1 6l6 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Go back to blogs</span>
                </Link>
              </div>

              {/* Blog Title (#4263:3618, x:281, y:188, w:1334) */}
              <h1 className="mt-5 lg:mt-[25px] lg:ml-[42px] max-w-[1334px] text-[36px] sm:text-[56px] lg:text-[80px] font-bold leading-[1] tracking-[-0.05em] text-brand-slate">
                What is a Treatment in Video Production? Expert Answers!
              </h1>

              {/* Author / Date / Tag Meta Row (#4263:3623 + #4263:3621 + #4263:3619, y:373) */}
              <div className="mt-6 lg:mt-[25px] lg:ml-[42px] flex flex-wrap items-center gap-4 lg:gap-[20px]">
                <span className="text-[16px] sm:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-brand-blue">
                  Pocket Creatives
                </span>
                <span className="w-[6px] h-[6px] rounded-full bg-brand-blue" />
                <span className="text-[16px] sm:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-brand-blue">
                  20th March 2025
                </span>
                <span className="lg:ml-[10px] inline-flex w-[128px] h-[38px] items-center justify-center rounded-[10px] bg-brand-yellow text-[18px] sm:text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-black">
                  Video
                </span>
              </div>

              {/* Hero Image (#4263:3663, x:239, y:435, w:1442, h:503) */}
              <div className="mt-6 lg:mt-[24px] w-full lg:w-[1442px] lg:h-[503px] overflow-hidden bg-gray-100">
                <img
                  src={innerHeroImg}
                  alt="What is a Treatment in Video Production?"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2. TABLE OF CONTENTS + ARTICLE BODY (y:973) */}
            <div className="mt-10 lg:mt-[35px] lg:ml-[241px] lg:w-[1387px] flex flex-col lg:flex-row items-start gap-10 lg:gap-[41px]">
              {/* Left Yellow Table of Contents Box (#4845:5253, w:300, h:405) */}
              <aside className="w-full lg:w-[300px] lg:min-h-[405px] bg-brand-yellow p-6 sm:p-8 lg:px-[38px] lg:py-[29px] shrink-0">
                <h2 className="text-[20px] font-bold leading-[20px] tracking-[-0.05em] text-black">
                  Table of Contents
                </h2>
                <nav className="mt-[20px] flex flex-col gap-[20px] text-[18px] sm:text-[20px] font-normal leading-[20px] tracking-[-0.05em] text-black">
                  <a href="#what-is-treatment" className="hover:underline">
                    What is Treatment in Video Production?
                  </a>
                  <a href="#different-types" className="hover:underline">
                    Different Types of Video Treatments &amp; Their Use Cases
                  </a>
                  <a href="#treatment-vs-script" className="hover:underline">
                    Treatment vs. Script vs. Storyboard – What’s the Difference?
                  </a>
                  <a href="#why-important" className="hover:underline">
                    Why is a Video Treatment Important?
                  </a>
                </nav>
              </aside>

              {/* Right Article Content (#4263:3622, w:1046) */}
              <article className="w-full lg:w-[1046px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[22px] tracking-[-0.05em] text-brand-slate space-y-5">
                <p>
                  Ever had a brilliant video idea but struggled to communicate it clearly? Whether you’re planning a
                  product video, brand film, or social media advert, ensuring everyone shares the same vision is
                  crucial. That’s where a treatment comes in.
                </p>
                <p>
                  But what is a treatment in video production? It’s a concise, structured document outlining your
                  video’s concept, tone, narrative, and stylistic approach. It acts as a roadmap before scriptwriting,
                  helping directors, clients, and production teams stay aligned.
                </p>
                <p>
                  A well-structured video treatment ensures clarity, minimises revisions, and keeps your creative
                  vision intact. But what does it look like? And how do you write one? In this guide, we’ll break down
                  everything you need to know – from step-by-step structuring to common mistakes to avoid.
                </p>

                <h2
                  id="what-is-treatment"
                  className="pt-4 text-[22px] sm:text-[24px] lg:text-[20px] font-bold leading-[22px] text-brand-slate"
                >
                  What is a Treatment in Video Production?
                </h2>
                <p>
                  A video treatment is a pre-production document that summarises a project’s creative vision, story
                  structure, and stylistic approach. It’s often used before scriptwriting to define the mood, tone,
                  and key messaging of the video.
                </p>
                <p>A treatment is particularly useful for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <b className="font-bold">Aligning stakeholders</b> – ensuring everyone shares the same creative
                    vision.
                  </li>
                  <li>
                    <b className="font-bold">Pitching ideas</b> – helping clients, investors, or internal teams
                    approve a concept.
                  </li>
                  <li>
                    <b className="font-bold">Minimising revisions</b> – reducing confusion and costly reshoots during
                    production.
                  </li>
                </ul>

                <h2
                  id="treatment-vs-script"
                  className="pt-4 text-[22px] sm:text-[24px] lg:text-[20px] font-bold leading-[22px] text-brand-slate"
                >
                  Treatment vs. Script vs. Storyboard – What’s the Difference?
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full max-w-[780px] text-left border-collapse">
                    <thead>
                      <tr className="font-bold">
                        <th className="py-1 pr-6">Document</th>
                        <th className="py-1 pr-6">Purpose</th>
                        <th className="py-1">Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1 pr-6 font-bold">Treatment</td>
                        <td className="py-1 pr-6">High-level concept &amp; visual style</td>
                        <td className="py-1">Big-picture storytelling</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-6 font-bold">Script</td>
                        <td className="py-1 pr-6">Detailed dialogue &amp; scene actions</td>
                        <td className="py-1">Every word &amp; movement</td>
                      </tr>
                      <tr>
                        <td className="py-1 pr-6 font-bold">Storyboard</td>
                        <td className="py-1 pr-6">Shot-by-shot visual representation</td>
                        <td className="py-1">Camera angles &amp; flow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  If you’re wondering what is a treatment in video production, it’s essentially the first step to
                  transforming an idea into a fully structured video concept.
                </p>

                <h2
                  id="different-types"
                  className="pt-4 text-[22px] sm:text-[24px] lg:text-[20px] font-bold leading-[22px] text-brand-slate"
                >
                  Different Types of Video Treatments &amp; Their Use-Cases
                </h2>
                <p>
                  Not all video treatments are created equal! Depending on the type of video, a treatment can vary
                  significantly in structure, tone, and purpose. Here’s how treatments differ based on video type:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Commercial Video Treatment</h3>
                    <ul className="list-disc pl-6">
                      <li>Used by brands to develop advertising concepts before production.</li>
                      <li>Focuses on storytelling, emotional triggers, and brand messaging.</li>
                      <li>Often includes a mood board, visual style guide, and proposed call-to-action (CTA).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Corporate Video Treatment</h3>
                    <ul className="list-disc pl-6">
                      <li>Ideal for company overview videos, testimonials, or training content.</li>
                      <li>Emphasises clarity, professionalism, and messaging alignment.</li>
                      <li>Often contains structured interview segments, voice over scripting, and branding elements.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Product Video Treatment</h3>
                    <ul className="list-disc pl-6">
                      <li>Essential for eCommerce, product showcases, and explainer videos.</li>
                      <li>Focuses on highlighting product features, functionality, and benefits.</li>
                      <li>May include macro product shots, animation concepts, and demonstration sequences.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Event Video Treatment</h3>
                    <ul className="list-disc pl-6">
                      <li>Guides the filming of conferences, product launches, or live events.</li>
                      <li>Details multi-camera setups, key interview shots, crowd interactions, and event highlights.</li>
                      <li>Ensures smooth coverage with a shot list and schedule.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">Social Media Video Treatment</h3>
                    <ul className="list-disc pl-6">
                      <li>Short-form, engaging, and highly visual.</li>
                      <li>Optimised for Instagram Reels, TikTok, and YouTube Shorts.</li>
                      <li>Focuses on snappy edits, eye-catching transitions, and mobile-friendly framing.</li>
                    </ul>
                  </div>
                </div>

                <p>
                  At Pocket Creatives, we tailor each treatment to match the brand’s goals, audience, and video
                  platform – ensuring every project delivers maximum impact! If you’re still asking what is a
                  treatment in video production, the answer is it’s an essential blueprint for video success.
                </p>

                <h2
                  id="why-important"
                  className="pt-4 text-[22px] sm:text-[24px] lg:text-[20px] font-bold leading-[22px] text-brand-slate"
                >
                  Why is a Video Treatment Important?
                </h2>
                <p>
                  A video production treatment isn’t just a creative exercise – it’s a practical tool that saves time,
                  money, and confusion.
                </p>
                <p className="font-bold">Key Benefits:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <b className="font-bold">Clarity &amp; Direction</b> – A well-structured treatment eliminates
                    misinterpretation between teams.
                  </li>
                  <li>
                    <b className="font-bold">Client Approvals</b> – Treatments provide a clear preview of the video’s
                    message before investing in production.
                  </li>
                  <li>
                    <b className="font-bold">Fewer Revisions</b> – A solid treatment reduces back-and-forth changes,
                    cutting production delays.
                  </li>
                  <li>
                    <b className="font-bold">Professionalism</b> – Agencies and brands expect structured treatments
                    before committing to large-scale projects.
                  </li>
                  <li>
                    <b className="font-bold">Brand Consistency</b> – A well-written treatment not only improves
                    creative alignment but also strengthens brand consistency.
                  </li>
                </ul>
                <p>
                  By outlining visual and messaging guidelines upfront, businesses can ensure that every video reflects
                  their brand identity. This makes marketing efforts more cohesive across different campaigns,
                  improving audience trust and recognition.
                </p>
                <p>
                  For example, at Pocket Creatives, when working on a crowdfunding video for a beauty brand, a
                  treatment helped refine the product’s visual story before production, avoiding costly mid-project
                  changes.
                </p>
                <p>So on......</p>
              </article>
            </div>

            {/* 3. LIKE BAR & RELATED NEWS (#4845:5254, x:260, y:2930, w:1399) */}
            <div className="mt-14 lg:mt-[75px] lg:ml-[260px] lg:w-[1399px]">
              {/* Like Row (#4263:3626) */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={handleLike}
                  className="w-[144px] h-[48px] bg-brand-yellow flex items-center justify-center gap-[9px] text-[20px] font-medium leading-[20px] tracking-[-0.05em] text-black hover:brightness-105 transition shrink-0"
                >
                  <ThumbsUpIcon className="w-[24px] h-[24px] text-black" />
                  <span>Like</span>
                </button>

                <div className="mx-[23px] w-[1px] h-[30px] bg-brand-slate shrink-0" />

                <div className="flex items-center gap-[9px] text-brand-blue shrink-0">
                  <ThumbsUpIcon className="w-[26px] h-[24px]" />
                  <span className="text-[20px] font-bold leading-[20px] tracking-[-0.05em]">{likes}</span>
                </div>

                <div className="ml-[22px] flex-1 h-[1px] bg-brand-slate" />
              </div>

              {/* Related News Heading (#4263:3617, y:3011, mt:33px) */}
              <h2 className="mt-8 lg:mt-[33px] text-[20px] font-bold leading-[20px] tracking-[-0.05em] text-brand-slate">
                Related News
              </h2>

              {/* Related News Grid (#4263:3640, x:361 -> ml:101px, y:3063 -> mt:32px, w:1134) */}
              <div className="mt-8 lg:mt-[32px] lg:ml-[101px] lg:w-[1134px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-[21px] lg:gap-y-[32px]">
                {relatedArticles.map(rel => (
                  <Link
                    key={rel.title}
                    to="/blog-inner"
                    className="group block w-full lg:w-[364px]"
                  >
                    <div className="w-full lg:w-[364px] h-[180px] overflow-hidden bg-gray-100">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="mt-[25px] text-[18px] sm:text-[20px] font-bold leading-[20px] tracking-[-0.05em] text-brand-slate group-hover:text-brand-blue transition">
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ModalContext.Provider>
  )
}

export default BlogInnerPage

export const Head = () => (
  <>
    <title>What is a Treatment in Video Production? | Pocket Creatives Blog</title>
    <meta
      name="description"
      content="Learn what a video treatment is, how it compares to scripts and storyboards, and why it is essential for successful video production."
    />
  </>
)

