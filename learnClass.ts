class Car { 
   //field 
    engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var obj = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()

console.log(obj.disp())

class Shape{
   area:number
   constructor(a:number){
      this.area= a;
   }
}
class Circle extends Shape{
   display():void{
      console.log("The area is:",this.area)
   }
}

let c=new Circle(123);
c.display();