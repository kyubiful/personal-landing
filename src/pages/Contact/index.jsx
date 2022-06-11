import { ContactForm } from '../../components/ContactForm/index.jsx'
import { Title } from '../../components/Title/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const [t] = useTranslation('global')

  return (
    <div className="pb-2 pt-2 lg:pt-12 lg:pb-2 h-full flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<h2>" className="pl-5 lg:pl-14" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6 animate-fade-in">
        <Title text={t('contact.title')} />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</h2>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="<p>" className="pl-5 lg:pl-14" />
        </div>
        <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6 animate-fade-in">
          <p className="text-sm">{t('contact.text')}</p>
        </div>
        <div>
          <Markup text="</p>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="<form>" className="pl-7 lg:pl-16" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-4xl w-full m-auto pr-6 pl-6 animate-fade-in">
        <ContactForm />
      </div>
      <div className="h-40 flex flex-col justify-between">

        <div>
          <Markup text="</form>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
