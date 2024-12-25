const ServerData =[
    {name:"omkar",age:24,address:"masur"},
    {name:"suhani",age:21,address:"palus"},
    {name:"prachi",age:20,address:"karad"}
];

function AddData(AddUserData){
    setTimeout(function(){
        ServerData.push(AddUserData);
        console.log("Data Added Successfullt !!!");
    },3000)
}
function getData(){
    setTimeout(function(){
        ServerData.forEach(function(x){
            let str=x.name;
            console.log(str);
        })
    },3000)
}
let NewEnterData = {name:"altaf",age:25,address:"chikhali"};
AddData(NewEnterData);
getData();