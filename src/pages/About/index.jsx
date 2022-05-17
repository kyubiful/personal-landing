import { AboutMe } from '../../components/AboutMe/index.jsx'
import { Opinions } from '../../components/Opinions/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'

export const About = () => {
  return (
    <div className="pt-2 pb-2 lg:pt-16 lg:pb-6 h-auto md:h-screen lg:h-screen flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<div>" className="pl-5 lg:pl-14" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-lg w-full m-auto pr-6 pl-6 md:max-w-3xl lg:max-w-4xl">
        <AboutMe />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-5 lg:pl-14" />
          <Markup text="<div>" className="pl-5 lg:pl-14" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6 md:max-w-xl lg:max-w-4xl">
        <Opinions />
      </div>
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
