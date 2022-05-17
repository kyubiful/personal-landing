import { GitHubLogo } from '../Logos/GitHubLogo.jsx'
import { LinkedinLogo } from '../Logos/LinkedinLogo.jsx'
import { TextGradient } from '../TextGradient/index.jsx'
import { Markup } from '../Markup/index.jsx'

export const Hello = () => {
  return (
    <div className="pt-2 pb-2 lg:pt-16 lg:pb-6 h-screen flex flex-col justify-between">
      <div className="h-80 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<div>" className="pl-5 lg:pl-14" />
          <Markup text="<p>" className="pl-7 lg:pl-16" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center content-center h-auto max-w-4xl w-full m-auto pt-2 pb-2">
        <div>
          <p className="text-xl md:text-2xl lg:text-2xl">Hola <span className="text-2xlmd:text-4xl lg:text-4xl">👋🏻</span>, me llamo</p>
          <TextGradient text="Sergio Zabala" className="text-5xl md:text-8xl lg:text-8xl leading-tight tracking-tight md:leading-tight lg:leading-tight"/>
          <p className="text-xl md:text-2xl lg:text-2xl text-right">Desarollador Web</p>
          <div className="flex justify-end mt-2">
            <a className="focus:outline-none" href="https://github.com/kyubiful" target="_blank" rel="noreferrer">
              <GitHubLogo className="h-6 md:h-8 lg:h-8 fill-slate-200 mr-3 hover:fill-white transition" />
            </a>
            <a className="focus:outline-none" href="https://www.linkedin.com/in/sergio-zabala-mu%C3%B1oz-56611ba3/" target="_blank" rel="noreferrer">
              <LinkedinLogo className="h-6 md:h-8 lg:h-8 fill-slate-200 hover:fill-white transition" background="fill-slate-900" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-80 flex flex-col justify-between">
        <div>
          <Markup text="</p>" className="pl-7 lg:pl-16" />
          <Markup text="</div>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10 object-bottom" />
        </div>
      </div>
    </div>
  )
}
