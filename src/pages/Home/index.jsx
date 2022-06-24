import { Hello } from '../../components/Hello/index.jsx'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <Helmet>
        <title>Sergio Zabala 🧑🏻‍💻 | Home</title>
        <meta name="description" content={t('home.pageDescription')} />
      </Helmet>
      <Hello/>
    </>
  )
}
