import { TextInput, View, StyleSheet, Alert } from "react-native";

import { useState } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function StartGameSCreen({ onPickNumber }) {
    const [number, setNumber] = useState('')

    const resetHandler = () => {
        setNumber('')
    }

    const ResetChange = () => {
        console.log(number);

        const chosenNumber = parseInt(number);


        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number!!", "Please Check The Input Number", [{ text: "Okay", style: "destructive", onPress: resetHandler }]);
            return;

        }

        onPickNumber(chosenNumber);
    }



    return <View style={styles.container}>

        <TextInput value={number} style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" onChangeText={setNumber}
            autoCorrect={false} placeholder="15"></TextInput>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
            <PrimaryButton onPress={resetHandler} >Reset</PrimaryButton>
            <PrimaryButton onPress={ResetChange}>Confirm</PrimaryButton>
        </View>

    </View>

}

export default StartGameSCreen;


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: "#4e0329",
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
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