import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext({});

export const StorageContextProvider = ({ children }) => {
  const getDataFromStorage = async (cb = () => console.log("cb not given")) => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        cb(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeDataToStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      getDataFromStorage(() => {});
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {}, []);

  const value = { storeDataToStorage };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default () => {
  try {
    const ctx = useContext(Context);
    return ctx;
  } catch (err) {
    console.log("eror in useContext", err.message);
    return null;
  }
};
