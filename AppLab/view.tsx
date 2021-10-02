import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";
//
// data
const data_string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const data_array = data_string.split("").concat(data_string.split(""),data_string.split(""));

// r

const useEffectCb = function ({ animRef = {}, index = 0 }) {
  return () => {
    //
    const _delay = index * 1000;
    //
    const animConfig = {
      toValue: 1.2,
      duration: 500,
      delay: _delay,
      useNativeDriver: true,
    };
    //

    Animated.timing(animRef?.current, animConfig).start(() =>
      Animated.timing(animRef?.current, { ...animConfig, toValue: 1 }).start()
    );
  };
};

const AnimatedText = function ({ index = 0 }) {
  const animRef = React.useRef(new Animated.Value(1));

  React.useEffect(useEffectCb({ animRef, index }), []);

  return (
    <Animated.Text
      style={{
        width: 100,
        height: 30,
        margin: 1,
        transform: [
          {
            scale: animRef.current,
          },
        ],
      }}
    >
      <Text style={{}}>{"macka" + index}</Text>
    </Animated.Text>
  );
};

const SomeView: React.FunctionComponent<{}> = ({}) => {
  const SliderRef = React.useRef<Slider>();
  const ScrollViewRef = React.useRef<ScrollView>();
  const [sliderValue, setSliderValue] = React.useState<number>(0);
  const [scrollValue, setScrollValue] = React.useState<number>(0);

  const setSliderValByScrollH = function (height: number) {
    SliderRef?.current?.setNativeProps({ value: height });
    setSliderValue(height);
  };

  // when user use slider
  // content is scrolled
  const setSliderValueHandler = function (value) {
    ScrollViewRef?.current?.scrollTo({
      y: value,
      animated: true,
    });
  };

  const onScrollhandel = function (e) {
    const {
      contentInset: { bottom, left, right, top },
      contentOffset: { x, y },
      contentSize: { height, width },
      layoutMeasurement: { height: layoutMHeight, width: layoutMWidth },
      zoomScale,
    } = e.nativeEvent;

    console.log("layoutMeasurement", layoutMHeight);
    console.log("height", height);

    // console.log("diff", height - layoutMHeight);
  };

  // React.useEffect(
  //   function () {
  //     console.log(ScrollViewRef.height);
  //     console.log(ScrollViewRef.current.height);
  //     console.log(ScrollViewRef.current.clientHeight);
  //   },
  //   [ScrollViewRef.current]
  // );
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 6,
        }}
      >
        <View>
          <Text>a</Text>
        </View>
        <View style={{
          flex:1
        }}>
       
         
        </View>
        <View>
          <Text>a</Text>
        </View>
        <View>
          <Text>a</Text>
        </View>
        <View>
          <Text>a</Text>
        </View>
      </View>
      <ScrollView
        onLayout={(e) => {
          const { layout } = e.nativeEvent;
          const { height, y } = layout;
          console.log("nativeEvent", e.nativeEvent);
        }}
        ref={ScrollViewRef}
        bounces={false}
        scrollEventThrottle={1}
        onScroll={(e) => onScrollhandel(e)}
        // bounces={false}
        contentContainerStyle={{
          backgroundColor: "#ffffff",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 12,
          }}
        >
          {data_array.map((item, index) => {
            return (
              <Text
                style={{
                  fontSize: 22,
                  marginBottom: 12,
                  color: "#cccccc",
                }}
                key={index}
              >
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
