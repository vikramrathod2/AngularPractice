/*Create typescript program to process product details using object oriented programming.
Class should contain private variables:  productId, productName, unitPrice, qty.
Constructor should allow productId as parameter
ProductId – should be readonly property*/
 
class Product
{
private productId:number;
private productName:string;
private unitPrice:number;
private qty:number;


constructor(productId:number)
{
    this.productId=productId;
}

  public get pId():number
  {
      return this.productId;
  } 
  
  public get pName():string
  {
      return this.productName;
  }
  public set pName(name:string)
  {
    this.productName=name;
  }
  public get pPrice():number
  {
      return this.unitPrice;
  }
  public set pPrice(price:number)
  {
       this.unitPrice=price;
  }
  public get pQty():number
  {
      return this.qty;
  }
  public set pQty(qty:number)
  {
       this.qty=qty;
  }
}
let  p=new Product(102);
p.pName="Ball";
p.pPrice=50;
p.pQty=4;
console.log(`Product Details: ProductId:${p.pId} ProductName:${p.pName} ProductPrice:${p.pPrice} ProductQty:${p.pQty}` )