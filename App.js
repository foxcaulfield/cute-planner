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
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { AddTaskComponent } from "./app/screens/addTask/AddTaskComponent";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  //datetime picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  //welcomescreen
  const [welcomeScreen, setWelcomeScreenDisplay] = useState(true);
  const handleWelcomeScreenDisplay = function () {
    setWelcomeScreenDisplay(false);
  };
  setTimeout(handleWelcomeScreenDisplay, 3000);
  return (
    <>
      {welcomeScreen ? (
        <WelcomeScreen />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.logoImage}
              source={require("./app/assets/logo.png")}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.tasksDisplay}>
              <View style={styles.buttonsPanel}>
                <View style={styles.buttonWrapper}>
                  <Button
                    style={styles.button}
                    title="Today"
                    onPress={() => Alert.alert("Simple Button pressed")}
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <Button
                    style={styles.button}
                    title="Week"
                    onPress={() => Alert.alert("Simple Button pressed")}
                  />
                </View>
                <View style={styles.buttonWrapper}>
                  <Button
                    style={styles.button}
                    title="Month"
                    onPress={() => Alert.alert("Simple Button pressed")}
                  />
                </View>
              </View>
              <View>
                <Button title="Choose date" onPress={showDatePicker} />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // height: 100,
                  margin: 20,
                  // padding: 50,
                  // backgroundColor: "blue",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#475c6c",
                    width: 75,
                    height: 75,
                    borderRadius: 10,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Task</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#8a8583",
                    width: 75,
                    height: 75,
                    borderRadius: 10,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Task</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#eed7a1",
                    width: 75,
                    height: 75,
                    borderRadius: 10,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Task</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#f7efd2",
                    width: 75,
                    height: 75,
                    borderRadius: 10,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Task</Text>
                </View>
              </View>
              {/* <View
                style={{
                  flexDirection: "row",
                  // height: 100,
                  margin: 20,
                  // padding: 40,
                  // justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  // backgroundColor: "blue",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#cd8b62",
                    width: 75,
                    height: 75,
                    borderRadius: 10,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "baseline",
                  }}
                >
                  <Text>Task</Text>
                </View>
              </View> */}
            </View>
            <View style={styles.addTaskComponentWrapper}>
              <AddTaskComponent />
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e9eae8",
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    // justifyContent: "space-between",
  },
  header: {
    // backgroundColor: "#dc953b",
    backgroundColor: "orange",
  },
  body: {
    flex: 1,
    backgroundColor: "yellow",
    width: "100%",
  },
  tasksDisplay: {
    flex: 1,
    backgroundColor: "greenyellow",
  },
  buttonsPanel: {
    // alignSelf: "stretch",
    // width: "100%",
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
  button: {
    alignSelf: "stretch",
  },
  addTaskComponentWrapper: {
    alignSelf: "stretch",
    // alignContent: "space-between",
  },
  logoImage: {},
});
