import React from 'react';
import {Text, View, Button, FlatList} from 'react-native';

const urlRegex = /(https?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/ig;

const getVideo = (embed: string) => {
  const matchedStrings = embed.match(urlRegex);
  const [url] = matchedStrings;
  const cleanedUrl = url.replace("'", '');

  return cleanedUrl;
};

const VideoDetailsScreen = ({navigation, route}) => {
  const {title, videos, competition, date, embed} = route.params;

  return (
    <View>
      <Button
        title="Go back"
        onPress={() => navigation.navigate('VideosList')}
      />
      <Text>{title}</Text>

      <FlatList
        data={videos}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{getVideo(item.embed)}</Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default VideoDetailsScreen;
