import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import {
  Alert,
  BackHandler,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Root, Toast } from "native-base";

import { Constants } from "expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Picker } from "@react-native-picker/picker";
import { useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const STORAGE_KEY = "@save_task";

function AddScreen({ navigation }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const task = await AsyncStorage.getItem(STORAGE_KEY);

      if (task !== null) {
        setTask(task);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  // save data

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, task);
      setTask(task);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  const onChangeText = (task) => setTask(task);

  const onSubmitEditing = () => {
    if (!task) return;
    saveData(task);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.panel}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder="ENTER task HERE"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
}

function ListScreen({ navigation }) {
  const isFocused = useIsFocused();

  useEffect(() => {
    readData();
    //Update the state you want to be updated
  }, [isFocused]);
  const [task, setTask] = useState("");

  useEffect(() => {
    readData();
  }, []);

  // read data
  const readData = async () => {
    try {
      const task = await AsyncStorage.getItem(STORAGE_KEY);

      if (task !== null) {
        setTask(task);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  // save data

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, task);
      setTask(task);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared!");
    } catch (e) {
      alert("Failed to clear the async storage.");
    }
  };

  const onChangeText = (task) => setTask(task);

  const onSubmitEditing = () => {
    if (!task) return;
    saveData(task);
    setTask("");
  };
  return (
    <Root>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.panel}>
          <Text style={styles.text}>task is {task}</Text>
          <TouchableOpacity
            onPress={clearStorage}
            style={styles.button}
          ></TouchableOpacity>
        </View>
      </View>

      <View style={styles.listScreenContainer}>
        <CustomButton
          text="Add task"
          width="94%"
          onPress={() => {
            navigation.navigate("AddScreen");
          }}
        />
      </View>
    </Root>
  );
}

const Stack = createStackNavigator();

function TaskScreen(props) {
  return (
    <Stack.Navigator initialRouteName="ListScreen" backBehavior="initialRoute">
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  );
}

export default TaskScreen;

const styles = StyleSheet.create({
  //   listScreenContainer: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     /* Branch on platform type for different styling. */
  //     // ...Platform.select({
  //     //   ios: {
  //     //     paddingTop: Constants.statusBarHeight,
  //     //   },
  //     //   android: {},
  //     // }),
  //   },
  //   restaurantList: {
  //     width: "94%",
  //   },
  //   restaurantContainer: {
  //     flexDirection: "row",
  //     marginTop: 4,
  //     marginBottom: 4,
  //     borderColor: "#e0e0e0",
  //     borderBottomWidth: 2,
  //     alignItems: "center",
  //   },
  //   restaurantName: {
  //     flex: 1,
  //   },
  //   addScreenContainer: {
  //     // marginTop: Constants.statusBarHeight,
  //   },
  //   addScreenInnerContainer: {
  //     flex: 1,
  //     alignItems: "center",
  //     paddingTop: 20,
  //     width: "100%",
  //   },
  //   addScreenFormContainer: {
  //     width: "96%",
  //   },
  //   fieldLabel: {
  //     marginLeft: 10,
  //   },
  //   addScreenButtonsContainer: {
  //     flexDirection: "row",
  //     justifyContent: "center",
  //   },
});
