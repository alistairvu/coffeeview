class Person{
    name;
    age;
    gender;
    address;
    constructor(name, age, gender, address)
    {
        this.address= address;
        this.name= name;
        this.age= age;
        this.gender= gender;
    }
    speak()
    {
        console.log("Hello, I'm " + this.name);
        console.log("I'm " +  this.age + " yaer old");
        console.log("I am " + this.gender);
        console.log("I come from " + this.address);
    }
}
const Hoang= new Person("Hoang", 20, "Male", "Nghe An");
const Viet= new Person("Viet", 19, "Gay", "Ha Tay");
Viet.speak();
class Animal{
    species;
    color;
    numberofLeg;
    gender;
    constructor(species, color,numberofLeg,gender)
    {
        this.species=species;
        this.color=color;
        this.numberofLeg=numberofLeg;
        this.gender=gender;
    }
    eat()
    {
        console.log(`${this.species} is eating`);
    }
    speak()
    {
        console.log(`${this.species}  is speaking`);
    }
    isDangerous()
    {
        // if(this.numberofLeg > 4 || this.numberofLeg===0) 
        // {
            console.log(this.numberofLeg > 4 || this.numberofLeg===0 ? "Dangerous" : "Safe");
        // }
        // else
        // {
        //     console.log("Safe");
        // }
    }
}
const snake= new Animal("Mamma snake", "Black", 0, "male");
snake.eat();
snake.speak();
snake.isDangerous();

class MyMath{
    static sum(a, b){
        return a+b;
    }
    static devision(a, b) // ko cần khai báo object mới nhưng vẫn có thể sử dụng đc
    {
        return a/b;
    }

}
console.log(MyMath.sum(1, 1010010));

//kế thừa
class Employee extends Person{
    salary;
    constructor(name, age, gender, address, salary)
    {
       super(name, age, gender, address);
       this.salary= salary;
    }
    meme()
    {
        console.log("Make Ameriaca great again");
    }
    speak()
    {
        console.log("Make Ameriaca great again");
    
    }
    showUp()
    {
        console.log(`My salary is ${this.salary}`);
    }
}
const myEmployee= new Employee("Binden", "77", "Ohio", "Male", 10000000);
console.log(myEmployee);
myEmployee.speak();
myEmployee.showUp();