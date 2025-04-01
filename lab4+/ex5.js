"use strict";
const myPromis = new Promise((resolve, reject) => {
    resolve(21);
});
// myPromis
//     .then(result => {
//         console.log(result);  
//         return result; 
//     })
//     .then(result => {
//         console.log(result * 2); 
//     });
async function PromiseAwait() {
    const result1 = await myPromis;
    console.log(result1);
    const result2 = result1 * 2;
    console.log(result2);
}
PromiseAwait();
