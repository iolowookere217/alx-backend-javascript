export default function getListStudentIds (arr) {
  let newArr = [];

  if (Array.isArray(arr)) {
    newArr = arr.filter(item => typeof item === 'object' && 'id' in item).map(item => item.id);
  }

  return newArr;
}
