// //module its nothing but collection of functions within a file
// // const v_calc=require('calc') trying to load core module 
// Demo where calc.js has only one functionality exported in it
console.log("Calling one custom module");
const v_calc=require('./calc') //loading custom module
const result=v_calc(10,20);
console.log("add(10,20) is "+result);

//Demo where calc2.js has more than 1 module exported 
console.log("Calling more than one custom module");
const calc2=require('./calc2');
console.log("add "+calc2.add(10,20));
console.log("sub "+calc2.sub(10,20));
console.log("mul "+calc2.mul(10,20));
console.log("div "+calc2.div(200,20));
// Creation of Object in js ::module.exports.Product=Product;
console.log("// Creation of Object in js ::module.exports.Product=Product;");
const product=require('./product3');
const p1=new product.Product(1,"Pepsi",20.0,100);
console.log(p1.display());

// Creation of Object in js ::module.exports=Product;
console.log("// Creation of Object in js ::module.exports=Product;");
const product1=require('./product4');
const p2=new product1(1,"Pepsi",20.0,100);
console.log(p2.display());
// working with closure 