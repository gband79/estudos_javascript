let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) //vai dar true pois o contexto é o node

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //vai dar false porque agora o bind relaciona o "this" com "obj"
comparaComThis(obj) //vai dar true porque agora o bind relaciona o "this" com "obj"

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //vai dar false porque a função arrow não aponta para o objeto global.
//arrow functio não aponta para o global.
comparaComThisArrow(module.exports) //esse não entendi kkk. Parece que é um arquivo do node
comparaComThisArrow(this) //this é igual ao this da função arrow
comparaComThisArrow = comparaComThisArrow.bind(obj) //mesmo apontando para o obj, a arrow function prevalece
comparaComThisArrow(obj) //então o resultado é false