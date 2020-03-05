import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import ThemeContext from '../../contexts/theme.context';
import Videos from '../../components/Videos/Videos';

const VideosListScreen = () => {
  return (
    <View>
      <Videos />
    </View>
  );
};

export default VideosListScreen;
