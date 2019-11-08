var hexa=(a)=>{
    hexaData=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    output=''
    for(i=0;i<10000;i++){
        output+=hexaData[(a%16)]
        a=Math.floor(a/16)
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
console.log(hexa(7678))
console.log(hexa(666))
console.log(hexa(78))
console.log(hexa(13))