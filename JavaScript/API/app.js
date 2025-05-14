const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#para");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    
    console.log("GettingData....");
    let response = await fetch(URL);

    console.log(response);
    let data = await response.json();

    factPara.innerText = data[0].text;
};
btn.addEventListener("click",getFacts);


/*
AJAX is Asynchronous JS and XML
JSON is JavaScript Object Notation
JSON() method : return a second promise that resolve with the result of parsing the response body text as JSON 
(Input is JSON, Outpput Is JS Object)

*/