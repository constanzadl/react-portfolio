import { createContext, useContext, ReactNode } from 'react'
import { useState } from 'react'

interface ThemeInterface {
  darkMode: boolean
  toggleDarkMode?: () => void
}

const ThemeContext = createContext<ThemeInterface>({ darkMode: false })

interface Props {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
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
