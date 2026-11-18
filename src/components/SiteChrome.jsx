import React, { useState } from "react";
import { WA_URL, NAV_LINKS } from "../content.js";
import { WhatsAppIcon, ArrowIcon, MenuIcon, CloseIcon } from "./Icons.jsx";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="wra-container flex h-[70px] items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5" aria-label="WhatsApp Reply Agent, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0B6E62] text-white">
            <WhatsAppIcon size={19} />
          </span>
          <span className="max-w-[132px] text-[13px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[14px]">
            WhatsApp Reply Agent
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(function (link) {
            return (
              <a key={link.href} href={link.href} className="text-[14px] font-semibold text-[#40554b] transition-colors hover:text-[#0B6E62]">
                {link.label}
              </a>
            );
          })}
        </nav>

        <a className="wra-btn wra-btn-dark wra-btn-small hidden sm:inline-flex" href={WA_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={15} /> Chat with us
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-[#0b2a1e]/15 text-[#0b2a1e] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={function () { setOpen(!open); }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(function (link) {
              return (
                <a key={link.href} href={link.href} onClick={function () { setOpen(false); }} className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-[#40554b] hover:bg-[#f2f8f4]">
                  {link.label}
                </a>
              );
            })}
          </nav>
          <a className="wra-btn wra-btn-dark mt-3 w-full" href={WA_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={16} /> Chat with us on WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#08251b] pb-32 pt-12 text-white/70">
      <div className="wra-container flex flex-wrap items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#25d366] text-[#08251b]"><WhatsAppIcon size={19} /></span>
            <span className="text-[15px] font-bold">WhatsApp Reply Agent</span>
          </div>
          <p className="mt-3 max-w-[36ch] text-[14px] leading-relaxed">Answers and bookings for your business, on the number your customers already know.</p>
        </div>
        <div className="text-[14px]">
          <span className="block text-white/50">WhatsApp</span>
          <a className="mt-1 inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#25d366]" href={WA_URL} target="_blank" rel="noopener noreferrer">
            +234 801 234 5678 <ArrowIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCta() {
  return (
    <a
      className="wra-btn wra-btn-primary fixed bottom-4 right-4 z-[60] shadow-[0_14px_34px_rgba(11,42,30,0.3)] sm:bottom-6 sm:right-6"
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={18} /> Chat with us
    </a>
  );
}
