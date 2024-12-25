// function Display(){
//     console.log("JavaScript Function");
// }
// Display();
// function Sum(){
//     let x = 30;
//     let y = 40;
//     let z = x+y;
//     console.log(z);
// }
// Sum();

// function Sub(x,y){
//     return x - y;
    
// }
// console.log(Sub(80,50));

function DisplaySum(Num){
    let Sum = 0;
    for (let i=0;i<=Num.length-1;i++){
        Sum+=Num[i];
    }
    return Sum;
}
let Num = [10,20,30,40,50,60,70,80,90,100];
let x = DisplaySum(Num);
console.log(x);