import React from 'react';
import {Text, View, Button} from 'react-native';

const VideoDetailsScreen = ({navigation, route}) => {
  return (
    <View>
      <Button
        title="Go back"
        onPress={() => navigation.navigate('VideosList')}
      />
      <Text>{route.params.title}</Text>
    </View>
  );
};

export default VideoDetailsScreen;
