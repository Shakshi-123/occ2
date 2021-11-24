function Product(pid,pname,unitPrice,quantity){
    this.pid=pid;
    this.pname=pname;
    this.unitPrice=unitPrice;
    this.quantity=quantity;
    this.display=()=> this.pid+" "+this.pname+" "+this.unitPrice+" "+this.quantity;
}

module.exports=Product;