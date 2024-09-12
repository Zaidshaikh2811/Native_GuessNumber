import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameSCreen() {

    return <View style={styles.container}>

        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none"
            autoCorrect={false} placeholder="15"></TextInput>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>

            <PrimaryButton >Submit</PrimaryButton>
            <PrimaryButton >Confirm</PrimaryButton>
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',

    },
})