
import { Tab } from '../Tab/index.jsx'
import { ReactLogo } from '../Logos/ReactLogo.jsx'
import { JavaScriptLogo } from '../Logos/JavaScriptLogo.jsx'
import { HTMLLogo } from '../Logos/HTMLLogo.jsx'
import { TypeScriptLogo } from '../Logos/TypeScriptLogo.jsx'
import { CSSLogo } from '../Logos/CSSLogo.jsx'

export const NavbarMobile = ({ isActive, ...props }) => {
  return (
    <nav {...props} className={'absolute h-full bg-slate-800 z-10 ' + (isActive === false ? 'hidden' : 'block')}>
      <ul className="flex flex-col w-80 h-full">
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
        <div className="shadow-[inset_0_-1px_0_#334155] w-full h-full"></div>
      </ul>
    </nav>
  )
}
