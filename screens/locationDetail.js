import React, { Component } from 'react';
import { Animated, ImageBackground, View, Dimensions, Text, ScrollView} from 'react-native';
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
            useNativeDriver: false
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
                        <Card
                         title="British Museum"
                         location="Londra" 
                         description="The British Museum is a public institution dedicated to human history."
                         image={require("../assets/images/museum.jpeg")} 
                        />
                        <Card
                         title="British Museum"
                         location="Londra" 
                         description="The British Museum is a public institution dedicated to human history."
                         image={require("../assets/images/museum.jpeg")} 
                        />
                        <Card
                         title="British Museum"
                         location="Londra" 
                         description="The British Museum is a public institution dedicated to human history."
                         image={require("../assets/images/museum.jpeg")} 
                        />
                        <Card
                         title="British Museum"
                         location="Londra" 
                         description="The British Museum is a public institution dedicated to human history."
                         image={require("../assets/images/museum.jpeg")} 
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}