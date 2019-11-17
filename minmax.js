// a=('29459').split('')
// a=a.sort()
// console.log(a)

minmax=(x)=>{
    x=x.sort((a,b)=>a-b) //callback, parameter isi function, disini dalam bentuk es6
    //function diatas sudah rumus pasti untuk mensortir decimal
    min=x[0]
    max=x[x.length-1]
    console.log(x)
    return `angka terkecil adalah ${min}, angka terbesar adalah ${max}`
}
console.log(minmax(['2','3','6','8','25','10']))

// x = [40, 100, 1, 5, 25, 10];
// console.log(x)
// console.log(x.sort())
// x.sort(function(a,b){
// 	return a-b
// })
// console.log(x)
