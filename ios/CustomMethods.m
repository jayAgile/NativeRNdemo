//
//  CustomMethods.m
//  NativeRNdemo
//
//  Created by Agile-73 on 02/06/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CustomMethods, NSObject)
  RCT_EXTERN_METHOD(simpleMethod)

RCT_EXTERN_METHOD(simpleMethodReturns:
  (RCTResponseSenderBlock) callback
)

RCT_EXTERN_METHOD(simpleMethodWithParams:
  (NSString *) param
  callback: (RCTResponseSenderBlock)callback
)

RCT_EXTERN_METHOD(
   resolvePromise: (RCTPromiseResolveBlock) resolve
   rejecter: (RCTPromiseRejectBlock) reject
 )

RCT_EXTERN_METHOD(
   rejectPromise: (RCTPromiseResolveBlock) resolve
   rejecter: (RCTPromiseRejectBlock) reject
 )

@end
