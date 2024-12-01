(async function () {
    console.log("Getting Data 1....");
    await getData(1);

    console.log("Getting Data 2....");
    await getData(2);
    
    console.log("Getting Data 3....");
    await getData(3);

    console.log("Getting Data 4....");
    await getData(4);
    
    console.log("Getting Data 5....");
    await getData(5);
    
    console.log("Getting Data 6....");
    await getData(6);
})();



function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            console.log("data", dataId);
            resolve("success");
            
        },2000);
    });
}