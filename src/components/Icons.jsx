import React from "react";

const WA_PATH =
  "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.2-.2.3-.3.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.2-1.2 0-.2-.2-.3-.4-.4Z";

export function WhatsAppIcon(props) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={WA_PATH} />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg width={props.size || 22} height={props.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

const AUDIENCE_PATHS = {
  salons: <><circle cx="6.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /><path d="m8.4 15.6 7.2-9.2M15.6 15.6 8.4 6.4" /></>,
  restaurants: <><path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M16 3c2 2 2 5 0 7v11" /></>,
  cakes: <><path d="M4 11h16v9H4zM4 15h16M12 11V7M9 7h6" /><path d="M12 4v1" /></>,
  fashion: <><path d="m8 3-5 4 2 4 2-1v11h10V10l2 1 2-4-5-4-2 2h-4z" /></>,
  clinics: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M12 9v8M8 13h8" /></>,
  schools: <><path d="M12 6c-2-1.5-4.5-1.8-8-1v13c3.5-.8 6-.5 8 1 2-1.5 4.5-1.8 8-1V5c-3.5-.8-6-.5-8 1Z" /><path d="M12 6v14" /></>,
  events: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M8 15h3" /></>,
  estate: <><path d="m3 11 9-7 9 7" /><path d="M5 10v11h14V10M10 21v-6h4v6" /></>,
  cars: <><path d="M5 16h14l1-5-2-5H6L4 11l1 5Z" /><path d="M4 11h16M7 16v2M17 16v2" /><circle cx="7.5" cy="13.5" r="1" /><circle cx="16.5" cy="13.5" r="1" /></>,
  logistics: <><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></>,
};

export function AudienceIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {AUDIENCE_PATHS[props.name] || AUDIENCE_PATHS.estate}
    </svg>
  );
}

export function ProblemIcon(props) {
  const paths = {
    night: <><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" /><path d="M17 4v3M15.5 5.5h3" /></>,
    repeat: <><path d="M3 11a9 9 0 0 1 15.5-6L21 7" /><path d="M21 3v4h-4" /><path d="M21 13a9 9 0 0 1-15.5 6L3 17" /><path d="M3 21v-4h4" /></>,
    lost: <><path d="M8 3h8a2 2 0 0 1 2 2v16l-6-3-6 3V5a2 2 0 0 1 2-2Z" /><path d="M9.5 9h5M9.5 13h5" /></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[props.name]}
    </svg>
  );
}
