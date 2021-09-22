import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackApp from "./app/app-screen-manager";
// ctx
import { NavScreenContextProvider } from "./app/app-screen-manager/ctx-controller";

import SomeView from "./AppLab/view";

function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SomeView />
    </View>
  );
}

export default App;

// <NavScreenContextProvider>
//   <NavigationContainer>
//     <StackApp />
//   </NavigationContainer>
// </NavScreenContextProvider>
