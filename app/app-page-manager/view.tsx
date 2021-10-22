import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// import Screens
import ListScreen from "../page-tut-list/view";
import DetailScreen from "../page-tut-detail/view";
import PageCardAsListView from "../page-tut-list/view-seel-all";

// tab
import ScreenFinishedTuts from "../page-finished-tuts/view";
// modal
import FullScreenModalView from "../page-full-modal/view";

// ctx
// import useScreenCtx from "./ctx-controller";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// tab bar cofig
// comp React.ReactNode
// name string
// opton {}

const HomePageConfig = {
  options: { headerShown: false },
  comp: ListScreen,
  name: "Home",
};

const FinishPageConfig = {
  options: { headerShown: true },
  comp: ScreenFinishedTuts,
  name: "Finished",
};

const DictionaryConfig = {
  options: { headerShown: true },
  comp: ScreenFinishedTuts,
  name: "Dictionary",
};
const tab_config = [HomePageConfig, FinishPageConfig, DictionaryConfig];

const TabNavigation = function ({}) {
  // tested OK
  // const ctx = useScreenCtx();
  // console.log("ctx", ctx);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          // backgroundColor: "#000000",
          paddingTop: 12,
          // borderTopColor: "#000000",
        },
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
        // tabBarActiveTintColor: "#FFE232",
        // tabBarInactiveTintColor: "#FFE232",
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

const DrawerNav = function ({}) {
  return (
    <Drawer.Navigator>
      {tab_config.map(({ comp, name, options }, tabConfigIndex) => {
        return (
          <Drawer.Screen
            key={tabConfigIndex.toString()}
            name={name}
            component={comp}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

const renderTabOrDrawer = Platform.OS === "ios" ? TabNavigation : DrawerNav;

const RootView = function ({}) {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeTutorialList"
          component={renderTabOrDrawer}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Detail Page",
            headerStyle: {
              backgroundColor: "transparent",
            },
            // headerTintColor: "red",
          }}
          name="DetailScreen"
          component={DetailScreen}
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
        <Stack.Screen
          options={{
            headerShown: true,
            title: "PageCardAsListView",
            headerStyle: {
              // backgroundColor: "transparent",
            },
            // headerTintColor: "red",
          }}
          name="PageCardAsListView"
          component={PageCardAsListView}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootView;

//
// https://medium.com/soluto-engineering/size-matters-5aeeb462900a
