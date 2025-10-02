/*  anotações para lembrar:
 °alert() mostra  a caixa de span alert na tela  alarmando o usuario impedindo a interação do usuario com a pagina html ate  da o ok 
 °confrim() caixa de span que bloqueia a  a interação do usuario  com  o html e da a opição de confirma ou não assim retornando true ou false no console
 °prompt() bloquei o usuario  de interagir com o html ao abrir a caixa de span, mas permite digitar a informação  solicitada  
 exemplo:
 alert("Isso é um alerta!");

// Confirmação
if (confirm("Você tem certeza?")) {
  alert("Confirmado!");
} else {
  alert("Cancelado.");
}

// Prompt de entrada
let nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}!`); */
const numero = prompt('Digite um número:');
const numeroTitulo = document.getElementById('numero-titulo');
let raiz = (numero**(1/2));

/*pode ser feito assim tbm  n propio js 
document.body.innerHTML=`
<h1> Seu numero é  ${numero} </h1>
Raiz quadrada: ${raiz}
`*/