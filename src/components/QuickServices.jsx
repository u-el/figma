import { Link } from 'react-router-dom'
import linkArrow from '../assets/icon-link-arrow.svg'
import fileText from '../assets/icon-file-text.svg'
import monitor from '../assets/icon-monitor.svg'
import headset from '../assets/icon-headset.svg'
import building from '../assets/icon-building.svg'
import './QuickServices.css'

const defaultServices = [
  { label: '민원서식', icon: fileText, to: '/civil' },
  { label: '온라인신청', icon: monitor, to: '/civil' },
  { label: '종합민원실', icon: headset, to: '/civil' },
  { label: '시설개방', icon: building, to: '/civil' },
]

function CardLink({ to, className, children }) {
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href="#" className={className}>
      {children}
    </a>
  )
}

/** 연파랑 박스 + 흰색 아이콘 카드 (메인 "자주 찾는 서비스") — 하위 화면에서도 재사용 */
function QuickServices({
  title = '자주 찾는 서비스',
  items = defaultServices,
  allTo = '/civil',
  columns = 4,
  className = '',
}) {
  return (
    <section className={`quick ${className}`} style={{ '--quick-cols': columns }}>
      <div className="quick__head">
        <h2 className="quick__title">{title}</h2>
        {allTo && (
          <Link to={allTo} className="quick__all">
            전체보기
            <img src={linkArrow} alt="" width="24" height="24" />
          </Link>
        )}
      </div>
      <ul className="quick__list">
        {items.map((service) => (
          <li key={service.label}>
            <CardLink to={service.to} className="quick__card">
              <span className="quick__icon">
                <img src={service.icon} alt="" width="30" height="30" />
              </span>
              <span>{service.label}</span>
            </CardLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QuickServices
