

const {iterativeMultiply,recursiveMultiply} = require("./multiply")
const {itDivide, recDivide} = require("./divide")
const {modulo} = require("./modulo")

const itMultRes = iterativeMultiply(3,2)
console.log("Iterative multiply result", itMultRes)
const recMultRes = recursiveMultiply(9,3)
console.log("Recursive multiply result", recMultRes)


const itDivideRes = itDivide(10,2)
console.log("Iterative divide result", itDivideRes)
const recDivideRes = recDivide(10,3)
console.log("Recursive divide result", recDivideRes)


const moduloRes = modulo(10,3)
console.log("Modulo result", moduloRes)