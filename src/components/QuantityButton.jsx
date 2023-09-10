import React from 'react';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/cartSlice';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {MinusSmallIcon, PlusSmallIcon} from 'react-native-heroicons/solid';

export const QuantityButton = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  return (
    <>
      {cartItems.find(i => i._id === item._id) ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#018f14',
              padding: 3,
              borderRadius: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(ADD_TO_CART({...item, quantity: -1}));
              }}>
              <MinusSmallIcon size={20} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              {' '}
              {cartItems.find(i => i._id === item._id).quantity}{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(ADD_TO_CART({...item, quantity: 1}));
              }}>
              <PlusSmallIcon size={20} color="white" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: '#bbfcc0',
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 5,
            borderColor: 'green',
            borderWidth: 1,
          }}
          onPress={() => {
            dispatch(ADD_TO_CART({...item, quantity: 1}));
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'green',
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
