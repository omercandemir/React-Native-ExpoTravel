import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ImageButton from '../components/ImageButton';
import Input from '../components/Input';
import { styles } from "../styles/style";

export default class MainScreen extends Component {

  // state = {
  //   alignment: new Animated.Value(200)
  // };

  // AnimateHeader = () => {
  //   Animated.timing(this.state.alignment, {
  //     toValue: 20,
  //     duration: 1500
  //   }).start();
  // }

  render() {
    return (
      <ScrollView style={{marginBottom: 15}}>
        <SafeAreaView style={styles.header}>
          <View style={{ flex: 0.6, paddingTop: 20 }}>
            <Text style={styles.headerText}>Find Your Next Trip!</Text>
          </View>
          <View style={{ flex: 0.35, alignItems: 'flex-end', paddingTop: 20 }}>
            <Image source={require("../assets/images/default.jpg")} style={styles.headerImage}></Image>
          </View>
        </SafeAreaView>
        <View style={styles.textCenter}>
          <Input placeholder="Search"/>
        </View>
        <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image source={require("../assets/images/amsterdam.jpeg")} style={styles.image} />
              <ImageButton onPress={() => this.props.navigation.navigate('locationDetail')} title="Amsterdam" description="Beatiful place" />
            </View>
            <View style={styles.imageView}>
              <Image source={require("../assets/images/istanbul.jpeg")} style={styles.image} />
              <ImageButton title="Istanbul" description="Beatiful place" />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image source={require("../assets/images/skyline.jpeg")} style={styles.image} />
              <ImageButton title="Texas" description="Beatiful place" />
            </View>
            <View style={styles.imageView}>
              <Image source={require("../assets/images/londra.jpeg")} style={styles.image} />
              <ImageButton title="Londra" description="Beatiful place" />
            </View>
          </View>
      </ScrollView>
    );
  }
}