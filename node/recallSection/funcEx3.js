//argument function(ကိုယ်ပေးတဲ့တန်ဖိုးအတိုင်း အလုပ်လုပ်စေချင်လို့)
//return function များသည် return ပြန်သော တန်ဖိုးရှိတယ်။ ပြီးရင် နောက်ဆက်တွဲလုပ်စရာရှိသေးတယ်။

function addTwoNumber(num1, num2) {
    const sum = num1 + num2

    return sum
}

let result = addTwoNumber(10, 20) + 50
console.log(result);

console.log("===========");


//argument function(ကိုယ်ပေးတဲ့တန်ဖိုးအတိုင်း အလုပ်လုပ်စေချင်လို့)
//no return fuction များသည် သူ့ function ထဲကအတိုင်းအလုပ်လုပ်တယ်။​ ပြီးရင် နောက်ဆက်တွဲလုပ်စရာမရှိဘူး။
function addThreeNumber(num1, num2){
    const sum = num1 + num2
    console.log(`The result is ${sum}`);
    
}

addThreeNumber(100, 300)