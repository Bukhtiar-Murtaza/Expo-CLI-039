import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: '',
      price: 0,
      disc: '',
      screen: 0,
      discPrice: 0,
      saved: 0,
    };
  }

  numPressed = (num) => {
    this.setState({
      num: this.state.num + num,
    });
  };

  clear = () => {
    this.setState({
      num: '',
      price: 0,
      disc: '',
    });
  };

  enterPrice = () => {
    this.setState({
      price: this.state.num,
      num: '',
      screen: 1,
    });
  };

  enterDiscount = () => {
    this.setState({
      disc: this.state.num,
      discPrice: this.state.price * ((100 - this.state.disc) / 100),
      saved: this.state.price * (this.state.disc / 100),
      screen: 2,
    });
  };

  render() {
    const Price = (
      <View style={styles.container}>
        <Text style={styles.textHeading}> DISCOUNT CALCULATOR </Text>
        <Text style={styles.text}> Enter Price Of Item </Text>
        <Text style={styles.textInput}> {this.state.num} </Text>

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
          <TouchableOpacity style={styles.button} onPress={this.clear}>
            <Text> CLEAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '0')}>
            <Text> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.enterPrice}>
            <Text> ENTER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const Discount = (
      <View style={styles.container}>
        <Text style={styles.textHeading}> DISCOUNT CALCULATOR </Text>
        <Text style={styles.text}> Enter Discount Percentage </Text>
        <Text style={styles.textInput}> {this.state.num} </Text>

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
          <TouchableOpacity style={styles.button} onPress={this.clear}>
            <Text> CLEAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.numPressed.bind(this, '0')}>
            <Text> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.enterDiscount}>
            <Text> ENTER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const Final = (
      <View style={styles.container}>
        <Text style={styles.textHeading}> DISCOUNT CALCULATOR </Text>
        <Text style={styles.text}> You Saved {this.state.saved}</Text>
        <Text style={styles.textInput}>
          {' '}
          Final Price is {this.state.discPrice}{' '}
        </Text>
      </View>
    );

    if (this.state.screen === 0) {
      return <View style={styles.container}>{Price}</View>;
    }
    if (this.state.screen === 1) {
      return <View style={styles.container}>{Discount}</View>;
    }
    if (this.state.screen === 2) {
      return <View style={styles.container}>{Final}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
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
    fontWeight: 'normal',
    textAlign: 'center',
  },

  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 35,
    paddingBottom: 10,
  },

  textInput: {
    fontSize: 35,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: 20,
  },
});
