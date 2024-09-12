import { View, Text, Pressable, StyleSheet } from "react-native"


function PrimaryButton({ children }) {
    const HandlePress = () => {

    }

    return <View style={style.buttonOuterContainer}>
        <Pressable onPress={HandlePress} style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer} android_ripple={{ color: "#640233" }}>
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
        backgroundColor: "#72063c",
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