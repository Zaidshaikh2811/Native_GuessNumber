import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOver({ guessRounds, userNumber, onStartGame }) {
    return <View style={style.rootContainer}>
        <Title>Game Over!</Title>
        <View style={style.imageContainer}>

            <Image style={style.image} source={require("../assets/success.png")} />
        </View>
        <View style={{ alignItems: "center" }}>
            <Text style={{ marginBottom: 20, fontSize: 24, textAlign: "center" }}>Your Phone Needed <Text style={{ fontFamily: "open-sans", color: Colors.primary500, fontWeight: "bold" }}>{guessRounds}</Text> Rounds to Guess Number <Text style={{ fontFamily: "open-sans", color: Colors.primary500, fontWeight: "bold" }}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    </View>
}

export default GameOver;

const style = StyleSheet.create({
    rootContainer: {

        padding: 24,
        alignContent: "center",
        justifyContent: "center"

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'skyblue',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})