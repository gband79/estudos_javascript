/*
Considerando seu conhecimento e as explicações acima, elabore um
programa em JavaScript:

A) que receba como entrada o preço da gasolina e o preço do álcool e
informe ao usuário qual é o combustível mais vantajoso (ou se tanto faz
abastecer qual qualquer um deles).
*/

var precoAlcool = parseFloat(prompt("Insira o preço por litro do etanol:"))

var precoGasolina = parseFloat(prompt("Insira o preço por litro da Gasolina:"))

const porcentagem = 70.00

function verificaPreco (precoAlcool, precoGasolina) { 
    const calculo = (precoAlcool * 100) / precoGasolina
    console.log(calculo.toFixed(2))
    
    if (calculo > porcentagem){
        console.log('melhor abastecer com gasolina')

    } else if (calculo < porcentagem){
        console.log('melhor abastecer com etanol')

    } else if (calculo == porcentagem){
        console.log('Tanto faz o combustível selecionado')
    }

    
}

verificaPreco(precoAlcool, precoGasolina)