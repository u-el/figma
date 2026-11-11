import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import './Header.css'

const icons = {
  login: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </>
  ),
  join: (
    <>
      <circle cx="10" cy="8.5" r="3.5" />
      <path d="M3.5 19.5a6.5 6.5 0 0 1 11.5-4.2M18 13.5v6M15 16.5h6" />
    </>
  ),
  cert: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
}

function Icon({ name, size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

const utilLinks = [
  { key: 'login', label: '로그인' },
  { key: 'join', label: '회원가입' },
  { key: 'cert', label: '인증센터' },
]

function Header() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const q = keyword.trim()
    navigate(q ? `/news?q=${encodeURIComponent(q)}` : '/news')
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={logo} alt="경기도교육청 - 경기교육대전환 크게 제대로!" />
        </Link>

        <form className="header__search" role="search" onSubmit={handleSearch}>
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="통합검색"
            aria-label="통합검색"
          />
          <button type="submit" className="header__search-btn" aria-label="검색">
            <Icon name="search" size={20} />
          </button>
        </form>

        <nav className="header__util" aria-label="회원 메뉴">
          {utilLinks.map((link) => (
            <a key={link.key} href="#" className="header__util-link">
              <Icon name={link.key} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
