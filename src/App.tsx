import './index.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homepage/homepage'
import { Contact } from './pages/contact/contact'
import { Error } from './pages/error/error'
import { Skills } from './pages/skills/skills'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import Layout from './components/layout'

const App = () => {
  return (
    <div className="bg-violet-200">
      <Header />
      <main className="pt-6 md:pt-16">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
