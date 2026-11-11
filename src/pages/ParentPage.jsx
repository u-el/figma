import TargetServicePage from './TargetServicePage.jsx'
import { slides } from '../data/slides.js'
import fileText from '../assets/icon-file-text.svg'
import monitor from '../assets/icon-monitor.svg'
import building from '../assets/icon-building.svg'
import clipboard from '../assets/icon-clipboard.svg'

const config = {
  label: '학부모/일반인',
  hero: {
    title: ['아이와 함께 성장하는', '학부모·일반인 서비스'],
    description: ['전학·입학 안내부터 교육비 신청, 학교시설 개방까지', '필요한 정보를 빠르게 찾아보세요.'],
    visual: {
      icon: 'family',
      tone: 'teal',
      label: '학부모·일반인 서비스: 초등 전학 안내, 교육비 지원 신청, 돌봄·방과후',
      items: [
        { icon: 'school', label: '초등 전학 안내' },
        { icon: 'coin', label: '교육비 지원 신청' },
        { icon: 'heart', label: '돌봄·방과후' },
      ],
    },
  },
  groups: [
    {
      title: '학부모 교육행정',
      featured: true,
      items: [
        { label: '초등전학안내', to: '/civil/transfer' },
        { label: '중고교 입학/전학' },
        { label: '학력인정 시험안내' },
        { label: '교육비 지원 신청' },
      ],
    },
    {
      title: '초중고 교육비 신청',
      items: [{ label: '교육급여 바우처 신청' }, { label: '교육비 지원 대상 안내' }, { label: '신청 기간 및 절차' }],
    },
    {
      title: '신청 현황 조회 및 서식',
      items: [
        { label: '원클릭 신청 처리 현황 및 결과 조회' },
        { label: '교육비/교육급여 제출 서식 보관함' },
        { label: '자주 묻는 질문 및 이의신청 안내' },
      ],
    },
    {
      title: '다자녀 가정 교육비 지원',
      items: [{ label: '지원 대상 사전 진단' }, { label: '지원 내용 안내' }, { label: '신청 방법' }],
    },
    {
      title: '돌봄 및 방과후 지원',
      items: [{ label: '늘봄학교 운영 안내' }, { label: '방과후 학교 프로그램' }, { label: '방학 중 돌봄 신청' }],
    },
    {
      title: '학교 시설 개방 및 대여',
      items: [
        { label: '체육관·운동장 대여', to: '/civil' },
        { label: '시설 개방 일정 조회' },
        { label: '사용 신청서 및 유의사항' },
      ],
    },
  ],
  quick: [
    { label: '초등전학안내', icon: fileText, to: '/civil/transfer' },
    { label: '교육비 신청', icon: monitor },
    { label: '시설 대여', icon: building, to: '/civil' },
    { label: '민원서식', icon: clipboard, to: '/civil' },
  ],
  notices: [
    { title: '2027학년도 초등학교 취학 통지 안내', date: '2026.11.05.' },
    { title: '겨울방학 중 학교시설 개방 운영 안내', date: '2026.10.30.' },
    { title: '하반기 교육급여 바우처 추가 신청', date: '2026.10.22.' },
  ],
  video: { title: '예방감사 콘텐츠 공모 제안 안내', image: slides[1] },
}

function ParentPage() {
  return <TargetServicePage target="parent" config={config} />
}

export default ParentPage
