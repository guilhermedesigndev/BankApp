import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '~/components/Icons';
import * as theme from '~/styles/theme';

// Screens
import Home from '~/screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home-outline',
  },
  Catalog: {
    name: 'shopping-bag-outline',
  },
  History: {
    name: 'refresh-outline',
  },
  More: {
    name: 'grid-outline',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopColor: 'transparent',
          height: 60,
          paddingTop: 10,
          borderBottomWidth: 10,
          borderBottomColor: '#FFFFFF',
        },
        labelStyle: {
          fontFamily: theme.fonts.light,
        },
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.grayLight,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Catalog" component={Home} />
      <Tab.Screen name="History" component={Home} />
      <Tab.Screen name="More" component={Home} />
    </Tab.Navigator>
  );
}
