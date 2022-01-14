///FETCH
//AJSX
/*
const user = fetch('db.json'); // в переменную после возд метода fetch , был занесен promis
console.log(user);
//в вкладке сеть мы видим полученные данные из db.json
//выведем их в консоль
user.then((response) => console.log(response)); // в таком виде данные мы не увидим
// обработаем promise методом then и получим  в ответ response. методом json мы раскрываем полученный response и в следующем  then  мы получаем данные data  в читаемом виде
user.then((response) => response.json()).then((data) => console.log(data)); // теперь мы получим данные в виде обьекта
*/

//перепишем все вместе
/*

const user = fetch('db.json');
console.log(user);
user.then((response) => console.log(response));
user
  .then((response) => response.json())
  .then((data) => console.log(data));

*/

// и можно обойтись без переменной
//fetch('db.json')
//.then((response) => response.json())
// .then((data) => console.log(data))
// можем обработать ошибку , если изменить имя файла db.json
//.catch((error) => console.log(error)); //SyntaxError: Unexpected token < in JSON at position 0 , во вкладке сеть ошибка 404, catch  перехватил ошибку
//
///
///////////////////////
// попробуем получить данные с какого нибудь тестового АPI, к примеру   сервер https://jsonplaceholder.typicode.com/
// 'https://jsonplaceholder.typicode.com/posts'

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data)) //(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}
  .catch((error) => console.log(error));
//
//
// мы получили огромный массив данных
// обратимся к одному из полученных элементов добавив его id в строку адреса /1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data)) //получили й обьект user  с id 1 {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
  .catch((error) => console.log(error));
