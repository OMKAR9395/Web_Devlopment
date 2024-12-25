// Display();

// function Display(){
//     console.log("Web Development");
// }

// const x = function(){
//     console.log("This Is Annonymus Function");
// }

// x();

function x(){
    console.log("Inside Function of X()");
    y();
    console.log("End Of Function x()");
}
function y(){
    console.log("Inside Function of y()");
    z();
    console.log("End of Function y()");
}
function z(){
    console.log("Inside Of Function z()");
    console.log("End Of Function z()");
}
x();