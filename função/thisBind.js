
const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar2 = pessoa.falar //dará conflito pois o this da função "falar()"" está apontando 
//para a variável "falar2", ao invés do objeto "pessoa"

const falarPessoa = pessoa.falar.bind(pessoa) // o bing faz a referência do "this" para a função "falar()"
//do objeto "pessoa"
falarPessoa()
falar2()