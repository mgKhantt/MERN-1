var name = "Kyaw Kyaw"
var age = 19
var address = "Yangon"

function concatPerson(name, age, address) {
    const concatString = `${name}, ${age}, ${address}`
    console.log(concatString);
}

console.log(concatPerson(name, age, address))

