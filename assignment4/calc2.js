//Declare the functions on top
function add(n1,n2){
    return n1+n2;
}
function sub(n1,n2){
    return n1-n2;
}
function mul(n1,n2){
    return n1*n2;
}
function div(n1,n2){
    return n1/n2;
}
//export the functions at the end of the file
module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;
module.exports.div=div;