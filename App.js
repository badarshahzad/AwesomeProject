import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    let object = {
      uri: 'https://media.gettyimages.com/photos/assortment-of-fruits-picture-id173255460'
    }

    return (
      <View style={styles.container}>
      <Text>Kaka</Text>
        <View style={styles.header} />
        <View style={styles.content} />
        <View style={styles.bottom} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: { backgroundColor: 'powderblue',  width:50,
  height:50,},
  content: { backgroundColor: 'skyblue',  width:50,
  height:50,},
  bottom: { backgroundColor: 'steelblue',  width:50,
  height:50,},
 
});
