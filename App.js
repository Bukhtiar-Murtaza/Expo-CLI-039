import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: ' ',
      price: 0,
      disc: 0,
      screen: 0,
    };
  }

  numPressed = (num) => {
    this.setState({
      num: this.state.num + num,
    });
  };

  clear = () => {
    this.setState({
      num: ' ',
      price: 0,
      disc: 0
    });
  };

  enterPrice = (num) => {
    this.setState({
      price: this.state.num
    });
  };

  render() {
    const Price = (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text> Enter Price Of Item </Text>
          <Text> {this.state.num} </Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '1')}>
            <Text> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '2')}>
            <Text> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '3')}>
            <Text> 3 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '4')}>
            <Text> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '5')}>
            <Text> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '6')}>
            <Text> 6 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '7')}>
            <Text> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '8')}>
            <Text> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '9')}>
            <Text> 9 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.clear}>
            <Text> CLEAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '0')}>
            <Text> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.enterPrice}>
            <Text> ENTER </Text>
          </TouchableOpacity>
        </View>

      </View>
    );

    const Discount = (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text> Enter Discount Percentage </Text>
          <Text> {this.state.disc} </Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '1')}>
            <Text> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '2')}>
            <Text> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '3')}>
            <Text> 3 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '4')}>
            <Text> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '5')}>
            <Text> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '6')}>
            <Text> 6 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '7')}>
            <Text> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '8')}>
            <Text> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '9')}>
            <Text> 9 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.clear}>
            <Text> CLEAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '0')}>
            <Text> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.enterPrice}>
            <Text> ENTER </Text>
          </TouchableOpacity>
        </View>

      </View>
    );

    if (this.state.screen === 0) {
      return <View style={styles.container}>{Price}</View>;
    }
    if (this.state.screen === 1) {
      return <View style={styles.container}>{Discount}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
  },

  button2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    pading: '20',
    backgroundColor: '#DDDDDD',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
});