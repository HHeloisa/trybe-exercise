/* Bonus 1 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

/* Bonus 2 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

/* Exercicio 3 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
newNumers = [];

for (let index = 0; index < numbers.length; index +=1) {
  if(numbers[index + 1]){
    newNumers.push(numbers[index]*numbers[index + 1]);
  } else {
    newNumers.push(numbers[index] * 2)
  }
}
console.log(newNumers);