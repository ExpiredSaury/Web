function dataFormat(dataStr){
    const data=new Date(dataStr)


    const y = padZero(data.getFullYear())
    const m=padZero(data.getMonth() + 1)
    const d=padZero(data.getDate())
    const hh =padZero(data.getHours())
    const mm = padZero(data.getMinutes())
    const ss=padZero(data.getSeconds())


    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
    return n>9?n: '0'+n
}

module.exports={
    dataFormat
}
