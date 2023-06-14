import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomNav = ({title, showBackButton}) => {
  const [navTitle, setNavTitle] = useState (title);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {showBackButton &&
        navTitle !== 'no' &&
        <TouchableOpacity onPress={() => console.log ('Back button pressed')}>
          <Text style={{marginLeft: 10}}>{'< Back'}</Text>
        </TouchableOpacity>}
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{navTitle}</Text>
      <View style={{width: 50}} />
    </View>
  );
};

export default CustomNav;
