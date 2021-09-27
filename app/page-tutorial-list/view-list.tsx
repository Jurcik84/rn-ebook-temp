import React from "react";
import { StyleSheet, Text, SectionList, FlatList } from "react-native";
import ListItem from "./view-list-item";

import SECTIONS from "./state-init";

const NAVIGATION_NAVIGATE_TO = "FullScreenModalView";

export default function ListView({ navigation }) {
  return (
    <SectionList
      bounces={true} // not available on android
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      sections={SECTIONS}
      renderSectionHeader={({ section }) => (
        <>
          <Text style={styles.sectionHeader}>{section.title}</Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 22,
              color: 'gray'
            }}
          >
           Some Longer Title to describe ...
          </Text>
          {section.horizontal ? (
            <FlatList
            
              horizontal
              data={section.data}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  onPress={() => navigation.navigate(NAVIGATION_NAVIGATE_TO)}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
          ) : null}
        </>
      )}
      renderItem={({ item, section }) => {
        if (section.horizontal) {
          return null;
        }
        return <ListItem item={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#121212",
    marginTop: 20,
    marginBottom: 5,
  },
});
