export const InputForm = (props) => {
  const { type } = props
  if (type !== 'submit') return <input className="h-10 text-slate-200 bg-slate-500 p-4 focus:outline-none" {...props} />
  if (type === 'submit') {
    return (
      <div className="relative group p-1">
        <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded blur w-24" />
        <input className="cursor-pointer transform transition-all rounded w-24 p-1 mb-2 bg-slate-900 text-slate-200 h-full" {...props} />
      </div>
    )
  }
  return null
}
