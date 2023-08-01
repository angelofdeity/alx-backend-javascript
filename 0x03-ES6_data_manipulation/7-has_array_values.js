export default function hasValuesFromArray(aSet, anArr) {
  return anArr.every((item) => aSet.has(item));
}
