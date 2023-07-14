interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    [key: string]: any,
}
interface Directors extends Teacher {
    numberOfReports: number
}
function printTeacher(firstName: string , lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`
}
// test
// console.log(printTeacher('Jon', 'Cage'))
// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };
// console.log(teacher3);

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);
// Interface StudentClass {
//     firstName: string,
//     lastName: string
// }
interface StudentInterface {
  firstName: string;
  lastName: string;
}
class StudentClass implements StudentInterface{
    constructor(public firstName: string, public lastName: string){}
    workOnHomework() {
        return 'Currently working'
    }
    displayName() {
        return this.firstName
    }
}
// test
// const student = new StudentClass('John', 'Doe');
// console.log(student.displayName());
// console.log(student.workOnHomework());
