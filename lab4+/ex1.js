"use strict";
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(Math.floor(Math.random() * 50)), 2500);
});
myPromise.then(console.log);
