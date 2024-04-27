/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  getNumbersForExerciseResults,
  getRandomInt,
} from './common/util-functions';
import {Answer} from './components/Exercise/Answer';
import {useAnswers} from './hooks/useAnswers';

import {play} from './common/sound-player/sound';

const randomNumber1 = getRandomInt(1, 10);
const randomNumber2 = getRandomInt(1, 10);

function App(): React.JSX.Element {
  const [number1, setNumber1] = useState(randomNumber1);
  const [number2, setNumber2] = useState(randomNumber2);

  const answers = useAnswers(number1, number2);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function isAnswerCorrect() {
    return answers[selectedIndex] === number1 * number2;
  }

  function handleSubmitAnswer() {
    if (selectedIndex > -1) {
      if (isAnswerCorrect()) {
        play();
        renderNewQuestion();
      }
    }
  }
  function renderNewQuestion() {
    setSelectedIndex(-1);
    setNumber1(getRandomInt(1, 10));
    setNumber2(getRandomInt(1, 10));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questionContainer}>
        <Text
          style={
            styles.questionNumbers
          }>{`${number1} \u00D7 ${number2} ?`}</Text>
      </View>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <Answer
            number={answer}
            key={answer}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            selectedIndex === -1 ? styles.disabledButton : null,
          ]}
          onPress={handleSubmitAnswer}
          disabled={selectedIndex === -1}>
          <Text style={styles.submitButtonText}>בדוק</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  submitButton: {
    width: '100%', // fill the width of its container
    height: '100%', // fill the height of its container
    backgroundColor: '#4CAF50', // orange background
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // round the corners
  },
  disabledButton: {
    backgroundColor: '#D3D3D3', // light gray background
  },
  submitButtonText: {
    color: 'black', // white text
    fontSize: 50,
    fontWeight: 'bold',
  },
  answersContainer: {
    backgroundColor: '#673AB7', // deep orange background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lottieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
  questionContainer: {
    backgroundColor: '#FFC107', // bright yellow background
    padding: 20,
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
  questionNumbers: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#673AB7', // deep purple text
  },
  backgroundStyle: {
    backgroundColor: '#4CAF50', // bright green background
    padding: 20,
    borderRadius: 15,
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
  submitContainer: {
    flex: 1,
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
});

export default App;
