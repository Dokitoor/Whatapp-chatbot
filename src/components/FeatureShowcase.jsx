import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURES, AUDIENCES, AUDIENCE_ICONS } from "../content.js";
import { CheckIcon, AudienceIcon, WhatsAppIcon } from "./Icons.jsx";

const TILE_COLORS = [
  "#0B6E62", "#25D366", "#3F8F6B", "#127C56", "#0F766E",
  "#4D7C0F", "#15803D", "#0E7490", "#65A30D", "#0B6E62",
];

function ProductPreview() {
  return (
    <div className="wra-float relative z-10 rounded-[26px] border border-[#0b2a1e]/10 bg-white p-3 shadow-[0_32px_70px_rgba(11,42,30,0.16)]">
      <div className="flex items-center gap-2 rounded-t-[16px] bg-[#f1f6f3] px-4 py-3">
        <span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-[#25d366]" /><i className="h-2 w-2 rounded-full bg-[#d9ff9b]" /><i className="h-2 w-2 rounded-full bg-[#0b2a1e]/15" /></span>
        <span className="ml-2 text-[11px] font-semibold text-[#5c6f65]">yourbusiness · WhatsApp</span>
      </div>
      <div className="rounded-b-[16px] bg-[#f7faf8] px-4 py-5 sm:px-5">
        <div className="flex items-center gap-2.5 border-b border-[#0b2a1e]/10 pb-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b6e62] text-white"><WhatsAppIcon size={17} /></span>
          <div>
            <div className="text-[13px] font-bold">Your business</div>
            <div className="text-[11px] text-[#0b6e62]">● Agent is on</div>
          </div>
          <span className="ml-auto rounded-full border border-[#0b2a1e]/15 px-2 py-1 text-[10px] font-semibold text-[#5c6f65]">Example chat</span>
        </div>

        <div className="mt-4 flex flex-col gap-2.5">
          <p className="max-w-[84%] self-start rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] leading-[1.45] shadow-sm">Good evening. Do you have space for a haircut tomorrow?</p>
          <p className="max-w-[86%] self-end rounded-2xl rounded-br-md bg-[#d9f5e2] px-3.5 py-2.5 text-[13px] leading-[1.45] shadow-sm">
            Good evening! Yes. 10am or 2pm tomorrow. Which do you want?
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-wider text-[#0b6e62]/70">AI reply · English</span>
          </p>
          <p className="max-w-[50%] self-start rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] shadow-sm">2pm please</p>
          <p className="max-w-[86%] self-end rounded-2xl rounded-br-md bg-[#d9f5e2] px-3.5 py-2.5 text-[13px] leading-[1.45] shadow-sm">
            Done. I've booked 2pm tomorrow for a haircut.
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-wider text-[#0b6e62]/70">AI reply · Pidgin and Yoruba too</span>
          </p>
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-[#cfe9d9] bg-[#eaf7ef] p-3">
          <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-white text-[#0b6e62]"><WhatsAppIcon size={13} /></span>
          <div className="text-[12px] leading-relaxed"><strong className="block font-bold">Message to you</strong>New booking: haircut, 2pm tomorrow.</div>
        </div>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  const reduced = useReducedMotion();
  const reveal = function (delay) {
    if (reduced) { return {}; }
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, delay: delay, ease: [0.2, 1, 0.2, 1] },
    };
  };

  return (
    <section id="features" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="wra-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal(0)}>
            <span className="wra-eyebrow">What you get</span>
            <h2 className="mt-4 text-[clamp(2rem,4.8vw,3.2rem)]">
              Help for your customers, <span className="text-[#0b6e62]">even at 2am.</span>
            </h2>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-[#5c6f65]">
              The agent handles the questions you answer every day, books the slot and sends you the details — without you touching your phone.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map(function (feature) {
                return (
                  <li key={feature} className="flex items-start gap-3 rounded-2xl border border-[#0b2a1e]/10 bg-[#f8fbf9] px-4 py-3.5 text-[13.5px] font-semibold leading-snug">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#25d366] text-[#0b2a1e]"><CheckIcon size={12} /></span>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div {...reveal(0.12)} className="relative">
            <div className="wra-glow absolute -inset-8 rounded-[40px] bg-[#25d366]/12 blur-3xl" />
            <div className="wra-glow absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#d9ff9b]/50 blur-3xl" />
            <ProductPreview />
          </motion.div>
        </div>

        <div className="mt-20 border-t border-[#0b2a1e]/10 pt-14">
          <div className="max-w-[680px]">
            <span className="wra-eyebrow">Who it is for</span>
            <h3 className="mt-4 text-[clamp(1.6rem,3.6vw,2.4rem)]">Built for businesses people message every day.</h3>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {AUDIENCES.map(function (name, index) {
              const color = TILE_COLORS[index];
              return (
                <motion.div
                  key={name}
                  initial={reduced ? false : { opacity: 0, scale: 0.8, y: 14 }}
                  whileInView={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={reduced ? undefined : { type: "spring", stiffness: 260, damping: 18, delay: (index % 5) * 0.06 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-[#0b2a1e]/10 bg-white px-3.5 py-3.5 shadow-[0_8px_20px_rgba(11,42,30,0.03)]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ color: color, backgroundColor: color + "15" }}>
                    <AudienceIcon name={AUDIENCE_ICONS[index]} />
                  </span>
                  <span className="text-[12.5px] font-bold leading-tight">{name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
