//      for each for array use only
// array.forEach(function(current value,index,value),this);
//  return value => undefined

// x =  [[10,20,30,40,50],12,13,14,15];
// x.forEach(function(value,index,arr){
//     console.log(value);
//     value.forEach((element,index,arr)=>{
//         console.log(element,index,arr);
//     })
// })

/*

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

*/

/*

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

*/

/*

const numbers = [1, 2, 3];
numbers.forEach((number, index, array) => {
  console.log(`Number: ${number}, Index: ${index}, Array: ${array}`);
});

*/
/*

function printElement(element) {
  console.log(element);
}

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(printElement);


*/
/*

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));


*/
/*

const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);

 */

  //    using object.keys 

  /*
  
  const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
// Output:
// a: 1
// b: 2
// c: 3

  */