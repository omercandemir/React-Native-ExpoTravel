import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    header: {
        flexDirection: "row"
    },
    headerText: {
        fontSize: 45,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "flex-end"
    },
    p20: {
        paddingTop: 20
    },
    inputContainer: {
        backgroundColor: "#fff",
        width: width / 1.1,
        padding: 8,
        marginTop: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 1.3
    },
    textCenter: {
        alignItems: 'center'
    },
    input: {
        color: "#000",
        marginLeft: 40,
        padding: 10
    }
});