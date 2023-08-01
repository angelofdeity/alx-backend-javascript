export default function cleanSet(mySet, myStr) {
  // if (!myStr) {
  //   return '';
  // }
  return [...mySet]
    .filter((elem) => elem && myStr && elem.startsWith(myStr))
    .map((elem) => (elem ? elem.slice(myStr.length) : ''))
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
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), undefined));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
