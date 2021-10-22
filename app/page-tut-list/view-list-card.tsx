import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text } from "galio-framework";

// TEMPORATY FOR TESTING
// NEED TO FIX THE SCALEING ON DIFFERENT SCREENS

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = (size: number): number => (width / guidelineBaseWidth) * size;

const ListItem = ({
  item = {},
  onPress = () => console.log("ListItem has no nav action provided"),
}) => {
  const animRef = React.useRef(new Animated.Value(1));

  const scaleDowWhenPressed = () => {
    Animated.timing(animRef.current, {
      toValue: 0.9,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animRef.current, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      onPress();
    });
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animRef.current,
          },
        ],
      }}
    >
      <TouchableWithoutFeedback onPress={scaleDowWhenPressed}>
        <View
          style={{
            width: scale(148),
            height: scale(216),
            marginRight: 12,
            borderRadius: 12,
            borderColor: "#ccc",
            borderWidth: 1,
            marginBottom: 35,
          }}
        >
          <View
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              // flex: 4,
              // backgroundColor: 'red'
              flex: 1,
            }}
          >
            <Text
              bold
              style={[
                styles.itemText,
                {
                  marginBottom: 12,
                },
              ]}
              h7
            >
              Home
            </Text>
            <Text style={[styles.itemText]} p></Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#121212",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  // itemPhoto: {
  //   width: 140,
  //   height: 160,
  //   borderRadius: 12,
  // },
  itemText: {
    color: "#ffffff",
    marginTop: 5,
  },
});
