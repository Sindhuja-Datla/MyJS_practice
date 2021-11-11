//named function
function ncal(a){
return a*a;
}
console.log("this is named function  "+ncal(5));


//constructor

var c=new Function("a","b","return a*b;");
console.log("this is constructor  "+c(2,3));

//Self-invoking function

var self=(function(a){return a*a;})(9);
console.log("this is self invoking function  "+self);

//anonymous function

var anon=function(d){
    return d*d;
}
console.log("this is anonymous function  "+anon(4));

setTimeout(function(){console.log("set Timeout function called  ")},5000);

