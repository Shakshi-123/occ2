//creating using function constructor
function Product(pid,pname,price){
    this.pid=pid;
    this.pname=pname;
    this.price=price;
    this.display=()=> this.pid+" "+this.pname+" "+this.price;
}

const product1=new Product(1,"Pepsi",20.00);
const product2=new Product(2,"Maaza",20.00);
console.log(product1.display());
console.log(product2.display());