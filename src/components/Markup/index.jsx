export const Markup = ({ text, className }) => {
  return (
    <div className="italic cursor-default select-none">
      <p className={'absolute text-slate-200/10 ' + className}>
        {text}
      </p>
      <p className={'text-pink-500/30 blur-sm ' + className}>
        {text}
      </p>
    </div>
  )
}
