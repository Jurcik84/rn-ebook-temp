import React from "react";
import {  View  } from "react-native";


export const HStack: React.FunctionComponent<{}> = function ({ children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

export const VStack: React.FunctionComponent<{}> = function ({ children }) {
    return (
      <View
        style={{
          flexDirection: "column",
        }}
      >
        {children}
      </View>
    );
  };
  
