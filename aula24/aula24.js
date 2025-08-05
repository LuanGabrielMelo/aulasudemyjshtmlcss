let umastring = 'O rato roeu a ropa do rei de Roma.';
//---------------------------------------------------------------
console.log(umastring.slice(-5,-1));
console.log(umastring.length);//conta o indice 
console.log(umastring[5]);//aponta para o indice numerado(ira trazer a letra nesse caso)
console.log(umastring.indexOf(`roeu`,0));
console.log(umastring.substring(umastring.length-5,umastring.length-1));
console.log(umastring.split(' ',4),umastring.toLocaleUpperCase());
console.log(umastring.toLocaleLowerCase());