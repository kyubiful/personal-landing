import { AboutMe } from '../../components/AboutMe/index.jsx'
import { Opinions } from '../../components/Opinions/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'

export const About = () => {
  return (
    <div className="pt-16 pb-6 h-screen flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-10" />
          <Markup text="<body>" className="pl-12" />
        </div>
        <div>
          <Markup text="<div>" className="pl-14" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6">
        <AboutMe />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-14" />
          <Markup text="<div>" className="pl-14" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6">
        <Opinions />
      </div>
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-12" />
          <Markup text="</html>" className="pl-10" />
        </div>
      </div>
    </div>
  )
}
