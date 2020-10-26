/**
 * @format
 */

if(__DEV__){
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
console.log(process.env.REACT_APP_DATAS_COMEMORATIVAS_API_KEY)
import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
