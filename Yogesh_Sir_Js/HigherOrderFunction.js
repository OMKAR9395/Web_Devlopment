/*

1.  map()       return new array;
2.  reduce()    return single value
3.  filter()
4.  forEach()   return undefined

*/
//      map()

/*

let arr = [10,20,30,40];

const newarr = arr.map((value,index,arr)=>{
    return value * value;
})
console.log(newarr);
console.log(arr);

*/

//  reduce()

/*

let x = [10,20,30,40];
const newRedArr = x.reduce((acc,value,index,arr)=>{
    console.log(acc);
    console.log(value);
    console.log(index);
    console.log(arr);
});

*/

//  filter

let x = [10,20,30,40,50,60];
const newarr = x.filter((value,index,arr)=>{
    return value > 25;
});
console.log(newarr);