import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const SomeView = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red'
      }}
    >
      <WebView
        style={[styles.container]}
        originWhitelist={["www.google.com"]}
        source={{ uri: 'https://expo.dev' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SomeView;
