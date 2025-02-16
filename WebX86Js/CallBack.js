//      01

/*

function Result(Fun,Arr){
    for (let i =0;i<Arr.length;i++)
    {
        let NewArr = new Array(Arr.length);
        NewArr[i] = Fun(Arr[i]);
    }
    return NewArr;
}
const Fun = function(x){
    return x*x*x;
}
let Values = [10,20,30,40,50];
let Ret = Result(Fun,Values);
console.log(Ret);

*/

//  1.
// function Display(x){
//     console.log(x);
// }
// function Sum(a,b){
//     let sum =  a+b;
//     return sum;
// }
// let Ret = Sum(10,20);
// Display(Ret);

//  2.

// function Display(x){
//     console.log(x);
// }
// function Sum(a,b){
//     let sum =  a+b;
//     Display(sum);
// }
// Sum(10,20);

//  3.

function Display(x){
    console.log(x);
}
function Sum(a,b,CallBack){
    let sum =  a+b;
    CallBack(sum);
}
Sum(10,20,Display);