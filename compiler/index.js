const pipe = require('pipe')

console.clear();
//functions
getName = (person) => { return (person.name) }
uppercaseName = (person) => { return person.toUpperCase() }
get6Char = (person) => { return (person.substring(0, 6)) }
reverse = (person) => {
    return person
        .split('')
        .reverse()
        .join('')
}

//get the output
// console.log(getName({ name: 'rajesh' }))
// console.log(uppercaseName('rajesh'))
// console.log(get6Char('rajesh'))
// console.log(reverse('rajesh'))
//maniac ways to get a string which is 6char , reverse, uppercase
console.log(reverse(get6Char(uppercaseName(getName({ name: 'rajesh' })))))
//getting the same thing with the above result
const pipeValue = pipe(
    getName,
    uppercaseName,
    get6Char,
    reverse
)({ name: 'rajesh' })
console.log(pipeValue)