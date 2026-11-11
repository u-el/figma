import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { sitemap } from '../data/sitemap.js'
import './MainNav.css'

/** 주 메뉴바 — 사이드 메뉴와 같은 플로팅 카드 스타일. 선택 메뉴는 현재 주소로 정합니다. */
function MainNav({ active }) {
  const { pathname } = useLocation()
  const current = active ?? sitemap.find((menu) => menu.match(pathname))?.key ?? 'office'

  return (
    <nav className="main-nav" aria-label="주 메뉴">
      <ul className="main-nav__list" style={{ '--nav-count': sitemap.length }}>
        {sitemap.map((menu) => (
          <li key={menu.key}>
            <Link
              to={menu.to}
              className={`main-nav__item${current === menu.key ? ' is-active' : ''}`}
              aria-current={current === menu.key ? 'page' : undefined}
            >
              <Icon name={menu.icon} className="main-nav__icon" />
              <span>{menu.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
