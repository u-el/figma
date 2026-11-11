import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import SitemapPanel from './SitemapPanel.jsx'
import './SideMenu.css'

const links = [
  { key: 'home', label: '홈', to: '/', icon: 'home' },
  { key: 'civil', label: '민원', to: '/civil', icon: 'doc' },
  { key: 'news', label: '소식', to: '/news', icon: 'news' },
]

/**
 * 우측 플로팅 퀵메뉴 (모든 화면 공통). 좁은 화면에서는 하단 탭바로 바뀝니다.
 * "전체"는 페이지 이동이 아니라 전체 메뉴(사이트맵) 팝업을 엽니다.
 */
function SideMenu({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="side-menu-rail">
        <nav className="side-menu" aria-label="바로가기">
          <ul className="side-menu__list">
            {links.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  className={`side-menu__item${active === item.key ? ' is-active' : ''}`}
                  aria-current={active === item.key ? 'page' : undefined}
                >
                  <Icon name={item.icon} size={22} className="side-menu__icon" />
                  <span className="side-menu__label">{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={`side-menu__item${menuOpen ? ' is-active' : ''}`}
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <Icon name="grid" size={22} className="side-menu__icon" />
                <span className="side-menu__label">전체</span>
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="side-menu__top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="맨 위로"
          >
            <Icon name="top" size={22} className="side-menu__icon" />
            <span className="side-menu__label">TOP</span>
          </button>
        </nav>
      </div>

      {menuOpen && <SitemapPanel onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default SideMenu
