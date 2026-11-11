import { Link } from 'react-router-dom'
import './ServiceNav.css'

const targetMenus = [
  { key: 'student', label: '학생', to: '/services/student' },
  { key: 'parent', label: '학부모/일반인', to: '/services/parent' },
  { key: 'staff', label: '교직원', to: '/services/staff' },
]

/** 대상별 서비스 하위 메뉴 (학생/학부모/교직원) */
function ServiceNav({ target }) {
  return (
    <nav className="service-nav" aria-label="대상 선택">
      {targetMenus.map((menu) => (
        <Link
          key={menu.key}
          to={menu.to}
          className={`service-nav__item${target === menu.key ? ' is-active' : ''}`}
          aria-current={target === menu.key ? 'page' : undefined}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  )
}

export default ServiceNav
