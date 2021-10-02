import React from "react";
//
import { View, ActionSheetIOS } from "react-native";
//
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
//
import { Audio } from "expo-av";
//
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
//
const tracks = [
  require("../../assets/RED  -  01/RED01_TAXUS-01.mp3"),
  require("../../assets/RED  -  01/RED01_TAXUS-02.mp3"),
  require("../../assets/RED  -  01/RED01_TAXUS-03.mp3"),
  require("../../assets/RED  -  01/RED01_TAXUS-04.mp3"),
  require("../../assets/RED  -  01/RED01_TAXUS-05.mp3"),
];

// sub
const playSound = async function ({ setSound, track = 0 }) {
  //
  const { sound } = await Audio.Sound.createAsync(tracks[track]);
  //
  setSound(sound);
  //
  await sound.playAsync();
};
// sub
const playAudioByControls = function ({ optionButtonType = "" }) {};

// sub
const openSpeedSheetView = function () {
  //
  ActionSheetIOS.showActionSheetWithOptions(
    {
      title: "Select the speed for audio",
      options: ["2x", "1.5x", "1x", "0.75x", "0.5x", "cancel"],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 5,
    },
    //
    function (buttonIndex) {
      //
      if (buttonIndex === 1) {
        // cancel action
      } else if (buttonIndex === 1) {
      } else if (buttonIndex === 2) {
      }
    }
  );
};

const openVolumeSheetView = function () {
  //
  ActionSheetIOS.showActionSheetWithOptions(
    {
      title: "Nastavenie textu",
      options: [
        "zvyrazni anglictinu",
        "zvyraznic cestinu",
        "zvyrazni obe jazyky",
        "nastav povodne",
        "cancel",
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 4,
    },
    function (buttonIndex) {
      if (buttonIndex === 1) {
        // cancel action
      } else if (buttonIndex === 1) {
      } else if (buttonIndex === 2) {
      }
    }
  );
};

// service called by useEffect
const useEffHandler = function ({ sound }) {
  return sound
    ? function () {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    : undefined;
};

// MAIN LOGIC
const AudioPlayerView = function ({}) {
  // state
  const [track, setTrack] = React.useState(0);
  const [sound, setSound] = React.useState();

  // user ->  action
  const _playSound = playSound;
  // user -> action
  const _playAudioByControls = playAudioByControls;
  // user -> action
  const _openSpeedSheetView = openSpeedSheetView;

  // sideEffects  - def
  const _useEffHanler = useEffHandler;

  // sideEffects - call
  React.useEffect(
    function () {
      _useEffHanler({ sound });
    },
    [sound]
  );

  return (
    <View
      style={[
        {
          flex: 1,
        },
      ]}
    >
      <View
        style={[
          {
            flex: 1,
          },
        ]}
      ></View>
      <View
        style={[
          {
            flex: 1,
            marginBottom: 30,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        <TouchableOpacity onPress={() => openVolumeSheetView()}>
          <Feather name="volume-2" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => playAudioByControls("prev")}>
          <AntDesign
            style={{
              marginLeft: 30,
            }}
            name="banckward"
            size={40}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#ccc",
              width: 60,
              height: 60,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="caretright" size={40} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => playAudioByControls("next")}>
          <AntDesign
            style={{
              marginRight: 30,
            }}
            name="forward"
            size={40}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openSpeedSheetView}>
          <MaterialCommunityIcons
            name="speedometer-slow"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioPlayerView;
