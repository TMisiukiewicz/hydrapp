import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNames from '../../utils/enums/ScreenNames';
import Home from '../../screens/Home';
import HomeInactiveIcon from '../../assets/icons/home-icon-inactive.svg';
import HomeActiveIcon from '../../assets/icons/home-icon-active.svg';
import CalendarInactiveIcon from '../../assets/icons/calendar-icon-inactive.svg';
import CalendarActiveIcon from '../../assets/icons/calendar-icon-active.svg';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name={ScreenNames.HomeScreen}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <HomeActiveIcon /> : <HomeInactiveIcon />,
          }}
        />
        <Tab.Screen
          name={ScreenNames.DetailsScreen}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <CalendarActiveIcon /> : <CalendarInactiveIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
