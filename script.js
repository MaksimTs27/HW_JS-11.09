//setTimeout и setInterval
//task 1
setTimeout(() => {
  console.log('Привет через 3 секунды!');
}, 3000);

//task 2

const intervalID = setInterval(() => {
  console.log('Привет каждые 2 секунды');
}, 2000);

setTimeout(() => {
  clearInterval(intervalID);
}, 6000);

//task 3

let intervalID = setInterval(function randomBackgrounColor() {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
}, 2000);

setTimeout(() => {
  clearInterval(intervalID);
}, 20000);

//Задача: Простая функция с коллбэком
//task 1

function fetchData(callback) {
  console.log('Получение данных...');
  setTimeout(() => {
    callback();
  }, 2000);
}
function toFetchData() {
  console.log('Данные получены!');
}
fetchData(toFetchData);

task 2

function divide(a, b, callback) {
  if (b !== 0) {
    let result = a / b;
    callback(result);
  } else {
    callback(new Error('Нельзя делить на ноль'));
  }
}

function divideResultPrint(result, error) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
}

divide(100, 0, divideResultPrint);

//task 3

function step1(step2) {
  setTimeout(() => {
    step2();
  }, 1000);
}
function step2() {
  console.log('Шаг 1 завершен!');
}
step1(step2);

Promises
task 1

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Промис выполнен!');
  }, 2000);
});
promise
    .then((mes) => {
        console.log(mes);
    });

//task 2

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('You made a mistake!');
  }, 3000);
});
promise2
  .then()
  .catch((error) => {
    console.log(error);
  });

//task 3

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Первый промис');
  }, 1000);
});
promise3
  .then((mes) => {
    console.log(mes);
    return new Promise((resolve) => {
      resolve('Второй промис');
    });
  })
  .then((mes) => {
    console.log(mes);
  });

//Конструкция async/await
//task 1

async function fetchDataAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Данный получены!');
    }, 2000);
  });
  let result = await promise;
  console.log(result);
}
fetchDataAsync();

//task 2

async function divideAsync(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error('На ноль делить нельзя!');
    } else {
      console.log(num1 / num2);
    }
  } catch (err) {
    console.log('Ошибка: ', err.message);
  }
}

//task 3

async function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('шаг 1 выполнен');
    }, 1000);
  });
}
async function stepTwo(fromStepOne) {
  let resultSecond = 'Шаг 2 выполнен';
  return fromStepOne + resultSecond;
}

async function generalResult() {
  let resultFirstFunction = await stepOne();
  let resultSecondFunction = await stepTwo(resultFirstFunction);
  console.log(resultSecondFunction);
}
generalResult();

//Обработка ошибок
//task 1

function divideNumbers(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error('Деление на ноль невозможно');
    } else {
      console.log(num1 / num2);
    }
  } catch (err) {
    console.log(err);
  }
}
divideNumbers(25, 0);
divideNumbers(25, 5);

//task 2

async function fetchData(shouldFail) {
  try {
    if (shouldFail === false) {
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('Данные получены');
        }, 1000);
      });
    } else {
      throw new Error('Ошибка при получении данных!');
    }
  } catch (err) {
    console.log(err.message);
  }
  return;
}
fetchData(true);
fetchData(false);

//task 3

function parseJson(stringJSON) {
  try {
    let parsed = JSON.parse(stringJSON);
    console.log(parsed);
  } catch (err) {
    console.error(err.mesage);
  }
}
parseJson('{"name":"Maksim","age":30,"city":"Saint-Petersburg"}');

parseJson('dafjaefm');
