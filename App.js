import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text> Hello! {this.props.name} !</Text>
    );
  }
}

class FruitPictures extends Component {
  render() {
    return (
      <View>
        {/* Here will be different pictures can be place */}
        <Image source={this.props.pics} style={{ width: 100, height: 100 }} />
      </View>
    );
  }
}

// Blinking text class which blink over a time
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true }; // set the initiale state


    // Toggle the state every seconds 
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.red}> {display} </Text>
    );
  }
}

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




        <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
          {/* Example of picture */}
          <View >
            <Image source={pic} style={{ width: 193, height: 110 }} />
          </View>

          <Text>Hey! Look at this pic, here are Bananas!</Text>

          {/* Example of praps to add different names */}
          <Greeting name="Badar" />
          <Greeting name="Shahzad" />
          <Greeting name="Khan" />

        </View>

        <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
          {/* Add couple of fruit pictures */}
          <FruitPictures pics={object} />
          {/* Blinking text dumi data */}
          <Blink text="1" />
          <Blink text="2" />
          <Blink text="3" />
          <Blink text="4" />
          <Blink text="5" />
          <Blink text="0" />
        </View>

      </View>





    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  red: {
    color: 'red',
  },
});
