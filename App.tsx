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

  render() {
    return (
      <SafeAreaView>
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
