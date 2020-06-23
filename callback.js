// working with calllbacks

console.log("start making dinner");

function callbackbnao(){
    setTimeout(() => {
        console.log("ye sab sy lmabna delay hy");
    }, 1000);
}
callbackbnao();

function fetchwater(){
    setTimeout(() => {
        console.log("water ready");
        makeroti();
    }, 100);
}
function makeroti(){
    setTimeout(() => {
        console.log("roti ready");
        makekarahi();
    }, 200);
}
function makekarahi(){
    setTimeout(() => {
        console.log("karahi ready");
    }, 300);
}
fetchwater();




console.log("finish making dinner");