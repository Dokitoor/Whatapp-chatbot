import React from "react";
import { WA_URL, FAQS } from "../content.js";
import { WhatsAppIcon, ArrowIcon } from "./Icons.jsx";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#f6faf7] py-20 sm:py-24">
      <div className="wra-container">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="wra-eyebrow">Pricing</span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)]">One price. <span className="text-[#0b6e62]">One business.</span></h2>
        </div>

        <div className="mx-auto mt-10 max-w-[720px] rounded-[28px] border border-[#cfe9d9] bg-white p-7 text-center shadow-[0_24px_60px_rgba(11,42,30,0.07)] sm:p-11">
          <div className="text-[clamp(2.7rem,9vw,4rem)] font-extrabold leading-none tracking-[-0.055em]">₦25,000 <span className="text-[16px] font-semibold tracking-normal text-[#5c6f65]">/ month</span></div>
          <p className="mt-3 text-[14px] text-[#5c6f65]">Paid at the start of each month.</p>
          <span className="mt-5 inline-block rounded-full border border-[#cfe9d9] bg-[#eaf7ef] px-4 py-1.5 text-[12px] font-bold text-[#0b6e62]">7-day free trial</span>

          <ul className="mx-auto mt-8 max-w-[380px] space-y-3 text-left text-[14.5px]">
            <li className="flex items-center gap-3"><span className="text-[#0b6e62]">✓</span> No setup fee.</li>
            <li className="flex items-center gap-3"><span className="text-[#0b6e62]">✓</span> Unlimited messages for normal business use.</li>
            <li className="flex items-center gap-3"><span className="text-[#0b6e62]">✓</span> Cancel any time. Month by month.</li>
          </ul>

          <a className="wra-btn wra-btn-primary mt-9" href={WA_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={19} /> Chat with us on WhatsApp
          </a>
          <p className="mt-4 text-[13px] text-[#5c6f65]">No call needed. Just send us a message.</p>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="wra-container">
        <div className="max-w-[680px]">
          <span className="wra-eyebrow">Questions</span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)]">Things you may want to know.</h2>
        </div>
        <div className="mt-10 max-w-[800px] border-t border-[#0b2a1e]/15">
          {FAQS.map(function (item) {
            return (
              <details key={item.q} className="group border-b border-[#0b2a1e]/15">
                <summary className="relative cursor-pointer list-none py-5 pr-10 text-[16px] font-bold marker:hidden">
                  {item.q}
                  <span className="absolute right-1 top-[14px] text-[26px] font-normal leading-none text-[#0b6e62] group-open:hidden">+</span>
                  <span className="absolute right-1 top-[15px] hidden text-[26px] font-normal leading-none text-[#0b6e62] group-open:block">−</span>
                </summary>
                <p className="max-w-[70ch] pb-5 pr-8 text-[15px] leading-relaxed text-[#5c6f65]">{item.a}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0b2a1e] py-20 text-white sm:py-24">
      <div className="wra-glow absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#25d366]/12 blur-3xl" />
      <div className="wra-container relative text-center">
        <span className="wra-eyebrow wra-eyebrow-light">Start today</span>
        <h2 className="wra-serif mx-auto mt-4 max-w-[720px] text-[clamp(2.1rem,6vw,3.6rem)] font-normal">
          Stop losing customers to a <span className="italic text-[#d9ff9b]">quiet phone.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-[16px] text-white/70">Try the agent free for 7 days. Keep your number, keep your customers, get your evenings back.</p>
        <a className="wra-btn wra-btn-primary mt-8" href={WA_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={19} /> Chat with us on WhatsApp <ArrowIcon size={17} />
        </a>
      </div>
    </section>
  );
}
