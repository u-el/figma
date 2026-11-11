import TargetServicePage from './TargetServicePage.jsx'
import { slides } from '../data/slides.js'
import fileText from '../assets/icon-file-text.svg'
import monitor from '../assets/icon-monitor.svg'
import headset from '../assets/icon-headset.svg'
import clipboard from '../assets/icon-clipboard.svg'

const config = {
  label: '교직원',
  hero: {
    title: ['교육에 집중할 수 있도록', '교직원을 위한 지원'],
    description: ['인사·연수·복무부터 교육활동 보호와 마음 건강까지', '교직원 업무 지원 서비스를 안내합니다.'],
    visual: {
      icon: 'briefcase',
      tone: 'indigo',
      label: '교직원 서비스: 채용/인사 안내, 연수/자격, 교육활동 보호',
      items: [
        { icon: 'doc', label: '채용/인사 안내' },
        { icon: 'book', label: '연수/자격' },
        { icon: 'shield', label: '교육활동 보호' },
      ],
    },
  },
  groups: [
    {
      title: '교직원 업무 지원',
      featured: true,
      items: [
        { label: '채용/인사 안내' },
        { label: '연수/자격' },
        { label: '복무/급여/복지' },
        { label: '교육활동 보호 및 지원' },
      ],
    },
    {
      title: '교원 안심상담 및 심리 치료',
      items: [
        { label: '비대면 1:1 교원 안심상담 신청' },
        { label: '마음건강 병의원 치료비 지원' },
        { label: '교원 힐링 충전 프로그램' },
      ],
    },
    {
      title: '교권 침해 신고 및 법률 지원',
      items: [
        { label: '교원 안심번호 및 민원대응 시스템' },
        { label: '교원 배상책임보험 안내' },
        { label: '교육활동 보호 가이드 및 서식' },
      ],
    },
    {
      title: '교수학습 및 학급운영 지원',
      items: [{ label: '수업 자료 및 평가 자료실' }, { label: '학급운영 우수 사례' }, { label: 'AI 디지털 교과서 지원' }],
    },
    {
      title: '학교 행정 및 재정 지원',
      items: [{ label: '학교회계 및 예산 편성' }, { label: '업무 매뉴얼 및 편람' }, { label: '공문 서식 모음' }],
    },
    {
      title: '구인구직',
      items: [{ label: '기간제 교원 채용 공고' }, { label: '교육공무직 채용' }, { label: '인력풀 등록' }],
    },
  ],
  quick: [
    { label: '채용 공고', icon: fileText },
    { label: '원격 연수', icon: monitor },
    { label: '안심 상담', icon: headset },
    { label: '업무 서식', icon: clipboard },
  ],
  notices: [
    { title: '2027학년도 교사 임용 시험 시행 공고', date: '2026.11.04.' },
    { title: '동계 직무연수 수강 신청 안내', date: '2026.10.31.' },
    { title: '교원 배상책임보험 보장 확대 안내', date: '2026.10.25.' },
  ],
  video: { title: '야외 활동 안전수칙 안내', image: slides[3] },
}

function StaffPage() {
  return <TargetServicePage target="staff" config={config} />
}

export default StaffPage
