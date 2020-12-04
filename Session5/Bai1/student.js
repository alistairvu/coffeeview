import './cardStudent.js'
 class Student{
    name;
    age;
    className;
    address;
    constructor (name, age, className, address)
    {
        this.name= name;
        this.age= age;
        this.className =className;
        this.address= address;
    }
    getInfo()
    {
        return  `<card-container classN= "${this.className}" name= "${this.name}" age=${this.age} address= "${this.address}"> </card-container>`
    }

}
export{Student}