import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function Question({
  number1,
  number2,
  index,
  selectedIndex,
  setSelectedAnswerIndex,
  correctIndexes,
}: any) {
  const [isAnswered, setIsAnswered] = useState(false);
  function onQuestionPress() {
    setSelectedAnswerIndex(index);
  }

  useEffect(() => {
    if (correctIndexes.length === 0) return;
    if (correctIndexes.includes(index)) {
      setIsAnswered(true);
    }
  }, [correctIndexes]);

  return (
    <TouchableOpacity
      disabled={isAnswered}
      style={styles.container}
      onPress={onQuestionPress}>
      <Text
        style={[
          styles.questionNumbers,
          isAnswered ? {textDecorationLine: 'line-through'} : {},
        ]}>{`${number1} \u00D7 ${number2}`}</Text>
      {(index === selectedIndex || isAnswered) && (
        <Text style={styles.checkmarkStyle}>✔️</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // bright yellow background
    justifyContent: 'center', // center the content horizontally
    alignItems: 'center', // center the content vertically
    borderWidth: 1,
    borderColor: '#000000',
    height: '100%',
  },
  questionNumbers: {
    fontSize: 50, // larger font size
    color: '#0000FF', // bright blue text
  },
  checkmarkStyle: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 16,
    color: '#4CAF50', // bright green checkmark
  },
});
