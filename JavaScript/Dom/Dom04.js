let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);


// div.before(newBtn);
// div.prepend(newBtn);
// div.append(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I  am New!</i>";

document.querySelector("body").prepend(newHeading);
let para = document.querySelector("p");
para.remove();


