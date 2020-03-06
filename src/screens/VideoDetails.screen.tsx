import React, {useContext, useRef} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import ThemeContext from '../contexts/Theme.context';

const VideoDetailsScreen = ({route}) => {
  const {title, videos} = route.params;
  const {textStyles, containerStyles} = useContext(ThemeContext);
  const webViewRef = useRef();

  const viewStyles = {
    ...containerStyles,
    minHeight: Dimensions.get('window').height,
  };

  return (
    <View style={[styles.container, viewStyles]}>
      <Text style={[styles.title, textStyles]}>{title}</Text>
      <FlatList
        data={videos}
        renderItem={({item}) => (
          <View>
            <Text style={[styles.subtitle, textStyles]}>{item.title}</Text>
            <View style={{height: 250, flex: 1}}>
              <View style={{flex: 1, overflow: 'hidden'}}>
                <WebView
                  style={styles.webView}
                  source={{html: item.embed}}
                  scrollEnabled={false}
                  ref={webViewRef}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  webView: {
    height: 225,
    position: 'absolute',
    top: -10,
    left: -5,
    bottom: 0,
    right: -5,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    padding: 5,
    fontWeight: '600',
  },
  subtitle: {
    padding: 5,
    fontWeight: '600',
  },
});

export default VideoDetailsScreen;
