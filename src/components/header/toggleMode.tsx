import { useTheme } from 'context/theme'
import { useState } from 'react'

export const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  const theme = useTheme()
  const toggleMode = () => {
    theme.toggleDarkMode
    //document.documentElement.classList.add('dark')
  }
  return (
    <button className="m-2" onClick={theme.toggleDarkMode}>
      Dark/Light
    </button>
  )
}
