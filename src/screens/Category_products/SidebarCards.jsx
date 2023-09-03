import React from 'react';
import {
    Text,
    View,
    Image,
  } from 'react-native';

export const SidebarCards = ({ name,path }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'min-content',
        padding: 3,
        alignSelf: 'center',
        backgroundColor: '#afeded',
      }}
      key={name}>
      <Image
        style={{
          width: 60,
          height: 60,
          objectFit: 'contain',
        }}
        source={path}
      />

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color:"black",
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        {name}
      </Text>
    </View>
  );
};
