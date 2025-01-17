// setTimeout(()=> {
//     console.log("Hello");
// }, 2000)

// console.log("Hello2");

const fetchData = () => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve('Hi')
        }, 2000);
    })

    return promise
}

//sync => အပေါ်က code မပြီးမချင်း အောက်က code အလုပ်မလုပ်ဘူး။
//async =>  တစ်ပြိုင်ထဲ အကုန်အလုပ်လုပ်တယ်။ 
//အပြင်မှာ ဘာသာပြန်သလို programming မှာက မတူဘူး။ 


//promise မှာ  
// 1. then => resolve နဲ့ တွဲသုံးရတယ်။ code က success ဖြစ်ရင် then ကို အလုပ်လုပ်မယ်။
// 2. catch => reject နဲ့ တွဲသုံးရတယ်။  code က error တက်ရင်(fail) ရင် catch ကို အလုပ်လုပ်မယ်။ 
// 3. finlly => error ဖြစ်ဖြစ် မဖြစ်ဖြစ် အလုပ်လုပ်တယ်။
fetchData()
.then((result) => {
    console.log(result);
})
.then(()=> {
    console.log("Hello world");
})
.catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log("Sync code is done");
    
})