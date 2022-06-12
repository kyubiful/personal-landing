import { OpinionCard } from '../OpinionCard/index.jsx'
import { useTranslation } from 'react-i18next'

export const OpinionsTablet = ({ opinions }) => {
  const [t] = useTranslation('global')

  return (
    <>
      <h2 className="mt-20 mb-6 text-2xl">{t('about.opinion')}</h2>
      <div className="grid grid-cols-2 gap-3 mb-2 mt-2 items-start justify-items-center mb-20">
        <ul>
          {
            opinions.map((opinion, index) => {
              if (index % 2 === 0) {
                return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.url}/>
              }
              return null
            })
          }
        </ul>
        <ul>
          {
            opinions.map((opinion, index) => {
              if (index % 2 === 1) {
                return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.url}/>
              }
              return null
            })
          }
        </ul>
      </div>
      <div className="inset-x-0 bottom-0 bg-gradient-to-t from-white h-60 -ml-10 -mr-10 pointer-events-none from-slate-900 sticky -mt-60 transition-opacity duration-300 opacity-100"></div>
    </>
  )
}
