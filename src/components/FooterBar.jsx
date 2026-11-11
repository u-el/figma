import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import './FooterBar.css'

const policyLinks = [
  { label: '개인정보처리방침', strong: true },
  { label: '이용안내' },
  { label: '저작권정책' },
  { label: '찾아오시는 길' },
]

/** 최하단 바 — 연회색 바탕, 로고·정책 링크·대표 연락처 */
function FooterBar() {
  return (
    <footer className="footer-bar">
      <div className="footer-bar__inner">
        <div className="footer-bar__top">
          <Link to="/" className="footer-bar__logo">
            <img src={logo} alt="경기도교육청" />
          </Link>
          <ul className="footer-bar__links">
            {policyLinks.map((link) => (
              <li key={link.label}>
                <a href="#" className={link.strong ? 'is-strong' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bar__bottom">
          <p className="footer-bar__contact">
            대표전화 <strong>031-1396</strong>
            <span aria-hidden="true">·</span>
            평일 09:00~18:00
          </p>
          <p className="footer-bar__copy">© Gyeonggi Provincial Office of Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterBar
