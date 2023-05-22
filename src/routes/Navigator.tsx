import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pincode } from '../screens/Pincode';
import { NavigationContainer } from '@react-navigation/native';

export type MainStackParams = {
  PinCode?: { code: string };
};

const MainStackCreator = createStackNavigator<MainStackParams>();

const options = { headerShown: false };

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStackCreator.Navigator>
        <MainStackCreator.Screen name="PinCode" component={Pincode} options={options} />
      </MainStackCreator.Navigator>
    </NavigationContainer>
  );
};
