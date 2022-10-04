import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { 
  HomePage, 
  AboutPage 
} from '~/src/pages/exports';

const Tab = createMaterialBottomTabNavigator();

const App = () => {

  return (
    // <HomePage />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="About" component={AboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );  
}

export default App;