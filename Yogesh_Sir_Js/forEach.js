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

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});