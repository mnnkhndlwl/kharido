import React from 'react';
import {View, Image, Text, TouchableOpacity, Button} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline';

export const ProductCard = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 15,
        width: 140,
        alignItems:"center"
      }}>
      <Image
        style={{
          height: 100,
          width: 100,
        }}
        source={require('../../images/dudh.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#e3e1dc',
          padding: 5,
          alignSelf:"flex-start",
          marginTop:20,
          marginBottom:10,
          borderRadius:5
        }}>
        <ClockIcon color="black" size="15" />
        <Text style={{fontWeight: 'bold', color: 'black'}}> 19 MINS </Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          textAlign:"justify",
          alignSelf:"flex-start"
        }}>
        Amul Gold Full Cream Fresh Milk
      </Text>
      <Text style={{color: 'black' ,alignSelf:"flex-start",marginBottom:10,marginTop:5 }}> 500 ml </Text>
      <View style={{
        flexDirection:'row' ,
        alignSelf:"stretch",
        alignItems:"center",
        justifyContent:"space-between"
      }} >
        <Text style={{color: 'black', fontWeight: 'bold'}}> ₹33 </Text>
        <TouchableOpacity style={{
            backgroundColor:"#bbfcc0",
            paddingVertical:5,
            paddingHorizontal:20,
            borderRadius:5,
            borderColor:"green",
            borderWidth:1
        }} >
            <Text style={{
                fontWeight:"bold",
                color:"green",
            }} >
                ADD
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
