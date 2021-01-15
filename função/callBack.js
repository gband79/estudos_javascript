const biblioteca = ['Karl Marx', 'Adam Smith', 'Jean Jacques Rousseau']

function listaLivro(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

biblioteca.forEach(listaLivro)