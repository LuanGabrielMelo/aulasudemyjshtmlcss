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
console.log(num1,num2);
console.log(resultado);
console.log(typeof num1,typeof num2, typeof resultado);

document.addEventListener("DOMContentLoaded", function () {
  const inserirnome = document.querySelector(".text");
  const botao = document.querySelector(".enviar");
  const inputs =document.querySelectorAll("input");

  inserirnome.focus();//focar no input 
  //validação e suas tratativas do campo :==>
   botao.addEventListener("click", function () {
    const nomeDigitado = inserirnome.value; // remove espaços extras
    const apenasLetras = /^[a-zA-Z]+$/; // Expressão regular para aceitar apenas letras (maiúsculas e minúsculas)
    if (apenasLetras.test(nomeDigitado)) {
      console.log("Nome válido:", nomeDigitado);
      alert("Nome válido:", nomeDigitado);
    } else {
      console.log("Erro: digite uma letra, não um número ou caractere inválido.");
      alert('Erro: digite uma letra, não um número ');
    }
  });
  //tratativa para o proximo campo e suas interações com o teclado :==>
   inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      const tecla = event.key;
      if (tecla === "Backspace") {
        input.value = input.value.slice(0, -1);
      }
      if (tecla === "Enter") {
        event.preventDefault(); // impede submit padrão
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();// vai para o próximo input
        } else {
          botao.click();// último campo → clica no botão
        } 
      }
    });
  });
  
});
