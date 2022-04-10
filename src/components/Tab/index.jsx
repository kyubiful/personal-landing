import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export const Tab = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <li className={ match ? 'border-r border-slate-700 ' : 'border-r border-slate-700 shadow-[inset_0_-1px_0_#334155] hover:bg-slate-500 transition'}>
      <div className={ match ? 'bg-gradient-to-r from-pink-400 to-cyan-300 pb-1' : 'bg-gradient-to-r from-pink-400 to-cyan-300'}>
        <Link {...props} to={to} className={ match ? 'text-sm bg-slate-700 px-3 py-1 flex justify-center items-center w-auto h-full' : 'text-sm bg-slate-900 px-3 py-1 flex justify-center items-center h-full w-full hover:bg-slate-500 transition'}>
          {children}
        </Link>
      </div>
    </li>
  )
}
