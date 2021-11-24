//using Object()
const product=new Object();
product.pid=1;
product.pname="Pepsi";
product.price=20.00;
product.details=function(){
    return this.pid+" "+this.pname+" "+this.price;
}

console.log(product);
console.log(product.details());

const product1=new Object();
product.details=function(){
    return this.pid+" "+this.pname+" "+this.price;
}
product.pid=2;
product.pname="Maaza";
product.price=20.00;


console.log(product);
console.log(product.details());