import { Link } from 'react-router-dom'
import SubLayout from '../components/SubLayout.jsx'
import ServiceNav from '../components/ServiceNav.jsx'
import PageHero from '../components/PageHero.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import QuickServices from '../components/QuickServices.jsx'
import plusIcon from '../assets/icon-plus.svg'
import ChevronIcon from '../components/ChevronIcon.jsx'
import fileText from '../assets/icon-file-text.svg'
import monitor from '../assets/icon-monitor.svg'
import building from '../assets/icon-building.svg'
import clipboard from '../assets/icon-clipboard.svg'
import playSquare from '../assets/icon-play-square.svg'
import headset from '../assets/icon-headset.svg'
import './ServicesPage.css'

const targets = [
  {
    key: 'student',
    badge: 'STUDENT',
    title: '학생',
    desc: '진로·진학부터 장학금, 학교생활까지',
    to: '/services/student',
    links: ['진로진학 안내', '장학금/교육비 지원', '학교폭력 신고상담', '학적/증명서 안내'],
  },
  {
    key: 'parent',
    badge: 'PARENT',
    title: '학부모/일반인',
    desc: '전학·입학, 교육비, 시설 개방 안내',
    to: '/services/parent',
    links: [
      { label: '초등전학안내', to: '/civil/transfer' },
      '중고교 입학/전학',
      '교육비 지원 신청',
      '학교 시설 개방 및 대여',
    ],
  },
  {
    key: 'staff',
    badge: 'STAFF',
    title: '교직원',
    desc: '인사·연수, 복무, 교육활동 보호',
    to: '/services/staff',
    links: ['채용/인사 안내', '연수/자격', '복무/급여/복지', '교육활동 보호 및 지원'],
  },
]

const quickLinks = [
  { label: '초등전학안내', icon: fileText, to: '/civil/transfer' },
  { label: '체육관 대여', icon: building, to: '/civil' },
  { label: '민원서식', icon: clipboard, to: '/civil' },
  { label: '공지사항', icon: monitor, to: '/news' },
  { label: '평생교육 강좌', icon: playSquare },
  { label: '구인구직', icon: headset },
]

function TargetCard({ target }) {
  return (
    <section className={`target-card target-card--${target.key}`}>
      <div className="target-card__head">
        <div>
          <p className="target-card__badge">{target.badge}</p>
          <h2 className="target-card__title">{target.title}</h2>
        </div>
        <Link to={target.to} className="target-card__more" aria-label={`${target.title} 서비스 전체보기`}>
          <img src={plusIcon} alt="" width="22" height="22" />
        </Link>
      </div>
      <p className="target-card__desc">{target.desc}</p>
      <ul className="target-card__list">
        {target.links.map((link) => {
          const { label, to = target.to } = typeof link === 'string' ? { label: link } : link
          return (
            <li key={label}>
              <Link to={to} className="target-card__link">
                <span>{label}</span>
                <ChevronIcon />
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to={target.to} className="target-card__cta">
        {target.title} 서비스 바로가기
      </Link>
    </section>
  )
}

function ServicesPage() {
  return (
    <SubLayout>
      <ServiceNav />
      <PageHero
        label="대상별 서비스"
        title={['나에게 꼭 맞는', '교육 서비스를 찾아보세요']}
        description={['학생, 학부모·일반인, 교직원별로', '자주 쓰는 서비스를 한곳에 모았습니다.']}
        visual={
          <HeroVisual
            icon="users"
            label="대상별 서비스: 학생, 학부모·일반인, 교직원"
            items={[
              { icon: 'cap', label: '학생' },
              { icon: 'family', label: '학부모·일반인' },
              { icon: 'briefcase', label: '교직원' },
            ]}
          />
        }
      />

      <div className="services__targets">
        {targets.map((target) => (
          <TargetCard key={target.key} target={target} />
        ))}
      </div>

      <QuickServices title="퀵서비스" items={quickLinks} columns={6} allTo="/civil" />
    </SubLayout>
  )
}

export default ServicesPage
