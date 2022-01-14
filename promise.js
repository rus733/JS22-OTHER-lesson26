/// PROMISE

// напишем простой вариант promise

/*
const a = 200;
const promise = new Promise((resolve, reject) => {
  if (a > 10) {
    resolve(a);
  } else {
    reject('Some Error');
  }
});

console.log(promise);
*/
// произведем проверку через setTimeout
/*
const a = 10;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a > 10) {
      resolve(a);
    } else {
      reject('Some Error');
    }
  }, 2000);
});
// далее воспользуемтся методом из Prototype нашего promise и
// обработаем методом then , который примет в себя колбэк,который примет в себя некую data и выведеn data в консоль
//resolve(a) передает в метод then нашу data , которая и есть переменная a, именно она и выходит в консоль
// если а = 10 то отработает reject и then((data) => {console.log(data)}; //Uncaught (in promise) Some Error
//выдаст ошибку - Uncaught (in promise) Some Error
// но добавим в then  еще один колбэк который будет принимать  errorMess и выводить его в консоль
promise.then(
  (data) => {
    console.log(data);
  },
  (errorMess) => {
    console.log(errorMess); //'Some Error' - аргумент из reject
  }
);
*/
// метод then отрабатывает тогда когда заканчивается asyncron операция
// метод resolve  запускает метод then и отрабатывает первый колбэк
// метод reject запускает метод then и отрабатывает второй  колбэк если он передан
// применим еще один метод catch() вместо (errorMess) =>
/*
const a = 10;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a > 10) {
      resolve(a);
    } else {
      reject('some error');
    }
  }, 2000);
});
*/
/*
promise
  .then((data) => console.log(data));
  .catch((errorMess) => console.log(errorMess); //'some error'
*/
/*
promise
  .then((data) => {
    console.log(data);
  })
  .catch((errorMess) => {
    console.log(errorMess); //'some error'
  })
  .finally(() => console.log('finally')); //"finalli"
  */
// применим метод catch() вместо (errorMess) =>
//он перехватывает ошибки в случае срабатывания reject
//то что мы передаем в метод reject - перехватывает колбэк в методе catch
// а то что мы передаем в метод resolve  принимает колбэк метода then

// ИТОГО pormise ждет пока не закончится асинхр операция и не
// отработает resolve или reject , а  затем начинает работать then и catch
// есть метод finally , он отработает в любом случае

// поработаем с цепочкой then
// методы then можем вызывать после друг друга  сколько угодно
/*
const a = 20;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a > 10) {
      resolve(a);
    } else {
      reject('some error');
    }
  }, 1500);
});

есть проблемма в промис мы ничего не можем передать
поэтому сделаем из promis функцию которая будет возвращать new Promise
promise
  .then((data) => data + 10)
  .then((newData) => console.log(newData)) // 30
  .catch((errorMess) => console.log(errorMess))
  .finally(() => console.log('finally')); // finally
*/

// promis теперь ф. и в нее можно передать арг num
/*
const promise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve(num);
      } else {
        reject('some error');
      }
    }, 1500);
  });
};

promise(15) // вызовем ф promise и передадам число 15
  //.then((data) => data + 10)
  .then((newData) => console.log(newData)) // 15 , мы передали в промис информацию
  .catch((errorMess) => console.log(errorMess))
  .finally(() => console.log('finally')); //finally
  */
// мы можемпередавать  в качестве аргумента  инф о юзере, например его идентификатор и  делать то запрос на сервер
//в метод then  мы передаем data ,
//теперь передадим в него еще один промис
/*
const promise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve(num);
      } else {
        reject('some error');
      }
    }, 1500);
  });
};
promise(15)
  .then((data) => {
    console.log(data);//15 через 1,5 сек 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data + 10);
      }, 1500);
    });
  })
  .then((newData) => console.log(newData))// 25 через 3 сек 
  .catch((errorMess) => console.log(errorMess));
*/
// тюе мы можем строить промис на промисе
// и возвращать каждый раз асинхронное действие

// что будет если нужно дождаться результатов неск промисов
const promise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1500);
  });
};
// вызовем 3 промиса
const one = promise(5); // если арг 5 , то в консоли в catch // 5
const two = promise(25);
const three = promise(35);
// есть спец метод, передадим в него в виде массива  все вызовы
// и обработать цепочкой then
Promise.all([one, two, three])
  .then((data) => {
    console.log(data); // если арг >10 , то успех // (3) [15, 25, 35]
  })
  .catch((error) => console.log(error)); // если арг 5 , то в консоли в catch // 5
// если один из запросов возвращает ошибку мы получаем его в catch
