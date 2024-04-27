import {useMemo} from 'react';
import {getNumbersForExerciseResults} from '../common/util-functions';

export function useAnswers(number1: any, number2: any) {
  const answers = useMemo(
    () => getNumbersForExerciseResults(number1, number2),
    [number1, number2],
  );

  return answers;
}
