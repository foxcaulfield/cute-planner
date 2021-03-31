import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { AddTaskComponent } from "./app/screens/addTask/AddTaskComponent";

export default function App() {
  // const [logoDisplay, setLogoDisplay] = useState(false);
  // const handleMainScreenDisplay = function () {
  //   setLogoDisplay(!true);
  // };

  return (
    // <WelcomeScreen />
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={handleMainScreenDisplay}> */}
      {/* {logoDisplay ? ( */}
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("./app/assets/logo.png")}
          // resizeMode="stretch"
        />
      </View>
      {/* // ) : ( */}
      <View>
        {/* <Text>Planner</Text> */}
        <AddTaskComponent />
      </View>
      {/* )} */}
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoImage: {
    resizeMode: "contain",
  },
});
