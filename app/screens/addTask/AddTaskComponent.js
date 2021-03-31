import React, { useState } from "react";
import {
  TextInput,
  Switch,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";

export function AddTaskComponent() {
  //switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //Inputs
  const [text, onChangeText] = React.useState("New task");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <View style={styles.switchContainer}>
        <Text>Important</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="date placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        multiline
        numberOfLines={4}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

export default AddTaskComponent;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  switch: {
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
