import './cardStudent.js'
export class Student{
    className;
    fullName;
    age;
    address;
    constructor(className, fullName, age, address) {
      this.className = className
      this.fullName = fullName
      this.age = age
      this.address = address
    }
    getInfo() {
      return (
        `<card-container classN= ${this.className} name= ${this.fullName} age=${this.age} address= ${this.address}> </card-container>`
        // Đưa ra thẻ card có chứa thông tin sinh viên luôn
      );
    }
  }
  