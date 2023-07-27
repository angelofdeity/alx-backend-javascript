import { getListStudents } from "./0-get_list_students";

export default function getListStudentIds(students) {
  return students.map(student => student.id)
}
getListStudentIds('hello')
console.log(getListStudentIds(getListStudents()));
