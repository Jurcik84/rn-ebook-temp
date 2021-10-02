import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PERSISTENCE_KEY = "NAVIGATION_STATE";

type actionNavStateWithStorageType = {
  isReady: boolean;
  setinitNavState: (val: {} | undefined) => void;
  setIsReady: (val: boolean) => void;
};

const actionNavStateWithStorage = function ({
  isReady,
  setinitNavState,
  setIsReady,
}: actionNavStateWithStorageType) {
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

export const useStorageToSaveNavState = function () {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [initNavState, setinitNavState] = useState<{} | undefined>(undefined);

  useEffect(
    () => actionNavStateWithStorage({ isReady, setinitNavState, setIsReady }),
    [isReady]
  );

  return { isReady, initNavState };
};

export const storeStateToStorage = function (state: unknown) {
  //
  AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
};
