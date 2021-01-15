// var schoolParamName
// var schoolToCheckName
// var priceSchoolParam
// var priceSchoolToCheck
// var stairsSchoolParamName
// var stairsSchoolToCheck
// var playgroundSchoolParamName
// var playgroundSchoolToCheck
// var priceBooksSchoolParamName
// var priceBooksSchoolToCheck
// var distanceSchoolParam
// var distanceShchoolToCheck
// var friendsSchoolParamName
// var friendsSchoolToCheck
var pointsSchoolParamName = 0
var pointsSchoolToCheck = 0



function compareSchool() {
    while (resposta != ("Não" || "não")) {
        console.log("Bem vindo ao programinha pra ajudar na escolha da escolinha da Lindinhal !!")
        var schoolParamName = prompt('\nInsira nome da escola parâmetro:')
        var priceSchoolParam = parseFloat(prompt(`Insira o valor da mensalidade da escola ${schoolParamName}:`))
        var stairsSchoolParamName = prompt(`Os alunos do primeiro ano tem que utilizar escadas para as atividades na escola ${schoolParamName}? Sim ou Não?`)
        var playgroundSchoolParamName = prompt(`Gostou da área de recreação da escola ${schoolParamName}? Sim ou não?`)
        var priceBooksSchoolParamName = parseFloat(prompt(`Quanto custa o material de estudos por mês da ${schoolParamName}?`))
        var distanceSchoolParam = parseInt(prompt(`Qual é a distância em Km da casa da Bebel até a escola ${schoolParamName}?`))
        var friendsSchoolParamName = prompt(`Bebel tem coleguinhas na ${schoolParamName}? Sim ou não?`)

        console.log(`\nAgora vamos ver a escola que você quer comparar com a escola ${schoolParamName}`)

        var schoolToCheckName = prompt('\nInsira nome da escola:')
        var priceSchoolToCheck = parseFloat(prompt(`Insira o valor da mensalidade da escola ${schoolToCheckName}:`))
        var stairsSchoolToCheck = prompt(`Os alunos do primeiro ano tem que utilizar escadas para as atividades na escola ${schoolToCheckName}? Sim ou Não?`)
        var playgroundSchoolToCheck = prompt(`Gostou da área de recreação da escola ${schoolToCheckName}? Sim ou não?`)
        var priceBooksSchoolToCheck = parseFloat(prompt(`Quanto custa o material de estudos por mês da ${schoolToCheckName}?`))
        var distanceShchoolToCheck = parseFloat(prompt(`Qual é a distância em Km da casa da Bebel até a escola ${schoolToCheckName}?`))
        var friendsSchoolToCheck = prompt(`Bebel tem coleguinhas na ${schoolToCheckName}? Sim ou não?`)


        if (priceSchoolParam > priceSchoolToCheck) {
            pointsSchoolToCheck = pointsSchoolToCheck += 10
        } else if (priceSchoolParam < priceSchoolToCheck) {
            pointsSchoolParamName = pointsSchoolParamName += 10
        }

        if (priceBooksSchoolParamName > priceBooksSchoolToCheck) {
            pointsSchoolToCheck = pointsSchoolToCheck += 10
        } else if (priceBooksSchoolParamName < priceBooksSchoolToCheck) {
            pointsSchoolParamName = pointsSchoolParamName += 10
        } else if (priceBooksSchoolParamName == priceBooksSchoolToCheck) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
            pointsSchoolParamName = pointsSchoolParamName += 0
        }



        if (stairsSchoolParamName == ("Não" || "não")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 20
        } else if (stairsSchoolParamName == ("Sim" || "sim")) {
            pointsSchoolParamName = pointsSchoolParamName += 0
        } else if (stairsSchoolToCheck == ("Não" || "não")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 20
        } else if (stairsSchoolToCheck == ("Sim" || "sim")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
        }

        if (playgroundSchoolParamName == ("Não" || "não")) {
            pointsSchoolParamName = pointsSchoolParamName += 0
        } else if (playgroundSchoolParamName == ("Sim" || "sim")) {
            pointsSchoolParamName = pointsSchoolParamName += 10

        } else if (playgroundSchoolToCheck == ("Não" || "não")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
        } else if (playgroundSchoolToCheck == ("Sim" || "sim")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
        }

        if (distanceSchoolParam > distanceShchoolToCheck) {
            pointsSchoolToCheck = pointsSchoolToCheck += 10
        } else if (distanceSchoolParam < distanceShchoolToCheck) {
            pointsSchoolParamName = pointsSchoolParamName += 10
        } else if (distanceSchoolParam == distanceShchoolToCheck) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
            pointsSchoolParamName = pointsSchoolParamName += 0
        }

        if (friendsSchoolParamName == ("Sim" || "sim")) {
            pointsSchoolParamName = pointsSchoolParamName += 15
        } else if (friendsSchoolParamName == ("Não" || "não")) {
            pointsSchoolParamName = pointsSchoolParamName += 0
        } else if (friendsSchoolToCheck == ("Sim" || "sim")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 15
        } else if (friendsSchoolToCheck == ("Não" || "não")) {
            pointsSchoolToCheck = pointsSchoolToCheck += 0
        }

        console.log(`\n\nTotal de pontos ${schoolParamName}:` + pointsSchoolParamName)
        console.log(`Total de pontos ${schoolToCheckName}:` + pointsSchoolToCheck)

        if (pointsSchoolParamName > pointsSchoolToCheck) {
            console.log(`\n\nA escola vencedora é ${schoolParamName}`)
        } else if (pointsSchoolParamName < pointsSchoolToCheck) {
            console.log(`\n\nA escola vencedora é ${schoolToCheckName}`)
        } else if (pointsSchoolParamName == pointsSchoolToCheck) {
            console.log(`\n\nHouve empate entre as escolas ${schoolParamName} e ${schoolToCheckName}`)
        }

        var resposta = prompt("Deseja fazer uma nova comparação?")


    }

    if (resposta == ("Não" || "não")) {
        console.log("Espero ter ajudado !")
        console.log("Fim do progama.")
        
    }

    if(resposta == ("Sim" || "sim")){
        pointsSchoolParamName = pointsSchoolParamName *= 0
        pointsSchoolToCheck = pointsSchoolToCheck *= 0
    }

}

compareSchool()