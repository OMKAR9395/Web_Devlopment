const ServerData =[
    {name:"omkar",age:24,address:"masur"},
    {name:"suhani",age:21,address:"palus"},
    {name:"prachi",age:20,address:"karad"}
];

function AddData(AddUserData){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){

            ServerData.push(AddUserData);
            let error = false;
            if(!error){
                resolve();
                console.log("Data Added Successfully !!!");
            }
            else{
                reject("Data Not Added");
            }
            
        },3000)
    })
    
}
function getData(){
    setTimeout(function(){
        ServerData.forEach(function(element){
            let str=element.name;
            console.log(str);
        })
    },3000)
}
let NewEnterData = {name:"altaf",age:25,address:"chikhali"};
AddData(NewEnterData);
getData();