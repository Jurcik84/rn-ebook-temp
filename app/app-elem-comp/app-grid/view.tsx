import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import data from "./state";

const { width } = Dimensions.get("window");

const numOfColumns = 3;

// lent of array
// 3 columns
// 9 
// 0 helpers



const formatData = (data: Array<{}>, numColumns: number) => {
  const numOfFullRows = Math.floor(data.length / numColumns);
  // data.len = 10
  // numOfFullRows = 3

  let numberOfElementsLastRow = data.length - numOfFullRows * numColumns;
  // data.length = 10
  // numOfFullRows = 3
  // numColumns = 3
  // numberOfElementsLastRow =  10 -  3 * 3 = 9

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      key: `black-${numberOfElementsLastRow}`,
      empty: true,
    });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return data;
};

export default function TextTeSpeachExample() {
  return (
    <View style={[styles.container]}>
      <FlatList
        keyExtractor={(item) => item.key}
        numColumns={numOfColumns}
        data={formatData(data, numOfColumns)}
        renderItem={({ item }) =>
          item.empty ? null : (
            <View style={[styles.rowItem]}>
              <Text style={{
                fontSize: 16
              }}>{item.key}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowItem: {
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: width / numOfColumns,
  },
});
