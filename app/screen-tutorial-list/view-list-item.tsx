import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Button,
  Card,
  Icon,
  Input,
  NavBar,
  Text,
  Block,
} from "galio-framework";

{
  /* <Block
imgStyle={{
  width: null,
  height: 100,
}}
imgSrc={item?.uri}
margL={12}
bgColor={"pink"}
width={140}
height={180}
>
<Block blockStyle={{}}>
  <Text>mack</Text>
  <Text>mack</Text>
  <Block>
    <Text>mack</Text>
    <Text>mack</Text>
  </Block>
</Block>
</Block> */
}

// function Block({
//   blockStyle = {},
//   imgStyle = {},
//   imgSrc,
//   paddB = 0,
//   paddT = 0,
//   paddL = 0,
//   paddR = 0,
//   padd = 0,
//   marg = 0,
//   margT = 0,
//   margL = 0,
//   margR = 0,
//   margB = 0,
//   width = 0,
//   height = 0,
//   bgColor = "",
//   title = "",
//   subtitle = "",
//   flex = 1,
//   image = "",
//   safe = false,
//   children,
//   vstack,
//   hstack,
//   childrenB,
//   childrenL,
//   childrenT,
//   childrenR,
//   childrenM,
//   childrenC,
//   absolute,
//   relative,
//   top,
//   bottom,
//   left,
//   right,
//   wrap,
// }) {
//   const styles = [];

//   if (padd)
//     styles.push({
//       padding: padd,
//     });
//   if (marg)
//     styles.push({
//       margin: marg,
//     });

//   if (width)
//     styles.push({
//       width: width,
//     });
//   if (height)
//     styles.push({
//       height: height,
//     });
//   if (flex)
//     styles.push({
//       flex: flex,
//     });
//   // padding
//   if (paddB)
//     styles.push({
//       paddingBottom: paddB,
//     });
//   if (paddT)
//     styles.push({
//       paddingTop: paddT,
//     });
//   if (paddL)
//     styles.push({
//       paddinLeft: paddL,
//     });

//   if (paddR)
//     styles.push({
//       paddingRight: paddR,
//     });
//   // margin
//   if (margR)
//     styles.push({
//       marginRight: margR,
//     });

//   if (margB)
//     styles.push({
//       marginBottom: margB,
//     });

//   if (margL)
//     styles.push({
//       marginLeft: margL,
//     });
//   if (margT)
//     styles.push({
//       marginTop: margT,
//     });
//   // bg Color
//   if (bgColor)
//     styles.push({
//       backgroundColor: bgColor,
//     });

// if (vstack)
//   styles.push({
//     flexDirection: "column",
//   });
// if (hstack)
//   styles.push({
//     flexDirection: "row",
//   });

// // no wrap if u want center
// if (!wrap && childrenM)
//   styles.push({
//     justifyContent: "center",
//   });

// // no wrap if u want center
// if (!wrap && childrenC)
//   styles.push({
//     alignItems: "center",
//   });

// if (childrenB)
//   styles.push({
//     justifyContent: "flex-end",
//   });

// if (childrenT)
//   styles.push({
//     justifyContent: "flex-start",
//   });

// if (childrenR)
//   styles.push({
//     alignItems: "flex-end",
//   });

// if (childrenL)
//   styles.push({
//     alignItems: "flex-start",
//   });

// if (wrap)
//   styles.push({
//     flexWrap: "wrap",
//   });

// if (absolute)
//   styles.push({
//     position: "absolute",
//   });
// if (absolute && left)
//   styles.push({
//     left: left,
//   });
// if (absolute && top)
//   styles.push({
//     top: top,
//   });

// if (absolute && bottom)
//   styles.push({
//     bottom: bottom,
//   });
// if (absolute && right)
//   styles.push({
//     right: right,
//   });

//   return (
//     <View style={[blockStyle]}>
//       {
//         <>
//           {imgSrc && imgStyle ? (
//             <Image style={imgSrc ? imgStyle : {}} source={{ uri: imgSrc }} />
//           ) : null}
//           {children}
//         </>
//       }
//     </View>
//   );
// }

const ListItem = ({
  item = {},
  onPress = () => console.log("ListItem has no nav action provided"),
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Block
        shadow
        style={{
          marginRight: 12,
          marginBottom: 8,
          marginTop: 12
        
        }}
      >
        <Image
          style={{
            width: 140,
            height: 180,
            borderRadius: 8
          }}
          source={{
            uri: item.uri,
          }}
        />
      </Block>
      <Text h6>Some Title</Text>
      <Text>title</Text>
    </TouchableOpacity>
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
  itemPhoto: {
    width: 140,
    height: 160,
    borderRadius: 12,
  },
  itemText: {
    color: "#121212",
    marginTop: 5,
    fontSize: 18,
  },
});
