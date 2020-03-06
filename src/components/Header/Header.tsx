import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import ThemeContext from '../../contexts/Theme.context';

interface IHeader {
  toggleDarkMode: void;
}

const Header: React.FC<IHeader> = ({toggleDarkMode}) => {
  const {textStyles, containerStyles} = useContext(ThemeContext);

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.title, textStyles]}>-</Text>
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
