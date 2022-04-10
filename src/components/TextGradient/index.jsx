export const TextGradient = ({ text, className = '' }) => {
  return (
    <p className={'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 text-transparent bg-clip-text ' + className}>{text}</p>
  )
}
