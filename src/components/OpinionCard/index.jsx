export const OpinionCard = ({ name, company, text, companyUrl, avatar }) => {
  return (
    <div className="relative w-full max-w-xs group">
      <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur">
      </div>
      <div className="transform h-full transition-all rounded-xl w-full p-2 mb-2">
        <div className="h-full w-full bg-slate-900 rounded-lg p-4">
          <div className="flex">
            <img src={avatar} className="rounded-full h-10 w-10" />
            <div className="ml-4">
              <h3 className="text-m">{name}</h3>
              <h5 className="text-sm">
                { companyUrl ? <a className="underline" data-testid="companyUrl" href={companyUrl} target="_blank" rel="noreferrer">{company}</a> : <p>{company}</p> }

              </h5>
            </div>
          </div>
          <p className="italic text-xs mt-3">“{text}”</p>
        </div>
      </div>
    </div>
  )
}
