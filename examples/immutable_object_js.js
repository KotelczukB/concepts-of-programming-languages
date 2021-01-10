const person = {
    name: "Steff",
    age: 20
}
const copiedPerson = Object.assign({}, person)
console.log(copiedPerson) // { name: "Steff", age: 20 }
const newOlderPerson = Object.assign({}, person, { age: 25 })
console.log(newOlderPerson) // { name: "Steff", age: 25 }
const newPersonWithFullName = Object.assign({}, person, { lastname: "Foo" })
console.log(newPersonWithFullName) // { name: "Steff", age: 20, lastname: "Foo" }
const mixedPerson = Object.assign(person, newPersonWithFullName)
console.log(mixedPerson) // { name: "Steff", age: 20, lastname: "Foo" }