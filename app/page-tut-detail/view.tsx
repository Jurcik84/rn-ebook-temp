import React from "react";
import { ContextController } from "./state";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import WebView from "react-native-webview";



const ViewKaraoke = function ({}) {
  // define data  - read data
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // transform data
  const renderWords = data.map((item, index) => {
    return (
      <TouchableOpacity key={index}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  });

  // use data
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}
    >
      {renderWords}
    </ScrollView>
  );
};

const ViewAudioControlles = function () {
  return <View></View>;
};

type PagePropsType = {
  ViewHeaderSection?: React.ReactNode;
  ViewKaraoke?: React.ReactNode;
  ViewAudioControlles?: React.ReactNode;
};

const DetailPage: React.FunctionComponent<PagePropsType> = function ({
  ViewHeaderSection,
  ViewKaraoke,
  ViewAudioControlles,
}) {
  return (
    <View style={[styles.contaier]}>
      <ViewHeaderSection />
      <ViewKaraoke />
      <ViewAudioControlles />
    </View>
  );
};



// wrapper
export default function () {
  return (
    <ContextController>
      <WebView originWhitelist={["*"]} source={require("./content-article.html")} />
      {/* <DetailPage
        ViewHeaderSection={() => <View></View>}
        ViewKaraoke={ViewKaraoke}
        ViewAudioControlles={ViewAudioControlles}
      /> */}
    </ContextController>
  );
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
});
