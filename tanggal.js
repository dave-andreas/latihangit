tanggal=(a)=>{
    inp=a.split('')
    hari=inp[0]+inp[1]
    namaBulan=['Januari','Febrbuari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
    inpBulan=(parseInt(inp[2]))*10+(parseInt(inp[3]-1))
    bulan=''
    for(i=0;i<namaBulan.length;i++){
        if(inpBulan==i){
            bulan+=namaBulan[i]
        }
    }
    tahun=inp[4]+inp[5]+inp[6]+inp[7]
    format=`${hari}-${bulan}-${tahun}`
    return format
}
console.log(tanggal('01012000'))