import { EsIcon } from '../Icons/EsIcon.jsx'
import { EnIcon } from '../Icons/EnIcon.jsx'
import { useTranslation } from 'react-i18next'

export const ChangeIdiom = () => {
  const [t, i18n] = useTranslation('global')

  const changeIdiomEs = () => {
    i18n.changeLanguage('es')
    localStorage.setItem('lng', 'es')
  }

  const changeIdiomEn = () => {
    i18n.changeLanguage('en')
    localStorage.setItem('lng', 'en')
  }
  return (
    <>
          {(localStorage.getItem('lng') === 'es' || localStorage.getItem('lng') === undefined) && <div className="flex flex-row"><div className="mr-4 flex items-center"><EsIcon className="rounded-full w-5 h-5 mr-2" />Es</div><button className="mr-4 flex items-center grayscale transition hover:grayscale-0" onClick={changeIdiomEn}><EnIcon className="rounded-full w-5 h-5 mr-2" />En</button></div>}
          {(localStorage.getItem('lng') === 'en') && <div className="flex flex-row"><button className="mr-4 items-center flex grayscale transition hover:grayscale-0" onClick={changeIdiomEs}><EsIcon className="rounded-full w-5 h-5 mr-2" />Es</button><div className="mr-4 flex items-center"><EnIcon className="rounded-full w-5 h-5 mr-2" />En</div></div>}
    </>

  )
}
