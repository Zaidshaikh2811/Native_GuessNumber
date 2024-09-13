
import { Text, StyleSheet, View } from "react-native";



function Title({ children }) {
    return <View>
        <Text style={styles.title}>
            {children}
        </Text>
    </View>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,



    }
})

