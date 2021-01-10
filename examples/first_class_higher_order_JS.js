function sum(x, y) {
    return x + y
}
function partialSum(x) {
    return (y) => {
        return sum(x, y)
    }
}
const partial = partialSum(3)
console.log(partial(7)) // 10