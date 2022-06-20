interface ExpProps {
  school: string
  date: string
  degree: string
}

export const Experience = (props: ExpProps) => {
  return (
    <div className="pt-4 border-t-2 border-white lg:border-none">
      <div className="text-lg">{props.school}</div>
      <div className="text-base">{props.date}</div>
      <div className="text-3xl">{props.degree}</div>
    </div>
  )
}
