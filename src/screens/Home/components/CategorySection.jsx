import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {CategoryData} from '../../../constants/CategoryData';

export const CategorySection = () => {
  return (
    <SafeAreaView
      style={{
        margin: 10,
        flexDirection: 'column',
      }}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Shop by Category
        </Text>
      </View>
      <View style={{
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:"center",
        gap:10
      }} >
        {CategoryData.map(item => {
          return (
            <View
              style={{
                margin: 10,
                height: 120,
                width: 80,
              }}>
              <View
                style={{
                  backgroundColor: '#afeded',
                  borderRadius: 10,
                  height: 100,
                  width: 80,
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 90,
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                  }}
                  source={item.path}
                />
              </View>
              <Text
                style={{
                  fontWeight: '900',
                  textAlign: 'center',
                  color: 'black',
                }}>
                {' '}
                {item.title}{' '}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
