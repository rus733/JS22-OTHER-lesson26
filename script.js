const getData = () => {
  fetch('db.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      sendData(data);
    })
    .catch((err) => {
      err = 'Ошибка, файл не найден';
      console.log(err);
    });
};

const sendData = (obj) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getData();
