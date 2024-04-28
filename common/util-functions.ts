import {IQuestion} from './interfaces';

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNumbersForExerciseResults(number1: number, number2: number) {
  const correctResult = number1 * number2;
  const numbers = [correctResult];
  while (numbers.length < 4) {
    const number = getRandomInt(1, 100);
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

export function getQuestionsForMatchCorrectAnswers(
  sizeOfArray: number,
): IQuestion[] {
  const questions: IQuestion[] = [];
  for (let i = 0; i < sizeOfArray; i++) {
    const itemToPush = {
      number1: getRandomInt(2, 10),
      number2: getRandomInt(2, 10),
    };

    // Check if the question already exists in the array
    const isDuplicate = questions.some(
      question =>
        question.number1 === itemToPush.number1 &&
        question.number2 === itemToPush.number2,
    );
    // If it does, decrement the counter to try again
    if (isDuplicate) {
      i--;
      continue;
    } else {
      questions.push(itemToPush);
    }
  }
  return questions;
}

export function getAnswersResultForQuestionsArray(questions: IQuestion[]) {
  const answers: number[] = [];
  questions.forEach(question => {
    answers.push(question.number1 * question.number2);
  });

  // Fisher-Yates (Knuth) Shuffle algorithm
  let currentIndex = answers.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = answers[currentIndex];
    answers[currentIndex] = answers[randomIndex];
    answers[randomIndex] = temporaryValue;
  }

  return answers;
}
