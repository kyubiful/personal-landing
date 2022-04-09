import { NavLink } from 'react-router-dom'
import { Tab } from '../Tab/index.jsx'

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <Tab to="/">hola.jsx</Tab>
        <Tab to="/about">sobre_mi.js</Tab>
        <Tab to="/experience">experiencia.html</Tab>
        <Tab to="/projects">proyectos.ts</Tab>
        <Tab to="/contact">contacto.css</Tab>
      </ul>
    </nav>
  )
}
