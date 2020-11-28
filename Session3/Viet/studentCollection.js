import { Student } from './student.js'
export class StudentCollection {
  listStudent;
  constructor() {
    this.listStudent = []
  }
  addStudent(student) {
    if (student instanceof Student) {
      this.listStudent.push(student)
    } else {
      alert('Nhập linh tinh')
    }
  }
  getStudentByAge(age) {
    return this.listStudent.filter((item) => {
      return item.age === age
    })
  }
  getStudentByAgeAndAddress(age, address) {
    return this.listStudent.filter(item => item.age === age && item.address === address)
  }
  getStudentByName(name) {
    return this.listStudent.filter(item => item.fullName.includes(name))
  }
}
// export default CardStudent // không có mà export 