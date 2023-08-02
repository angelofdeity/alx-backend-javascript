export default function cleanSet(mySet, myStr) {
  if (myStr instanceof String) {
    return [...mySet]
      .filter((elem) => elem && myStr && elem.startsWith(myStr))
      .map((elem) => (elem ? elem.slice(myStr.length) : ''))
      .join('-');
  }
  return '';
}
