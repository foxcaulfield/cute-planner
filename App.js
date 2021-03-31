import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logoImage} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {},
});
