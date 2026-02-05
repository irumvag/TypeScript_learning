var num:number=23;
var unk:unknown=<unknown> num;
var str:string=<string> unk

var test=23;
test=55;
console.log(num,unk,str,test)

let intersection:null|number;
intersection =34;
let test1:null&number;
console.log(intersection, typeof(test))