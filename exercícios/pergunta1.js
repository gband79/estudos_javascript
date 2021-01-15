var x

function a(x){
    return x + b()
}

function b(){
    var y = 3
    while(y >= 0){
        y--
    }
    return y
}

console.log(a(10))