import { createContext, useContext } from 'react'
import { useState } from 'react'

interface ThemeInterface {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeInterface>({ darkMode: false })

export const ThemeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
