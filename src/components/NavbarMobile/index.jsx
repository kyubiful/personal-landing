import { Tab } from '../Tab/index.jsx'
import { ReactLogo } from '../Logos/ReactLogo.jsx'
import { JavaScriptLogo } from '../Logos/JavaScriptLogo.jsx'
import { HTMLLogo } from '../Logos/HTMLLogo.jsx'
import { TypeScriptLogo } from '../Logos/TypeScriptLogo.jsx'
import { CSSLogo } from '../Logos/CSSLogo.jsx'
import { ChangeIdiom } from '../ChangeIdiom/index.jsx'
import { useTranslation } from 'react-i18next'

export const NavbarMobile = ({ isActive, setMenuMobileIsOpen, menuMobileIsOpen, ...props }) => {
  const [t] = useTranslation('global')

  const closeMenuMobile = () => {
    setMenuMobileIsOpen(false)
  }
  return (
    <nav {...props} className={'fixed h-full bg-slate-800 z-40 right-0 left-auto ' + (isActive === false ? 'hidden' : 'block')}>
      <ul className="flex flex-col w-80 h-full">
        <div className="w-full h-20">
          <p className="ml-4 h-full flex items-center">KyubiDev</p>
        </div>
        <Tab onClick={closeMenuMobile} to="/">
          <ReactLogo className="fill-slate-200 h-4 w-auto mr-2"/>
          {t('menu.hello')}
        </Tab>
        <Tab onClick={closeMenuMobile} to="/about">
          <JavaScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          {t('menu.about')}
        </Tab>
        <Tab onClick={closeMenuMobile} to="/experience">
          <HTMLLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          {t('menu.experience')}
        </Tab>
        <Tab onClick={closeMenuMobile} to="/projects">
          <TypeScriptLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-800/100"/>
          {t('menu.proyects')}
        </Tab>
        <Tab onClick={closeMenuMobile} to="/contact">
          <CSSLogo className="fill-slate-200 h-4 w-auto mr-2" background="fill-slate-900/100"/>
          {t('menu.contact')}
        </Tab>
        <div className="flex justify-center mt-4">
          <ChangeIdiom />
        </div>
        <div className="shadow-[inset_0_-1px_0_#334155] w-full h-full"></div>
      </ul>
    </nav>
  )
}
