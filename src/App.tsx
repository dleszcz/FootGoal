import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {useDarkMode} from 'react-native-dark-mode';

import {store} from './modules/store';
import Videos from './components/Videos/Videos';
import Header from './components/Header/Header';
import {ThemeProvider} from './contexts/theme.context';

const App: React.FC = () => {
  const isSystemDarkMode = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(isSystemDarkMode);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <ThemeProvider value={{isDarkMode}}>
          <Header toggleDarkMode={toggleDarkMode} />
          <Videos />
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
