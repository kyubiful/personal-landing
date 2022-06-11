import { Tab } from '../Tab/index.jsx'
import { ReactLogo } from '../Logos/ReactLogo.jsx'
import { JavaScriptLogo } from '../Logos/JavaScriptLogo.jsx'
import { HTMLLogo } from '../Logos/HTMLLogo.jsx'
import { TypeScriptLogo } from '../Logos/TypeScriptLogo.jsx'
import { CSSLogo } from '../Logos/CSSLogo.jsx'
import { useTranslation } from 'react-i18next'

export const Navbar = ({ ...props }) => {
  const [t] = useTranslation('global')

  return (
    <nav {...props}>
      <ul className="flex h-full">
        <Tab to="/">
          <ReactLogo className="fill-slate-200 h-4 w-auto mr-2"/>
          {t('menu.hello')}
        </Tab>
        <Tab to="/about">
          <JavaScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          {t('menu.about')}
        </Tab>
        <Tab to="/experience">
          <HTMLLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          {t('menu.experience')}
        </Tab>
        <Tab to="/projects">
          <TypeScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          {t('menu.proyects')}
        </Tab>
        <Tab to="/contact">
          <CSSLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          {t('menu.contact')}
        </Tab>
        <div className="shadow-[inset_0_-1px_0_#334155] w-full h-auto"></div>
      </ul>
    </nav>
  )
}
