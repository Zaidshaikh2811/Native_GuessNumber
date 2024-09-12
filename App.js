import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameSCreen from './screens/StartGameSCreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameSCreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
    // backgroundColor: 'yellow',

  },
});
