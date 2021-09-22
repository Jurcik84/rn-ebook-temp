
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListItem = ({
  item = {},
  onPress = () => console.log("ListItem has no nav action provided"),
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Image
          source={{
            uri: item?.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item?.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
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
    width: 140,
    height: 160,
    borderRadius: 12
  },
  itemText: {
    color: "#121212",
    marginTop: 5,
  },
});
