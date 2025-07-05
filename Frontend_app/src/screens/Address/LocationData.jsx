import React from 'react';
import { View,Text } from 'react-native';
import {MapPinIcon} from 'react-native-heroicons/solid';

export const LocationData = ({locationData}) => {
  return (
    <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              backgroundColor: '#00000012',
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <MapPinIcon color="black" size={20} />
          </View>
          <View style={{
            width:'95%'
          }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
              }}>
              {' '}
              {locationData?.text}{' '}
            </Text>
            <Text style={{
              textAlign:"left"
            }} >{locationData?.place_name}</Text>
          </View>
        </View>
  )
}
