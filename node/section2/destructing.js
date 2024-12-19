const person = {
    name: "Khant",
    age: 19,
    address: "Yangon",
    greet() {
        console.log("Hello");
    }
}

// const {name, age, greet} = person
//console.log(name)
// greet()

//======================//

// const printName = () => {
//     console.log("Your name is name " + name);
    
// }
// printName(person.name)

// const printName = (obj) => {
//     console.log("Your name is: " + obj.name);
// }
// printName(person)


//object destruction
const printName = ({name}) => {
    console.log("Your name is: " + name);
}

printName(person)

//======================//
const sports = ['Volleyball', 'Football', 'Basketball', 'Badmintion']

const [sport1, sport2] = sports

console.log(sport1);
console.log(sport2);

