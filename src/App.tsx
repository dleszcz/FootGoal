import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './modules/store';
import Videos from './components/Videos/Videos';

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView>
      <Videos />
    </SafeAreaView>
  </Provider>
);

export default App;
