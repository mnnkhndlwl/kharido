import React from 'react';
import {

  View,
  Text,
  
  Image,
} from 'react-native';
import { QuantityButton } from '../../components/QuantityButton';

export const CartItems = ({cartItems,screenWidth }) => {
  
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: screenWidth *0.95,
        height: 'auto',
        padding: 10,
        flexDirection: 'column',
        gap: 10,
        borderRadius:20
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../../images/clock.png')}
        />
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              textAlign: 'justify',
            }}>
            Bhai 30 minute me Phocha dunga
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
            }}>
            Shipment of {cartItems.length} Items
          </Text>
        </View>
      </View>
      {cartItems.map(item => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems:"center",
              gap:20
            }}
            key={item._id}>
            <View
              style={{
                height: 80,
                width: 80,
                borderWidth: 0.5,
                borderColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                }}
                source={{uri: item.banner}}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                width: screenWidth * 0.4
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
              <Text>{item.weight}</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                ₹ {item.regular_price}
              </Text>
            </View>
            <View style={{
              justifyContent:"flex-end"
            }} >
            <QuantityButton item={item} />
            </View>
          </View>
        );
      })}
    </View>
  );
};
