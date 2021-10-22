import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// sub views
import CardListitemView from "./view-list-card";
import { HStack, VStack, Text, Center } from "./elements";
// types
import type { SectionsType } from "./types";

// Where to navigate
// after pressed card
const NAVIGATION_NAVIGATE_TO = "DetailScreen";

const SectionHeaderView: React.FunctionComponent<{}> = function ({
  section,
  navigation,
}) {
  //
  const list_view_props = {
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    data: section.data,
  };

  // sub view ----------------------------------------------------
  const main_header_text = (
    <View style={[]}>
      <Text style={[styles.sectionHeader]}>Super big title</Text>
    </View>
  );

  // sub view ----------------------------------------------------
  const title_header_left_text = (
    <Text style={[styles.subtitleOnLeft]}>Left title</Text>
  );

  // sub view ----------------------------------------------------
  const title_header_right_text_pressable = (
    <TouchableOpacity
      onPress={() => navigation?.navigate("PageCardAsListView")}
    >
      <View style={[styles.ovalTitleOnRight]}>
        <Text>See all</Text>
      </View>
    </TouchableOpacity>
  );

  // main view  ----------------------------------------------------

  return (
    <VStack>
      {main_header_text}
      <HStack>
        {title_header_left_text}
        {title_header_right_text_pressable}

      </HStack>
      <Center>
          <Text h1>cat</Text>
          <Text>cat</Text>
      </Center>
      <FlatList
        // props
        {...list_view_props}
        // methods
        renderItem={({ item }) => (
          <CardListitemView
            item={item}
            onPress={() =>
              navigation &&
              navigation?.navigate &&
              navigation?.navigate(NAVIGATION_NAVIGATE_TO)
            }
          />
        )}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "600",
    fontSize: 34,
    color: "#121212",
    marginBottom: 34,
  },
  hstack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitleOnLeft: {
    marginBottom: 26,
    fontSize: 22,
  },
  ovalTitleOnRight: {
    width: 127,
    height: 34,
    borderRadius: 20,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6EAF0",
  },
});

export default SectionHeaderView;
