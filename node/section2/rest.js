const addTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
    
}

addTwoNumbers(100, 200)

const addNumbers = (...nums) => {
    const numsArray = nums
    let totalNumber = 0
    numsArray.map((num) => {
        totalNumber += num
    })

    console.log(totalNumber);
    
}

addNumbers(100, 200, 300, 400)