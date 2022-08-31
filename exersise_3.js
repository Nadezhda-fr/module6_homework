// 6.5 Функции высшего порядка
// Задание 3.

function example(y){
  
    return function(x){
      return(x + y)
    }
  }
  
  const resultFunc = example(4);//первое число
  console.log(resultFunc(9));//второе число
  