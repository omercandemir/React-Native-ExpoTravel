import React, { Component } from 'react';
import { Animated, ImageBackground, View, Dimensions, Text, ScrollView} from 'react-native';
import { Easing } from 'react-native-reanimated';
import { styles } from '../styles/detail';
import Card from "../components/Card";

const { width, height } = Dimensions.get("screen");


export default class LocationDetail extends Component {
    state = {
        alignment : new Animated.Value(height)
    }

    AnimatedBackground = () => {
        Animated.timing(this.state.alignment, {
            toValue: height / 3,
            duration: 800,
            easing: Easing.back()
        }).start();
    }

    componentDidMount() {
        this.AnimatedBackground();
    }

    render() {
        const AnimatedBackground = {
            height: this.state.alignment
        }
        return (
            <View>
                <Animated.View style={ [{width: width}, AnimatedBackground] }>
                    <ImageBackground 
                        source={require("../assets/images/amsterdam.jpeg")}
                        style={styles.backgroundImage}>
                            <View style={styles.textView}>
                                <Text style={styles.title}>Londra</Text>
                                <Text style={styles.description}>Very beatiful place</Text>
                            </View>
                    </ImageBackground>
                </Animated.View>
                <View style={styles.cardView}>
                    <ScrollView>
                        <Card title="British Museum" />
                    </ScrollView>
                </View>
            </View>
        );
    }
}