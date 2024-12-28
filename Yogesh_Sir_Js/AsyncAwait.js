const ServerData =[
    {name:"omkar",age:24,address:"masur"},
    {name:"suhani",age:21,address:"palus"},
    {name:"prachi",age:20,address:"karad"}
];
function AddData(GetObj){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ServerData.push(GetObj);
            let error = false;
            if(!error){
                console.log("Data Added Successfully");
                resolve();
            }
            else{
                reject("Data Not Added ");  
            }
            
          
        },3000);
    })
    
}
function getData(){
    setTimeout(() => {
        let str = "";
        ServerData.forEach((values)=>{
            str=`Person Name :${values.name} and his age is ${values.age}`;
            console.log(str);
        })
    }, 1000);
}

// AddData(AddObject).then(getData).catch(error=>console.log(error));

async function StartYourFunction (){

    let AddObject = {name:"prachi 01",age:20,address:"karad"}; 

    await AddData(AddObject);
    getData();
}
StartYourFunction();