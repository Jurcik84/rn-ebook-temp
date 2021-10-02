import * as React from "react";
import DetailPageContent from "./view-karaoke";
import AudioPlayerView from "./view-audio-player";
import {ContextController} from './state'

const DetailPage = function ({}) {
  return (
    <ContextController>
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
