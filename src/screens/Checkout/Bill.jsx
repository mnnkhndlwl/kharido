import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, View} from 'react-native';

export const Bill = ({total, screenWidth}) => {
  const deliveryCharge = total < 99 ? 15 : 0;

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: screenWidth * 0.95,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'column',
        gap: 10,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
        }}>
        Bill Details
      </Text>
      {/* ------------------- sub total element ---------------------- */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{
              height: 15,
              width: 15,
            }}
            source={{
              uri: 'https://i.postimg.cc/hjgPNs3c/invoice.png',
            }}
          />
          <Text
            style={{
              color: 'black',
            }}>
            Sub Total
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
          }}>
          ₹ {total}
        </Text>
      </View>
      {/* -------------------- Delivery Charge Element ---------------*/}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{
              height: 15,
              width: 15,
            }}
            source={require('../../images/deliver.png')}
          />
          <Text
            style={{
              color: 'black',
            }}>
            Delivery Charge
          </Text>
        </View>
        {deliveryCharge === 0 ? (
          <Text
            style={{
              color: 'blue',
            }}>
            {' '}
            FREE{' '}
          </Text>
        ) : (
          <Text
            style={{
              color: 'black',
            }}>
            {' '}
            ₹ {deliveryCharge}{' '}
          </Text>
        )}
      </View>
      {/* ---------------------- Total Amount element ------------- */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {' '}
          Grand total{' '}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          ₹{total + deliveryCharge}
        </Text>
      </View>
    </SafeAreaView>
  );
};
