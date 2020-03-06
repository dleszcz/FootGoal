import React, {useEffect, useContext, useState, useCallback} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ThemeContext from '../../contexts/Theme.context';
import {VideosActions, selectFilteredItems, selectQuery} from '../../modules/Videos';
import List from '../List/List';

const Videos: React.FC = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectFilteredItems);
  const query = useSelector(selectQuery);
  const {containerStyles, textStyles, isDarkMode} = useContext(ThemeContext);
  const [searchQuery, onChangeQuery] = useState(query);
  const handleChangeQouery = useCallback((text) => {
    onChangeQuery(text);
    dispatch(VideosActions.setVideosQuery(text));
  }, [dispatch]);

  useEffect(() => {
    dispatch(VideosActions.fetchVideos());
  }, [dispatch]);

  return (
    <View style={[styles.container, containerStyles, {flex: 1}]}>
      <TextInput
        style={{ height: 40, borderColor: isDarkMode ? '#fff' : '#000', borderBottomWidth: 0.5, marginBottom: 15, ...textStyles }}
        onChangeText={handleChangeQouery}
        value={searchQuery}
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        placeholder={'Type team, competition or country name'}
      />
      <List items={videos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Videos;
