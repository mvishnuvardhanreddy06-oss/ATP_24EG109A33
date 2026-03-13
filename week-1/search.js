function search(arr){
    let key=5
for(let i=0;i<arr.length;i++){
    if(arr[i]=key){
        return "found"
    }
    else{
        return "Not found"
    }
}
}
let arr=[1,2,3,4,5]
let result=search(arr)
console.log(result)