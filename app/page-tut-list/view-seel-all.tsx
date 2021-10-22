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

const PageCardAsListView: React.FunctionComponent<{}> = function ({
  navigation,
}) {
  //

  return (
    <View>
      <Text>Seel all in vertical slignemnt</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageCardAsListView;
