import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Screens
import HomeTutorialList from "../screen-tutorial-list/view";
import DetailTutorial from "../screen-tutorial-detail/view";

const Stack = createNativeStackNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function App({}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        // to prevent displaying 2 headers
        options={{ headerShown: true }}
        name="Home"
        component={HomeTutorialList}
      />
      <Tab.Screen
        options={{ headerShown: true }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{ headerShown: true }}
        name="SettingsScreen2"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

function HomeListScreen({}) {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeTutorialList"
          component={App}
        />
      </Stack.Group>
      <Stack.Group

      // screenOptions={{ presentation: "modal" }}
      >
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Detail Page",
            headerStyle: {
              backgroundColor: "transparent",
            },
            // headerTintColor: "red",
          }}
          name="HomDetailTutorial"
          component={DetailTutorial}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default HomeListScreen;
