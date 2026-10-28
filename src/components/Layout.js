import * as React from "react"
import { Link } from "gatsby"

const navLinks = ["Video", "Photography", "Animation", "About", "Contact"]

export const Header = () => (
  <header className="container-x flex items-center justify-between py-5">
    <Link to="/" className="leading-none font-extrabold text-xl tracking-tight">
      POCKET
      <br />
      <span className="text-brand-blue">CREATIVE</span>
    </Link>
    <nav className="hidden md:flex gap-6 text-sm font-medium">
      {navLinks.map(l => (
        <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand-blue">
          {l}
        </a>
      ))}
    </nav>
    <a
      href="#contact"
      className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold hover:brightness-95"
    >
      Get in touch
    </a>
  </header>
)

export const Footer = () => (
  <footer id="contact" className="bg-brand-blue text-white">
    <div className="container-x py-16 grid gap-10 md:grid-cols-2">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        We'd love to chat about how we can help you with your next project, get
        in touch!
      </h2>
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-semibold">Email</p>
          <p className="opacity-80">hello@example.com</p>
          <p className="font-semibold mt-4">Phone</p>
          <p className="opacity-80">+00 0000 000 000</p>
        </div>
        <div>
          <p className="font-semibold">Address</p>
          <p className="opacity-80">
            123 Studio Street
            <br />
            City, Postcode
          </p>
        </div>
        <form className="col-span-2 flex gap-2" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded px-3 py-2 text-brand-navy"
          />
          <button className="rounded bg-brand-yellow px-4 py-2 font-semibold text-brand-navy">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="container-x border-t border-white/20 py-5 text-xs opacity-80 flex justify-between">
      <span>© {new Date().getFullYear()} Neal Pablo</span>
      <span>Instagram · LinkedIn · YouTube</span>
    </div>
  </footer>
)

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

