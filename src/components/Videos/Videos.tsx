import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ThemeContext from '../../contexts/theme.context';
import {VideosActions, selectVideosItems} from '../../modules/videos';
import List from '../List/List';

const Videos: React.FC = (props) => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideosItems);
  const {isDarkMode} = useContext(ThemeContext);

  useEffect(() => {
    dispatch(VideosActions.fetchVideos());
  }, [dispatch]);

  const containerStyles = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <View style={[styles.container, containerStyles]}>
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
