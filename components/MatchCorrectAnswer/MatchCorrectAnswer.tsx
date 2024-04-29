import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Question} from './Question';
import {Answer} from './Answer';
import {IMatchSelectionQuestion} from '../../common/interfaces';
import {useEffect, useState} from 'react';
import {
  getAnswersResultForQuestionsArray,
  getQuestionsForMatchCorrectAnswers,
} from '../../common/util-functions';
import {
  playQuestionFeedback,
  successSound,
} from '../../common/sound-player/sound';

const ITEMS_COUNT = 4;

export function MatchCorrectAnswer({setQuestionsCount}: any) {
  const [questions] = useState<IMatchSelectionQuestion[]>(
    getQuestionsForMatchCorrectAnswers(ITEMS_COUNT),
  );
  const [answers] = useState<number[]>(
    getAnswersResultForQuestionsArray(questions),
  );

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] =
    useState<number>(-1);
  useEffect(() => {
    setSelectedAnswerIndex(-1);
  }, [selectedQuestionIndex]);

  const [correctAnswersIndexes, setCorrectAnswersIndexes] = useState<number[]>(
    [],
  );
  const [correctQuestionsIndexes, setCorrectQuestionsIndexes] = useState<
    number[]
  >([]);

  useEffect(() => {
    if (selectedAnswerIndex === -1 || selectedQuestionIndex === -1) return;
    if (
      answers[selectedAnswerIndex] ===
      questions[selectedQuestionIndex].number1 *
        questions[selectedQuestionIndex].number2
    ) {
      successSound();
      setCorrectQuestionsIndexes([
        ...correctQuestionsIndexes,
        selectedQuestionIndex,
      ]);
      setCorrectAnswersIndexes([...correctAnswersIndexes, selectedAnswerIndex]);
    } else {
      playQuestionFeedback(false);
      setSelectedAnswerIndex(-1);
      setSelectedQuestionIndex(-1);
    }
  }, [selectedAnswerIndex, selectedQuestionIndex]);

  function handleGoOnBtnPress() {
    playQuestionFeedback(true);
    setQuestionsCount((prev: any) => prev + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionsContainer}>
        {questions.map((question, index) => (
          <View style={styles.exerciseRow} key={index}>
            <Question
              number1={question.number1}
              number2={question.number2}
              index={index}
              selectedIndex={selectedQuestionIndex}
              setSelectedAnswerIndex={setSelectedQuestionIndex}
              correctIndexes={correctQuestionsIndexes}
            />
            <Answer
              number={answers[index]}
              index={index}
              selectedIndex={selectedAnswerIndex}
              setSelectedAnswerIndex={setSelectedAnswerIndex}
              correctIndexes={correctAnswersIndexes}
            />
          </View>
        ))}
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          onPress={handleGoOnBtnPress}
          style={[
            styles.submitButton,
            correctAnswersIndexes.length < ITEMS_COUNT
              ? styles.disabledButton
              : null,
          ]}>
          <Text
            style={[
              styles.submitButtonText,
              correctAnswersIndexes.length < ITEMS_COUNT
                ? styles.disabledText
                : null,
            ]}>
            המשך
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  questionsContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitContainer: {
    flex: 2,
    backgroundColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  submitButton: {
    width: '100%', // fill the width of its container
    height: '100%', // fill the height of its container
    backgroundColor: '#4CAF50', // orange background
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#BEBEBE', // light gray background
  },

  submitButtonText: {
    color: 'black', // white text
    fontSize: 50,
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#454647', // replace with your desired disabled color
  },
});
