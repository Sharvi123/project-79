import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import SignupLoginScreen from './screens/SignupLoginScreen';
import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen: SignUpLoginScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);