/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { Login } from './src/screens/Login/Login';
import { CategoryProducts } from './src/screens/Category_products/CategoryProducts';
import { Home } from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import { store } from './src/redux/store';
import { useSelector } from "react-redux";
import { Button, Image, Text, View } from 'react-native';
import {
  MagnifyingGlassIcon
} from 'react-native-heroicons/outline';
import { Checkout } from './src/screens/Checkout/Checkout';
import { AddAddress } from './src/screens/Address/AddAddress';
// import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  // const { currentUser } = useSelector((state: any) => state.user);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Category" component={CategoryProducts} options={({ route }) => ({
            title: route?.params?.category, headerTitleStyle: {
              fontSize: 20
            },
            headerRight: () => (
              <MagnifyingGlassIcon color="black" size="30" />
            )
          })}
          />
          <Stack.Screen name="Checkout" component={Checkout} options={({ route }) => ({
            headerRight: () => (
              <View>
                <Text style={{
                  color:"green",
                  fontWeight:"bold",
                  fontSize:15
                }} >Share</Text>
              </View>
            )
          })} />
          <Stack.Screen name="Add Address" component={AddAddress} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
