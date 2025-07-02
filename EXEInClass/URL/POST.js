fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1',
  },
  body: JSON.stringify({
    name: 'Dannnn',
    job: 'student'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));