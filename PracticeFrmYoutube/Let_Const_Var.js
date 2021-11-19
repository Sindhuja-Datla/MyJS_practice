//diff between let,const and var
 
console.log(a);  //(reference error) var shud be accesed after intialization or else it shows undefined
var a;
let b;

a=10;
const c=10; //const is strict then let and must be intialiazed during its declaration only or else assignment to const error(syntax error).


b=11;  //let frst need to declared and can be intialized anywhere after the program

console.log(z) //this doesn't work as we use let it shud be intialize frst and then can access
 //the upper statement throws reference error which is temporal dead zone
let z=5;


//we cannot redeclare let where as normal var can be done