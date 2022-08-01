import { DiscordAuth } from 'services/discord'

export const MainAuth = () => {
  return (
    <div className="pt-8 pl-16">
      <p className="mb-8 text-4xl text-white dark:text-violet-400">Log In!</p>
      <div className="flex flex-col p-8 w-1/4 bg-white dark:bg-zinc-900 rounded border">
        <label htmlFor="username" className="text-violet-500">
          Username
        </label>
        <input
          id="username"
          type="email"
          className="p-1 text-violet-400 bg-slate-100 rounded-md border border-violet-600"
        ></input>
        <label htmlFor="password" className="mt-2 text-violet-500">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="p-1 text-violet-400 bg-slate-100 rounded-md border border-violet-600"
        ></input>
        <button className="p-1 mt-4 w-32 text-violet-600 hover:text-white dark:text-white bg-white hover:bg-violet-600 dark:bg-violet-800 dark:hover:bg-violet-500 rounded-md border border-violet-600 dark:border-violet-800">
          Log in
        </button>
      </div>
      <DiscordAuth />
    </div>
  )
}
