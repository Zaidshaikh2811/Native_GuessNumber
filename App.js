import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameSCreen from './screens/StartGameSCreen';
import { useState } from 'react';
import GameScreen from './screens/gameSCreen';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)

  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameSCreen onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground source={require("./assets/istockphoto-1257779927-612x612.jpg")} style={styles.rootScreen} resizeMode='cover' imageStyle={{ opacity: 0.10 }}>
        <SafeAreaView >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  rootScreen: {
    flex: 1
  }
});
