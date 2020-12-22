const {itDivide} = require("./divide")

function modulo(a,b) {
    const divideRes = itDivide(a,b)
    return a - (divideRes * b)
}


module.exports = {
    modulo
}