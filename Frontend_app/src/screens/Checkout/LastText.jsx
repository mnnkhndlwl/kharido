import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LastText = ({screenWidth, title, description, show}) => {
  return (
    <SafeAreaView
      style={{
        width: screenWidth*0.95,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: !show && 100
      }}>
      <View
        style={{
          gap: 5,
          width: show ? screenWidth * 0.8 : screenWidth * 0.95 ,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}>
          {' '}
          {title}{' '}
        </Text>
        <Text
          style={{
            fontWeight: '500',
          }}>
          {description}
        </Text>
      </View>
      {show && (
        <TouchableOpacity>
          <Text
            style={{
              color: 'green',
              fontWeight: '600',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
