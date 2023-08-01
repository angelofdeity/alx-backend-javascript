export default function updateUniqueItems(myMap) {
  for (const [key, value] of myMap.entries()) {
    if (value === 1) myMap.set(key, 100);
  }
}
