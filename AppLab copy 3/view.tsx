import React from "react";
import { View, StyleSheet } from "react-native";

interface ContainerProps {
  HeaderView: any;
  MapView: any;
  FooterView: any;
}

type ShareTimeOptions = 15 | 1 | 8;
const ContainerView: React.FunctionComponent<ContainerProps> = function ({}) {
  return <View></View>;
};

const HeaderView = function ({}) {
  return null
};

const MapView = function ({}) {
  return null
}

const FooterView = function ({}) {
  return null
};

export default () => {
  const [duration, setDuration] = React.useState<ShareTimeOptions>(1);
  const [comment, setComment] = React.useState<string>();
  const submitShareLiveLocaton = () => {};

  return (
    <ContainerView
      HeaderView={() => <HeaderView />}
      MapView={() => <MapView />}
      FooterView={() => <FooterView />}
    />
  );
};

const styles = StyleSheet.create({});
