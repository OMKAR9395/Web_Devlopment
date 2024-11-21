// class Parent{
//     hello(){
//         console.log("hello Patil");
//     }
// }
// class child extends parent{};
// let obj = new child{};

class Person {
    constructor() {
        this.species = "Homo sapiens";
    }
    eat(){
        console.log("Eating Something");
    }
    sleep(){
        console.log("Sleep");
    }
    

}
class Engineer extends Person {
    constructor (branch){
        super();
        this.branch = branch;
    }
    work(){
        console.log("Solve Problem, Build Something");
    }
}

let OmkarObj = new Engineer("Chemical Eng");

