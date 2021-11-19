import "react-native-gesture-handler";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, Box } from "native-base";
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  selectTodos,
  addTodo,
  removeTodo,
  getPosts,
} from "./app/app-store/store";

import MikoTest from "./miko-test/view";

import AppLab from "./AppLab/view";
import MainView from "./app/app-page-manager/view";

//
import store from "./app/app-store/store";
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

const TestComp = function () {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return null;
};

export default () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={[styles.container]}>
          <StatusBar style="light" />
          <App />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
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
