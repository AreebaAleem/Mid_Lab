import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SectionList,
  View,
  Image,
  TouchableOpacity,
  useState,
} from 'react-native';
import {CustomHook} from './CustomHook';

const Top = () => {
  const data = CustomHook ('https://fakestoreapi.com/products');

  return (
    <View style={styles.container}>
      <View style={styles.des}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.textContainer}>
                  <View style={styles.titlePriceContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.rating}>
                      {item.rating.rate} ({item.rating.count} reviews)
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          style={styles.sec}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'cadetblue',
    marginTop: 20,
  },
  des: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sec: {
    flex: 1,
    marginTop: 8,
  },
  itemContainer: {
    backgroundColor: 'mistyrose',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    width: 175,
    height:300,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 80,
    marginRight: 10,
    // marginTop:3
  },
  textContainer: {
    flex: 1,
  },
  titlePriceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 1,
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    color: 'black',
    fontSize: 14,
  },
  rating: {
    padding: 5,
    fontSize: 12,
    color: 'blue',
  },
  description: {
    fontSize: 11,
  },
  itemContainerLeft: {
    marginBottom: 10,
  },
  itemContainerRight: {
    marginBottom: 10,
    marginTop: 20,
  },
  leftColumn: {
    marginRight: 5,
  },
  rightColumn: {
    marginLeft: 8,
  },
  rightColumn2: {
    marginTop: 5,
  },
});

export default Top;
