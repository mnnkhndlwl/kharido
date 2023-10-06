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
import { DeliveryScreen } from './src/screens/Delivery/DeliveryScreen';
import { Profile } from './src/screens/Profile/Profile';
import { YourOrders } from './src/screens/YourOrders/YourOrders';
import { Search } from './src/screens/Search/Search';
import { Wishlist } from './src/screens/Wishlist/Wishlist';
import { StripeProvider } from '@stripe/stripe-react-native';
import { pubKey } from './src/constants/environment';
// import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  // const { currentUser } = useSelector((state: any) => state.user);

  return (
    <Provider store={store}>
      <StripeProvider publishableKey={pubKey} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={CategoryProducts} options={({ route, navigation }) => ({
              title: route?.params?.category, headerTitleStyle: {
                fontSize: 20
              },
              headerRight: () => (
                <MagnifyingGlassIcon color="black" size="30" onPress={() => {
                  navigation.navigate('Search');
                }} />
              )
            })}
            />
            <Stack.Screen name="Checkout" component={Checkout} options={({ route }) => ({
              headerRight: () => (
                <View>
                  <Text style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: 15
                  }} >Share</Text>
                </View>
              )
            })} />
            <Stack.Screen name="Add Address" component={AddAddress} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Your Orders" component={YourOrders} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}

export default App;
