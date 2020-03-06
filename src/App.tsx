import React, {useState} from 'react';
import {SafeAreaView, View, Text, Switch, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {useDarkMode} from 'react-native-dark-mode';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './modules/store';
import {ThemeProvider} from './contexts/Theme.context';
import VideosListScreen from './screens/VideosList.screen';
import VideoDetailsScreen from './screens/VideoDetails.screen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const isSystemDarkMode = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(isSystemDarkMode);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  const containerStyles = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const headerStyles = {...containerStyles};

  const textStyles = {
    color: isDarkMode ? '#fff' : '#000',
  };

  const getScreenOptions = (title, isDarkModeEnabled) => {
    return {
      headerTitle: () => (
        <View style={[styles.container, containerStyles]}>
          <Text style={[styles.title, textStyles]}>{title}</Text>
        </View>
      ),
      headerRight: () => (
        <Switch value={isDarkModeEnabled} onValueChange={toggleDarkMode} />
      ),
      headerStyle: {
        ...headerStyles,
      },
      headerLeftContainerStyle: {
        paddingLeft: 5,
      },
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerTintColor: textStyles.color,
      headerBackTitle: ' ',
    };
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={{height: '100%'}}>
        <ThemeProvider
          value={{
            isDarkMode,
            textStyles,
            containerStyles,
          }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="VideosList">
              <Stack.Screen
                name="VideosList"
                component={VideosListScreen}
                options={{...getScreenOptions('Videos List', isDarkMode)}}
              />
              <Stack.Screen
                name="VideoDetails"
                component={VideoDetailsScreen}
                options={{...getScreenOptions('Video Details', isDarkMode)}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
