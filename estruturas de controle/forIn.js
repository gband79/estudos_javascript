const notas = [6.7, 7.4, 9.6, 6.1, 7.7]

for(i in notas){
    console.log(`Índice: ${i}`,`Nota: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
