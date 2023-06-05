//
//  CustomMethods.swift
//  NativeRNdemo
//
//  Created by Agile-73 on 02/06/23.
//

import Foundation

@objc(CustomMethods) class CustomMethods: NSObject {
  
  @objc
    static func requiresMainQueueSetup() -> Bool {
      return true
    }
  // A simple function

  @objc public func simpleMethod() {
    NSLog("Hello world")
  }
  
  // A simple function that returns a value
  @objc public func simpleMethodReturns(
      _ callback: RCTResponseSenderBlock
    ) {
      callback(["CustomMethods.simpleMethodReturns()"])
    }
  
  // A simple function with a parameter that returns a value
  @objc public func simpleMethodWithParams(
     _ param: String,
     callback: RCTResponseSenderBlock
   ) {
     callback(["CustomMethods.simpleMethodWithParams('\(param)')"])
   }
  
 //  A simple asynchronous function that resolves (asynchronously returns a value)
  @objc public func resolvePromise(
     _ resolve: RCTPromiseResolveBlock,
     rejecter reject: RCTPromiseRejectBlock
   ) -> Void {
     resolve("CustomMethods.resolvePromise() called")
   }
  
  //  A simple asynchronous function that reject (asynchronously returns a value)
  @objc public func rejectPromise(
     _ resolve: RCTPromiseResolveBlock,
     rejecter reject: RCTPromiseRejectBlock
   ) -> Void {
     reject("0", "CustomMethods.rejectPromise() called", nil)
   }
  
}
