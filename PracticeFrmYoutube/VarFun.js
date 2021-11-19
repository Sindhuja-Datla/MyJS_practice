
// beauty about javascript is we can call the function before its intialization, if it is intialized as a variable we can't do so

//before even execution starts only all the variables and functions will be memory segment


a(); //frst the global execution stack goes for a() and execution happens as memory and code segment and prints 
b();  //same as in a here the same process continues
var x=10; 
console.log(x) //then it comes to 6 it searches for its local variable, if local is not present goes for gobal 

 function a() {
     var x=100; //a's local variable
     console.log(x);
}

function b(){
    var x=50;  //b's local variable
    console.log(x);
}
