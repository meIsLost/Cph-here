//javascript class

export class Person{
    constructor(firstname, hobby){
        this.firstname = firstname;
        this.hobby = hobby;
    }

    greet(){
        console.log('hello i am ' + this.firstname +' and my hobby is'+ this.hobby );
    }
}