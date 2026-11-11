import TargetServicePage from './TargetServicePage.jsx'
import { slides } from '../data/slides.js'
import fileText from '../assets/icon-file-text.svg'
import monitor from '../assets/icon-monitor.svg'
import headset from '../assets/icon-headset.svg'
import clipboard from '../assets/icon-clipboard.svg'

const config = {
  label: '학생',
  hero: {
    title: ['꿈을 키우는 학생을 위한', '교육 서비스'],
    description: ['진로·진학부터 장학금, 학교생활 서식까지', '학생에게 필요한 서비스를 모았습니다.'],
    visual: {
      icon: 'cap',
      label: '학생 서비스: 진로진학 안내, 장학금 지원, 마음 건강 상담',
      items: [
        { icon: 'book', label: '진로진학 안내' },
        { icon: 'coin', label: '장학금 지원' },
        { icon: 'heart', label: '마음 건강 상담' },
      ],
    },
  },
  groups: [
    {
      title: '학생 교육 지원',
      featured: true,
      items: [
        { label: '진로진학 안내' },
        { label: '장학금/교육비 지원' },
        { label: '학교폭력 신고상담' },
        { label: '학적/증명서 안내' },
      ],
    },
    {
      title: '초중고 교육비 지원',
      items: [{ label: '학비 및 급식비 지원' }, { label: '방과후 학교 수강권' }, { label: '교육 정보화 지원' }],
    },
    {
      title: '장학금 안내 및 신청',
      items: [{ label: '교육급여 안내' }, { label: '다자녀 맞춤형 지원' }, { label: '신청 절차 및 FAQ' }],
    },
    {
      title: '학교 생활 서식',
      items: [{ label: '결석/조퇴 신고서' }, { label: '현장체험학습 신청서' }, { label: '전학/편입학 서식' }],
    },
    {
      title: '봉사 자치 활동',
      items: [{ label: '학생 자치회 활동 안내' }, { label: '봉사활동 인증 및 조회' }, { label: '동아리 활동 지원' }],
    },
    {
      title: '마음 건강 및 상담',
      items: [{ label: '위(Wee) 클래스 상담' }, { label: '청소년 고민 상담 1388' }, { label: '사이버 상담실' }],
    },
  ],
  quick: [
    { label: '증명서 발급', icon: fileText },
    { label: '온라인 학습', icon: monitor },
    { label: '학교폭력 상담', icon: headset },
    { label: '진로 검사', icon: clipboard },
  ],
  notices: [
    { title: '2026년 2차 학교폭력 실태조사 참여 안내', date: '2026.11.06.' },
    { title: '2027학년도 고등학교 입학 전형 안내', date: '2026.11.02.' },
    { title: '겨울방학 진로체험 프로그램 신청', date: '2026.10.28.' },
  ],
  video: { title: 'AI 시대, 사람을 잇는 인성과 관계의 힘', image: slides[2] },
}

function StudentPage() {
  return <TargetServicePage target="student" config={config} />
}

export default StudentPage
