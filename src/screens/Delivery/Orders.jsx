import React from 'react';
import {Text, View, Dimensions} from 'react-native';

export const Orders = ({data}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        margin: 10,
        width: screenWidth * 0.95,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
      }}>
      <View>

      <Text
        style={{
          fontWeight: 'bold',
        }}>
        Your order details
      </Text>
      </View>
      <View style={{}}>
      {
        data?.products?.map((item) => {
          return <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text>{item?.name} X {item?.quantity}</Text>
          <Text> ₹ {item?.price}</Text>
        </View>
        })
      }
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            Subtotal
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'red',
            }}>
            ₹ {data?.total < 99 ? data?.total - 15 : data?.total } {' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            Delivery Charge
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#3477eb',
            }}>
             {data?.total < 99 ? "₹ 15" : "Free" }   {' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'green',
            }}>
            ₹ { data?.total } {' '}
          </Text>
        </View>
      </View>
    </View>
  );
};
