const person = {
    name: "Steff",
    age: 20
}
const copiedPerson = {
    ...person
}
console.log(copiedPerson) // { name: "Steff", age: 20 }
const newOlderPerson = {
    ...person,
    age: 25
}
console.log(newOlderPerson) // { name: "Steff", age: 25 }
const newPersonWithFullName = {
    ...person,
    lastname: "Foo"
}
console.log(newPersonWithFullName) // { name: "Steff", age: 20, lastname: "Foo" }
const mixedPerson = {
    ...person,
    ...newPersonWithFullName
}
console.log(mixedPerson) // { name: "Steff", age: 20, lastname: "Foo" }