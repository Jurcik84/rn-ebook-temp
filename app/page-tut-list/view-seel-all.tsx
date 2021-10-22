import React from "react";
import { StyleSheet, SectionList, FlatList, View } from "react-native";
import ListItem from "./view-list-item";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  VStack,
  Stack,
  Text,
  Flex,
  Pressable,
} from "native-base";

// DATA
// DATA
// DATA
import SECTIONS from "./state-init";

const NAVIGATION_NAVIGATE_TO = "DetailScreen";

const ListView: React.ReactNode = function ({ navigation }) {
  //

  return (
    <View>
      <Text>Seel all in vertical slignemnt</Text>
    </View>
  );
};

export default ListView;

// <View
// style={{
//   backgroundColor: "#ccc",
// }}
// >
// <Text style={styles?.sectionHeader}>{section.title}</Text>
// <View style={[styles?.ovalTitleOnRight]}>
//   <Text style={[styles?.subtitleOnLeft]}>title</Text>
// </View>
// <View>
//   {section.horizontal ? (
//     <HorizontalListView navigation={navigation} section={section} />
//   ) : null}
// </View>
// </View>
