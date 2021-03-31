import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
