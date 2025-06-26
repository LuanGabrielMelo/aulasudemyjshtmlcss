//treinando a ultilização do const
//observação a constante não pode ter o seu valor modificado
// diferente de let  a constante tem que ter seu valor definido do inicio,valor n pode ser introduzido depois
//+ - */
const nome ='Luan Gabriel';
const sobreNome ='Melo';
const alturaEmM =1.6;
let anoNascimento;
let peso = 54.5;
let imindiceMassaCorporal;
let idade = 22;

imindiceMassaCorporal = peso/(alturaEmM*alturaEmM);
anoNascimento= 2024 - idade;
/* versão1:
console.log(nome,sobreNome,'nasceu em '+anoNascimento+' tem',idade,'anos de idade atualmente pesando',peso +'KG com a altura de',alturaEmM+'M \n');
console.log('*IMC(Indice de massa corporal)\n');
console.log('seu calculo de IMC atual é:',indiceMassaCorporal,'\n');
console.log('As definições de suas variaveis para essas informações são:\n'+'Nome e Sobrenome:'+typeof nome+','+typeof sobreNome,'\n'+'Ano de Nascimento:'+ typeof anoNascimento+'\n'+'Altura:'+typeof alturaEmM+'\n'+'Peso:'+typeof peso+'\n'+'Idade:'+typeof idade+'\n'+'IMC:'+typeof indiceMassaCorporal);*/
//versão2:
console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento} tem ${idade} anos  de idade atualmente pesando ${peso}KG com a altura de ${alturaEmM}M \n`);
console.log('*IMC(Indice de massa corporal)\n');
console.log(`seu cáculo de IMC atual é:${imindiceMassaCorporal}\n`);
console.log(`As definições de suas variaveis para essas informações são:\nNome e Sobrenome:${typeof nome},${typeof sobreNome}\nAno de Nascimento:${ typeof anoNascimento}\nAltura:${typeof alturaEmM}\nPeso:${typeof peso}\nIdade:${typeof idade}\nIMC:${typeof indiceMassaCorporal}`);
