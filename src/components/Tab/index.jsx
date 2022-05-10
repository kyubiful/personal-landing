import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export const Tab = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <li className={ match ? 'border-r border-slate-700 h-auto' : 'border-r border-slate-700 shadow-[inset_0_-1px_0_#334155] h-auto hover:bg-slate-500 transition'}>
      <div className={ match ? 'bg-gradient-to-r from-pink-400 to-cyan-300 pb-1 h-10' : 'bg-gradient-to-r from-pink-400 to-cyan-300 h-9'}>
        <Link {...props} to={to} className={ match ? 'focus:outline-none text-sm bg-slate-700 px-3 py-1 flex lg:justify-center justify-start items-center w-auto h-full' : 'focus:outline-none text-sm bg-slate-900 px-3 py-1 flex lg:justify-center justify-start items-center h-full w-full hover:bg-slate-500 transition'}>
          {children}
        </Link>
      </div>
    </li>
  )
}
