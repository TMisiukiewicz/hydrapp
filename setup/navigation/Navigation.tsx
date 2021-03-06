import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNames from '../../utils/enums/ScreenNames';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.HomeScreen} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
