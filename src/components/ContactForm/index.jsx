import { InputForm } from '../InputForm/index.jsx'
import { TextAreaForm } from '../TextAreaForm/index.jsx'
import { PopupCard } from '../PopupCard/index.jsx'
import { useState } from 'react'
import { sendMail } from '../../services/mailer.js'
import { useTranslation } from 'react-i18next'

export const ContactForm = () => {
  const [popupActive, setPopupActive] = useState(false)
  const [data, setData] = useState({ status: 400, msg: 'Error' })
  const [t] = useTranslation('global')

  const togglePopup = () => {
    setPopupActive(true)
    setTimeout(() => {
      setPopupActive(false)
    }, 3000)
  }

  const verifyForm = (event) => {
    if (event.target.name.value.length === 0) {
      setData({ status: 400, msg: t('errors.form.emptyName') })
      togglePopup()
      return null
    }
    if (event.target.from.value.length === 0) {
      setData({ status: 400, msg: t('errors.form.emptyEmail') })
      togglePopup()
      return null
    }
    if (event.target.from.value.length !== 0 && event.target.from.validity.valid === false) {
      setData({ status: 400, msg: t('errors.form.incorrectEmail') })
      togglePopup()
      return null
    }
    if (event.target.text.value.length === 0) {
      setData({ status: 400, msg: t('errors.form.emptyText') })
      togglePopup()
      return null
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    if (verifyForm(e) === null) {
      return null
    }

    formData.to = import.meta.env.VITE_MAILER_TO
    formData.lng = localStorage.getItem('lng') || 'es'

    sendMail(formData)
      .then(data => {
        setData(data)
        if (data.status === 200) {
          e.target.name.value = ''
          e.target.from.value = ''
          e.target.text.value = ''
        }
        togglePopup()
      })

    setTimeout(() => {
      setData({ status: 400, msg: 'Error' })
    }, 6000)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-10" noValidate>
        <InputForm type="text" name="name" placeholder={t('contact.form.name')} />
        <InputForm type="email" name="from" placeholder={t('contact.form.email')} />
        <TextAreaForm name="text" placeholder={t('contact.form.text')} />
        <div className="flex justify-end">
          <InputForm type="submit" value={t('contact.form.send')}/>
        </div>
      </form>
      <PopupCard message={data.msg} status={data.status} active={popupActive} className="fixed right-10 bottom-10" />
    </>
  )
}
