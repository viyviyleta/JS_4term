function generateRandomNumber(delay:number):Promise<number>{
    return new Promise<number>(function(resolve, reject){
        setTimeout(()=> resolve(Math.floor(Math.random() * 50)), delay);
    })
}

const promise1: Promise<number> = generateRandomNumber(2500);
const promise2: Promise<number> = generateRandomNumber(300);
const promise3: Promise<number> = generateRandomNumber(1000);

Promise.all([promise1, promise2, promise3])
    .then((numbers: number[]) => console.log("Сгенерированные числа:", numbers));