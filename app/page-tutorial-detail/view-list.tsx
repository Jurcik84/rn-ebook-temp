import React from "react";
import { StyleSheet, Text, FlatList, View, Dimensions } from "react-native";

const { width} = Dimensions.get("window");

export default function (props) {
  return (
    <FlatList
      showsVerticalScrollIndicator
      keyExtractor={(item)=>item.toString()}
      pagingEnabled
      horizontal
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            // backgroundColor: "red",
            width: width,
            // height: height,
            borderRightWidth:1
          }}
        >
          <Text>some text {item} </Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
