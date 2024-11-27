// console.log("One");

// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,2000);

// // Same Thing Below Use

// // setTimeout(() => {
// //     console.log("Omkar");
// // },4000);

// console.log("Two");

function sum(a,b){
    console.log(a + b);
}

function calculator(a , b,sumCallback){
    sumCallback(a , b);
}

calculator(1,2,sum);