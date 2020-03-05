import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import List from './components/List/List';
import Header from './components/Header/Header';
import {store} from './modules/store';

const App: React.FC = () => {
  console.log('App store', store);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>TS</Text>
              <Text style={styles.sectionDescription}>
                It is an TypeScript boilerplate
              </Text>
              <Header />
              <List />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
