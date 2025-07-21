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
*Fica só com o número 2, que é o termo adicionado a x. ou let ladoEsquerdo = Number(partes[0].trim().replace(/[x+]/g, "").trim()); maneira mas curta usando regex com [] que conjunta os dois  exugando 
*let x = ladoDireito - Number(termo);
console.log("x = " + x);
 */
let equacao = "x + 2 = 6";
console.log(`a expressão ${equacao} é execultada da seguinte forma:`);
let partes = equacao.split("=");
// let ladoEsquerdo = Number (partes[0].trim().replace("x", "").replace("+", "").trim());
let ladoEsquerdo = Number(partes[0].trim().replace(/[x+]/g, "").trim());
let ladoDireito = Number(partes[1].trim());
let x = ladoDireito - ladoEsquerdo;
console.log(`separa a incógnita da equação "x"  fazendo assim ser  essa resolução das expressões \n x = ${ladoDireito} - ${ladoEsquerdo}\n x = ${x}`);

console.log('valores e tipos da equação resolvida:')
console.log(`equação :\ntipo: ${typeof equacao}  / valor: ${equacao}`);
console.log(`Separando por partes:\ntipo: ${typeof partes}  / valor: ${partes}`);
console.log(`lado esquerdo:\ntipo: ${typeof ladoEsquerdo}  / valor: ${ladoEsquerdo}`);
console.log(`lado direito:\ntipo: ${typeof ladoDireito}  / valor: ${ladoDireito}`);
console.log(`valor do resultado do x:\ntipo: ${typeof x}  / valor: ${x}`);