var biner=(a)=>{
    output=''
    for(i=0;i<10000;i++){
        if(a%2==0){
            output+=0
        }else{
            output+=1
        }
        a=Math.floor(a/2)
        if(a==0){
            break
        }
    }
    output=(output.split('')).reverse()
    hasil=''
    for(i=0;i<output.length;i++){
        hasil+=output[i]
    }    
    return hasil
}
console.log(biner(10))
console.log(biner(2))
console.log(biner(3))
console.log(biner(4))
console.log(biner(5))
console.log(biner(6))