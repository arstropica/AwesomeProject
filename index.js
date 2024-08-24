/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const isHermes = () => !!global.HermesInternal;
console.log('Is using Hermes: ', !!global.HermesInternal);

AppRegistry.registerComponent(appName, () => App);
