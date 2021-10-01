import * as React from "react";
import DetailPageContent from "./view-karaoke";
import AudioPlayerView from "./view-audio-player";
import {ContextController} from './state'
import { View ,Text } from "react-native";


const KaraokeHeaderView = function(){
  return <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  }}>
    <Text>icon</Text>
    <Text>a</Text>
    <Text>a</Text>
    <Text>a</Text>
  </View>
}

const DetailPage = function ({}) {
  return (
    <ContextController>
      <KaraokeHeaderView />
      <DetailPageContent />
      <AudioPlayerView />
    </ContextController>
  );
};

export default DetailPage;


// React.useLayoutEffect(() => {
//   navigation.setOptions({
//     tabBarVisible: false,
//     title: "",
//   });
// }, [navigation]);
