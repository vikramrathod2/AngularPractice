class Customer
{
public EmpId:number;
public EmpName:string;
public City:string;

public constructor(EmpId:number=0,EmpName:string="",City:string="")
{
this.EmpId=EmpId;
this.EmpName=EmpName;
this.City=City;

}

public showDisplay():void
{
console.log(`Customer Details  Id: ${this.EmpId} , Name: ${this.EmpName}, City:${this.City}`)

}

}
let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256,"Scott");
let c4:Customer = new Customer(10256,"Scott","Hyd");
c1.showDisplay();
c2.showDisplay();
c3.showDisplay();
c4.showDisplay()

