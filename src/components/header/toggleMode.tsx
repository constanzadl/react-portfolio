import { useTheme } from 'context/theme'
import { useState } from 'react'

export const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const theme = useTheme()

  return (
    <button className="m-2" onClick={toggleMode}>
      Dark/Light
    </button>
  )
}
