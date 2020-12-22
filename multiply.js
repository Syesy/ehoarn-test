function iterativeMultiply(a,b) {


    let res = 0
    for (let i = b; i > 0; i--) {
        res = res + a
    }

    return res
}


function recursiveMultiply(a,b) {
    if (b <= 0) return 0
    else return a + recursiveMultiply(a,b-1)
}


module.exports = {
    recursiveMultiply,
    iterativeMultiply
}