// 6.7 Функции обратного вызова
// Задание 4.

function showNumber(x, y) {
  
  setTimeout(function timeShow() {
    console.log(x);
    if (x < y) {
      setTimeout(timeShow, 1000);
    }
    x++;
  }, 1000);
}

showNumber(5, 15)
  