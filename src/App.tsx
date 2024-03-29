import './index.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homepage/homepage'
import { Contact } from './pages/contact/contact'
import { Error } from './pages/error/error'
import { Skills } from './pages/skills/skills'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import Layout from './components/layout'
import { UserComments } from 'pages/comments/comments'
import { MainAuth } from 'pages/authentication/mainAuth'
import { DiscordAuth } from 'services/discord'
import { ThemeProvider } from 'context/theme'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-violet-200 dark:bg-zinc-700">
        <Header />
        <main className="pt-6 md:pt-16">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="skills" element={<Skills />} />
              <Route path="comments" element={<UserComments />} />
              <Route path="*" element={<Error />} />
              <Route path="login" element={<MainAuth />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
