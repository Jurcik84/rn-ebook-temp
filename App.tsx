import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// root nav stack
// type : stack
import StackApp from "./app/app-page-manager/view";

import AppLab from "./AppLab/view";

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
  // task : store nav state and idicate when is ready
  //
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
      <StackApp />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar style="light" />
      <AppLab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
