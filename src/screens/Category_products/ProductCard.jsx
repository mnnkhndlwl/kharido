import React from 'react';
import {View, Image, Text} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline';
import {QuantityButton} from '../../components/QuantityButton';

export const ProductCard = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 15,
        width: 125,
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: 80,
          width: 80,
        }}
        source={{
          uri: item.banner,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#e3e1dc',
          padding: 5,
          alignSelf: 'flex-start',
          marginTop: 20,
          marginBottom: 10,
          borderRadius: 5,
        }}>
        <ClockIcon color="black" size="15" />
        <Text style={{fontWeight: 'bold', color: 'black'}}> 19 MINS </Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'justify',
          alignSelf: 'flex-start',
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: 'black',
          alignSelf: 'flex-start',
          marginBottom: 10,
          marginTop: 5,
        }}>
        {' '}
        {item.weight}{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          {' '}
          ₹{item.regular_price}{' '}
        </Text>
        <QuantityButton item={item} />
      </View>
    </View>
  );
};
