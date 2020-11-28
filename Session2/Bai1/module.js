class Student {
    name;
    age;
    placeofBirth;
    constructor(name, age, placeofBirth) {
        this.age = age;
        this.name = name;
        this.placeofBirth = placeofBirth;
    }
    showInfo() {
        console.log(`
        ---------------------------------------------
        Name: ${this.name}
        Age: ${this.age}
        Place of birth: ${this.placeofBirth}
        ---------------------------------------------
        `)
    }
}
export {Student}
