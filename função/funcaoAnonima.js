// A função é anônima pois não tem nenhum nome

const soma = function (x, y){
    return x + y
}

console.log(soma(10, 32))


/*
Na função abaixo podemos perceber que a variável "imprimirResultado"
é declarada com uma função anônima e dentro desta são inseridos 
*/
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, function (x, y){return x-y}) //foi inserido uma nova função anônima ("function (x, y)")
//que pega os parâmetros 3 e 4 da função imrpimirResultados e se subtrai "3 - 4 = -1"

imprimirResultado(3, 4, (x, y) => x * y) // foi passado uma arrow function dentro da função imprimir resultado
