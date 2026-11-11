/** 사이트 공통 선 아이콘 (24×24, stroke) — 메인바·사이드 메뉴·배너·전체 메뉴에서 함께 씁니다 */
const paths = {
  // 메뉴
  office: (
    <>
      <path d="M4 20h16M5.5 20V9.5L12 5l6.5 4.5V20" />
      <path d="M9.5 20v-4.5h5V20M9 11h.01M12 11h.01M15 11h.01" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 5.8a3 3 0 0 1 0 5.4M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.8h.01" />
    </>
  ),
  home: <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1v-8.5Z" />,
  doc: (
    <>
      <path d="M7 3.5h7.5L19 8v11.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8.5h5M9.5 13h6M9.5 16.5h4" />
    </>
  ),
  news: (
    <>
      <path d="M5 4.5h11a1 1 0 0 1 1 1V19a1.5 1.5 0 0 0 1.5 1.5H6.5A2.5 2.5 0 0 1 4 18V5.5a1 1 0 0 1 1-1Z" />
      <path d="M17 9h2a1 1 0 0 1 1 1v9a1.5 1.5 0 0 1-3 0M7.5 8.5h6M7.5 12h6M7.5 15.5h3.5" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </>
  ),
  top: <path d="M6.5 14.5 12 9l5.5 5.5" />,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  // 대상·서비스
  cap: (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3V11M21.5 9v5" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="7.5" r="2.7" />
      <circle cx="16.5" cy="9.5" r="2.2" />
      <path d="M3 19.5a5 5 0 0 1 10 0M12.8 19.5a3.8 3.8 0 0 1 7.6 0" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12.5h17M11 12.5v2h2v-2" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5c-1.8-1.3-4.5-2-7.5-2v13c3 0 5.7.7 7.5 2 1.8-1.3 4.5-2 7.5-2v-13c-3 0-5.7.7-7.5 2Z" />
      <path d="M12 6.5v13" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 9l1.8 6.5L12 10l1.7 5.5L15.5 9M8 12h8" />
    </>
  ),
  heart: <path d="M12 19.5s-7.5-4.4-7.5-9.7A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4c0 5.3-7.5 9.7-7.5 9.7Z" />,
  school: (
    <>
      <path d="M3.5 20h17M5.5 20v-8l6.5-4 6.5 4v8M10 20v-4h4v4" />
      <path d="M12 8V3.5l3.5 1.3L12 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4h3l7 4.5v-13L7 10H4Z" />
      <path d="M17.5 9a4 4 0 0 1 0 6M7 14l1 5h2.5l-1-4.2" />
    </>
  ),
  check: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3.5" y="4.5" width="17" height="11.5" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M8.5 14h2M13.5 14h2" />
    </>
  ),
  swap: <path d="M4.5 8.5h14l-3.5-3.5M19.5 15.5h-14l3.5 3.5" />,
}

function Icon({ name, size = 20, className, strokeWidth = 1.7 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
