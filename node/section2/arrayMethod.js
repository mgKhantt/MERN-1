const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
    console.log(hobby);
}

function a() {
    console.log("a");
}

const b = function () {
    console.log("b");
};

const c = () => {
    console.log("c");
};

console.log("=======");

//map(transform)
const updateHobbies = hobbies.map((hobby) => {
    return hobby + "Hobby"
});

console.log(updateHobbies);

console.log("=== Testing ===");

const programmingArray = ["Swift", "Java", "C++", "GoLang"]

const addingLanguageArray = programmingArray.map((programming) => {
    return programming + " Language"
})



//adding the value into array
programmingArray.push("PHP")

console.log(programmingArray);


console.log(addingLanguageArray);



