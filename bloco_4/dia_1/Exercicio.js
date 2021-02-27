/* Exercício 1 */
let a = 10;
let b = 3;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a * b));
console.log('Multiplicação: ' + (a - b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b_));

/* 2  Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/
let ce = 12;
let de = 8;

  if (ce > de) {
    console.log('"ce" é maior do que "de"');
  } else {
    console.log('"de" é maior do que "ce"');
  }

/* 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/
let efe = 25;
let ge = 12;
let ahga = 24;
let maiorNumero = 0

if (efe > ge) {
  maiorNumero = efe;
} 
else {
  maiorNumero = ge;
}
if (maiorNumero > ahga) {
  maiorNumero = maiorNumero;
} else {
  maiorNumero = ahga;
}
console.log(maiorNumero);



/* 4 */ 
let number = 0;

if (number > 0) {
  console.log('positive');
}
else if (number < 0) {
  console.log('negative');
}
else {
  console.log('zero');
};

/* 5 Resolvido com a ajuda do gabarito*/
let t1 = 40;
let t2 = 120;
let t3 = 20;

let somaDeT = t1 + t2 + t3;
let triangulosVerdadeiros = t1 > 0 && t2 > 0 && t3 > 0;

if (triangulosVerdadeiros) {
  if (somaDeT === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido')
}


/* 6 */
let pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rainha':
    console.log('Movimenta-se em todas as direções, quantas casas quiser.');
    break;

  case 'peao':
    console.log('Movimenta-se apenas uma casa por vez, em qualquer direção.');
    break;

  case 'bispo':
    console.log('Movimenta-se apenas na diagonal, quantas casas quiser.');
    break;

  case 'rei':
    console.log('Movimenta-se apenas uma casa, em qualquer direção.');
    break;
  
  case 'torre':
    console.log('Movimenta-se quantas casas quiser, na horizontal ou na vertical.');
    break;

  case 'cavalo':
    console.log('Movimenta-se em L [2x1] e pode pular sobre peças');
    break;

  default:
    console.log('consulte sobre as outras peças no manual');
    break;
  }

  /* 7 */
  let porcento = 25;

  if (porcento < 0 || porcento > 100)  {
    console.log('erro, valor incorreto.')
  }
  else if (porcento >= 90) {
    console.log('A');
  }
  else if (porcento >= 80) {
    console.log('B');
  }
  else if (porcento >= 70) {
    console.log('C');
  }
  else if (porcento >= 60) {
    console.log('D');
  }
  else if (porcento >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }
  
  // 8 -Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .//
let num1 = 14;
let num2 = 13;
let num3 = 11;

let par = false;

if ((num1 % 2 === 0 || num2 %2 === 0 || num3 % 2 === 0)) {
  par = true;
  };
  console.log(par);

// 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . //

  let numA = 8;
  let numB = 13;
  let numC = 4;

  let impar = false;


if ((numA % 2 !== 0 || numB %2 !== 0 || numC % 2 !== 0)) {
    impar = true;
  };
  console.log(impar);

// 10 - 
let custo = 50;
let imposto = (custo * 0.20);
let custoTotal = (custo + imposto);
let venda = 80;
let lucroMil = ((venda - custoTotal) * 1000);

if (custo <= 0 || venda <= 0){
  console.log('Erro, valor de entrada menor ou igual a 0');
} else {
  console.log(lucroMil)
}

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. //

let inss;
let ir;

let salarioBruto = 8000.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36;
};

console.log('Salário liquido: ' + (salarioBase - ir));
