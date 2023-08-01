export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

// Alternative maybe less readable
// export function updateStudGradeByCity(students, city, newGrades) {
//   return students
//     .filter((student) => student.location === city)
//     .map((student) => ({
//       ...student,
//       grade: newGrades.find((newGrade) => newGrade.studentId === student.id)?.grade || 'N/A',
//     }));
// }
