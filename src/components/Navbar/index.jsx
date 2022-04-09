import { Tab } from '../Tab/index.jsx'
import { ReactLogo } from '../logos/ReactLogo.jsx'
import { JavaScriptLogo } from '../logos/JavaScriptLogo.jsx'
import { HTMLLogo } from '../logos/HTMLLogo.jsx'
import { TypeScriptLogo } from '../logos/TypeScriptLogo.jsx'
import { CSSLogo } from '../logos/CSSLogo.jsx'

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <Tab to="/">
          <ReactLogo className="fill-slate-200 h-4 w-auto mr-2"/>
          hola.jsx
        </Tab>
        <Tab to="/about">
          <JavaScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          sobre_mi.js
        </Tab>
        <Tab to="/experience">
          <HTMLLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          experiencia.html
        </Tab>
        <Tab to="/projects">
          <TypeScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          proyectos.ts
        </Tab>
        <Tab to="/contact">
          <CSSLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          contacto.css
        </Tab>
        <div className="shadow-[inset_0_-1px_0_#334155] w-full h-auto"></div>
      </ul>
    </nav>
  )
}
