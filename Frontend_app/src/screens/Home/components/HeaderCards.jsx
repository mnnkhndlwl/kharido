import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {headerData} from '../../../constants/HeaderCardData';

export const HeaderCards = () => {
  return (
    <ScrollView
      style={{margin: 10}}
      contentContainerStyle={{
        gap:20
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {headerData.map(item => {
        return (
          <View
          key={item.heading}
            style={{
              width: 80,
              height: 120,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#d90202',
                textAlign:"center",
                padding: 2
              }}>
              {item.heading}
            </Text>
            <Image
              style={{
                width: 80,
                height: 80,
              }}
              source={item.path}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
