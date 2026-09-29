import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../components/AnnouncementBar.jsx'
import Header from '../components/Header.jsx'
import FooterMarquee from '../components/FooterMarquee.jsx'
import Footer from '../components/Footer.jsx'

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
