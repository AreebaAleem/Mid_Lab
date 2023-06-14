import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SectionList,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';

const MySectionList = () => {
  const Data = [
    {
      title: 'Main Items',
      data: ['Pizza', 'Burger', 'Kebab', 'Sandwiches', 'Pasta'],
    },

    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Juice', '7UP', 'Tea'],
    },

    {
      title: 'Desserts',
      data: ['CupCake', 'Ice-Cream', 'Brownie', 'Molten Lava', 'Trifle'],
    },

    {
      title: 'Starters',
      data: ['Soup', 'Wings', 'Fries', 'Chinese', 'Sweet Chicken'],
    },

    {
      title: 'Desi',
      data: [
        'Boneless Handi',
        'Chicken Karahi',
        'Biryani',
        'Fried Rice',
        'Manchurian',
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={Data}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.SectionHeader}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: 'pink',
    marginTop: 40,
  },
  SectionHeader: {
    backgroundColor: 'lightblue',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  item: {
    backgroundColor: 'lightgreen',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius:15
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default MySectionList;
