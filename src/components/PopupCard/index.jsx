export const PopupCard = ({ status, message, className, active }) => {
  let cardClass = ''

  if (status === 200) {
    cardClass += 'bg-slate-600 '
  } else {
    cardClass += 'bg-red-600 '
  }

  if (active === true) {
    cardClass += 'w-80 h-40 rounded-xl flex justify-center items-center transition opacity-0 fixed animate-popup ' + className
  } else {
    cardClass += 'w-80 h-40 rounded-xl flex justify-center items-center transition opacity-0 hidden ' + className
  }

  return (
    <div className={cardClass}>
      <p className="text-slate-200 w-64 text-center">{message}</p>
    </div>
  )
}
