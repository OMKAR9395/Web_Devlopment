const URL = "https://cat-fact.herokuapp.com/facts";



const getFacts = async () => {
    
    console.log("GettingData....");
    let response = await fetch(URL);
    console.log(response);

}