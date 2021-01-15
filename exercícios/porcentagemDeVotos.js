/*
Um	 município	 deseja	 saber	 a	 porcentagem	 de	 votos	 de	 três	 candidatos,	 além	 da	
porcentagem	de	votos	brancos	e	nulos.	Monte	um	programa	que	receba	como	entrada	o	
número	de	votos	de	cada	um	dos	três	candidatos	e	também	os	votos	nulos	e	brancos.	Ao	
final,	o	programa	deve	apresentar	o	total	de	votos	e	a	porcentagem,	em	relação	a	todos	
os	eleitores	que	votaram,	de	votos	de	cada	candidato,	votos	nulos	e	votos	em	branco.
*/

var c1 = parseInt(prompt("Insira a quantidade de votos do candidato 1:")) 
var c2 = parseInt(prompt("Insira a quantidade de votos do candidato 2:")) 
var c3 = parseInt(prompt("Insira a quantidade de votos do candidato 3:")) 
var vb = parseInt(prompt("Insira a quantidade de votos brancos:"))
var vn = parseInt(prompt("Insira a quantidade de votos nulos:"))


const totalDeVotos = c1 + c2 + c3 + vb + vn
console.log("\nTotal: " + totalDeVotos + " votos." )

pc1 = parseFloat((c1*100)/totalDeVotos).toFixed(2)
console.log(`\nCandidato 1 possui ${pc1}% dos votos válidos.`)

pc2 = parseFloat((c2*100)/totalDeVotos).toFixed(2)
console.log(`Candidato 2 possui ${pc2}% dos votos válidos.`)

pc3 = parseFloat((c3*100)/totalDeVotos).toFixed(2)
console.log(`Candidato 3 possui ${pc3}% dos votos válidos.`)

pvb = parseFloat((vb*100)/totalDeVotos).toFixed(2)
console.log(`\nVotos brancos: ${pvb}%`)

pvn = parseFloat((vn*100)/totalDeVotos).toFixed(2)
console.log(`Votos nulos: ${pvn}%`)


