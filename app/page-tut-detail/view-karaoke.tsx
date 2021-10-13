import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const generateUniqKeyForList = function (item, index) {
  return item + index.toString();
};

// https://medium.com/nerd-for-tech/react-native-styles-normalization-e8ce77a3110c
// later implement
// fontsize normaleze fro ios and android
const { width } = Dimensions.get("window");

const data1 =
  "Bohuzel ten skutecnost je takovy ze nas skolstvi spusobil nejaky averze proti uceni"
    .trim()
    .split(" ");

console.log("data1", data1);

const data2 =
  "Unfortunately the reality is such that out education_system has_caused an aversion towards learning"
    .trim()
    .split(" ");

const useEffectCb = function ({ animRef = {}, index = 0 }) {
  // - simulation of delay
  // later implemented by
  // timestamp from audio
  // https://cloud.google.com/speech-to-text/docs/async-time-offsets#speech_transcribe_async_word_time_offsets_gcs-nodejs
  // google sevice can extract
  // timestamp from audio by nodejs
  const _delay = index * 1000;
  //
  Animated.timing(animRef?.current, {
    toValue: 0.6,
    duration: 500,
    delay: _delay,
    useNativeDriver: true,
  }).start(() => {
    Animated.timing(animRef?.current, {
      toValue: 1,
      duration: 500,
      delay: 0,
      useNativeDriver: true,
    }).start();
  });
};

// user -action
// when user press button longer
// word will be added to the favorite list
// and access in tab nav
const onLongPressAddToFav = function ({} = {}) {
  console.log("long press");
  // return null;
};

// user - action
// when user press the word
// audio will play from that word
const onPressPlayFromPressedWord = function ({} = {}) {
  // implement
};

const AnimatedTextView = function ({ index = 0, item = "" }) {
  //
  const animRef = React.useRef(new Animated.Value(1));
  //
  const _onLongPressAddToFav = onLongPressAddToFav;
  //
  const _onPressPlayFromPressedWord = onPressPlayFromPressedWord;

  //
  React.useEffect(() => useEffectCb({ animRef, index }), []);

  return (
    <TouchableOpacity
      onPress={_onPressPlayFromPressedWord}
      onLongPress={_onLongPressAddToFav}
    >
      <Animated.View
        style={{
          width: width / 4,
          height: width / 4,
          backgroundColor: "#cccccc",
          margin: 1,
          alignItems: "center",
          justifyContent: "center",
          opacity: animRef.current,
          // transform: [
          //   {
          //     scale: animRef.current,
          //   },
          // ],
        }}
      >
        <View>
          <Text style={{}}>{item}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const KaraokeView = ({}) => {
  return (
    <FlatList
      bounces={false}
      keyExtractor={generateUniqKeyForList}
      numColumns={3}
      data={data1}
      renderItem={({ item, index }) => {
        return (
          <AnimatedTextView item={item} key={index.toString()} index={index} />
        );
      }}
    />
  );
};

export default KaraokeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
    paddingTop: 40,
    // backgroundColor: 'red'
  },
});
