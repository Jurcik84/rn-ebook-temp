import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface ContainerProps {
  HeaderView: any;
  MapView: any;
  FooterView: any;
}

const ContainerView: React.FunctionComponent<ContainerProps> = function ({}) {
  return <View></View>;
};

const HeaderView = function ({}) {
  return <View style={{
    flex:1
  }}>
    <Text>Ahoj</Text>
  </View>
};

const MapView = function ({}) {
  return null
}

const FooterView = function ({}) {
  return null
};

export default () => {

  return (
    null
  );
};

const styles = StyleSheet.create({});
