import { TechnologiesList } from '../../components/TechnologiesList/index.jsx'
import { Title } from '../../components/Title/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { LineWork } from '../../components/LineWork/index.jsx'
import { LineWorkText } from '../../components/LineWorkText/index.jsx'
import { LineWorkGradient } from '../../components/LineWorkGradient/index.jsx'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

export const Experience = () => {
  const [t] = useTranslation('global')

  const JOBS = t('experience.jobs', { returnObjects: true })

  return (
    <>
      <Helmet>
        <title>Sergio Zabala 🧑🏻‍💻 | Experience</title>
        <meta name="description" content={t('experience.pageDescription')} />
      </Helmet>
      <div className="pt-2 pb-2 lg:pt-12 lg:pb-2 lg:h-screen flex flex-col">
        <div className="h-40 flex flex-col justify-between">
          <div>
            <Markup text="<html>" className="pl-1 lg:pl-10" />
            <Markup text="<body>" className="pl-3 lg:pl-12" />
          </div>
          <div>
            <Markup text="<section>" className="pl-5 lg:pl-14" />
            <Markup text="<h1>" className="pl-7 lg:pl-16" />
          </div>
        </div>
          <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6 animate-fade-in">
            <Title className="mb-5" text={t('experience.title')} />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Markup text="</h1>" className="pl-7 lg:pl-16" />
              <Markup text="<div>" className="pl-7 lg:pl-16" />
            </div>
          </div>
          <div className="flex flex-col h-auto max-w-5xl w-full m-auto pr-6 pl-6">
            <div className="flex flex-col justify-between mb-5 lg:flex-row gap-10 lg:gap-0">
              <div className="animate-fade-in">
                <h3 className="mb-10 mt-5 text-lg lg:text-2xl md:text-2xl max-w-md m-auto">{t('experience.technologies')}</h3>
                <TechnologiesList />
              </div>
              <div className="animate-fade-in">
                <div className="flex justify-start flex-col items-start gap-2 h-full m-auto max-w-md">
                  <h3 className="mb-10 mt-5 text-lg lg:text-2xl md:text-2xl max-w-md">{t('experience.careers')}</h3>
                  <div className="flex justify-center items-center gap-2 max-h-80 h-full max-w-md animate-fade-in">
                    <div className="flex flex-col justify-start h-full md:w-48 lg:w-48">
                    {
                      JOBS.map((job, index) => {
                        if (index % 2 !== 0) {
                          return <LineWorkText key={index} className={'ml-1 ' + (index === 1 ? 'mt-24' : 'mt-16')} jobName={job.jobName} company={job.company} start={job.start} end={job.end}/>
                        }
                        return null
                      })
                    }
                    </div>
                    <div className="max-h-max h-full flex justify-center items-center">
                      <LineWork className="absolute fill-slate-200 max-h-72 h-full stroke-slate-200" />
                      <LineWorkGradient className="absolute max-h-80 h-full hover:brightness-110 transition" color1="#F64F59" color2="#C471ED" color3="#12C2E9" />
                    </div>

                    <div className="flex flex-col justify-start h-full md:w-48 lg:w-48">
                    {
                      JOBS.map((job, index) => {
                        if (index % 2 === 0) {
                          return <LineWorkText key={index} className={'ml-2 ' + (index === 0 ? '' : 'mt-20')} jobName={job.jobName} company={job.company} start={job.start} end={job.end}/>
                        }
                        return null
                      })
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="h-40 flex flex-col justify-between">
          <div>
            <Markup text="</div>" className="pl-7 lg:pl-16" />
            <Markup text="</section>" className="pl-5 lg:pl-14" />
          </div>
          <div>
            <Markup text="</body>" className="pl-3 lg:pl-12" />
            <Markup text="</html>" className="pl-1 lg:pl-10" />
          </div>
        </div>
      </div>
    </>
  )
}
