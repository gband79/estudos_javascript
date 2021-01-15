
function soma1(a, b, c){
    a = a || 1 //se não for definido nenhum valor para a, b ou c, entrará o valor '1',  
    b = b || 1 //em cada letra.
    c = c || 1
    return a + b + c
}

console.log(soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // colocar todos os valores como 0 (em 'a', 'b' e 'c') é  
// o mesmo queconsiderar como falso. Aí ele vai assumir os valores 1 para cada letra.



//estratégias 2 (a), 3 (b) e 4 (c) para gerar o valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = b in arguments ? b : 1 // pergunta se b está no argumento (parâmetro), se verdadeiro retorna b 
    c = isNaN(c) ? 1 : c // método mais seguro, pois se espera um número para a soma. Se não for, retorna 1 
    return a + b + c
}
console.log(soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 