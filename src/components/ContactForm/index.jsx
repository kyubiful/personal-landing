import { InputForm } from '../InputForm/index.jsx'
import { TextAreaForm } from '../TextAreaForm/index.jsx'

const onSubmit = (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  console.log(data)
}

export const ContactForm = () => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-10">
      <InputForm type="text" name="name" />
      <InputForm type="email" name="email" />
      <TextAreaForm name="content" />
      <div className="flex justify-end">
        <InputForm type="submit" />
      </div>
    </form>
  )
}
