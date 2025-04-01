"use strict";
function generateRandomNumber(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(Math.floor(Math.random() * 50)), delay);
    });
}
const promise1 = generateRandomNumber(2500);
const promise2 = generateRandomNumber(300);
const promise3 = generateRandomNumber(1000);
Promise.all([promise1, promise2, promise3])
    .then((numbers) => console.log("Сгенерированные числа:", numbers));
