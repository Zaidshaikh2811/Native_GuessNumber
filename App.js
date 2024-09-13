import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameSCreen from './screens/StartGameSCreen';
import { useState } from 'react';
import GameScreen from './screens/gameSCreen';
import GameOver from './screens/GameOverScreen';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRoundsState] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumber(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(number) {

    setGuessRoundsState(number)
    setGameIsOver(true)

  }

  function StartNewGame() {
    setGuessRoundsState(0)
    setUserNumber(null)
    setGameIsOver(false)

  }

  let screen = <StartGameSCreen onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOver guessRounds={guessRounds} userNumber={userNumber} onStartGame={StartNewGame} />
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
