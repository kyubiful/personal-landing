import { AboutMe } from '../../components/AboutMe/index.jsx'
import { Opinions } from '../../components/Opinions/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'

export const About = () => {
  return (
    <div className="pt-2 pb-2 lg:pt-12 lg:pb-2 h-auto md:h-full lg:h-screen flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<section>" className="pl-5 lg:pl-14" />
        </div>
      </div>
      <section className="flex flex-col h-auto max-w-lg w-full m-auto pr-6 pl-6 md:max-w-3xl lg:max-w-4xl animate-fade-in">
        <AboutMe />
      </section>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</section>" className="pl-5 lg:pl-14" />
          <Markup text="<section>" className="pl-5 lg:pl-14" />
        </div>
      </div>
      <section className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6 md:max-w-xl lg:max-w-4xl animate-fade-in">
        <Opinions />
      </section>
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="</section>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
