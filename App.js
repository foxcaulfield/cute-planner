import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { Constants } from "expo";

import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

console.log("------------------------------------------------------------");
console.log(`Cute planner starting on ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!!!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function NewTaskScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add task here</Text>
    </View>
  );
}
function DayScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Today and tommorow tasks here</Text>
    </View>
  );
}

function WeekScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Week</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          <Tab.Screen name="Add" component={NewTaskScreen} />
          <Tab.Screen name="Today" component={DayScreen} />
          <Tab.Screen name="Tommorrow" component={DayScreen} />
          <Tab.Screen name="This week" component={WeekScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

// function HomeScreen({ navigation }) {

//   let date = Date();
//   setInterval(
//     () => timeNode.innerHTML = getCurrentTimeString(),
//     1000
//  );
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {/* <Text>Home Screen</Text> */}
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       /> */}
//       <View>
//         <Text>{date}</Text>
//       </View>
//       <Button
//         title="Add task"
//         onPress={() => navigation.navigate("NewTaskScreen")}
//       />
//       <Button
//         title="Day tasks"
//         onPress={() => navigation.navigate("DayScreen")}
//       />
//       <Button
//         title="Week tasks"
//         onPress={() => navigation.navigate("WeekScreen")}
//       />
//     </View>
//   );
// }

// // function DetailsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// //       <Text>Details Screen</Text>
// //       <Button
// //         title="Go to Details... again"
// //         onPress={() => navigation.push("Details")}
// //       />
// //       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //       <Button
// //         title="Go back to first screen in stack"
// //         onPress={() => navigation.popToTop()}
// //       />
// //     </View>
// //   );
// // }

// function NewTaskScreen({ navigation }) {
//   const [selectedDate, setSelectedDate] = useState("123");
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     setSelectedDate(date.toString());
//     hideDatePicker();
//   };
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <View>
//         <Text>{selectedDate}</Text>
//         <Button title="Show Date Picker" onPress={showDatePicker} />
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//         />
//       </View>
//       <Text>New task screen.</Text>

//       {/* <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       /> */}
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate("HomeScreen")}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       {/* <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       /> */}
//     </View>
//   );
// }

// function DayScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Day tasks </Text>
//       {/* <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       /> */}
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate("HomeScreen")}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       {/* <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       /> */}
//     </View>
//   );
// }

// function WeekScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Week tasks</Text>
//       {/* <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       /> */}
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate("HomeScreen")}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       {/* <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       /> */}
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
//         <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
//         <Stack.Screen name="DayScreen" component={DayScreen} />
//         <Stack.Screen name="WeekScreen" component={WeekScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
