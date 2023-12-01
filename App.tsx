import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import {NativeModules} from 'react-native';
import {CalendarModules, SimpleModules} from './ NativeCalendarModule';

export default class App extends Component {
  state = {
    result: null,
  };
  onObjCSimpleMethodPress = () => {
    // console.log('We will invoke the native module here!');
    try {
      // NativeModules?.CalendarModule.createCalendarEvent(
      //   'testName',
      //   'testLocation',
      // );
      CalendarModules.createCalendarEvent('foo', 'bar');
    } catch (err) {
      console.log(err);
    }
  };

  onSimpleMethodPress = () => {
    SimpleModules.simpleMethod();
  };

  onSimpleMethodReturnPress = () => {
    SimpleModules.simpleMethodReturns(result => {
      alert(result);
    });
  };

  onSimpleMethodParamsPress = () => {
    SimpleModules.simpleMethodWithParams('Jay', result => {
      alert(result);
    });
  };

  onResolvePress = async () => {
    const result = await SimpleModules.resolvePromise();
    alert(result);
  };

  onRejectPress = async () => {
    try {
      await SimpleModules.rejectPromise();
    } catch (e) {
      console.log(e);
    }
  };

  onAndroidNativePress = async () => {
    console.log('Android Native pressed');
    NativeModules.CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
    );
  };

  render() {
    return (
      <SafeAreaView>
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
        <Button
          title="Android Native Module"
          color="#841584"
          onPress={this.onAndroidNativePress}
        />
        <Button
          title="Objective C Simple Method"
          color="#841584"
          onPress={this.onObjCSimpleMethodPress}
        />
        <Button
          title="Simple Method"
          color="#841584"
          onPress={this.onSimpleMethodPress}
        />
        <Button
          title="Simple Method Returns"
          color="#841584"
          onPress={this.onSimpleMethodReturnPress}
        />
        <Button
          title="Simple Method With Params"
          color="#841584"
          onPress={this.onSimpleMethodParamsPress}
        />
        <Button
          title="Resolve Promise"
          color="#841584"
          onPress={this.onResolvePress}
        />
        <Button
          title="Reject Promise"
          color="#841584"
          onPress={this.onRejectPress}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
