let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

// Exercício 2 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma+=numbers[index];
}
console.log(soma)

// Exercício 3 // 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  media += numbers[index] / 2;
}
console.log(media);

// Exercicio 4 //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  media += numbers[index] / 2;
}
if (media > 20){
  console.log("valor maior que 20");
}
else {
  console.log('valor menor ou igual a 20')
}

// Exercício 5  Conteúdo de referencia para resolução: https://www.youtube.com/watch?v=K7cfWrm21hg. //
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (maiorNumero < numbers[index])
      maiorNumero = numbers[index];
}
console.log(maiorNumero);

// Exercício 6 - REsolvido com a ajuda da Cárol no plantão <3// 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let indexImpar = 0; indexImpar < numbers.length; indexImpar += 1) {
  if (numbers[indexImpar] %2 !== 0) {
    impar += 1; 
    }
}
  if (impar === 0) {
    console.log("nenhum valor ímpar encontrado");
  }
  else {
    console.log(impar);
  }

// Exercício 7 // 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (menorNumero > numbers[index]) {
      menorNumero = numbers[index];
}
}
console.log(menorNumero);

// Exercício 8 //
let nums = [];

for (let numix = 1; numix <= 25; numix +=1) {
  nums.push(numix);
}
console.log(nums);

//exercício 9//
let nums2 = [];
for (let indix = 0; indix <nums.length; indix += 1) {
  console.log(nums[indix] / 2);
}

