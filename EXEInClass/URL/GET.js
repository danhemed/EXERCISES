
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url).then((rec) => rec.json())
  .then(data => {
    console.log(`Received data from ${url}:\n${JSON.stringify(data)}`);
  })
  .catch(err => {
    console.error('Error fetching data:', err.message);
  });