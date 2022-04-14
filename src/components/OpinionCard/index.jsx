export const OpinionCard = ({ name, company, text }) => {
  return (
    <div className="relative w-full group">
      <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur mb-2">
      </div>
      <div className="transform h-full transition-all rounded-xl w-full p-2 mb-2">
        <div className="h-full w-full bg-slate-100 dark:bg-slate-900 rounded-lg p-4">
          <h3 className="text-m">{name}</h3>
          <h5 className="text-sm">{company}</h5>
          <p className="italic text-xs mt-1">“{text}”</p>
        </div>
      </div>
    </div>
  )
}
