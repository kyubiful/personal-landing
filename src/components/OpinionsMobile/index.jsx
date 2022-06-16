import { OpinionCard } from '../OpinionCard/index.jsx'
import { useTranslation } from 'react-i18next'

export const OpinionsMobile = ({ opinions }) => {
  const [t] = useTranslation('global')

  return (
    <>
    <h2 className="mt-6 mb-6 text-xl">{t('about.opinion')}</h2>
    <div className="grid grid-cols-1 gap-3 mb-2 mt-2 items-start justify-items-center">
      <ul>
        {
          opinions.map((opinion, index) => {
            return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text} avatar={opinion.avatar} companyUrl={opinion.companyUrl}/>
          })
        }
      </ul>
    </div>
    <div className="inset-x-0 bottom-0 bg-gradient-to-t from-white h-60 -ml-5 -mr-5 pointer-events-none from-slate-900 sticky -mt-60 transition-opacity duration-300 opacity-100"></div>
    </>
  )
}
