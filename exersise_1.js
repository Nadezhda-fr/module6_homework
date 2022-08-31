// 6.2 Функции без параметров
// Задание 1.

const arr = [12, "dwdf", null, 98];
const arrNull = [ , ];
let nullElement = 0;
let oddElements = 0;
let evenElements = 0;

function showNumberElements() {
  if (arr[0] !== arrNull[0]){
  nullElement = 1;
}
for (let i = 1; i < arr.length; i += 2) {
   if (arr[i] !== arrNull[0]) {
    oddElements += 1;
  } 
}
for (let i = 2; i < arr.length; i += 2) {
   if (arr[i] !== arrNull[0]) {
    evenElements += 1;
  } 
}
console.log(`Количество нулевых элементов: ${nullElement}`);
console.log(`Количество нечётных элементов: ${oddElements}`);
console.log(`Количество чётных элементов: ${evenElements}`);
}

showNumberElements()
