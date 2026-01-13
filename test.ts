enum Directions{
  Up=1,
  Down,
}
enum Directions{
  Left=3,
  Right
}
// Interfaces in TypeScript
interface IPerson {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

// Define an object that implements the interface
let objs: IPerson = {
  firstName: "John",
  lastName: "Doe",
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
};
console.log(objs.getFullName());


console.log(Directions.Up); // 1
console.log(Directions.Down); // 2
console.log(Directions.Left); // 3
console.log(Directions.Right); // 4

var str = '1';
var str2: number = <number> <any> str // str is now of type number