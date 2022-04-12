export const Title = ({ title }) => {
  return (
      <div className="flex items-center">
        <h1 className="text-3xl min-w-max">{title}</h1>
        <div className="ml-2 h-0.5 max-w-xs w-full bg-slate-200"/>
      </div>
  )
}
