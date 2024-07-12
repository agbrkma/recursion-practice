//iterative fibonacci
function fibs(num) {
    let arr = []
    for(let i = 0; i < num; i++){
        if(i === 0 || i === 1){
            arr.push(i)
        }
        else{
            arr.push((arr[i-1] + arr[i-2]))
        }
    }
    return arr
}

// console.log(fibs(8));

//recursive fibonacci
function fibsRec(num){
    if(num === 0){

        return []
    }
    else if(num === 1){
        return [0]
    }
    else if(num === 2){
        return [0,1]
    }
    else {
        let fib = fibsRec(num -1)
        fib.push(fib[fib.length -1] + fib[fib.length -2])
        return fib;
    }
    
}
// console.log(fibsRec(8))


