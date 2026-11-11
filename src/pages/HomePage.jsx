import Header from '../components/Header.jsx'
import MainNav from '../components/MainNav.jsx'
import MainBanner from '../components/MainBanner.jsx'
import BoardCard from '../components/BoardCard.jsx'
import QuickServices from '../components/QuickServices.jsx'
import FooterInfo from '../components/FooterInfo.jsx'
import FooterBar from '../components/FooterBar.jsx'
import SideMenu from '../components/SideMenu.jsx'
import './HomePage.css'

const notices = [
  { title: '교육 관련 주요 공지사항 안내', date: '2026.10.14.' },
  { title: '학교 운영 및 교육정책 안내', date: '2026.10.14.' },
  { title: '각종 민원서비스 이용 안내', date: '2026.10.14.' },
]

const pressReleases = [
  { title: '경기교육의 새로운 소식', date: '2026.10.14.' },
  { title: '교육 현장 주요 활동 안내', date: '2026.10.14.' },
  { title: '미래교육 관련 정책 소식', date: '2026.10.14.' },
]

function HomePage() {
  return (
    <div className="home">
      <Header />
      <MainNav />
      <main>
        <MainBanner />
        <div className="home__boards">
          <BoardCard title="주요 공지사항" items={notices} />
          <BoardCard title="보도자료" items={pressReleases} />
        </div>
        <QuickServices />
        <FooterInfo />
      </main>
      <FooterBar />
      <SideMenu active="home" />
    </div>
  )
}

export default HomePage
