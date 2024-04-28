import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function Answer({
  number,
  index,
  selectedIndex,
  setSelectedAnswerIndex,
  correctIndexes,
}: any) {
  const [isAnswered, setIsAnswered] = useState(false);
  function handleAnswerPress() {
    setSelectedAnswerIndex(index);
  }
  useEffect(() => {
    if (correctIndexes.includes(index)) {
      setIsAnswered(true);
    }
  }, [correctIndexes]);
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isAnswered}
      onPress={handleAnswerPress}>
      <Text
        style={[
          styles.answerText,
          isAnswered ? {textDecorationLine: 'line-through'} : {},
        ]}>
        {number}
      </Text>
      {(index === selectedIndex || isAnswered) && (
        <Text style={styles.checkmarkStyle}>✔️</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f097ea', // keep the background color consistent with Question.tsx
    justifyContent: 'center', // center the content vertically
    alignItems: 'center', // center the content horizontally
    borderWidth: 1,
    borderColor: '#000000',
    height: '100%',
  },
  answerText: {
    fontSize: 60, // keep the font size consistent with Question.tsx
    color: 'black', // change the text color to a bright green
  },
  checkmarkStyle: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 16,
    color: '#f542e9',
  },
});
