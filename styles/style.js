import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginTop: 10
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
    },
    imageContainer: {
        flexDirection: "row",
        marginTop: 30,
    }, 
    imageView: {
        width: width / 2.4,
        height: height / 3.5,
        marginHorizontal: 10
    },
    
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    imageButton: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom: 0,
        left: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        color: "white",
        marginVertical: 3,
        textAlign: "center"
    },
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    card: {
        marginVertical: 20,
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        width: width / 1.1,
        marginHorizontal: 20,
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.5
    }
});