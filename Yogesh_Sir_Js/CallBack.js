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