import * as React from "react";
import { View, Text, Button } from "react-native";

import ListGridView from '../app-elem-comp/app-grid/view'

function PageFinishedTutorials({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <ListGridView />
    </View>
  );
}

export default PageFinishedTutorials;
