export default function cleanSet(mySet, myStr) {
  return Array.from(mySet)
    .filter((elem) => myStr && elem.includes(myStr))
    .map((elem) => elem.replace(myStr, ''))
    .join('-');
}
// export default function cleanSet(mySet, myStr) {
//   const newArr = [];
//   mySet.forEach((element) => {
//     if (myStr && element.includes(myStr)) {
//       newArr.push(element.replace(myStr, ''));
//     }
//   });
//   return newArr.join('-');
// }
