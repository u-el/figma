import './TabMenu.css'

/** 가로 탭 메뉴 (높이 64px). 활성 탭은 파란 배경. */
function TabMenu({ tabs, active, onChange, columns, className = '', label }) {
  return (
    <div
      className={`tab-menu ${className}`}
      role="tablist"
      aria-label={label}
      style={columns ? { '--tab-columns': columns } : undefined}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          className={`tab-menu__tab${active === tab ? ' is-active' : ''}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TabMenu
