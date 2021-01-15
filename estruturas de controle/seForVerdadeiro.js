function seForVerdadeiro(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiro(' ') //string vazia
seForVerdadeiro(null) //false
seForVerdadeiro(undefined) //falso
seForVerdadeiro('') //falso
seForVerdadeiro(true)
seForVerdadeiro(0) //falso
seForVerdadeiro(NaN) //falso
seForVerdadeiro(-1)
seForVerdadeiro([]) //um array vazio é true
seForVerdadeiro([1, 2])
seForVerdadeiro('?')
seForVerdadeiro({}) //objeto vazio em javascript 
