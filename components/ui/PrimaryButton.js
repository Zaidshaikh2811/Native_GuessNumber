import { View, Text, Pressable, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

function PrimaryButton({ onPress, children }) {
    const HandlePress = () => {

    }

    return <View style={style.buttonOuterContainer}>
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer} android_ripple={{ color: "#640233" }}>
            <Text style={style.buttonText}>{children}</Text>
        </Pressable>
    </View>
}

export default PrimaryButton;


const style = StyleSheet.create({
    buttonOuterContainer: {

        borderRadius: 28,
        margin: 4,
        width: 150,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        backgroundColor: Colors.primary600,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75
    }
})