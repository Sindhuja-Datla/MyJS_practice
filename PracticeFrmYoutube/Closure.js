function z(){
    var a=90;
    function x(){
        var a=7;
        function y(){
            console.log(a);
        }
        y();
    }
    x();
}
z();