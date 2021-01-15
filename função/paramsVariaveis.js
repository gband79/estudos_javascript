function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]

    }
    return soma
}

console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste")) // vai concatenar a soma com a string "Teste"
console.log(soma('a', 'b', 'c'))