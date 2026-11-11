/** 오른쪽 꺾쇠 — 메인바·사이드 메뉴와 같은 선 아이콘 스타일 */
function ChevronIcon({ size = 16, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  )
}

export default ChevronIcon
