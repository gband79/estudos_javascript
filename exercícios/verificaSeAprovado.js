/*
Elabore	um	programa	que	receba	a	nota	de	um	aluno	e	diga	se	o	mesmo	foi	aprovado	ou	
reprovado.	O	aluno	é	aprovado	com	nova	maior	ou	igual	a	6,0	(seis).
*/

var nota = parseFloat(prompt("Insira a nota do aluno:"))

if(nota >= 6 && nota <= 10){
    console.log("Aprovado :)")
}else if ( nota < 6 && nota >= 0){
    console.log("Reprovado :(")
}else{ 
    console.log("Nota inválida !")
}