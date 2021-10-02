import "react-native-gesture-handler";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PERSISTENCE_KEY = "NAVIGATION_STATE";

export const useStorageToSaveNavState = function () {
  const [isReady, setIsReady] = React.useState(false);
  const [initNavState, setinitNavState] = React.useState(undefined);

  const actionNavStateWithStorage = function () {
    const restoreState = async function () {
      {
        //
        const navState = await AsyncStorage.getItem(PERSISTENCE_KEY);
        //
        const state = navState ? JSON.parse(navState) : undefined;
        //
        state !== undefined ? setinitNavState(state) : null;
        //
        setIsReady(true);
      }
    };
    !isReady ? restoreState() : null;
  };

  React.useEffect(actionNavStateWithStorage, [isReady]);

  return { isReady, initNavState };
};

export const storeStateToStorage = function (state: unknown) {
  //
  AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
};
