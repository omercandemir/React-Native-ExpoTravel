import React from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/style';

export default function Input({placeholder, onChangeText}){
    return (
        <>
        <View style={styles.inputContainer}>
            <FontAwesome5  name="search" size={20} style={{position: "absolute", left: 15, top: 15, color: "#aaa"}}></FontAwesome5>
            <TextInput placeholderTextColor="#aaa" placeholder={placeholder} style={styles.input}></TextInput>
        </View>
        </>
    );
}