import { OpinionCard } from '../OpinionCard/index.jsx'
import { useTranslation } from 'react-i18next'

export const OpinionsDesktop = ({ opinions }) => {
  const [t] = useTranslation('global')

  let i = 0
  let x = 1
  let z = 2

  return (
    <>
      <h2 className="mt-20 text-2xl mb-6">{t('about.opinion')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start justify-items-center md:max-w-xl lg:max-w-full mb-20">
        <ul>
          {
            opinions.map((opinion, index) => {
              if (index === 0 || index === i) {
                i = index + 3
                return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.url}/>
              }
              return null
            })
          }
        </ul>
        <ul>
          {
            opinions.map((opinion, index) => {
              if (index === 1 || index === x) {
                x = index + 3
                return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.url}/>
              }
              return null
            })
          }
        </ul>
        <ul>
          {
            opinions.map((opinion, index) => {
              if (index === 2 || index === z) {
                z = index + 3
                return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.url}/>
              }
              return null
            })
          }
        </ul>
      </div>
      <div className="inset-x-0 bottom-0 bg-gradient-to-t from-white h-60 -ml-10 -mr-10 pointer-events-none dark:from-slate-900 sticky -mt-60 transition-opacity duration-300 opacity-100"></div>
    </>
  )
}
