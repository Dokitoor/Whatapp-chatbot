import React, { useEffect, useRef, useState } from "react";
import { WA_URL, AUDIENCES } from "../content.js";
import { WhatsAppIcon, ArrowIcon } from "./Icons.jsx";

const VIDEO_URL = "https://cdn.jiro.build/AI%20SEO/Videos/wave_hills_v3_1600x900.mp4";

const SCENARIOS = [
  {
    label: "Price",
    customer: "How much is a haircut?",
    agent: "A haircut is ₦8,000. Want me to book you a slot?",
  },
  {
    label: "Booking",
    customer: "Do you have space tomorrow?",
    agent: "Yes — 10am or 2pm tomorrow. Which works for you?",
  },
  {
    label: "Location",
    customer: "Where are you located?",
    agent: "We're on Adeola Odeku Street, Victoria Island. Want directions?",
  },
];

const LANGUAGES = ["English", "Pidgin", "Yoruba"];

function seedFor(index) {
  return [
    { id: 1, from: "customer", text: SCENARIOS[index].customer },
    { id: 2, from: "agent", text: SCENARIOS[index].agent, language: "English" },
  ];
}

function replyFor(text) {
  const value = text.toLowerCase();
  if (/(book|slot|time|tomorrow|available|am|pm)/.test(value)) {
    return "Done — I've noted that. You'll get a confirmation on this number shortly.";
  }
  if (/(price|cost|how much|₦|ngn)/.test(value)) {
    return "I'll send the current price list. Want me to include available times too?";
  }
  if (/(where|location|address|direction)/.test(value)) {
    return "I can share the address and a map link. Just say send directions.";
  }
  return "Got it — I've passed that to the owner. You'll hear back on this number.";
}

function DemoChat() {
  const [active, setActive] = useState(0);
  const [messages, setMessages] = useState(function () { return seedFor(0); });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);
  const timerRef = useRef(null);
  const idRef = useRef(2);
  const replyCountRef = useRef(0);

  useEffect(function () {
    return function () { clearTimeout(timerRef.current); };
  }, []);

  useEffect(function () {
    const node = chatRef.current;
    if (node) { node.scrollTop = node.scrollHeight; }
  }, [messages, typing]);

  function selectScenario(index) {
    clearTimeout(timerRef.current);
    setActive(index);
    setMessages(seedFor(index));
    setInput("");
    setTyping(false);
  }

  function sendMessage() {
    const value = input.trim();
    if (!value || typing) { return; }
    idRef.current += 1;
    setMessages(function (current) {
      return current.concat([{ id: idRef.current, from: "customer", text: value }]);
    });
    setInput("");
    setTyping(true);
    timerRef.current = setTimeout(function () {
      idRef.current += 1;
      const language = LANGUAGES[replyCountRef.current % LANGUAGES.length];
      replyCountRef.current += 1;
      setMessages(function (current) {
        return current.concat([{ id: idRef.current, from: "agent", text: replyFor(value), language: language }]);
      });
      setTyping(false);
    }, 850);
  }

  return (
    <div className="wra-float w-full max-w-[520px] rounded-[26px] border border-white/20 bg-white/10 p-3 shadow-[0_34px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:ml-auto">
      <div className="flex items-center gap-3 px-2 py-2 text-white">
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#25d366] text-[#08251b]">
          <WhatsAppIcon size={20} />
          <span className="wra-pulse-dot absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0b3b2c] bg-[#25d366]" />
        </span>
        <div className="min-w-0">
          <div className="text-[14px] font-bold">Your business</div>
          <div className="text-[12px] text-white/70">Agent is on · replies instantly</div>
        </div>
        <span className="ml-auto rounded-full border border-white/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">Live demo</span>
      </div>

      <div className="mt-2 flex gap-2 px-1" role="tablist" aria-label="Try a customer question">
        {SCENARIOS.map(function (scenario, index) {
          const selected = index === active;
          return (
            <button
              key={scenario.label}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={function () { selectScenario(index); }}
              className={"flex-1 rounded-full px-3 py-2 text-[12px] font-bold transition-colors " + (selected ? "bg-[#d9ff9b] text-[#0b2a1e]" : "bg-white/10 text-white/75 hover:bg-white/20")}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      <div ref={chatRef} className="jr-chat mt-3 flex h-[290px] flex-col gap-2.5 overflow-y-auto rounded-[20px] bg-[#f5f8f6] p-4 text-[#0b2a1e]">
        {messages.map(function (message) {
          const agent = message.from === "agent";
          return (
            <div key={message.id} className={"max-w-[86%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-[1.45] " + (agent ? "self-end rounded-br-md bg-[#d9f5e2] shadow-sm" : "self-start rounded-bl-md bg-white shadow-sm")}>
              {message.text}
              {agent ? <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0b6e62]/70">AI reply · {message.language}</span> : null}
            </div>
          );
        })}
        {typing ? (
          <div className="self-start rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm" aria-label="Agent is typing">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0b6e62]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0b6e62] [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0b6e62] [animation-delay:300ms]" />
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-full bg-white p-1.5 pl-4">
        <input
          value={input}
          onChange={function (event) { setInput(event.target.value); }}
          onKeyDown={function (event) { if (event.key === "Enter") { event.preventDefault(); sendMessage(); } }}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-[#0b2a1e] outline-none placeholder:text-[#8a9a91]"
          placeholder="Type a customer question…"
          aria-label="Type a customer question"
        />
        <button type="button" onClick={sendMessage} className="grid h-9 w-9 place-items-center rounded-full bg-[#0b2a1e] text-white transition-colors hover:bg-[#0b6e62]" aria-label="Send message">
          <ArrowIcon size={17} />
        </button>
      </div>
      <p className="px-2 pb-1 pt-2 text-[11px] text-white/60">Try a tab or type your own question. This is a demo.</p>
    </div>
  );
}

export function AgentHero() {
  return (
    <>
      <section id="top" className="relative isolate overflow-hidden bg-[#0b2a1e] text-white">
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <video className="h-full w-full object-cover" src={VIDEO_URL} autoPlay loop muted playsInline />
          <div className="absolute inset-0 wra-hero-shade" />
        </div>

        <div className="relative z-10 wra-container grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
          <div className="wra-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9ff9b] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" /> For businesses in Nigeria
            </span>

            <h1 className="wra-serif mt-6 text-[clamp(2.6rem,6.8vw,5rem)]">
              <span className="wra-hero-line"><span style={{ animationDelay: "80ms" }}>Your WhatsApp,</span></span>
              <span className="wra-hero-line"><span className="italic text-[#d9ff9b]" style={{ animationDelay: "220ms" }}>always on.</span></span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-white/80 sm:text-[18px]">
              An AI assistant on your own number answers questions, takes bookings and messages you the details — in English, Pidgin and Yoruba.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="wra-btn wra-btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={19} /> Try it free for 7 days
              </a>
              <a className="wra-btn wra-btn-outline" href="#how-it-works">See how it works <ArrowIcon size={17} /></a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/65">
              <span>No setup fee</span><span>Keep your number</span><span>Live day and night</span>
            </div>
          </div>

          <DemoChat />
        </div>
      </section>

      <div className="border-y border-[#0b2a1e]/10 bg-white py-4" aria-label="Businesses we help">
        <div className="wra-marquee-mask overflow-hidden">
          <div className="wra-marquee-track flex w-max">
            {[0, 1].map(function (group) {
              return (
                <div key={group} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={group === 1 ? "true" : undefined}>
                  {AUDIENCES.map(function (name) {
                    return (
                      <span key={name} className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.14em] text-[#40554b]">
                        {name} <span className="ml-8 text-[#25d366]">✳</span>
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
