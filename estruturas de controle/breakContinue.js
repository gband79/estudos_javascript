const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5) {
        break //break não age sobre o bloco IF, e sim ao bloco mais próximo 
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}


for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`Índice ${y} = ${nums[y]}`)
}