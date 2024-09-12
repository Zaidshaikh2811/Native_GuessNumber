import { Text, View, StyleSheet } from "react-native"
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";



function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    }
    else {
        return rndNum
    }
}


function GameScreen({ userNumber }) {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber))

    return (
        <View style={styles.screen}>

            <Title >Opponents Choice</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher Or Lower?</Text>

            </View>
            <View></View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 30
    },

})