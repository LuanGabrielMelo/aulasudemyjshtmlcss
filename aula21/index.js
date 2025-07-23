/* o alert não é exatamente um objeto ou função do js mas sim do window(janela do html) que faz surge um aviso  em um bloco  dando um alerta , o objeto em sim é o window 
o confirm tem  como sobrepossição como o alerta tambem mas te da o direito de confirma ou negar assim sendo um objedto boolean , o rpompt tem como se sobrepor atravez da capitura de dados, ele abre uma janela na qual vc consegue digitar e inserir dados.**observação  se a função estiver dentro do objeto ela é um METODO se não ela se passa  apenas de função  */
let confirma = confirm('deseja realmente continuar?');
let num1 = prompt('digite um numero:'); // ele vai pegar o numero digitado e salvar  na memoria 
let num2 = prompt('digite o segundo numero:');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
const resultado = num1 +num2 ;
// console.log(`o resultado da soma dos numeros digitados é : ${resultado}`);
alert(`o resultado da soma dos numeros digitados  foi: ${resultado}`);