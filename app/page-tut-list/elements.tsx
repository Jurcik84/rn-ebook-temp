import React from "react";
import {
  View,
  Text as TextView,
  StyleProp,
  ViewStyle,
  Image,
} from "react-native";

type BasicProps = {
  children?: React.ReactNode;
  //   style?: StyleProp<ViewStyle>
  style?: {};
};

export const HStack: React.FunctionComponent<BasicProps> = function ({
  children,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

export const VStack: React.FunctionComponent<BasicProps> = function ({
  children,
}) {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      {children}
    </View>
  );
};

export const Center: React.FunctionComponent<BasicProps> = function ({
  children,
}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1, // maybe not ? test it !
      }}
    >
      {children}
    </View>
  );
};

type TextHeadingType = {
  h1?: boolean | undefined | null;
  h2?: boolean | undefined | null;
  h3?: boolean | undefined | null;
  h4?: boolean | undefined | null;
};

export const Text: React.FunctionComponent<BasicProps & TextHeadingType> =
  function ({ children, h1, h2, h3, h4 }) {
    const style = [];
    if (h1) {
      style.push({
        fontSize: 40,
      });
    }
    if (h2) {
      style.push({
        fontSize: 34,
      });
    }
    if (h3) {
      style.push({
        fontSize: 28,
      });
    }
    if (h4) {
      style.push({
        fontSize: 22,
      });
    }

    return <TextView style={style}>{children}</TextView>;
  };

//https://orangeloops.com/2020/10/improved-conditional-styling-in-react-native/

export const Title: React.FunctionComponent<BasicProps> = function ({
  children,
  title = "",
  icon = { name: "", type: "" },
  contentContainerStyle = {},
  imageSrc = null,
}) {
  return <View style={{}}>
      <VStack>
          <View>{imageSrc ? null : null}</View>
          <Text>{title}</Text>
      </VStack>
  </View>;
};
