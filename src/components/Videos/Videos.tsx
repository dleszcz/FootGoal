import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideosActions, selectVideosItems} from '../../modules/videos';
import List from '../List/List';

const Videos: React.FC = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideosItems);

  useEffect(() => {
    dispatch(VideosActions.fetchVideos());
  }, [dispatch]);

  return (
    <View>
      <List items={videos} />
    </View>
  );
};

export default Videos;
