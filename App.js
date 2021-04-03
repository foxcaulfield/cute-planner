//==============================================================
//==============================================================
//==============================================================
//==============================================================
import React, { useState } from "react";
import {
  // Text,
  // View,
  // Button,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  // TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DayScreen from "./app/screens/DayScreen";
import WeekScreen from "./app/screens/WeekScreen";

console.log("------------------------------------------------------------");
console.log(`Cute planner starting on ${Platform.OS}`);

// const platformOS = Platform.OS.toLowerCase();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Today"
          backBehavior="initialRoute"
          tabBarPosition="top"
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "gray",
            lazy: true,
            showIcon: true,
          }}
        >
          <Tab.Screen
            name="Today"
            component={DayScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="This week"
            component={WeekScreen}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="calendar-multiple"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
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

// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// //==============================================================
// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from "react-native";
// import { DateTime } from "./app/components/DateTime";

// // import { Constants } from "expo";

// // import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { createStackNavigator } from "@react-navigation/stack";

// console.log("------------------------------------------------------------");
// console.log(`Cute planner starting on ${Platform.OS}`);

// const platformOS = Platform.OS.toLowerCase();

// // ==SCREENS==
// // function DetailsScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Details!</Text>
// //     </View>
// //   );
// // }

// function DayScreen({ navigation, route }) {
//   // function DayScreen({ navigation }) {
//   //
//   //
//   // React.useEffect(() => {
//   //   if (route.params?.post) {
//   //     // Post updated, do something with `route.params.post`
//   //     // For example, send the post to the server
//   //   }
//   // }, [route.params?.post]);
//   //
//   //
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <DateTime></DateTime>
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate("CreatePost")}
//       /> */}
//       <Text>Today and tommorow tasks here</Text>
//       {/* <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}
//     </View>
//   );
// }

// //
// //
// // function CreatePostScreen({ navigation, route }) {
// //   const [postText, setPostText] = React.useState("");

// //   return (
// //     <>
// //       <TextInput
// //         multiline
// //         placeholder="What's on your mind?"
// //         style={{ height: 200, padding: 10, backgroundColor: "white" }}
// //         value={postText}
// //         onChangeText={setPostText}
// //       />
// //       <Button
// //         title="Done"
// //         onPress={() => {
// //           // Pass params back to home screen
// //           navigation.navigate("Day", { post: postText });
// //         }}
// //       />
// //     </>
// //   );
// // }
// //
// //
// function WeekScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       /> */}
//       <Text>Week</Text>
//     </View>
//   );
// }
// //==SCREENS==

// //==STACK==
// // const DayStack = createStackNavigator();

// // function DayStackScreen() {
// //   return (
// //     <DayStack.Navigator>
// //       {/* <DayStack.Screen name="Day" component={DayScreen} /> */}
// //       <DayStack.Screen name="Day" component={DayScreen} />
// //       <DayStack.Screen name="Details" component={DetailsScreen} />
// //       <DayStack.Screen name="CreatePost" component={CreatePostScreen} />
// //     </DayStack.Navigator>
// //   );
// // }

// // const WeekStack = createStackNavigator();

// // function WeekStackScreen() {
// //   return (
// //     <WeekStack.Navigator>
// //       <WeekStack.Screen name="Week" component={WeekScreen} />
// //       <WeekStack.Screen name="Details" component={DetailsScreen} />
// //     </WeekStack.Navigator>
// //   );
// // }
// //==STACK==

// //==TAB==
// const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName="Today"
//           backBehavior="initialRoute"
//           tabBarPosition="top"
//           tabBarOptions={{
//             activeTintColor: "black",
//             inactiveTintColor: "gray",
//             lazy: true,
//             showIcon: true,
//           }}
//         >
//           {/* <Tab.Screen name="Today" component={DayScreen} />
//           <Tab.Screen name="Tommorrow" component={DayScreen} />
//           <Tab.Screen name="This week" component={WeekScreen} /> */}
//           <Tab.Screen
//             name="Today"
//             component={DayScreen}
//             options={{
//               tabBarIcon: () => (
//                 <MaterialCommunityIcons
//                   name="calendar"
//                   size={24}
//                   color="black"
//                 />
//               ),
//             }}
//           />
//           {/* <Tab.Screen name="Tommorrow" component={DayStackScreen} /> */}
//           <Tab.Screen
//             name="This week"
//             component={WeekScreen}
//             options={{
//               tabBarIcon: () => (
//                 <MaterialCommunityIcons
//                   name="calendar-multiple"
//                   size={24}
//                   color="black"
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }
// //==TAB==

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

//==============================================================
//==============================================================
//==============================================================
//==============================================================

//==============================================================
//==============================================================
// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from "react-native";
// import { DateTime } from "./app/components/DateTime";

// // import { Constants } from "expo";

// // import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// console.log("------------------------------------------------------------");
// console.log(`Cute planner starting on ${Platform.OS}`);

// const platformOS = Platform.OS.toLowerCase();

// // ==SCREENS==
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function DayScreen({ navigation }) {
//   //
//   //
//   // React.useEffect(() => {
//   //   if (route.params?.post) {
//   //     // Post updated, do something with `route.params.post`
//   //     // For example, send the post to the server
//   //   }
//   // }, [route.params?.post]);
//   //
//   //
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <DateTime></DateTime>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//       <Text>Today and tommorow tasks here</Text>
//     </View>
//   );
// }

// //
// //
// // function CreatePostScreen({ navigation, route }) {
// //   const [postText, setPostText] = React.useState('');

// //   return (
// //     <>
// //       <TextInput
// //         multiline
// //         placeholder="What's on your mind?"
// //         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
// //         value={postText}
// //         onChangeText={setPostText}
// //       />
// //       <Button
// //         title="Done"
// //         onPress={() => {
// //           // Pass params back to home screen
// //           navigation.navigate('Home', { post: postText });
// //         }}
// //       />
// //     </>
// //   );
// // }
// //
// //
// function WeekScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//       <Text>Week</Text>
//     </View>
//   );
// }
// //==SCREENS==

// //==STACK==
// const DayStack = createStackNavigator();

// function DayStackScreen() {
//   return (
//     <DayStack.Navigator>
//       {/* <DayStack.Screen name="Day" component={DayScreen} /> */}
//       <DayStack.Screen name="Day" component={DayScreen} />
//       <DayStack.Screen name="Details" component={DetailsScreen} />
//     </DayStack.Navigator>
//   );
// }

// const WeekStack = createStackNavigator();

// function WeekStackScreen() {
//   return (
//     <WeekStack.Navigator>
//       <WeekStack.Screen name="Week" component={WeekScreen} />
//       <WeekStack.Screen name="Details" component={DetailsScreen} />
//     </WeekStack.Navigator>
//   );
// }
// //==STACK==

// //==TAB==
// const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           {/* <Tab.Screen name="Today" component={DayScreen} />
//           <Tab.Screen name="Tommorrow" component={DayScreen} />
//           <Tab.Screen name="This week" component={WeekScreen} /> */}
//           <Tab.Screen name="Today" component={DayStackScreen} />
//           <Tab.Screen name="Tommorrow" component={DayStackScreen} />
//           <Tab.Screen name="This week" component={WeekStackScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }
// //==TAB==

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

//==============================================================
//==============================================================

//==============================================================
// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from "react-native";

// // import { Constants } from "expo";

// // import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// console.log("------------------------------------------------------------");
// console.log(`Cute planner starting on ${Platform.OS}`);

// const platformOS = Platform.OS.toLowerCase();

// // function HomeScreen({ navigation, route }) {
// //   React.useEffect(() => {
// //     if (route.params?.post) {
// //       // Post updated, do something with `route.params.post`
// //       // For example, send the post to the server
// //     }
// //   }, [route.params?.post]);

// //   return (
// //     // <Stack.Navigator mode="modal">
// //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// //       <Button
// //         title="Create post"
// //         onPress={() => navigation.navigate("CreatePost")}
// //       />
// //       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
// //     </View>
// //     // </Stack.Navigator>
// //   );
// // }

// // function CreatePostScreen({ navigation, route }) {
// //   const [postText, setPostText] = React.useState("");

// //   return (
// //     <>
// //       <TextInput
// //         multiline
// //         placeholder="What's on your mind?"
// //         style={{ height: 200, padding: 10, backgroundColor: "white" }}
// //         value={postText}
// //         onChangeText={setPostText}
// //       />
// //       <Button
// //         title="Done"
// //         onPress={() => {
// //           // Pass params back to home screen
// //           navigation.navigate("Home", { post: postText });
// //         }}
// //       />
// //     </>
// //   );
// // }

// // const Stack = createStackNavigator();

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Home!</Text>
// //     </View>
// //   );
// // }

// // function SettingsScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Settings!</Text>
// //     </View>
// //   );
// // }

// // function NewTaskScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Add task here now</Text>
// //     </View>
// //   );
// // }
// function DayScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Today and tommorow tasks here</Text>
//     </View>
//   );
// }

// function WeekScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Week</Text>
//     </View>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//           {/* <Tab.Screen name="Add" component={NewTaskScreen} /> */}
//           <Tab.Screen name="Today" component={DayScreen} />
//           <Tab.Screen name="Tommorrow" component={DayScreen} />
//           <Tab.Screen name="This week" component={WeekScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

// //==============================================================
// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Button,
//   StyleSheet,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
// } from "react-native";

// // import { Constants } from "expo";

// // import DateTimePickerModal from "react-native-modal-datetime-picker";

// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// console.log("------------------------------------------------------------");
// console.log(`Cute planner starting on ${Platform.OS}`);

// const platformOS = Platform.OS.toLowerCase();

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   return (
//     // <Stack.Navigator mode="modal">
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate("CreatePost")}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//     // </Stack.Navigator>
//   );
// }

// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState("");

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: "white" }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate("Home", { post: postText });
//         }}
//       />
//     </>
//   );
// }

// const Stack = createStackNavigator();

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Home!</Text>
// //     </View>
// //   );
// // }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function NewTaskScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Add task here now</Text>
//     </View>
//   );
// }
// function DayScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Today and tommorow tasks here</Text>
//     </View>
//   );
// }

// function WeekScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Week</Text>
//     </View>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Add" component={NewTaskScreen} />
//           <Tab.Screen name="Today" component={DayScreen} />
//           <Tab.Screen name="Tommorrow" component={DayScreen} />
//           <Tab.Screen name="This week" component={WeekScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
