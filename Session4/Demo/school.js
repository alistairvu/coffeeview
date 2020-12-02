import {Student} from "./student"
export class School {
    StudentList;
    constructor()
    {
        this.StudentList= []
    }
    async addStudentList(student)
    {
        if (student instanceof Student) {//kiểm tra có phải là một kiểu của lớp Student
            this.StudentList.push(student);
        }
        else {
            alert("sai");
        }
    }
}