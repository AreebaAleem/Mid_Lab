import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList, SectionList} from 'react-native';
import CustomNav from './CustomNav';
import CustomButton from './CustomButton';
import {Navigation} from 'react-native-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Welcome';
import MySectionList from './MySectionList';
import MyFlatList from './MyFlatList';
import {NavigationContainer} from '@react-navigation/native';
import Top from './top';
import Bottom from './bottom';

const navigatestack = createNativeStackNavigator ();

const App = () => {
  // const [myVar, setMyVar] = useState ('Welcome');

  return (
    // <View style={styles.container}>
    //   <CustomNav title={myVar} showBackButton={myVar !== 'no'} />
    //   <CustomButton my="Top" position="top" />
    //   <CustomButton my="Left" position="left" />
    //   <CustomButton my="Right" position="right" />
    //   <CustomButton my="Bottom" position="bottom" />
    //   <View style={{marginTop: 20}}>
    //     <Button title="Change Title" onPress={() => setMyVar ('Changed')} />
    //   </View>

    (
      <NavigationContainer>
        <navigatestack.Navigator initialRouteName="Welcome">

          <navigatestack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <navigatestack.Screen
            name="FlatList"
            component={MyFlatList}
            options={{headerShown: false}}
          />
          <navigatestack.Screen
            name="Top"
            component={Top}
            options={{headerShown: false}}
          />

          <navigatestack.Screen
            name="Bottom"
            component={Bottom}
            options={{headerShown: false}}
          />

          <navigatestack.Screen
            name="SectionList"
            component={MySectionList}
            options={{headerShown: false}}
          />
        </navigatestack.Navigator>
      </NavigationContainer>
    )
    // </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
});

export default App;
