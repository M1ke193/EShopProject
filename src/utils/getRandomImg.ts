export const getRandomImg = (
  array: string[],
  excludeElement: string,
  numElements: number
): string[] => {
  const filteredArray = array.filter((element) => element !== excludeElement);
  const randomElements: string[] = [];

  while (randomElements.length < numElements && filteredArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    const randomElement = filteredArray[randomIndex];
    randomElements.push(randomElement);
    filteredArray.splice(randomIndex, 1);
  }

  return [excludeElement, ...randomElements];
};
