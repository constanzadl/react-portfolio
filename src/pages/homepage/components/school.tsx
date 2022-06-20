interface ExpProps {
  school: string
  date: string
  degree: string
}

export const Experience = ({
  school: string,
  date: string,
  degree: string
}) => {
  return (
    <div className="pt-4 border-t-2 border-white lg:border-none">
      <div className="text-lg">{school}</div>
      <div className="text-base">{date}</div>
      <div className="text-3xl">{degree}</div>
    </div>
  )
}
