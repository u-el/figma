import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import ChevronIcon from './ChevronIcon.jsx'
import { sitemap } from '../data/sitemap.js'
import './SitemapPanel.css'

/** 전체 메뉴 — 사이드 메뉴 "전체"로 여는 팝업 (모바일에서는 아래에서 올라오는 시트) */
function SitemapPanel({ onClose }) {
  const dialogRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    return () => dialog.close()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="sitemap"
      aria-labelledby="sitemap-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className="sitemap__head">
        <h2 id="sitemap-title" className="sitemap__title">
          전체 메뉴
        </h2>
        <button type="button" className="sitemap__close" onClick={onClose} aria-label="전체 메뉴 닫기">
          <Icon name="close" size={22} />
        </button>
      </div>

      <div className="sitemap__grid">
        {sitemap.map((group) => (
          <section key={group.key} className="sitemap__group" aria-labelledby={`sitemap-${group.key}`}>
            <Link to={group.to} className="sitemap__group-head" onClick={onClose}>
              <span className="sitemap__group-icon">
                <Icon name={group.icon} size={20} />
              </span>
              <span id={`sitemap-${group.key}`}>{group.label}</span>
            </Link>
            <ul className="sitemap__list">
              {group.children.map((item) => {
                const current = item.to === pathname
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`sitemap__link${current ? ' is-current' : ''}`}
                      aria-current={current ? 'page' : undefined}
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                      <ChevronIcon size={14} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </dialog>
  )
}

export default SitemapPanel
