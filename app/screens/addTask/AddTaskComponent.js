import React, { useState } from "react";
import {
  TextInput,
  Switch,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from "react-native";

export function AddTaskComponent() {
  //switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Inputs
  const [text, onChangeText] = React.useState("New task");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.addTaskComponent}>
      <View style={styles.switchContainer}>
        <View style={styles.switchTextWrappew}>
          <Text>Important</Text>
        </View>
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
      <View style={styles.textIputContainer}>
        <View style={styles.inputsWrapper}>
          <View style={styles.dateTextInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter date MM.DD.YYYY"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.taskTextInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              value={text}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
        <View style={styles.addButtonWrapper}>
          <Button
            containerViewStyle={{ width: "100%", marginLeft: 0 }}
            style={styles.addButton}
            title="Add"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>
    </View>
  );
}

export default AddTaskComponent;

const styles = StyleSheet.create({
  addTaskComponent: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "dodgerblue",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "gray",
    // backgroundColor: "green",
  },
  switch: {
    // transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
  },
  switchTextWrappew: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 7,
  },
  textIputContainer: {
    flex: 1,
    backgroundColor: "#e9eae8",
    // backgroundColor: "purple",
    justifyContent: "center",
    padding: 15,
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 3,
    paddingHorizontal: 7,
  },
  dateTextInput: {
    marginBottom: 13,
  },
  taskTextInput: {
    marginBottom: 13,
  },
  addButtonWrapper: {
    flexDirection: "column",
    alignItems: "stretch",
    flex: 1,
  },
  addButton: {
    flex: 1,
  },
});
