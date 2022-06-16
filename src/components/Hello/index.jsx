import { GitHubLogo } from '../Logos/GitHubLogo.jsx'
import { LinkedinLogo } from '../Logos/LinkedinLogo.jsx'
import { TextGradient } from '../TextGradient/index.jsx'
import { Markup } from '../Markup/index.jsx'
import { useTranslation } from 'react-i18next'

export const Hello = () => {
  const [t] = useTranslation('global')

  return (
    <div className="pt-2 pb-2 lg:pt-12 lg:pb-2 min-h-screen h-full flex flex-col justify-between">
      <div className="h-72 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<section>" className="pl-5 lg:pl-14" />
          <Markup text="<p>" className="pl-7 lg:pl-16" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center content-center h-auto max-w-4xl w-full m-auto pt-2 pb-2">
        <div>
          <p className="text-xl md:text-2xl lg:text-2xl animate-fade-in">{t('home.hello')} <span className="text-3xl md:text-4xl lg:text-5xl inline-block animate-waving-hand [animation-delay:4.5s]"><img className="h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12" src="img/hi.png"/></span>, {t('home.name')}</p>
          <div className="w-[340px] md:w-[783px] lg:w-[783px] text-center animate-display-text">
            <TextGradient text="Sergio Zabala" className="text-4xl md:text-8xl lg:text-8xl leading-tight tracking-normal md:leading-tight lg:leading-tight block whitespace-nowrap border-r-4 w-[14ch] animate-writing [animation-delay:1.5s]"/>
          </div>
          <p className="text-xl md:text-2xl lg:text-2xl text-right animate-fade-in">{t('home.developer')}</p>
          <div className="flex justify-end mt-2">
            <a className="focus:outline-none transition hover:scale-110" href="https://github.com/kyubiful" target="_blank" rel="noreferrer">
              <GitHubLogo className="h-6 md:h-8 lg:h-8 fill-slate-200 mr-3 hover:fill-white transition animate-fade-in" />
            </a>
            <a className="focus:outline-none transition hover:scale-110" href="https://www.linkedin.com/in/sergio-zabala-mu%C3%B1oz-56611ba3/" target="_blank" rel="noreferrer">
              <LinkedinLogo className="h-6 md:h-8 lg:h-8 fill-slate-200 hover:fill-white transition animate-fade-in" background="fill-slate-900" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-72 flex flex-col justify-between">
        <div>
          <Markup text="</p>" className="pl-7 lg:pl-16" />
          <Markup text="</section>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10 object-bottom" />
        </div>
      </div>
    </div>
  )
}
