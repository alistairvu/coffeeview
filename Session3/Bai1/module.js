import './cardStudent.js'
class Student {
    className;
    name;
    age;
    placeofBirth;
    constructor(className, name, age, placeofBirth) {
        this.className= className;
        this.age = age;
        this.name = name;
        this.placeofBirth = placeofBirth;
    }
    showInfo() {
        console.log(this.name);

        return (
            `<card-container classN= "${this.className}" name= "${this.name}" age=${this.age} address= "${this.placeofBirth}"> </card-container>`
    
            // Đưa ra thẻ card có chứa thông tin sinh viên luôn
        );

    }
}
export { Student }
