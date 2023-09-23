import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,Dimensions } from 'react-native';

export const Santizate = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView
      style={{
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: screenWidth*0.95,
          backgroundColor: '#cae2fc',
          padding: 5,
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'blue',
          }}>
          I have sanitized my hands before picking up your order, and I am on my
          way to your location
        </Text>
      </View>
    </SafeAreaView>
  );
};
