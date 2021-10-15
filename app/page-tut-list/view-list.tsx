import React from "react";
import { StyleSheet, Text, SectionList, FlatList, View } from "react-native";
import ListItem from "./view-list-item";

import SECTIONS from "./state-init";
import { TouchableOpacity } from "react-native-gesture-handler";

const NAVIGATION_NAVIGATE_TO = "DetailScreen";

const renderSectionHeader = function ({ section, navigation }) {
  //
  const listProps = {
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    data: section.data,
  };

  return (
    <View>
      <View style={[]}>
        <Text style={[styles.sectionHeader]}>Super big title</Text>
      </View>
      <View style={[styles.hstack]}>
        <Text style={[styles.subtitleOnLeft]}>Left title</Text>
        <TouchableOpacity>
          <View style={[styles.ovalTitleOnRight]}>
            <Text>See all</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[]}>
        <FlatList
          // props
          {...listProps}
          // methods
          renderItem={({ item }) => (
            <ListItem
              item={item}
              onPress={() =>
                navigation &&
                navigation.navigate &&
                navigation?.navigate(NAVIGATION_NAVIGATE_TO)
              }
            />
          )}
        />
      </View>
    </View>
  );
};

const ListView: React.ReactNode = function ({ navigation }) {
  //
  const sectionListProps = {
    //
    bounces: true,
    //
    contentContainerStyle: { paddingHorizontal: 10 },
    //
    stickySectionHeadersEnabled: false,
    //
    sections: SECTIONS,
    //
    showsHorizontalScrollIndicator: false,
    //
    showsVerticalScrollIndicator: false,
  };
  return (
    <SectionList
      {...sectionListProps}
      renderSectionHeader={({ section }) =>
        renderSectionHeader({ section, navigation })
      }
      renderItem={({ item, section }) => {
        return null;
        // if (section.horizontal) {
        //   return null;
        // }
        // return <ListItem item={item} />;
      }}
    />
  );
};

export default ListView;

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
