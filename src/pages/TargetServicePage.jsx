import { Link } from 'react-router-dom'
import SubLayout from '../components/SubLayout.jsx'
import ServiceNav from '../components/ServiceNav.jsx'
import PageHero from '../components/PageHero.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import QuickServices from '../components/QuickServices.jsx'
import BoardCard from '../components/BoardCard.jsx'
import ChevronIcon from '../components/ChevronIcon.jsx'
import './TargetServicePage.css'

function ItemLink({ to, className, children }) {
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

/** 서비스 분류 카드 — 메인 BoardCard 와 같은 테두리·라운드 */
function ServiceCard({ group, index }) {
  return (
    <section className={`svc-card${group.featured ? ' svc-card--featured' : ''}`}>
      <div className="svc-card__head">
        <span className="svc-card__num">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="svc-card__title">{group.title}</h3>
      </div>
      <ul className="svc-card__list">
        {group.items.map((item) => (
          <li key={item.label}>
            <ItemLink to={item.to} className="svc-card__link">
              <span>{item.label}</span>
              <ChevronIcon />
            </ItemLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

/**
 * 학생 / 학부모·일반인 / 교직원 화면 공통 틀 (메인 화면 구성과 동일한 카드 레이아웃)
 * config: { label, hero, groups, quick, notices, video }
 */
function TargetServicePage({ target, config }) {
  const { label, hero, groups, quick, notices, video } = config

  return (
    <SubLayout>
      <ServiceNav target={target} />

      <PageHero
        label={`대상별 서비스 · ${label}`}
        title={hero.title}
        description={hero.description}
        visual={<HeroVisual {...hero.visual} />}
      />

      <section className="target-services" aria-labelledby="target-services-heading">
        <h2 id="target-services-heading" className="target-section-title">
          {label} 서비스 안내
        </h2>
        <div className="target-services__grid">
          {groups.map((group, i) => (
            <ServiceCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </section>

      <QuickServices title={`${label} 자주 찾는 서비스`} items={quick} allTo={null} />

      <div className="target-bottom">
        <BoardCard title={`${label} 알림`} items={notices} />
        {/* 홍보 영상 — BoardCard 와 같은 흰 카드: 위 썸네일 + 재생 버튼, 아래 제목 */}
        <section className="target-video" aria-labelledby="target-video-title">
          <button type="button" className="target-video__media" aria-label={`${video.title} 영상 재생`}>
            <img className="target-video__thumb" src={video.image.src} alt="" />
            <span className="target-video__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
          </button>
          <div className="target-video__body">
            <p className="target-video__label">홍보 영상</p>
            <h2 id="target-video-title" className="target-video__title">
              {video.title}
            </h2>
          </div>
        </section>
      </div>
    </SubLayout>
  )
}

export default TargetServicePage
