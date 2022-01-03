import React from "react";
import { Text, Animated } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/style";


export default function Card({title, description, location, onPress}) {
    const alignment = new Animated.Value(400);

    return (
        <>
            <TouchableOpacity style={styles.card}>
                <Animated.View>
                    <Text>{title}</Text>
                    <Text>{location}</Text>
                    <Text>{description}</Text>
                </Animated.View>
            </TouchableOpacity>
        </>
    );
}