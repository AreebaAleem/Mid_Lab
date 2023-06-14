import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';
import EmojiPicker from 'emoji-picker-react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME {'\u{1F49C}'} </Text>
      <Text style={{fontSize:15, alignItems:'stretch',paddingLeft:30}}>
      Press any Button to go on to that screen! {('\u{1F60A}')} </Text>

      <CustomButton pressed="FlatList" />
      <CustomButton pressed="SectionList" />
      <CustomButton pressed="Top" />
      <CustomButton pressed="Bottom" />

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue',
    marginTop: 1,
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Welcome;
