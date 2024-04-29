/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {MultipleChoice} from './components/MultipleChoice/MultipleChoice';
import {MatchCorrectAnswer} from './components/MatchCorrectAnswer';

function App(): React.JSX.Element {
  const [questionsCount, setQuestionsCount] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      {questionsCount % 5 !== 0 ? (
        <MultipleChoice setQuestionsCount={setQuestionsCount} />
      ) : (
        <MatchCorrectAnswer setQuestionsCount={setQuestionsCount} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
