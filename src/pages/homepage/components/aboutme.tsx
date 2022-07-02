export const AboutMe = () => {
  return (
    <div className="flex flex-wrap justify-between content-center p-20">
      <div className="flex justify-center p-4 w-full lg:w-1/2">
        <img
          className="w-96 h-auto rounded-md shadow-2xl shadow-violet-400 dark:shadow-slate-700 bg-blend-normal"
          src="src/pages/homepage/media/profile.png"
          alt="Constanza"
        />
      </div>
      <div className="flex flex-col justify-center content-center w-full lg:w-1/2">
        <p className="m-auto text-6xl text-center dark:text-white lg:text-right">
          Hello! I am Constanza, a Web Developer.
        </p>
        <p className="pt-12 text-2xl text-center dark:text-white lg:pt-4 lg:text-right">
          I'm a Front-End Web Developer for Never8!
        </p>
      </div>
    </div>
  )
}
