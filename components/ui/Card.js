import { View, StyleSheet } from "react-native";


function Card({ children }) {

    return <View style={styles.container}>
        {children}
    </View>
}

export default Card;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: "#4e0329",

        borderRadius: 8,
        padding: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})