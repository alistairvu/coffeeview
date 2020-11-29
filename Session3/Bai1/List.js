import {Student} from './module.js'
class Class {
    studentList;
    constructor() {
        this.studentList = [];
    }
    addStudent(student) {
        if (student instanceof Student) {//kiểm tra có phải là một kiểu của lớp Student
            this.studentList.push(student);
        }
        else {
            alert("Moi Nhap Lai");
        }
    }
    findbyName(n) {
        return this.studentList.filter(
            function(a)
            {
                return (a.name.includes(n));
            }
        );
    }
    findbyAge(age) {
        return this.studentList.filter(student => student.age === age);
    }
    findbyAgeAndPlaceofBirth(age, placeofBirth) {
        return this.studentList.filter(
            function (a) {
                if (a.age === age && a.placeofBirth === placeofBirth) return true;
                else return false;
            })
    }

}
export {Class}