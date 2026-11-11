import Header from './Header.jsx'
import MainNav from './MainNav.jsx'
import SideMenu from './SideMenu.jsx'
import FooterInfo from './FooterInfo.jsx'
import FooterBar from './FooterBar.jsx'
import './SubLayout.css'

/** 하위 화면 공통 레이아웃: 메인과 같은 헤더·메뉴바·푸터 + 우측 사이드 메뉴 */
function SubLayout({ navActive, sideActive, children }) {
  return (
    <div className="sub">
      <Header />
      <MainNav active={navActive} />
      <main className="sub__main">{children}</main>
      <div className="sub__footer">
        <FooterInfo />
        <FooterBar />
      </div>
      <SideMenu active={sideActive} />
    </div>
  )
}

export default SubLayout
