import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StatusBar from '~/components/StatusBar';

import Navigation from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigation />
    </NavigationContainer>
  );
}
