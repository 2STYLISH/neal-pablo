import * as React from "react"

export const ModalContext = React.createContext({ isOpen: false, setIsOpen: () => {} })

export const ContactModal = () => {
  const { isOpen, setIsOpen } = React.useContext(ModalContext)

  React.useEffect(() => {
    if (!isOpen) return
    const handler = e => { if (e.key === "Escape") setIsOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div
      role="presentation"
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="presentation"
        className="modal-card relative w-full max-w-[1050px] rounded-[12px] bg-brand-blue p-6 sm:p-10 lg:p-14 shadow-2xl my-auto text-black"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.35)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-5 sm:top-6 sm:right-7 text-black hover:opacity-70 transition p-1"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" stroke="currentColor" strokeWidth="2.5" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 2-Column Layout matching Figma #325:1336 */}
        <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:gap-14 items-start">
          {/* Left Column: Heading + GDPR text */}
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-10">
            <h3 className="text-3xl sm:text-5xl lg:text-[72px] font-extrabold text-white leading-[1.0] tracking-[-0.05em]">
              Have a<br />
              project you<br />
              want to<br />
              discuss?
            </h3>

            {/* GDPR Checkbox & Text */}
            <div className="flex items-start gap-3 pt-4 sm:pt-10 max-w-[420px]">
              <input
                type="checkbox"
                id="gdpr-check"
                defaultChecked
                className="mt-1 h-4 w-4 shrink-0 rounded-none border border-black bg-white accent-brand-blue cursor-pointer"
              />
              <label
                htmlFor="gdpr-check"
                className="text-xs sm:text-[15px] font-medium leading-[1.4] tracking-[-0.03em] text-black cursor-pointer select-none"
              >
                Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis. Et ac vitae ornare volutpat.
              </label>
            </div>
          </div>

          {/* Right Column: Form Fields */}
          <form className="space-y-4 w-full max-w-[390px]" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="contact-full-name" className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Full Name*
              </label>
              <input
                id="contact-full-name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Contact Number*
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Contact Number"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Email Address*
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-[42px] sm:h-[45px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm sm:text-[18px] font-medium leading-tight text-black mb-1.5 tracking-[-0.03em]">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Message"
                rows={3}
                className="w-full h-[80px] sm:h-[90px] bg-white border border-black px-3 py-2 text-sm sm:text-[15px] text-black placeholder:text-[#526E87] outline-none resize-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="h-[40px] w-[103px] rounded-[12px] bg-brand-yellow text-[18px] font-medium text-white hover:brightness-105 transition flex items-center justify-center tracking-[-0.03em] shadow-sm"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactModal

