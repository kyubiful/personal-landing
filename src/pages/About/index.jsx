import { AboutMe } from '../../components/AboutMe/index.jsx'
import { OpinionsDesktop } from '../../components/OpinionsDesktop/index.jsx'
import { OpinionsTablet } from '../../components/OpinionsTablet/index.jsx'
import { OpinionsMobile } from '../../components/OpinionsMobile/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [t] = useTranslation('global')

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  const opinionsDB = t('about.opinions', { returnObjects: true })

  return (
    <div className="pt-2 pb-2 lg:pt-12 lg:pb-2 h-auto md:h-full lg:h-full flex flex-col">
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
        {
          (screenWidth >= 1023) && <OpinionsDesktop opinions={opinionsDB} />
        }
        {
          (screenWidth < 1023 && screenWidth > 767) && <OpinionsTablet opinions={opinionsDB} />
        }
        {
          (screenWidth <= 767) && <OpinionsMobile opinions={opinionsDB}/>
        }
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
