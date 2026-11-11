import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubLayout from '../components/SubLayout.jsx'
import PageHero from '../components/PageHero.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import TabMenu from '../components/TabMenu.jsx'
import BoardCard from '../components/BoardCard.jsx'
import fileText from '../assets/icon-file-text.svg'
import clipboard from '../assets/icon-clipboard.svg'
import monitor from '../assets/icon-monitor.svg'
import headset from '../assets/icon-headset.svg'
import building from '../assets/icon-building.svg'
import callIcon from '../assets/icon-call.svg'
import timeIcon from '../assets/icon-time.svg'
import './CivilPage.css'

const services = [
  { title: '초등전학안내', desc: '초등학교 전학 절차와 제출 서류를 안내합니다.', action: '보기', icon: fileText, to: '/civil/transfer' },
  { title: '민원서식', desc: '각종 민원 처리에 필요한 서식을 내려받을 수 있습니다.', action: '다운로드', icon: clipboard },
  { title: '온라인신청', desc: '교육 관련 민원을 온라인으로 신청할 수 있습니다.', action: '신청', icon: monitor },
  { title: '종합민원실', desc: '교육 관련 민원 상담 및 처리 서비스를 안내합니다.', action: '보기', icon: headset },
  { title: '시설개방', desc: '학교 체육관·운동장 등 교육시설 개방과 예약을 안내합니다.', action: '예약', icon: building },
]

const tabs = ['전체', ...services.map((s) => s.title)]

const steps = [
  { title: '민원 신청', desc: '온라인 또는 방문 신청' },
  { title: '접수·배정', desc: '담당 부서 지정' },
  { title: '검토·처리', desc: '법정 기한 내 처리' },
  { title: '결과 통보', desc: '문자·이메일 안내' },
]

const notices = [
  { title: '겨울방학 중 학교시설 개방 운영 안내', date: '2026.10.30.' },
  { title: '종합민원실 점심시간 운영 변경 안내', date: '2026.10.21.' },
  { title: '온라인 민원 신청 시스템 점검 안내', date: '2026.10.14.' },
]

const faqs = [
  { title: '전학 신청은 어디에서 하나요?', date: '자주 묻는 질문' },
  { title: '졸업증명서는 온라인으로 발급되나요?', date: '자주 묻는 질문' },
  { title: '민원 처리 결과는 어떻게 확인하나요?', date: '자주 묻는 질문' },
]

function CivilCard({ service }) {
  const Action = service.to ? Link : 'button'
  const actionProps = service.to ? { to: service.to } : { type: 'button' }

  return (
    <article className="civil-card">
      <span className="civil-card__icon">
        <img src={service.icon} alt="" width="30" height="30" />
      </span>
      <h2 className="civil-card__title">{service.title}</h2>
      <p className="civil-card__desc">{service.desc}</p>
      <Action {...actionProps} className="civil-card__btn">
        {service.action}
      </Action>
    </article>
  )
}

function CivilPage() {
  const [tab, setTab] = useState('전체')
  const visible = tab === '전체' ? services : services.filter((s) => s.title === tab)

  return (
    <SubLayout sideActive="civil">
      <PageHero
        label="민원"
        title={['필요한 민원을', '쉽고 빠르게 처리하세요']}
        description={['전학 안내부터 서식, 온라인 신청, 시설 예약까지', '자주 찾는 민원 서비스를 모았습니다.']}
        visual={
          <HeroVisual
            icon="doc"
            tone="teal"
            label="민원: 온라인 신청, 민원서식, 시설 예약"
            items={[
              { icon: 'monitor', label: '온라인 신청' },
              { icon: 'doc', label: '민원서식' },
              { icon: 'calendar', label: '시설 예약' },
            ]}
          />
        }
      >
        <ul className="civil-contact">
          <li>
            <img src={callIcon} alt="" width="16" height="16" />
            민원 콜센터 <strong>031-1396</strong>
          </li>
          <li>
            <img src={timeIcon} alt="" width="18" height="18" />
            평일 09:00~18:00
          </li>
        </ul>
      </PageHero>

      <section className="civil" aria-labelledby="civil-heading">
        <h2 id="civil-heading" className="civil__heading">
          민원 서비스
        </h2>
        <TabMenu tabs={tabs} active={tab} onChange={setTab} className="civil__tabs" label="민원서비스 분류" />
        <div className="civil__grid">
          {visible.map((service) => (
            <CivilCard key={service.title} service={service} />
          ))}
          {tab === '전체' && (
            <article className="civil-card civil-card--help">
              <p className="civil-card__eyebrow">도움이 필요하신가요?</p>
              <h2 className="civil-card__title">민원 상담 안내</h2>
              <p className="civil-card__desc">찾는 민원이 없다면 콜센터로 문의해 주세요.</p>
              <a href="tel:0311396" className="civil-card__tel">
                031-1396
              </a>
            </article>
          )}
        </div>
      </section>

      <section className="civil-process" aria-labelledby="civil-process-heading">
        <h2 id="civil-process-heading" className="civil-process__title">
          민원 처리 절차
        </h2>
        <ol className="civil-process__steps">
          {steps.map((step, i) => (
            <li key={step.title} className="civil-process__step">
              <span className="civil-process__num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{step.title}</strong>
              <span className="civil-process__desc">{step.desc}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="civil-boards">
        <BoardCard title="민원 공지" items={notices} />
        <BoardCard title="자주 묻는 질문" items={faqs} />
      </div>
    </SubLayout>
  )
}

export default CivilPage
