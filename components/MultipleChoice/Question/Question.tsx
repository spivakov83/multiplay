import {StyleSheet, Text, View} from 'react-native';

export function Question({
  number1,
  number2,
}: {
  number1: number;
  number2: number;
}) {
  return (
    <View style={styles.container}>
      <Text>{`${number1} X ${number2}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});
