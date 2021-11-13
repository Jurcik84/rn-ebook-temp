import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";


const ContainerView: React.FunctionComponent<{}> = function ({
  HeaderView = () => null,
  BodyView = () => null,
  FooterView = () => null,
}) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderView />
      <BodyView />
      <FooterView />
    </View>
  );
};

const HeaderView = function ({}) {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Header</Text>
    </View>
  );
};

const BodyView = function ({ data = [] }) {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              borderWidth: 1,
              borderTopColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  width: 100,
                  height: 100,
                  uri: "https://static.toiimg.com/thumb/msid-72519407,width-800,height-600,resizemode-75,imgsize-1113261,pt-32,y_pad-40/72519407.jpg",
                }}
              />
            </View>
            <View
              style={{
                padding: 20,
              }}
            >
              <Text>{item.title}</Text>
              <Text>Some sub title</Text>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#ccc",
                position: 'absolute',
                right: 10
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
};

const FooterView = function ({}) {
  return null;
};

export default () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleDataSetting = function (data = []) {
    setData(data);
  };

  React.useEffect(function () {
    (function () {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((dataInJSON) => {
          handleDataSetting(dataInJSON);
        })
        .catch(() => null);
    })();
  }, []);
  return (
    <ContainerView
      HeaderView={() => <HeaderView />}
      BodyView={() => <BodyView data={data} />}
      FooterView={() => <FooterView />}
    />
  );
};

const styles = StyleSheet.create({});
