let Data = "secret information";

class User{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = ",Data);
    }
}
let Stud1 = new User("omkar", "abc@email.com");
let  Stud2 = new User("patil", "omkar@gmail.com");