/* *
*Aritimétricos 
* +  Adição(5+10) e concatenação(5e10)
* -(subitração) 
* /(divisão) 
* *(mutiplicação) 
* **(elevação)
*  % tras o resto da divisão 
*  ++(operador de incremento)
* --(operador de decremento)
* As contas do js são com a mesma definição de execução do operadores em matematica (preferencia a multiplicação, divisão e potenciação(na qual é o de maior priridade))
*/
// const num1 = 10;
// const num2 = 5;
// console.log(num1 % num2);

const num1 = 5;
const num2 = 2;
const numm3 = 10;
let contador = (num1 + num2 )* numm3;
console.log(`valor da xpresão (num1 + num2 )* numm3 = ${contador}`);
contador++;
++contador;
console.log(`valor da expresão (num1 + num2 )* numm3  + 2 = ${contador}`);
contador++;
console.log(`valor da expresão (num1 + num2 )* numm3 + 3 = ${contador}`);
/*operadores de atribuição :
ex : contador**=2 é a mesma coisa que contador = contador** 2  o contador ++ so soma mais um mas se quiser fazer operacõaes ou iguala e faz a operação desejada ou faz como no exemplo  */
contador**=2;
console.log(`valor da expresão ((num1 + num2 )* numm3 + 3)**2 = ${contador}`);


