/* 
let equacao = "x + 2 = 6";
let partes = equacao.split("=");
let ladoDireito = Number(partes[1].trim());
let termo = partes[0].trim().replace("x", "").replace("+", "").trim();
let x = ladoDireito - Number(termo);
console.log("x = " + x);
explicação:
let equacao = "x + 2 = 6";
let partes = equacao.split("=");
-Divide a string em dois lados:
*partes[0] vai conter "x + 2"
*partes[1] vai conter "6"
let ladoDireito = Number(partes[1].trim());
-Pega o lado direito da equação (depois do =), que é "6".
*trim() remove espaços desnecessários.
*Number(...) converte de string para número.
*Agora ladoDireito = 6.
let termo = partes[0].trim().replace("x", "").replace("+", "").trim();
-Pega o lado esquerdo ("x + 2").
*Remove o "x" com replace("x", "")
*Remove o "+" com replace("+", "")
*Usa trim() para limpar os espaços.
*Fica só com o número 2, que é o termo adicionado a x.
*let x = ladoDireito - Number(termo);
console.log("x = " + x);
 */
let equacao = "x + 2 = 6";
console.log(`a expressão ${equacao} é execultada da seguinte forma:`);
let partes = equacao.split("=");
let ladoEsquerdo = partes[0].trim().replace("x", "").replace("+", "").trim();
let ladoDireito = Number(partes[1].trim());
let x = ladoDireito - Number(ladoEsquerdo);
console.log(` separa a icognita da eaquação "x"  fazendo ser x=6-2 `);

console.log("x = " + x);
