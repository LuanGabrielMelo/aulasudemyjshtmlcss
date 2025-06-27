/*
let nomeAluno;//undefined -> não aponta para local nenhum na memoria - sem definição nenhuma de valor*utiliza apenas no let 
let sobrenomeAluno = null // nulo -> não aponta para local nenhum na memoria - declara que n tem valor nenhum* inclusive da para usar const como definição de tipo de variavel 

cost boolean = true ou const boolean = false / todos esses são valores lógicos 
ex:
const aprovado = true;
const reprovado = false;
 o sinal de = alem de definir o valor ele é um operador de atribuição ex: 
 const a = [1,2];
 const b = a; //caracterisa como referencia,apontando o mesmo valor na memória 
 const a = 2;
 const b = a;//caracterisa como copia, valor de a realmente copiado pelo b n é uma referencia 
 push seria um adição de valores como foi na aulaex: b.push(3); 
*/
const nome = 'luan';
let nomeAluno;
let sobrenomeAluno = null;
const aprovado = true;
const reprovado = false;
const a = [1,2];
const b = a; 

console.log(a,b);
console.log(`tipo: ${typeof nome}  / valor: ${nome}`);
console.log(`tipo: ${typeof nomeAluno}  / valor: ${nomeAluno}`);
console.log(`tipo: ${typeof sobrenomeAluno}  / valor: ${sobrenomeAluno}`);
console.log(`tipo: ${typeof aprovado}  / valor: ${aprovado}`);
console.log(`tipo: ${typeof reprovado}  / valor: ${reprovado}`);
console.log(`tipo: ${typeof a}  / valor: ${a}`);
console.log(`tipo: ${typeof b}  / valor: ${b}`);
b.push(3); 
console.log(a,b);
console.log(`tipo: ${typeof a}  / valor: ${a}`);
console.log(`tipo: ${typeof b}  / valor: ${b}`);