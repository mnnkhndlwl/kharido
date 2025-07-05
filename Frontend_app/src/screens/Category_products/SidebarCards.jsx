import React from 'react';
import {Text, View, Image} from 'react-native';

export const SidebarCards = ({name, path, active}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'min-content',
        padding: 3,
        alignSelf: 'center',
        backgroundColor: active === name ? '#afeded' : 'white',
        // backgroundColor: '#afeded',
      }}
      key={name}>
      <Image
        style={{
          width: 60,
          height: 60,
          objectFit: 'contain',
        }}
        source={{
          uri: path,
        }}
      />

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'black',
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        {name}
      </Text>
    </View>
  );
};
