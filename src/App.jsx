import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import StudentPage from './pages/StudentPage.jsx'
import ParentPage from './pages/ParentPage.jsx'
import StaffPage from './pages/StaffPage.jsx'
import CivilPage from './pages/CivilPage.jsx'
import TransferPage from './pages/TransferPage.jsx'
import NewsPage from './pages/NewsPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/student" element={<StudentPage />} />
        <Route path="/services/parent" element={<ParentPage />} />
        <Route path="/services/staff" element={<StaffPage />} />
        <Route path="/civil" element={<CivilPage />} />
        <Route path="/civil/transfer" element={<TransferPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
