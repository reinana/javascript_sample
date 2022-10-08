function inputNumber(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof(data) === "number") {
                resolve(data + 1);
            }
            else {
                reject("数字ではありません");
            }
        }, 3000);
    })
}

console.log("処理を開始");

inputNumber(1)
.then(function(data) {
    console.log(data);
    return inputNumber(data);
})
.then(function(data) {
    console.log(data);
    return inputNumber(data);
})
.then(function(data) {
    console.log(data);
    return inputNumber(data);
})

async function showNumber() {
    const res1 = await inputNumber(1);
    console.log(`${res1}です`)
    const res2 = await inputNumber(res1);
    console.log(`${res2}です`)
    const res3 = await inputNumber(res2);
    console.log(`${res3}です`)
}

console.log("処理を開始async")
showNumber();