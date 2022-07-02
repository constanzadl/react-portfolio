import { Experience } from './school'

export const Education = () => {
  return (
    <div className="dark:text-white bg-violet-100 dark:bg-zinc-600">
      <div className="p-12 lg:p-20">
        <div className="text-6xl">Education and Experience</div>
        <div className="grid grid-cols-1 gap-4 pt-6 lg:grid-cols-2">
          <div className="px-4 text-right">
            <Experience
              school="ITESM"
              date="2013-2017"
              degree="B.A Animation and Digital Arts"
            />
          </div>
          <div className="px-4"></div>
          <div className="px-4"></div>
          <div className="px-4 text-left">
            <Experience
              school="42 - Silicon Valley"
              date="2020"
              degree="Software Development Program"
            />
          </div>
          <div className="px-4 text-right">
            <Experience
              school="Never8"
              date="2020-2022"
              degree="Front-End Developer"
            />
          </div>
          <div className="px-4"></div>
          <div className="px-4"></div>
          <div className="px-4 text-left">
            <Experience school="Wizeline" date="2022" degree="React Bootcamp" />
          </div>
        </div>
      </div>
    </div>
  )
}
