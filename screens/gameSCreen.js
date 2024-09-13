import { Text, View, StyleSheet, Alert, FlatList } from "react-native"
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    }
    else {
        return rndNum
    }
}


function GameScreen({ userNumber, gameOverHandler }) {

    const initialGuess = generateRandomNumber(1, 100, userNumber)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const [guessRoundsState, setGuessRoundsState] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess == userNumber) {
            gameOverHandler(guessRoundsState.length)
        }
    }, [currentGuess, gameOverHandler, userNumber])


    let minBoundary = 1;
    let maxBoundary = 100;

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if (direction == 'lower' && currentGuess < userNumber || direction == 'greater' && currentGuess > userNumber) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }
        if (direction == "lower") {
            maxBoundary = currentGuess - 1;
        }
        else {
            minBoundary = currentGuess + 1;

        }
        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)
        setGuessRoundsState(prevGuessRounds => [...prevGuessRounds, newRndNumber])
    }

    const guessRoundsListLength = guessRoundsState.length

    return (
        <View style={styles.screen}>

            <Title >Opponents Choice</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher Or Lower?</InstructionText>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>

                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower',)}>
                        <Ionicons name="remove" size={20} color="white" />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater',)}>
                        <Ionicons name="add" size={20} color="white" />

                    </PrimaryButton>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList keyExtractor={(item) => item} data={guessRoundsState} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} > {itemData.item}</GuessLogItem>}>             </FlatList>
            </View >
        </View >
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {

        padding: 30,
    },
    instructionText: {
        marginBottom: 20
    },
    listContainer: {

        width: '100%',
        paddingTop: 20,
        marginTop: 20,
    }
})