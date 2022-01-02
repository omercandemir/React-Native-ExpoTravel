import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Input from '../components/Input';
import { styles } from "../styles/style";

export default class MainScreen extends Component() {
    render() {
        return (
            <View>
              <SafeAreaView style={styles.header}>
                <View style={{ flex: 0.6, paddingTop: 20 }}>
                  <Text style={styles.headerText}>Find Your Next Trip!</Text>
                </View>
                <View style={{ flex: 0.35, alignItems: 'flex-end', paddingTop: 20 }}>
                  <Image source={require("./assets/images/default.jpg")} style={styles.headerImage}></Image>
                </View>
              </SafeAreaView>
              <View style={styles.textCenter}>
                <Input placeholder="search"/>
              </View>
              <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                  <Image style={styles.image} />
                </View>
                <View style={styles.imageView}>
                  <Image style={styles.image} />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                  <Image style={styles.image} />
                </View>
                <View style={styles.imageView}>
                  <Image style={styles.image} />
                </View>
              </View>
            </View>
          );
    }
}