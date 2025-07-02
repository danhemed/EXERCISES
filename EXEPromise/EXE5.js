function fetchData(url) {
    return fetch(url).then((rec) => rec.json());
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

fetchData(url)
  .then(data => {
    console.log(`Received data from ${url}:\n${JSON.stringify(data)}`);
  })
  .catch(err => {
    console.error('Error fetching data:', err.message);
  });