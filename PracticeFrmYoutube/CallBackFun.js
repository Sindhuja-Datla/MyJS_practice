setTimeout(function(){
    console.log("timer");
},4000);

//we can pass the function as param 

function x(y){
    console.log("x")
    y();
}

x(function y(){
console.log("y");
});