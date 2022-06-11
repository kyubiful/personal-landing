export const sendMail = (data) => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  return fetch('https://kyubidev-mailer.up.railway.app/api/mail/send', options)
    .then(res => res.json())
}
