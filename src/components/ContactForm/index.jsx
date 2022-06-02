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
    const formData = Object.fromEntries(new FormData(e.target))

    if (e.target.name.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del nombre está vacío' })
      return null
    }
    if (e.target.from.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del email está vacío' })
      return null
    }
    if (e.target.from.value.length !== 0 && e.target.from.validity.valid === false) {
      setData({ status: 400, msg: 'Error: Email incorrecto' })
      return null
    }
    if (e.target.text.value.length === 0) {
      setData({ status: 400, msg: 'Error: El campo del texto está vacío' })
      return null
    }

    formData.to = 'ser.zabala@gmail.com'

    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:4000/api/mail/send', options)
      .then(res => res.json())
      .then(data => {
        setData(data)
        if (data.status === 200) {
          e.target.name.value = ''
          e.target.from.value = ''
          e.target.text.value = ''
        }
      })

    setTimeout(() => {
      setData({ status: 400, msg: 'Error' })
    }, 3000)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-10" noValidate>
        <InputForm type="text" name="name" placeholder="Nombre" />
        <InputForm type="email" name="from" placeholder="Email" />
        <TextAreaForm name="text" placeholder="Texto" />
        <div className="flex justify-end">
          <InputForm type="submit" onClick={togglePopup} />
        </div>
      </form>
      <PopupCard message={data.msg} status={data.status} active={popupActive} className="fixed right-10 bottom-10" />
    </>
  )
}
