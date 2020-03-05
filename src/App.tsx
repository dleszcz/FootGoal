import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {useDarkMode} from 'react-native-dark-mode';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {store} from './modules/store';
import Header from './components/Header/Header';
import {ThemeProvider} from './contexts/theme.context';
import VideosListScreen from './screens/videosList/videosList.screen';
import VideoDetailsScreen from './screens/videoDetails/videoDetails.screen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const isSystemDarkMode = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(isSystemDarkMode);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <Provider store={store}>
      <SafeAreaView style={{height: '100%'}}>
        <ThemeProvider value={{isDarkMode}}>
          <Header toggleDarkMode={toggleDarkMode} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="VideosList" headerMode="none">
              <Stack.Screen name="VideosList" component={VideosListScreen} />
              <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
