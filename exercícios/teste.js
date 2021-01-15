/*
Escreva	um	programa	para	que	sejam	informados	10	(dez)	números	inteiros.	O	programa	
deve	informar	o	menor	e	o	maior	valor	informado.
*/

var int1 = parseInt(prompt('digite o primeiro número'))
var int2 = parseInt(prompt('digite o segundo número'))
var int3 = parseInt(prompt('digite o terceiro número'))
var int4 = parseInt(prompt('digite o quarto número'))
var int5 = parseInt(prompt('digite o quinto número'))
var int6 = parseInt(prompt('digite o sexto número'))
var int7 = parseInt(prompt('digite o sétimo número'))
var int8 = parseInt(prompt('digite o oitavo número'))
var int9 = parseInt(prompt('digite o nono número'))
var int10 = parseInt(prompt('digite o décimo número'))


var lista = [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10]

function nums (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

lista.forEach(nums)



//console.log(`\nO maior número inserido é: ${maior}`)