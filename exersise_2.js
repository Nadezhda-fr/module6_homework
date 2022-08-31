//6.4 Параметры и возвращаемое значение
//Задание 2.

let result;

function showNumberType(x) {
  
  if (x < 1000){
   for (let i = 2; i < x; i++) {
     if (x % i === 0) {
       result = `${x} - не является простым числом`;
       break
     } else if (x === 1) {
        result = `${x} - не является простым числом`;
     } else {
       result = `${x} - является простым числом`;
     }
   }
  } else {
    result = `Данные неверны`;
  }
  
  if (x === 0 || x === 1) {
    result = `${x} - не является простым числом`;
  }
  
  if (x === 2) {
    result = `${x} - является простым числом`;
  }
  
  return result;
}

console.log(showNumberType(1))