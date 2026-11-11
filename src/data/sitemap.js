/**
 * 사이트 메뉴 구조 — 메인바(1단계)와 "전체 메뉴" 패널(2단계)이 함께 씁니다.
 * match: 현재 주소가 이 메뉴에 속하는지 판단 (메인바 선택 표시)
 */
export const sitemap = [
  {
    key: 'office',
    label: '교육청',
    icon: 'office',
    to: '/',
    match: (path) => path === '/',
    children: [
      { label: '홈', to: '/' },
      { label: '주요 공지사항', to: '/news' },
      { label: '보도자료', to: '/news' },
    ],
  },
  {
    key: 'services',
    label: '대상별 서비스',
    icon: 'users',
    to: '/services',
    match: (path) => path.startsWith('/services'),
    children: [
      { label: '대상별 서비스 안내', to: '/services' },
      { label: '학생', to: '/services/student' },
      { label: '학부모/일반인', to: '/services/parent' },
      { label: '교직원', to: '/services/staff' },
    ],
  },
  {
    key: 'civil',
    label: '민원',
    icon: 'doc',
    to: '/civil',
    match: (path) => path.startsWith('/civil'),
    children: [
      { label: '민원 서비스', to: '/civil' },
      { label: '초등전학안내', to: '/civil/transfer' },
    ],
  },
  {
    key: 'info',
    label: '정보',
    icon: 'info',
    to: '/news',
    match: (path) => path.startsWith('/news'),
    children: [{ label: '경기도교육청 소식', to: '/news' }],
  },
]
