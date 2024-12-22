/*
    For In Loop 

    const Object = {p:1,q:2,r:3,s:4,t:5};
    const Num =[10,20,30,40,50];
    for(let ObjectData in Num){
        console.log(ObjectData);
    }
    for(let ObjectData in Object){
        console.log(ObjectData);
    }
    console.log(typeof(ObjectData));
*/
/*
    for of loop
*/
const StudName = ["Test01","Test02","Test03","Test04"];
for(let Names of StudName){
    console.log(Names);
}
const Object = {p:1,q:2,r:3,s:4,t:5};
for(let ObjectData of Object){
    console.log(ObjectData);
}
