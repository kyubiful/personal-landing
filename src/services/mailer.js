export const sendMail = (data) => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  return fetch('https://kyubi-mailer.herokuapp.com/api/mail/send', options)
    .then(res => res.json())
}
