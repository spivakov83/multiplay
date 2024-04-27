import {memo, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function Answer({number, index, selectedIndex, setSelectedIndex}: any) {
  function handlePress() {
    setSelectedIndex(index);
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.answerButton}>
      <Text style={styles.numberStyle}>{number}</Text>
      {index === selectedIndex && <Text style={styles.checkmarkStyle}>✔️</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  answerButton: {
    width: '45%',
    height: 200,
    padding: 10,
    margin: '2.5%',
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkmarkStyle: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 24,
    color: '#4CAF50', // bright green checkmark
  },
  numberStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#008000',
  },
});
