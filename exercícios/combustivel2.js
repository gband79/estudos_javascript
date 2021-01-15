/*
Considerando seu conhecimento e as explicações acima, elabore um
programa em JavaScript:

A) que receba como entrada o preço da gasolina e o preço do álcool e
informe ao usuário qual é o combustível mais vantajoso (ou se tanto faz
abastecer qual qualquer um deles).

B) Considere que depois, o programa deve perguntar ao usuário se deseja
efetuar um novo cálculo: se u usuário confirmar que sim, o programa
solicita as entradas novamente. Senão, o programa é encerrado.
*/
var precoAlcool
var precoGasolina

const porcentagem = 70.00

function verificaPreco(precoAlcool, precoGasolina) {

    while (resposta != ('não' || 'Não')) {
        var precoAlcool = parseFloat(prompt("\nInsira o preço por litro do etanol:"))
        var precoGasolina = parseFloat(prompt("\nInsira o preço por litro da gasolina:"))

        const calculo = (precoAlcool * 100) / precoGasolina
        console.log("\nO preço do etanol está " + calculo.toFixed(2) + "% do valor da gasolina.")

        if (calculo > porcentagem) {
            console.log('\nRecomendamos abastecer com gasolina.')

        } else if (calculo < porcentagem) {
            console.log('\nRecomendamos abastecer com etanol.')

        } else if (calculo == porcentagem) {
            console.log('\nTanto faz o combustível selecionado.')

        }

        var resposta = prompt("\nDeseja inserir novos valores de etanol e gasolina?")

    }
    if (resposta == ('não' || 'Não')) {
        console.log('Fim do programa.')
    }

}

verificaPreco(precoAlcool, precoGasolina)