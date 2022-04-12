export const LineWorkText = ({ className, jobName, company, start, end }) => {
  return (
    <div className={className}>
      <h3 className="text-md">{jobName}</h3>
      <h4 className="text-sm">{company}</h4>
      <p className="text-xs">{start} - {end}</p>
    </div>
  )
}
