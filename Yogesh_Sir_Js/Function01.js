// const Myfunction = function(){
//     console.log("Hello This Is Annonimous Funnction");
// }
// Myfunction();

/*

let x = [10,20,30,40,50];
const Myfunction = function(Arr){
    var Sum = 0;
    for(let i = 0;i<Arr.length;i++){
        Sum +=Arr[i];
    }
    return Sum;
};

let  Result = Myfunction(x);
console.log(Result);

*/

//      Function With In Function 

/*

function Cube(x){
    return x*x*x;
}
const Result = function(Cube,Value){
    let NewArr = new Array(Value.length);
    for(let i = 0 ; i < Value.length;i++){
        NewArr[i] = Cube(Value[i]);
    }
    return NewArr;
}
let Value = [10,20,30,40,50];
let Ret = Result(Cube,Value);
console.log(Ret);

*/

