import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import ThemeContext from '../../contexts/theme.context';

interface IHeader {
  toggleDarkMode: void;
}

const Header: React.FC<IHeader> = ({toggleDarkMode}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const containerStyles = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const textStyles = {
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.title, textStyles]}>Header</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default Header;
