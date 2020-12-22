


function itDivide(a,b) {
    let res = 0
    while (a >= b) {
        res++;
        a = a - b
    }

    return res
}



function recDivide(a,b) {
    if (a < b) return 0
    return 1 + recDivide(a - b, b)
}


module.exports = {
    itDivide,
    recDivide
}