function attachEvenListeners(){
    let count=0;
    document.getElementById("clickme").addEventListener("click",function xyx(){
        console.log("button clicked",++count);
    });
}
attachEvenListeners();