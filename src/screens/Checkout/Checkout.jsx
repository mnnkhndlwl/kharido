import React,{useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {CartItems} from './CartItems';
import {Coupon} from './Coupon';
import {calculateTotalPrice} from '../../utils/utils';
import {Bill} from './Bill';
import {LastText} from './LastText';
import { NicheWalaButton } from './NicheWalaButton';
import { SelectAddress } from '../Address/SelectAddress';

export const Checkout = () => {
  const screenWidth = Dimensions.get('window').width;
  const cartItems = useSelector(state => state.cart);
  const total = calculateTotalPrice(cartItems);
  const [ show,setShow ] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView>
        <ScrollView
          style={{
            padding: 10,
          }}
          contentContainerStyle={{
            gap: 20,
            alignItems: 'center',
          }}>
          <CartItems screenWidth={screenWidth} cartItems={cartItems} />
          <Coupon screenWidth={screenWidth} />
          <Bill screenWidth={screenWidth} total={total} />
          <LastText
            title="Order for Someone else"
            description="Add a message to be sent as an SMS with your gift."
            screenWidth={screenWidth}
            show={true}
          />
          <LastText
            title="Cancellation Policy"
            description="Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable."
            screenWidth={screenWidth}
            show={false}
          />
        </ScrollView>
        <NicheWalaButton show={show} setShow={setShow} screenWidth={screenWidth} />
      </SafeAreaView>
      <SelectAddress show={show} setShow={setShow} /> 
    </>
  );
};
