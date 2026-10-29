import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const WhatsApp = props => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.8-2.8l.8-1-1-2L9 8.5z" />
  </svg>
)

export const Nav = ({ active = "home", onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navItemClass = (page) =>
    active === page
      ? "inline-flex h-[34px] items-center justify-center rounded-[16px] bg-brand-yellow px-4 font-semibold text-black"
      : "inline-flex h-[34px] items-center justify-center rounded-[16px] px-4 hover:text-brand-blue font-medium transition-colors text-black"

  const mobileItemClass = (page) =>
    active === page
      ? "rounded-xl bg-brand-yellow px-4 py-2.5 font-bold text-black"
      : "px-4 py-2 hover:bg-gray-100 rounded-xl font-medium transition text-black"

  return (
    <>
      <div className="sticky top-4 sm:top-[24px] z-50 flex justify-center px-4">
        <nav className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-[16px] lg:w-[913px] lg:h-[72px] rounded-[24px] bg-white px-4 sm:px-6 lg:pl-[48px] lg:pr-[32px] py-2.5 lg:py-0 shadow-[0_4px_16px_rgba(0,0,0,0.1)] text-[15px] sm:text-[18px] font-medium text-black max-w-full">
          <Link to="/" className="flex items-center mr-1 lg:mr-[16px] shrink-0">
            <img src={logo} alt="Pocket Creatives" className="h-[36px] sm:h-[46px] lg:h-[50px] lg:w-[100px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-[16px]">
            <Link to="/" className={navItemClass("home")}>
              Home
            </Link>
            <Link to="/about" className={navItemClass("about")}>
              About
            </Link>
            <Link to="/works" className={navItemClass("works")}>
              Works
            </Link>
            <Link to="/#services" className={navItemClass("services")}>
              Services
            </Link>
            <Link to="/#pricing" className={navItemClass("pricing")}>
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[32px]">
            <button
              onClick={onContactClick || (() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              })}
              className="inline-flex h-[34px] items-center justify-center rounded-[16px] bg-[#32D6FF] px-4 text-xs sm:text-[18px] font-medium text-black whitespace-nowrap hover:brightness-105 transition"
            >
              Contact
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-slate hover:text-green-600 transition"
              aria-label="WhatsApp"
            >
              <WhatsApp className="h-6 w-6 sm:h-[34px] sm:w-[34px]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-black hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="presentation"
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            role="presentation"
            className="fixed top-20 left-4 right-4 bg-white rounded-[24px] p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 text-lg font-bold text-black">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileItemClass("home")}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileItemClass("about")}
              >
                About
              </Link>
              <Link
                to="/works"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileItemClass("works")}
              >
                Works
              </Link>
              <Link
                to="/#services"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileItemClass("services")}
              >
                Services
              </Link>
              <Link
                to="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileItemClass("pricing")}
              >
                Pricing
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onContactClick) onContactClick();
                  else {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="rounded-xl bg-[#32D6FF] px-4 py-2.5 text-black text-left font-bold"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const quickLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "WORKS", href: "/works" },
  { name: "SERVICES", href: "/#services" },
  { name: "PRICING", href: "/#pricing" },
  { name: "CONTACT", href: "#contact" },
  { name: "BLOGS", href: "/#blogs" },
]

const socials = [
  ["YouTube", "https://www.youtube.com", "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"],
  ["Vimeo", "https://vimeo.com", "M22 7.4c-.1 2-1.5 4.6-4.1 8-2.7 3.5-5 5.2-6.9 5.2-1.2 0-2.2-1.1-3-3.3L6.4 11.4C5.8 9.2 5.2 8.1 4.5 8.1c-.1 0-.7.3-1.6 1L2 7.8l3-2.7c1.4-1.2 2.4-1.8 3-1.9 1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.8 4.8.5 2.1 1 3.2 1.5 3.2.4 0 1.1-.7 2-2.1.9-1.4 1.4-2.5 1.5-3.2.1-1.2-.3-1.8-1.5-1.8-.5 0-1 .1-1.6.3 1-3.4 3-5.1 6-5 2.2.1 3.3 1.5 3.2 4.3z"],
  ["Instagram", "https://www.instagram.com", "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.1 4.2-.1zM12 1.8c-2.8 0-3.1 0-4.2.1-3.7.2-5.7 2.2-5.9 5.9C1.8 8.9 1.8 9.2 1.8 12s0 3.1.1 4.2c.2 3.7 2.2 5.7 5.9 5.9 1.1.1 1.4.1 4.2.1s3.1 0 4.2-.1c3.7-.2 5.7-2.2 5.9-5.9.1-1.1.1-1.4.1-4.2s0-3.1-.1-4.2c-.2-3.7-2.2-5.7-5.9-5.9-1.1-.1-1.4-.1-4.2-.1z"],
  ["Pinterest", "https://www.pinterest.com", "M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.2-4.5 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A10 10 0 1 0 12 2z"],
  ["LinkedIn", "https://www.linkedin.com", "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.6c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.3h-4v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.8h-4v-11z"],
  ["Facebook", "https://www.facebook.com", "M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10 3.5 10 6v2H8v3h2v11h4V11h2.6l.4-3h-3z"],
  ["X", "https://x.com", "M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4 5.5-6.4zm-1.2 17.9h1.9L7 4.2H5l12 16z"],
  ["Tumblr", "https://www.tumblr.com", "M14.6 22c-3 0-5.2-1.5-5.2-5.2v-5.9H6.7V7.7c3-.8 4.3-3.4 4.4-5.7h3.2v5.1h3.7v3.8h-3.7v5.2c0 1.6.8 2.1 2 2.1h1.8V22h-3.5z"],
]

export const Footer = ({ heading }) => (
  <footer id="contact" className="bg-brand-blue text-white">
    {/* Upper Footer: Heading, Contact & Address, Newsletter */}
    <div className="container-x pt-14 sm:pt-20 pb-9">
      <div className="lg:px-[120px]">
        <h2 className="max-w-[888px] text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.03] tracking-[-0.05em]">
          {heading || (
            <>
              We love talking about what we do, so if you have a project,
              <br />
              get in touch.
            </>
          )}
        </h2>

        {/* Contact Info: 2 columns spaced 56px apart like Figma (x=360 & x=821) */}
        <div className="mt-10 sm:mt-14 flex flex-col md:flex-row gap-8 md:gap-[56px] text-black">
          <div className="w-full md:w-[404px] space-y-6 sm:space-y-12">
            <a
              href="mailto:team@pocketcreatives.co.uk"
              className="block text-[20px] sm:text-[24px] lg:text-[30px] font-extrabold underline decoration-2 underline-offset-4 tracking-[-0.05em] break-all sm:break-normal text-black"
            >
              team@pocketcreatives.co.uk
            </a>
            <p className="text-[20px] sm:text-[24px] lg:text-[30px] font-extrabold tracking-[-0.05em] text-black">
              020 3633 8494
            </p>
          </div>
          <address className="not-italic">
            <a
              href="https://maps.google.com/maps?q=wow+workspaces+battersea"
              target="_blank"
              rel="noreferrer"
              className="text-[20px] sm:text-[24px] lg:text-[30px] font-extrabold underline decoration-2 underline-offset-4 leading-[1.38] tracking-[-0.05em] text-black block"
            >
              Wow Workspaces Battersea<br />
              Unit 3, 7-9 Ingate Place<br />
              Battersea, London SW8 3NS
            </a>
          </address>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-10">
          <p className="text-[16px] sm:text-[20px] font-medium text-white tracking-[-0.05em]">
            Sign up to our Newsletter
          </p>
          <form
            className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-[56px] sm:items-center"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-[404px] h-[45px] border border-black bg-white px-3 text-[15px] sm:text-[16px] text-black placeholder:text-brand-slate tracking-[-0.05em] outline-none"
            />
            <button
              type="submit"
              className="text-[16px] sm:text-[20px] font-medium underline underline-offset-4 tracking-[-0.05em] text-white hover:opacity-80 transition self-start sm:self-center"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Middle Band: QuickLinks on left + Pocket Creatives white pill on right */}
    <div className="border-t border-white/70">
      <div className="container-x py-5 sm:py-6">
        <div className="lg:px-[120px] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[22px] sm:text-[30px] font-extrabold text-black mb-3 tracking-[-0.05em]">
              QuickLinks
            </p>
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2">
              {quickLinks.map(l => (
                <Link
                  key={l.name}
                  to={l.href}
                  className="text-[14px] sm:text-[20px] font-medium tracking-[-0.05em] text-white hover:underline"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex h-[64px] sm:h-[77px] w-[168px] sm:w-[196px] shrink-0 items-center justify-center rounded-[24px] bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.12)] self-start md:self-center"
          >
            <img src={logo} alt="Pocket Creatives" className="h-[46px] sm:h-[60px] w-auto object-contain" />
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom Bar: Socials on left + Credit on right */}
    <div className="border-t border-white/70">
      <div className="container-x py-4">
        <div className="lg:pl-[120px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            {socials.map(([name, url, d]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="hover:opacity-80 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-white"><path d={d} /></svg>
              </a>
            ))}
          </div>
          <p className="text-[14px] sm:text-[20px] font-medium tracking-[-0.05em] text-white">
            Designed &amp; Built By Seek Marketing Partners 2025
          </p>
        </div>
      </div>
    </div>
  </footer>
)

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const Layout = ({ children, active = "home", onContactClick, footerHeading }) => {
  const [zoom, setZoom] = React.useState(1)

  useIsomorphicLayoutEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth
      const cw = document.documentElement.clientWidth || vw
      if (vw >= 1024 && cw < 1920) {
        setZoom(cw / 1920)
      } else {
        setZoom(1)
      }
    }
    updateZoom()
    window.addEventListener("resize", updateZoom)
    return () => window.removeEventListener("resize", updateZoom)
  }, [])

  return (
    <div style={zoom < 1 ? { zoom } : undefined}>
      <Nav active={active} onContactClick={onContactClick} />
      <main>{children}</main>
      <Footer heading={footerHeading} />
    </div>
  )
}

export default Layout
