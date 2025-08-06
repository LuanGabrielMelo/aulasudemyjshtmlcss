let num1 = 1;
let num2 = 2.5;
// num1 = Number;
// num2 = Number;
console.log(num1.toString()+num2);// o toString muda  o estagio do numero para string  temporaria mente 
console.log(typeof num1);
console.log( num1.toFixed(3));// define  a quantidade de decimas a serem imprimidos consigo até aproximar resultados com ele
// console.log(Number.isInteger(num1)); // o isInteger traz validação para saber se é  numero inteiro atravez de um boolean(verdadeiro ou falso)
let  temp = num1 * 'ola';
console.log(temp);
console.log(typeof temp);// identifica como number pois no js o o number que capitura todos os numeros  
console.log(Number.isNaN(temp));// Verifica se o valor da variável (identificador temp) é NaN (Not-a-Number)
num1 = parseFloat(Number.isInteger(num1));
console.log(num1);