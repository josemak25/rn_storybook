/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUIRoot from './storybook';

AppRegistry.registerComponent(appName, () => (__DEV__ ? StorybookUIRoot : App));
