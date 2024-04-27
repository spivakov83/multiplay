export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNumbersForExerciseResults(number1: number, number2: number) {
  const correctResult = number1 * number2;
  const numbers = [correctResult];
  while (numbers.length < 4) {
    const number = getRandomInt(0, 100);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}
