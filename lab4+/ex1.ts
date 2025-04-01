let myPromise = new Promise<number>(function(resolve, reject){
    setTimeout(()=> resolve(Math.floor(Math.random() * 50)), 2500);
})

myPromise.then(console.log);


