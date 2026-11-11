import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SubLayout from '../components/SubLayout.jsx'
import PageHero from '../components/PageHero.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import TabMenu from '../components/TabMenu.jsx'
import PdfModal from '../components/PdfModal.jsx'
import fileText from '../assets/icon-file-text.svg'
import './TransferPage.css'

const steps = [
  { title: '원적교 방문 신청', desc: '현재 다니는 학교에 전학 의사를 알리고 재학증명서를 받습니다.' },
  { title: '거주지 이전 등록', desc: '주민센터에서 전입 신고를 하면 새 학교가 배정됩니다.' },
  { title: '재배정 학교 제출', desc: '배정 통지서와 서류를 새 학교에 제출하면 전학이 완료됩니다.' },
]

const documents = [
  { name: '전학 신청서', count: '1부', note: '원적교 또는 주민센터 비치', pdf: true },
  { name: '주민등록등본', count: '1부', note: '정부24 또는 주민센터 발급' },
]

const forms = [
  { name: '전학 신청서', date: '2026.03.02.' },
  { name: '거주 사실 확인서', date: '2026.03.02.' },
  { name: '위장전입 방지 서약서', date: '2026.03.02.' },
]

const tabs = ['전학절차', '제출서류', '서식보관함']

function TransferPage() {
  const [tab, setTab] = useState('전학절차')
  const [pdf, setPdf] = useState(null)
  const stepsRef = useRef(null)
  const docsRef = useRef(null)
  const formsRef = useRef(null)

  const handleTab = (next) => {
    setTab(next)
    const target = { 전학절차: stepsRef, 제출서류: docsRef, 서식보관함: formsRef }[next]
    target.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <SubLayout sideActive="civil">
      <PageHero
        label="민원 · 초등전학안내"
        title={['초등학교 전학,', '세 단계면 충분해요']}
        description={['전학 절차와 필요한 서류를 확인하고', '서식을 미리 내려받아 준비하세요.']}
        visual={
          <HeroVisual
            icon="school"
            tone="teal"
            label="초등 전학 3단계: 원적교 방문 신청, 거주지 이전 등록, 재배정 학교 제출"
            items={[
              { icon: 'school', step: 'STEP 01', label: '원적교 방문 신청' },
              { icon: 'home', step: 'STEP 02', label: '거주지 이전 등록' },
              { icon: 'swap', step: 'STEP 03', label: '재배정 학교 제출' },
            ]}
          />
        }
      >
        <Link to="/civil" className="transfer__back">
          ← 민원 서비스 목록
        </Link>
      </PageHero>

      <TabMenu tabs={tabs} active={tab} onChange={handleTab} className="transfer__tabs" label="전학 안내" />

      <section ref={stepsRef} className="transfer-steps" aria-labelledby="transfer-steps-heading">
        <h2 id="transfer-steps-heading" className="transfer__heading">
          전학 절차 안내
        </h2>
        <ol className="transfer-steps__list">
          {steps.map((step, i) => (
            <li key={step.title} className="transfer-steps__item">
              <span className="transfer-steps__num">STEP {String(i + 1).padStart(2, '0')}</span>
              <strong className="transfer-steps__title">{step.title}</strong>
              <p className="transfer-steps__desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="transfer-boards">
        <section ref={docsRef} className="transfer-card" aria-labelledby="transfer-docs-heading">
          <h2 id="transfer-docs-heading" className="transfer-card__title">
            필수 제출 서류
          </h2>
          <ul className="transfer-card__list">
            {documents.map((doc) => (
              <li key={doc.name} className="transfer-row">
                <span className="transfer-row__icon">
                  <img src={fileText} alt="" width="22" height="22" />
                </span>
                <div className="transfer-row__text">
                  <strong>
                    {doc.name} <span className="transfer-row__count">{doc.count}</span>
                  </strong>
                  <span className="transfer-row__note">{doc.note}</span>
                </div>
                {doc.pdf && (
                  <button type="button" className="transfer-row__btn" onClick={() => setPdf(doc.name)}>
                    PDF 다운로드
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section ref={formsRef} className="transfer-card" aria-labelledby="transfer-forms-heading">
          <h2 id="transfer-forms-heading" className="transfer-card__title">
            서식 보관함
          </h2>
          <ul className="transfer-card__list">
            {forms.map((form) => (
              <li key={form.name} className="transfer-row">
                <div className="transfer-row__text">
                  <strong>{form.name}</strong>
                  <span className="transfer-row__note">{form.date} 등록</span>
                </div>
                <button
                  type="button"
                  className="transfer-row__btn transfer-row__btn--ghost"
                  onClick={() => setPdf(form.name)}
                >
                  내려받기
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {pdf && <PdfModal title={`${pdf} PDF`} onClose={() => setPdf(null)} onDownload={() => setPdf(null)} />}
    </SubLayout>
  )
}

export default TransferPage
