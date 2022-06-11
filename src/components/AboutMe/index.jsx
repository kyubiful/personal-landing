import { Title } from '../Title/index.jsx'
import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const [t] = useTranslation('global')
  return (
    <div className="mt-5 mb-5">
      <Title text={t('about.title')} />
      <div className="flex flex-col-reverse justify-between items-center md:flex-row lg:flex-row">
        <div className="max-w-md w-full">
          <p className="text-sm md:text-base lg:text-base mt-10 md:mt-auto lg:mt-auto">
            {t('about.description')}
          </p>
        </div>
        <div className="relative w-52 h-52 group flex justify-end">
          <div className="absolute mr-0 ml-auto w-52 h-52 inset-0.5 group-hover:inset-0 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-full blur">
          </div>
          <img className="transform transition-all rounded-full w-52 h-52 p-1" src={(t('about.image'))}/>
        </div>
      </div>
    </div>
  )
}
