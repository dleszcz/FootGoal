import React, {useContext} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ThemeContext from '../../contexts/theme.context';

interface IListItem {
  title: string;
  thumbnail: string;
}

const ListItem: React.FC<IListItem> = props => {
  const {isDarkMode} = useContext(ThemeContext);

  const titleStyles = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <TouchableOpacity>
      <Text style={[styles.title, titleStyles]}>{props.title}</Text>
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
