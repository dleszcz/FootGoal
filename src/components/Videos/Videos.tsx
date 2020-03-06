import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ThemeContext from '../../contexts/Theme.context';
import {VideosActions, selectVideosItems} from '../../modules/Videos';
import List from '../List/List';

const Videos: React.FC = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideosItems);
  const {containerStyles} = useContext(ThemeContext);

  useEffect(() => {
    dispatch(VideosActions.fetchVideos());
  }, [dispatch]);

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
