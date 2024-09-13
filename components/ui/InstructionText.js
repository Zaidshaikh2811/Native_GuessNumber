import { Text } from "react-native";
import Colors from "../../constants/colors";


export default function InstructionText({ style, children }) {
    return <Text style={[{ fontFamily: 'open-sans', fontSize: 24, color: Colors.accent500, textAlign: "center", fontWeight: "bold" }, style]}> {children}</Text >
}