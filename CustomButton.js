import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomButton = props => {
  //   useEffect (() => {console.log (props.my)
  // });
  //   loginBtnPressed = () => {};

  //   if (props.my == 'top') {
  //     return (
  //       <View>
  //         <TouchableOpacity
  //           style={{
  //             backgroundColor: 'grey',
  //             width: 100,
  //             height: 30,
  //             alignItems: 'center',
  //             justifyContent: 'center',
  //           }}
  //           onPress={loginBtnPressed}
  //         >
  //           <Text> Button 1 </Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   } else if (props.my == 'bottom') {
  //     return (
  //       <View style={styles.container}>
  //         <TouchableOpacity
  //           style={{backgroundColor: 'green', width: 100, height: 30}}
  //           onPress={loginBtnPressed}
  //         >
  //           <Text> Button 2 </Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   } else if (props.my == 'left') {
  //     return (
  //       <View style={styles.container}>
  //         <TouchableOpacity
  //           style={{backgroundColor: 'yellow', width: 100, height: 30}}
  //           onPress={loginBtnPressed}
  //         >
  //           <Text> Button 3 </Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   } else if (props.my == 'right') {
  //     return (
  //       <View style={styles.container}>
  //         <TouchableOpacity
  //           style={{backgroundColor: 'pink', width: 100, height: 30}}
  //           onPress={loginBtnPressed}
  //         >
  //           <Text> Button 4 </Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }
  const navigation = useNavigation ();
  const Press1 = () => {
    navigation.navigate ('FlatList');
  };
  const Press2 = () => {
    navigation.navigate ('SectionList');
  };
  const Press3 = () => {
  navigation.navigate ('Top');
};

const Press4 = () => {
  navigation.navigate ('Bottom');
};


  if (props.pressed == 'FlatList') {
    return (
      <View style={{paddingLeft: 90, marginTop: 220}}>
        <TouchableOpacity style={styles.button} onPress={Press1}>
          <Text style={styles.text}>FlatList {('\u{2728}')} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (props.pressed == 'SectionList') {
    return (
      <View style={{paddingLeft: 90, marginTop: 10}}>
        <TouchableOpacity style={styles.button} onPress={Press2}>
          <Text style={styles.text}>SectionList {('\u{2728}')}</Text>
        </TouchableOpacity>
      </View>
    );
  }  else if (props.pressed == 'Top') {
    return (
      <View style={{paddingLeft: 90, marginTop: 10}}>
        <TouchableOpacity style={styles.button} onPress={Press3}>
          <Text style={styles.text}>Top {('\u{2728}')}</Text>
        </TouchableOpacity>
      </View>
    );
    } else if (props.pressed == 'Bottom') {
    return (
      <View style={{paddingLeft: 90, marginTop: 10}}>
        <TouchableOpacity style={styles.button} onPress={Press4}>
          <Text style={styles.text}>Bottom {('\u{2728}')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create ({
  button: {
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  text: {
    color: 'mediumorchid',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CustomButton;
