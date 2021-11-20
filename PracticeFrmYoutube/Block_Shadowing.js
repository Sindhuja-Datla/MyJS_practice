
var a=9;
function c(){
    var a=10;
    let b=20;
    const c=30;
    console.log(a); // 10
    console.log(b); //20
    console.log(c); //30
}
c();
console.log(a); //prints 9
console.log(b); //uncaught reference error
console.log(c); //const can't print outside the block