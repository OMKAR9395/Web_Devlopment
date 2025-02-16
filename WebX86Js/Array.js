/*
        String


var arr = [10,20,30,40,50,60];
const y = arr.toString();
console.log(y);
 
const s = arr.join(" ");
console.log(s);
const p = arr.join("+");
console.log(p);

var StudName = ["Omkar","Demo","Fork","Web"];
StudName.sort();
console.log(StudName.sort());

*/

//      Array Element Crud App

/*
var arr = [10,20,30,40,50];
arr.push(60);   //Insert Last Element
console.log(arr);
arr.pop();  //Delet Last Element
console.log(arr);
arr.shift();    //Remove First Element
console.log(arr);
arr.unshift(10);
console.log(arr);   //Add Element First

let Name = ["omkar","fork","patil"];
Name.reverse();     //Reverse Order
console.log(Name);
console.log(Array.isArray(Name));   //True Or False Array Or Not


        Array 

let Arr = ["Omkar","Patil","Web"];
let ptr = ["Fork","Infosystem","Development"];

const x = Arr.concat(ptr);
console.log(x);
*/

//          Slice

//          Not Modify Original Array
//          ArrName.slice(begin,end);
//          ArrName.slice(1,3)  Not Consider a Last Element
//          Start With Indexing


//          Splice Method

// var value = ["Fork","Infosystem","Development","Omkar","Patil","Web"];
// let x = value.slice(1,4);
// console.log(x);
// var StudName = ["Web","Omkar","patil","Fork","Development","World"];
// StudName.splice(1,2,"Patila","Love");
// console.log(StudName);

//  Double Coat Use

// let x = " \' Web Development \'";
// console.log(x);


//      indexof Method

/*

var strName = "Web Development";
console.log(strName);
console.log(strName.indexOf("e"));

for(let i=0;i<=strName.length-1;i++)
{
    console.log(strName[i]);
}

*/


//      Upper Case Method Lower Case Method


var strName = "Web Development";
console.log(strName.toLowerCase());
console.log(strName.toUpperCase());