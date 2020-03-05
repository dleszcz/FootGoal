import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

interface IListItem {
  title: string;
  thumbnail: string;
}

const ListItem: React.FC<IListItem> = props => {
  console.log('props', props);
  return (
    <TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={styles.thumbnail} source={{uri: props.thumbnail}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 5,
  },
  thumbnail: {
    height: 240,
    width: '100%',
  },
});

export default ListItem;
