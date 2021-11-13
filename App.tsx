import "react-native-gesture-handler";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, Box } from "native-base";
// root nav stack
// type : stack
// import StackApp from "./app/app-page-manager/view";
// Test
import MikoTest from './miko-test/view'

import AppLab from "./AppLab/view";
import MainView from './app/app-page-manager/view'
//
import {
  useStorageToSaveNavState,
  storeStateToStorage,
} from "./app/app-services/service-nav-state-manager";

//
const MainNavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const App = function () {
  const { isReady, initNavState } = useStorageToSaveNavState();
  //
  if (!isReady) {
    //
    return null;
  }
  return (
    <NavigationContainer
      theme={MainNavTheme}
      initialState={initNavState || undefined}
      onStateChange={(state) => {
        typeof storeStateToStorage === "function" && storeStateToStorage(state);
      }}
    >
      <MainView />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={[styles.container]}>
        <StatusBar style="light" />
        <App />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// PLANNING FEATURES
// LINKING ROM APP TO APP
// OFFER TO SHARE

// WHY APP ?
// BETTER BUSSINESS
// 