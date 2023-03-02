import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NativeModules} from 'react-native';

export default class App extends Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="Go to Android"
          onPress={async () => {
            const result = await NativeModules.MyModule.launchNativeScreen();
            this.setState({result});
          }}
        />
        {this.state.result && <Text>{this.state.result}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
