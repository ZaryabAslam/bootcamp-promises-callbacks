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


let promise = dinnerbnao(20);
//console.log("Promise = ",promise);
promise.then(function (output){  //ye jo output likha hy ye pichly fucntion ka output hy jo isky lye input hy
    console.log("dinner bnao callback = ",output);
    return rotibnao();
})
.then(function (rotibnao){
    console.log("roti bnao callback = ",rotibnao);
    return karahibnao();
})
.then(function (karahibnao){
    console.log("karahibnao callback = ",karahibnao);
})
.catch(function (error){
    console.log("Error = ",error);
});






console.log("finish making dinner using promises");