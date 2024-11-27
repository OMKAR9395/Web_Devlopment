// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },3000);
//     });
// }

function asynncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 1");
            resolve("Success");
        }, 4000);
    });
}

console.log("Fetching data");
let p1 = asynncFunc();
p1.then((res)=>{
    console.log(res);
});