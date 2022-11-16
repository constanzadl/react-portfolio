import { useTheme } from 'context/theme'

export const Footer = () => {
  const theme = useTheme()

  return (
    <div
      className={`${
        theme.darkMode
          ? 'text-white bg-zinc-900 border-zinc-500'
          : 'text-slate-300 bg-violet-500 border-white'
      } font-thin text-center border-t-4`}
    >
      © 2022 Constanza Duarte Ledón. All Rights Reserved.
    </div>
  )
}
