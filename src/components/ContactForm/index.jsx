import { InputForm } from '../InputForm/index.jsx'
import { TextAreaForm } from '../TextAreaForm/index.jsx'
import { PopupCard } from '../PopupCard/index.jsx'
import { useState } from 'react'

export const ContactForm = () => {
  const [popupActive, setPopupActive] = useState(false)
  const [data, setData] = useState({ status: 400, msg: 'Error' })

  const togglePopup = () => {
    setPopupActive(true)
    setTimeout(() => {
      setPopupActive(false)
    }, 3000)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (e.target.name.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del nombre está vacío' })
      return null
    }
    if (e.target.email.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del email está vacío' })
      return null
    }
    if (e.target.email.value.length !== 0 && e.target.email.validity.valid === false) {
      setData({ status: 400, msg: 'Error: Email incorrecto' })
      return null
    }
    if (e.target.content.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del texto está vacío' })
      return null
    }

    data.to = 'ser.zabala@gmail.com'

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('https://kyubi-mailer.herokuapp.com/api/mail/send', options)
      .then(res => res.json())
      .then(data => setData(data))

    console.log(data)

    setTimeout(() => {
      setData({ status: 400, msg: 'Error' })
    }, 3000)

    if (data.status === 500) {
      e.target.name.value = ''
      e.target.email.value = ''
      e.target.content.value = ''
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-10" noValidate>
        <InputForm type="text" name="name" placeholder="Nombre" />
        <InputForm type="email" name="email" placeholder="Email" />
        <TextAreaForm name="content" placeholder="Texto" />
        <div className="flex justify-end">
          <InputForm type="submit" onClick={togglePopup} />
        </div>
      </form>
      <PopupCard message={data.msg} status={data.status} active={popupActive} className="fixed right-10 bottom-10" />
    </>
  )
}
