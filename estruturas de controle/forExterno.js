const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3)
            break externo
            console.log(`Par = ${a} e ${b}`)
        
    }
}

console.log('Fim!')