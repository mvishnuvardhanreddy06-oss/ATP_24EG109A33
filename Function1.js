
function findbig( a,b,c){
    if (a>b && a>c) {
        return a
    } else if(b>c) {
        return b
    } else{
        return c
    }
}
let bigger=findbig(1,2,3)
console.log(bigger);