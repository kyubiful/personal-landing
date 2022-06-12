export const sendMail = (data) => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  return fetch(`${import.meta.env.VITE_MAILER_URL}/api/mail/send`, options)
    .then(res => res.json())
}
