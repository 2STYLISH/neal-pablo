import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const navLinks = [
  { label: "Home", to: "/", active: true },
  { label: "About", to: "#about" },
  { label: "Works", to: "#works" },
  { label: "Services", to: "#services" },
  { label: "Pricing", to: "#pricing" },
]

const WhatsApp = props => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.8-2.8l.8-1-1-2L9 8.5z" />
  </svg>
)

export const Nav = () => (
  <div className="sticky top-3 sm:top-5 z-50 flex justify-center px-4">
    <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg text-xs sm:text-sm font-medium text-black transition-all">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Pocket Creatives" className="h-5 sm:h-6 object-contain" />
      </Link>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {navLinks.map(l =>
          l.active ? (
            <Link
              key={l.label}
              to={l.to}
              className="rounded-full bg-brand-yellow px-3 sm:px-4 py-1 font-semibold text-black"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.to}
              className="hidden md:inline hover:text-brand-blue transition-colors"
            >
              {l.label}
            </a>
          )
        )}
        <a
          href="#contact"
          className="rounded-full bg-brand-cyan px-3 sm:px-4 py-1 font-semibold text-black hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
        <a
          href="https://wa.me/442036338494"
          aria-label="WhatsApp"
          className="text-brand-slate hover:text-green-600 transition-colors p-1"
        >
          <WhatsApp className="h-5 w-5" />
        </a>
      </div>
    </nav>
  </div>
)

const quickLinks = [
  "Home", "About", "Works", "Services", "Pricing", "Contact", "Blogs",
  "Photography Testimonials", "Videography Testimonials",
]

const socials = {
  YouTube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z",
  Vimeo: "M22 7.4c-.1 2-1.5 4.6-4.1 8-2.7 3.5-5 5.2-6.9 5.2-1.2 0-2.2-1.1-3-3.3L6.4 11.4C5.8 9.2 5.2 8.1 4.5 8.1c-.1 0-.7.3-1.6 1L2 7.8l3-2.7c1.4-1.2 2.4-1.8 3-1.9 1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.8 4.8.5 2.1 1 3.2 1.5 3.2.4 0 1.1-.7 2-2.1.9-1.4 1.4-2.5 1.5-3.2.1-1.2-.3-1.8-1.5-1.8-.5 0-1 .1-1.6.3 1-3.4 3-5.1 6-5 2.2.1 3.3 1.5 3.2 4.3z",
  Instagram: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.1 4.2-.1zM12 1.8c-2.8 0-3.1 0-4.2.1-3.7.2-5.7 2.2-5.9 5.9C1.8 8.9 1.8 9.2 1.8 12s0 3.1.1 4.2c.2 3.7 2.2 5.7 5.9 5.9 1.1.1 1.4.1 4.2.1s3.1 0 4.2-.1c3.7-.2 5.7-2.2 5.9-5.9.1-1.1.1-1.4.1-4.2s0-3.1-.1-4.2c-.2-3.7-2.2-5.7-5.9-5.9-1.1-.1-1.4-.1-4.2-.1z",
  Pinterest: "M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.2-4.5 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1 0 12 2z",
  LinkedIn: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.6c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.3h-4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.8h-4v-11z",
  Facebook: "M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10 3.5 10 6v2H8v3h2v11h4V11h2.6l.4-3h-3z",
  X: "M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4 5.5-6.4zm-1.2 17.9h1.9L7 4.2H5l12 16z",
  Tumblr: "M14.6 22c-3 0-5.2-1.5-5.2-5.2v-5.9H6.7V7.7c3-.8 4.3-3.4 4.4-5.7h3.2v5.1h3.7v3.8h-3.7v5.2c0 1.6.8 2.1 2 2.1h1.8V22h-3.5z",
}

export const Footer = () => (
  <footer id="contact" className="bg-brand-blue text-white">
    <div className="container-x relative pt-16 md:pt-20 pb-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.03em]">
            We'd love to chat about how we can help you with your next project,
            get in touch!
          </h2>
          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 text-black text-base sm:text-lg font-bold">
            <div className="space-y-4">
              <a
                href="mailto:team@pocketcreatives.co.uk"
                className="block underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                team@pocketcreatives.co.uk
              </a>
              <a href="tel:02036338494" className="block hover:opacity-80 transition-opacity">
                020 3633 8494
              </a>
            </div>
            <address className="not-italic underline underline-offset-4 leading-relaxed">
              Wow Workspaces Battersea
              <br />
              Unit 3, 7-9 Ingate Place
              <br />
              Battersea, London SW8 3NS
            </address>
          </div>

          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-end"
            onSubmit={e => e.preventDefault()}
          >
            <label className="text-xs sm:text-sm text-white font-medium">
              Sign up to our Newsletter
              <input
                type="email"
                placeholder="Your Email Address"
                className="mt-1 block w-full sm:w-64 rounded border border-black bg-white px-3 py-2 text-xs sm:text-sm text-black focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
            </label>
            <button className="rounded bg-brand-yellow px-5 py-2 text-xs sm:text-sm font-bold text-black hover:brightness-95 transition-all shadow-sm">
              Subscribe
            </button>
          </form>
        </div>

        <div className="self-start lg:self-center bg-white rounded-2xl p-4 sm:p-6 shadow-md">
          <img src={logo} alt="Pocket Creatives" className="h-8 sm:h-10 object-contain" />
        </div>
      </div>
    </div>

    <div className="border-t border-white/40">
      <div className="container-x py-6">
        <p className="text-base sm:text-lg font-bold text-black mb-3">QuickLinks</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium tracking-wide uppercase">
          {quickLinks.map(l => (
            <li key={l}>
              <a href="#" className="hover:underline transition-all">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-white/40">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 py-4 text-xs">
        <div className="flex items-center gap-5">
          {Object.entries(socials).map(([name, d]) => (
            <a key={name} href="#" aria-label={name} className="hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                <path d={d} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-white/80">Designed &amp; Built By Seek Marketing Partners 2025</p>
      </div>
    </div>
  </footer>
)

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
