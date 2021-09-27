import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ViewListMultiRowSectionList from "./view-list";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, paddingRight: 0 }}>
        <ViewListMultiRowSectionList navigation={navigation} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
   paddingLeft: 16,
   paddingRight: 0
   
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
