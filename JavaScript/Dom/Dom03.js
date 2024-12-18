 let divs = document.querySelectorAll(".Box");
// divs[0].innerText = "New Value 1";
// divs[1].innerText = "New Value 2";
// divs[2].innerText = "New Value 3";
let idx = 1;
for (div of divs) {
    div.innerText = `New Value ${idx}`;
    idx++;
}