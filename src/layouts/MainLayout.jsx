import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../components/common/AnnouncementBar.jsx'
import Header from '../components/common/Header.jsx'
import FooterMarquee from '../components/common/FooterMarquee.jsx'
import Footer from '../components/common/Footer.jsx'

export default function MainLayout() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterMarquee />
      <Footer />
    </div>
  )
}
