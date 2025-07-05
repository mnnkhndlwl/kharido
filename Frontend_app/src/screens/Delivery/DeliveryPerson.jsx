import React from 'react';
import {Image, View,Text} from 'react-native';
import { PhoneIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

export const DeliveryPerson = ({screenWidth}) => {
  return (
    
    <SafeAreaView
      style={{
        width: screenWidth,
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:"row",
        padding:10,
        gap:20,
      }}>
        <Image source={require("../../images/ds.png")} style={{
            height:50,
            width:50,

        }} />
        <Text style={{
        textAlign:"left",
        width:'60%',
        fontWeight:"bold"
        }} >
         I am Heavy Driver, Your Delivery Partner 
        </Text>
        <PhoneIcon size={50} color="green" />
      </SafeAreaView>
  );
};
