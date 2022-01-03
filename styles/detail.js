import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    textView: {
        position: "absolute",
        left: width / 10,
        bottom: height / 20
    },
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
    },
    description: {
        color: "white",
        fontSize: 20,
        marginVertical: 10
    },
    cardView: {
        height: height,
        width: width
    }
    
});