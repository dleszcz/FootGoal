import React, {useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from '../ListItem/ListItem';
import ThemeContext from '../../contexts/Theme.context';
import {selectIsLoading} from '../../modules/Videos';

interface IVideosList {
  items: any[];
}

const List: React.FC<IVideosList> = ({items}) => {
  const {textStyles} = useContext(ThemeContext);
  const isLoading = useSelector(selectIsLoading);

  return (
    <View>
      {!items.length ? (
        <Text style={[textStyles, {textAlign: 'center'}]}>
          {isLoading ? 'Loading...' : 'No results'}
        </Text>
      ) : (
        <View style={{paddingBottom: 45}}>
          <FlatList
            data={items}
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.title}
          />
        </View>
      )}
    </View>
  );
};

export default List;
