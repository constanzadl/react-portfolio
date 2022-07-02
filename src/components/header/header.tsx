import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {
  const [active, setActive] = useState(false)
  const toggleMobile = active ? '' : 'hidden'
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  /*Function to hide mobile and user menu when opening the other one*/
  return (
    <nav className="fixed py-2.5 px-2 w-full bg-violet-200 dark:bg-zinc-700 rounded border-violet-200 dark:border-zinc-700 sm:px-4 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-violet-500 rounded-full hover:ring-4 focus:ring-4 hover:ring-violet-700 focus:ring-violet-500 dark:hover:ring-white dark:focus:ring-violet-300 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <NavLink to="comments">
              <img
                className="w-8 h-8 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                alt="user photo"
              />
            </NavLink>
          </button>
          <button
            data-collapse-toggle="mobile-menu-2"
            onClick={() => setActive(!active)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-violet-500 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-600 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="m-2" onClick={() => toggleMode()}>
            Dark/Light
          </button>
        </div>
        <div
          className={`${toggleMobile} justify-between items-center w-full md:flex md:order-1 md:w-auto`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/"
                className="block py-2 pr-4 pl-3 text-white hover:text-violet-700 dark:text-violet-400 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-violet-700 border-b border-violet-100 dark:border-violet-700 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:border-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills"
                className="block py-2 pr-4 pl-3 text-white hover:text-violet-700 dark:text-violet-400 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-violet-700 border-b border-violet-100 dark:border-violet-700 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:border-0"
              >
                Skils
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="block py-2 pr-4 pl-3 text-white hover:text-violet-700 dark:text-violet-400 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-violet-700 border-b border-violet-100 dark:border-violet-700 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:border-0"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
