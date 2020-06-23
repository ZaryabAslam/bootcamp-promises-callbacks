// working with asyncwait

console.log("start making dinner using promises");

function dinnerbnao(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("dinner bnao");
                resolve("pani ly ao");
            }
            else {
                reject("inpu sahe daal angraiz");
            }
            
        },10);
    });

    return promise;
}


function rotibnao(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("roti  bnao");
            resolve("jakdi bnao");
        },20);
    });
    return promise;
}


function karahibnao(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("karahi bnao");
            resolve("jaldi bnao");
        },30);
    });
    return promise;
}

           

async function delay (){
    try{
        let promisee = await dinnerbnao(20);
        console.log("pani ", promisee);
        let promise2 = await rotibnao();
        console.log("roti ", promise2);
        let promise3 = await karahibnao();
        console.log("karahi ", promise3);
    }

    catch{
        console.log("error in catch = ", error);
    }
    
}
delay();

console.log("finish making dinner using async await");