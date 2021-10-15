import React, { useEffect, useState } from "react";
import { database } from "./database";

export default function useDataBase() {
  const [isDBLoadingComplete, setDBLoadingComplete] =
    useState<true | false>(false);

  useEffect(function () {
    async function loadDataAsync() {
      try {
        await database.dropDatabaseTablesAsync();
        await database.setupDatabaseAsync();
        await database.setupUsersAsync();

        setDBLoadingComplete(true);
      } catch (err) {
        console.warn(err);
      }
    }
    loadDataAsync();
  }, []);
  return isDBLoadingComplete;
}


// DB should be init only one
// We only want to 
// App.js or index.js
// https://www.jsparling.com/using-hooks-and-context-with-sqlite-for-expo-in-react-native/