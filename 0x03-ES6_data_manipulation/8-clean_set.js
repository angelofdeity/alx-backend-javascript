export default function cleanSet(mySet, myStr) {
  return [...mySet]
    .filter((elem) => myStr && elem.startsWith(myStr))
    .map((elem) => elem.slice(myStr.length))
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
