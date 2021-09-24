import * as React from "react";
import { View, StyleSheet, Button, Text, Dimensions } from "react-native";
import * as Speech from "expo-speech";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";


const {width} = Dimensions.get('window')

export default function TextTeSpeachExample() {

 

  const dataDB = [
    ["eat", "吃", "Chī"],
    ["drink", "喝", "Hē"],
    ["food", "", ""],
    ["run", "睡觉", "Pǎo"],
    ["sit", "坐", "Zuò"],
    ["work", "工作", "Gōngzuò"],
    ["money", "钱", "Qián"],
    ["fire", "", ""],
    ["car", "", ""],
    ["train", "", ""],
    ["plane", "", ""],
    ["animal", "", ""],
    ["dog", "", ""],
    ["cat", "", ""],
    ["rabbit", "", ""],
    ["cow", "", ""],
    ["person", "", ""],
    ["man", "", ""],
    ["friend", "", ""],
    ["woman", "", ""],
    ["child", "", ""],
    ["family", "", ""],
    ["enemy", "", ""],
    ["home", "", ""],
    ["house", "", ""],
    ["room", "", ""],
    ["bed", "", ""],
    ["love", "", ""],
    ["book", "", ""],
    ["school", "", ""],
    ["teacher", "", ""],
    ["table", "", ""],
    ["chair", "", ""],
    
  ];
  const makeSentese = () =>{

  }

  const mapDataDb = (data) => {
    return data.map((item) => {
      const [eng, symbol, pr] = item;
      return {
        eng,
        symbol,
        pr,
      };
    });
  };

  const speak = (word = "") => {
    Speech.speak(word, {
      language: "zh-CN",
      rate: 0.1
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
      
        keyExtractor={(_,index)=>index.toString()}
        pagingEnabled
        horizontal={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center'
                
              }}
            >
              <TouchableOpacity>
                <Text
                  style={[{
                    borderWidth: 1,
                    width: 360,
                    height: 100,
                    padding: 12,
                    marginBottom: 2
                  }, styles.bigText]}
                >
                  {item.eng}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  speak(item.symbol);
                }}
              >
                <Text
                  style={[{
                    borderWidth: 1,
                    width: 360,
                    height: 100,
                    padding: 12,
                    marginBottom: 2
                  }, styles.bigText]}
                >
                  {item.symbol}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={[{
                    borderWidth: 1,
                    width: 360,
                    height: 100,
                    padding: 12,
                  }, styles.bigText]}
                >
                  {item.pr}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        data={mapDataDb(dataDB)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    paddingTop: 40,

  },
  bigText: {
      fontSize: 50,
      textAlign: 'center'
  }
});
