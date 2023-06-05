/**
 * This exposes the native CalendarModule module as a JS module. This has a
 * function 'createCalendarEvent' which takes the following parameters:
 *
 * 1. String name: A string representing the name of the event
 * 2. String location: A string representing the location of the event
 */
import {NativeModules} from 'react-native';
const {CalendarModule, CustomMethods} = NativeModules;

interface CalendarInterface {
  createCalendarEvent(name: string, location: string): void;
}

interface SimpleInterface {
  simpleMethod(): void;
  simpleMethodReturns(result: any): void;
  simpleMethodWithParams(result: any): void;
  resolvePromise(): Promise<any>;
  rejectPromise(): Promise<any>;
}

export const CalendarModules = CalendarModule as CalendarInterface;
export const SimpleModules = CustomMethods as SimpleInterface;
// export default CalendarModule as CalendarInterface;
