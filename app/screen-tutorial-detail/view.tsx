import * as React from "react";
import { View, Text, Button } from "react-native";
import DetailPageContent from "./view-list";

function TutorialScreen({ navigation }) {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     tabBarVisible: false,
  //     title: "Macka chce sukat",
  //   });
  // }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DetailPageContent />
    </View>
  );
}

export default TutorialScreen;
