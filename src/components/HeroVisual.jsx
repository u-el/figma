import Icon from './Icon.jsx'
import './HeroVisual.css'

/**
 * 페이지 상단 배너 그림 — 페이지 대표 아이콘 + 핵심 서비스 3개 카드
 * tone: 'blue' | 'teal' | 'indigo' | 'sky' (대상별로 색만 살짝 다르게)
 */
function HeroVisual({ icon, items, tone = 'blue', label }) {
  return (
    <div className={`hero-visual hero-visual--${tone}`} role="img" aria-label={label}>
      <span className="hero-visual__ring hero-visual__ring--a" />
      <span className="hero-visual__ring hero-visual__ring--b" />

      <div className="hero-visual__main">
        <span className="hero-visual__halo">
          <span className="hero-visual__badge">
            <Icon name={icon} className="hero-visual__main-icon" />
          </span>
        </span>
      </div>

      <ul className="hero-visual__chips">
        {items.map((item, i) => (
          <li key={item.label} className="hero-visual__chip" style={{ '--i': i }}>
            <span className="hero-visual__chip-icon">
              <Icon name={item.icon} />
            </span>
            <span className="hero-visual__chip-text">
              {item.step && <small>{item.step}</small>}
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeroVisual
