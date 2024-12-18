let marks = [85,95,64,77,86,96];

let sum = 0;
for(let  val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of class = ${avg}`);