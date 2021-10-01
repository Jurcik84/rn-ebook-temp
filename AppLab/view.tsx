import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  ScrollView,
  StyleProp
} from "react-native";




const Section: React.FunctionComponent<{ children: React.ReactNode }> =
  function (props) {
    const { children }  = props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });

    return <View style={[styles.container]}>{children}</View>;
  };

const Container: React.FunctionComponent<{ children: React.ReactNode }> =
  function ({ children }) {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });

    return <View style={[styles.container]}>{children}</View>;
  };

const HStack: React.FunctionComponent<{ children: React.ReactNode }> =
  function ({ children }) {
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
      },
    });

    return <View style={[styles.container]}>{children}</View>;
  };

const VStack: React.FunctionComponent<{ children: React.ReactNode }> =
  function ({ children }) {
    const styles = StyleSheet.create({
      container: {
        flexDirection: "column",
      },
    });

    return <View style={[styles.container]}>{children}</View>;
  };

// data
const data_string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const data_array = data_string
  .split("")
  .concat(data_string.split(""), data_string.split(""));

//

const useEffectCallBack = function ({ animRef = {}, index = 0 }) {
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

// const AnimatedText = function ({ index = 0 }) {
//   const animRef = React.useRef(new Animated.Value(1));

//   React.useEffect(useEffectCallBack({ animRef, index }), []);

//   return (
//     <Animated.Text
//       style={{
//         width: 100,
//         height: 30,
//         margin: 1,
//         transform: [
//           {
//             scale: animRef.current,
//           },
//         ],
//       }}
//     >
//       <Text style={{}}>{"macka" + index}</Text>
//     </Animated.Text>
//   );
// };

const BookHeaderView = function ({}) {
  return (
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
      <View
        style={{
          flex: 1,
        }}
      ></View>
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
  );
};

const BookTextRenderView = function ({
  scrollViewRef,
  onScrollhandel = () => null,
  data = [],
}) {
  const onLayoutHandler = function (e) {
    const { layout } = e.nativeEvent;
    const { height, y } = layout;
    console.log("nativeEvent", e.nativeEvent);
  };

  const onScrollHandler = function (e) {
    onScrollhandel(e);
  };

  return (
    <ScrollView
      //
      ref={scrollViewRef}
      //
      bounces={false}
      //
      contentContainerStyle={{
        //
        backgroundColor: "#ffffff",
      }}
      //
      onLayout={onLayoutHandler}
      //
      scrollEventThrottle={1}
      //
      onScroll={onScrollHandler}
      //
      // bounces={false}
     
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
  );
};

const SomeView: React.FunctionComponent<{}> = ({}) => {
  //
  const scrollViewRef = React.useRef<ScrollView>();
  //
  const [sliderValue, setSliderValue] = React.useState<number>(0);
  //
  const [scrollValue, setScrollValue] = React.useState<number>(0);

  // 
  const setSliderValByScrollH = function (height: number) {
    // SliderRef?.current?.setNativeProps({ value: height });
    // setSliderValue(height);
  };

  // when user use slider
  // content is scrolled
  const setSliderValueHandler = function (value) {
    scrollViewRef?.current?.scrollTo({
      y: value,
      animated: true,
    });
  };

  //
  const onScrollhandel: React.FunctionComponent<{}> = function (e) {
    // extract dimensions from scroll event
    // need to be used for progress bar calc
    const {
      contentInset: { bottom, left, right, top },
      contentOffset: { x, y },
      contentSize: { height, width },
      layoutMeasurement: { height: layoutMHeight, width: layoutMWidth },
      zoomScale,
    } = e.nativeEvent;

    //
    console.log("layoutMeasurement", layoutMHeight);
    console.log("height", height);

    // console.log("diff", height - layoutMHeight);
  };

  // React.useEffect(
  //   function () {
  //     console.log(scrollViewRef.height);
  //     console.log(scrollViewRef.current.height);
  //     console.log(scrollViewRef.current.clientHeight);
  //   },
  //   [scrollViewRef.current]
  // );
  return (
    <Container>
      <VStack>
        <BookHeaderView
          iconLeftGoBackButton={null}
          progressBarView={null}
          playAudioButton={""}
          setFontStyleButton={""}
        />
        <BookTextRenderView
          data={[]}
          scrollViewRef={scrollViewRef}
          onScrollhandel={onScrollhandel}
        />
      </VStack>
    </Container>
  );
};

export default SomeView;
