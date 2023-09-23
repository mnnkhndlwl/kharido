import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity,Dimensions} from 'react-native';
import {HighlightData} from '../../../constants/HighlightData';

export const Highlight = () => {

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView
      style={{
        margin: 20,
      }}
      contentContainerStyle={{
        gap:20
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {HighlightData.map(item => {
        return (
          <View
          key={item.heading}
            style={{
              width: screenWidth*0.9,
              height: "auto",
              borderRadius: 20,
              backgroundColor: item.backcolor,
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                width: '65%',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: item.textcolor,
                  textAlign: 'left',
                  fontSize: 25,
                }}>
                {item.heading}
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  color: item.textcolor,
                }}>
                {item.subHeadings}
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  width: 80,
                  height: 30,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  justifyContent: 'center',
                  marginTop: 30,
                  elevation: 30,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Shop Now{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                width: 120,
                height: 140,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
              source={item.path}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};