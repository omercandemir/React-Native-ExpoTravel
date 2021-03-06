import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../styles/style';

export default function ImageButton({title, description, onPress}){
    return (
        <>
        <TouchableOpacity onPress={onPress} style={styles.imageButton}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
        </>
    );
}