import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

// ui type - inject some view into modal :)
// data type - user data + config data
// action type - open modal , close modeal
// computed type - computed data from state - context state - redux state
// style type
// actions - sync and async

// native props?

type FullScreenModalViewType = {
  Header?: React.ReactNode;
  Body?: React.ReactNode;
  Footer?: React.ReactNode;
};

const useVStack = () => {
  const [state, setstate] = React.useState(() => styles.vstack);

  const updateState = (updatedState: {}) => {
    setstate((state) => ({ ...state, updatedState }));
  };
  return [state, updateState];
};

const VStack = ({ children }) => {
  const [vStackStyle] = useVStack();
  return <View style={{ ...vStackStyle }}>{children}</View>;
};

const HStack = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "green",
        flexDirection: "column",
        justifyContent: "space-around",
        borderWidth: 1,
        minHeight: 40,
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

const SomeUIWithDataExample = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <VStack>
        <Text>VStack</Text>
        <Text>VStack</Text>
        <Text>VStack</Text>
      </VStack>
      <HStack>
        <Text>VStack</Text>
        <Text>VStack</Text>
        <Text>VStack</Text>
      </HStack>
    </View>
  );
};

const FullScreenModalView: React.FunctionComponent<FullScreenModalViewType> = (
  props
) => {
  return (
    <View style={[styles.container]}>
      <Text>Hello Modal</Text>
      <SomeUIWithDataExample />
    </View>
  );
};

export default FullScreenModalView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  vstack: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    minHeight: 40,
    alignItems: "center",
  },
});
