export const Markup = ({ text, className }) => {
  return (
    <div className="italic cursor-default select-none">
      <p className={'absolute text-slate-200/30 font-extralight lg:text-base text-sm ' + className}>
        {text}
      </p>
      <p className={'text-pink-500/40 blur-sm font-extralight lg:text-base text-sm ' + className}>
        {text}
      </p>
    </div>
  )
}
