import { NavLink } from 'react-router-dom'

export const Tab = ({ to, children }) => {
  return (
    <li className="">
      <NavLink to={ to } className={({ isActive }) => isActive ? 'bg-slate-500 px-6 py-2' : 'bg-slate-200'}>
        {children}
      </NavLink>
    </li>
  )
}
