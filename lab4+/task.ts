//№1
// let pr = new Promise((res,rej) => {
//     rej('ku')
// })

// pr
//     .then(() => console.log(1))
//     .catch(() => console.log(2))
//     .catch(() => console.log(3))
//     .then(() => console.log(4))
//     .then(() => console.log(5))

//№2
    // let promise = new Promise((res, rej) => {
    //     res('Resolved promise - 1'); 
    // });
    
    // promise
    //     .then((res) => {
    //         console.log("Resolved promise - 2"); 
    //         return "OK"; 
    //     })
    //     .then((res) => {
    //         console.log(res); 
    //     });

//№3
    // let promise = new Promise((res, rej) => {
    //     res('Resolved promise - 1'); 
    // });
    
    // promise
    //     .then((res) => {
    //         console.log(res); 
    //         return "OK";
    //     })
    //     .then((res1) => {
    //         console.log(res1);
    //     });

//№4
    // let promise = new Promise((res, rej) => {
    //     res('Resolved promise - 1'); 
    // });
    
    // promise
    //     .then((res) => {
    //         console.log(res); 
    //         return res; 
    //     })
    //     .then((res1) => {
    //         console.log('Resolved promise - 2');
    //     });
    
//№5
    // let promise = new Promise((res, rej) => {
    //     res('Resolved promise - 1'); 
    // });
    
    // promise
    //     .then((res) => {
    //         console.log(res); 
    //         return res; 
    //     })
    //     .then((res1) => {
    //         console.log(res1);
    //     });

//№6
    // let promise = new Promise((res, rej) => {
    //     res('Resolved promise - 1'); 
    // });
    
    // promise
    //     .then((res) => {
    //         console.log(res);  
    //     })
    //     .then((res1) => {
    //         console.log(res1);
    //     });