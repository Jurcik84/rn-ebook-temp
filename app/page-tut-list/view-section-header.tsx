import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// sub views
import CardListitemView from "./view-list-card";
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
    <TouchableOpacity>
      <View style={[styles.ovalTitleOnRight]}>
        <Text>See all</Text>
      </View>
    </TouchableOpacity>
  );

  // main view  ----------------------------------------------------

  return (
    <View>
      {main_header_text}
      <View style={[styles.hstack]}>
        {title_header_left_text}
        {title_header_right_text_pressable}
      </View>
      <View style={[]}>
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
      </View>
    </View>
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
    marginRight: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6EAF0",
  },
});

export default SectionHeaderView;
