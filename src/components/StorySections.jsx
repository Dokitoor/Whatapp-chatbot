import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROBLEMS, STEPS } from "../content.js";
import { ProblemIcon } from "./Icons.jsx";

export function ProblemSection() {
  const reduced = useReducedMotion();
  const reveal = function (index) {
    if (reduced) { return {}; }
    return {
      initial: { opacity: 0, y: 26 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.55, delay: index * 0.09, ease: [0.2, 1, 0.2, 1] },
    };
  };

  return (
    <section className="bg-[#f6faf7] py-20 sm:py-24">
      <div className="wra-container">
        <motion.div {...reveal(0)} className="max-w-[720px]">
          <span className="wra-eyebrow">The problem</span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)]">
            You cannot be on your phone <span className="text-[#0b6e62]">all day.</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-[#5c6f65]">
            Every missed message is a customer who moves on. The agent keeps the conversation going while you work, rest or sleep.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEMS.map(function (item, index) {
            return (
              <motion.div key={item.title} {...reveal(index + 1)} className="rounded-[22px] border border-[#0b2a1e]/10 bg-white p-6 shadow-[0_10px_30px_rgba(11,42,30,0.04)] sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf7ef] text-[#0b6e62]">
                  <ProblemIcon name={item.icon} />
                </span>
                <h3 className="mt-6 text-[18px]">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5c6f65]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const reduced = useReducedMotion();
  const reveal = function (index) {
    if (reduced) { return {}; }
    return {
      initial: { opacity: 0, y: 26 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.55, delay: index * 0.1, ease: [0.2, 1, 0.2, 1] },
    };
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#0b2a1e] py-20 text-white sm:py-24">
      <div className="wra-glow absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#25d366]/10 blur-3xl" />
      <div className="wra-container relative">
        <motion.div {...reveal(0)} className="max-w-[680px]">
          <span className="wra-eyebrow wra-eyebrow-light">How it works</span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.25rem)]">Three steps. <span className="text-[#d9ff9b]">Then it just replies.</span></h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70">Setup takes one conversation with us. After that, the agent handles the questions you answer every day.</p>
        </motion.div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map(function (step, index) {
            return (
              <motion.div key={step.number} {...reveal(index + 1)} className="relative rounded-[22px] border border-white/15 bg-white/[0.05] p-7 backdrop-blur-sm">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-[#d9ff9b] text-[15px] font-bold text-[#0b2a1e]">{step.number}</span>
                <h3 className="mt-6 text-[19px]">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
