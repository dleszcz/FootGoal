import React from 'react';
import {View, FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';

interface IVideosList {
  items: any[];
}

const List: React.FC<IVideosList> = ({items}) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem {...item} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default List;
