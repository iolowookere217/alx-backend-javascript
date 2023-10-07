export default function getStudentIdsSum (ListStudents) {
  if (Array.isArray(ListStudents)) {
    return ListStudents.reduce((all, student) => all + student.id, 0);
  }
  return 0;
}
