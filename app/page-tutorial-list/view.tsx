import React from "react";
import { StyleSheet, View } from "react-native";
import ViewListMultiRowSectionList from "./view-list";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ViewListMultiRowSectionList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
    // paddingLeft: 16,
    marginRight: 0,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#121212",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 160,
    height: 160,
    borderRadius: 12,
  },
  itemText: {
    color: "#8F8F91",
    marginTop: 5,
  },
});

//https://www.youtube.com/watch?v=CruJIdFwQWA&list=PLaAoUJDWH9Wqatfwa4SEfyFevrl8QefcN&index=25
// https://www.youtube.com/watch?v=npe3Wf4tpSg
