import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { styles } from "./styles/style";

export default function App() {
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
    </View>
  );
}