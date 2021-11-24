//function declared within () 
//if you required the function to be loaded only once then
//(function_def)(..may or may not have params);
//Closure without params /parameters 
const f1=function(){
    console.log("Demo of anonymous function f1");
}
function f2(){
    console.log("Demo of named function f2");
}

// (function(){
//     console.log("nothing is called as its not having a calling bracket");
// })

// closure without parameter
(function(){
    f1();
    f2();
    console.log("Demo of first addition closure called only once");
})();

(function(n1,n2){
    console.log("Demo of  closure with parameter called only once");
    console.log(n1+n2);
})(20,30);

(function(){
    f1();
    f2();
    console.log("Demo of second substration closure called only once");
})();

(function(n1,n2){
    console.log("Demo of  closure with parameter called only once");
    console.log(n1-n2);
})(30,20);

(function(){
    f1();
    f2();
    console.log("Demo of first mul closure called only once");
})();

(function(n1,n2){
    console.log("Demo of  closure with parameter called only once");
    console.log(n1*n2);
})(30,20);

(function(){
    f1();
    f2();
    console.log("Demo of first division closure called only once");
})();

(function(n1,n2){
    console.log("Demo of  closure with parameter called only once");
    console.log(n1/n2);
})(300,10);