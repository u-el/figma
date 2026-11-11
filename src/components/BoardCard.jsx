import { Link } from 'react-router-dom'
import plusIcon from '../assets/icon-plus.svg'
import './BoardCard.css'

/** 게시판 카드 — 제목 + 더보기, 아래 "제목 ······ 날짜" 목록 */
function BoardCard({ title, items }) {
  return (
    <section className="board-card">
      <div className="board-card__head">
        <h2 className="board-card__title">{title}</h2>
        <Link to="/news" className="board-card__more" aria-label={`${title} 더보기`}>
          <img src={plusIcon} alt="" width="20" height="20" />
        </Link>
      </div>
      <ul className="board-card__list">
        {items.map((item) => (
          <li key={item.title}>
            <Link to="/news" className="board-card__item">
              <span className="board-card__item-title">{item.title}</span>
              <time className="board-card__date">{item.date}</time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BoardCard
