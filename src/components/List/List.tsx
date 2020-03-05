import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideosActions, selectVideosItems} from '../../modules/videos';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideosItems);
  console.log('List:videos', videos);

  const handleFetchVideos = useCallback(
    () => dispatch(VideosActions.fetchVideos()),
    [dispatch],
  );

  return (
    <View>
      <Text>List</Text>
      <TouchableOpacity onPress={handleFetchVideos}>
        <Text>Fetch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default List;
