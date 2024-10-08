import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import { useState } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameSCreen({ onPickNumber }) {
    const [number, setNumber] = useState('')

    const resetHandler = () => {
        setNumber('')
    }

    const ResetChange = () => {


        const chosenNumber = parseInt(number);


        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number!!", "Please Check The Input Number", [{ text: "Okay", style: "destructive", onPress: resetHandler }]);
            return;

        }

        onPickNumber(chosenNumber);
    }



    return <View style={{ marginVertical: 50, marginHorizontal: 20 }}>
        <Title style={{}}>Guess My Number</Title>
        <Card>
            <InstructionText >Enter Your Number</InstructionText>
            <TextInput value={number} style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" onChangeText={setNumber}
                autoCorrect={false} placeholder="15"></TextInput>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <PrimaryButton onPress={resetHandler} >Reset</PrimaryButton>
                <PrimaryButton onPress={ResetChange}>Confirm</PrimaryButton>
            </View>

        </Card>
    </View >

}

export default StartGameSCreen;


const styles = StyleSheet.create({

    numberInput: {
        padding: 10,
        height: 50,
        width: 80,
        marginHorizontal: "auto",
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',

    },
})