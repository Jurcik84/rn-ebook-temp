import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import Screens
import HomeTutorialList from "../screen-tutorial-list/view";
import DetailTutorial from "../screen-tutorial-detail/view";

// modal
import FullScreenModalView from "../screen-full-modal/view";

// ctx
// import useScreenCtx from "./ctx-controller";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// tab bar cofig
// comp React.ReactNode
// name string
// opton {}

const tab_config = [
  {
    options: { headerShown: false },
    comp: HomeTutorialList,
    name: "Home",
  },
  {
    options: { headerShown: true },
    comp: SettingsScreen,
    name: "Finished",
  },
  { options: { headerShown: true }, comp: SettingsScreen, name: "Dictionary" },
];

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TabNavigation = ({}) => {
  // tested OK
  // const ctx = useScreenCtx();
  // console.log("ctx", ctx);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Finished") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Dictionary") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {tab_config.map(({ comp, name, options }, tabConfigIndex) => {
        return (
          <Tab.Screen
            key={tabConfigIndex.toString()}
            options={options}
            name={name}
            component={comp}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const HomeListScreen = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeTutorialList"
          component={TabNavigation}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
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
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Full Page Modal",
            headerStyle: {
              // backgroundColor: "transparent",
            },
            // headerTintColor: "red",
          }}
          name="FullScreenModalView"
          component={FullScreenModalView}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeListScreen;
