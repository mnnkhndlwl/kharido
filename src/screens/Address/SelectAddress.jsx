import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {
  EllipsisVerticalIcon,
  HomeIcon,
  XCircleIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export const SelectAddress = ({show, setShow}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation=useNavigation();
  return (
    <>
      {!show ? (
        <></>
      ) : (
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: screenWidth,
            height: screenHeight,
            zIndex: 2,
            backgroundColor: '#00000066',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 10,
              borderRadius: 50,
              //   alignItems: 'center',
              //   justifyContent: 'center',
            }}
            onPress={() => setShow(!show)}>
            <XCircleIcon size={40} color="black" />
            {/* <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {' '}
              X{' '}
            </Text> */}
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: screenWidth,
              height: screenHeight,
              flexDirection: 'column',
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                }}>
                {' '}
                Select Address{' '}
              </Text>
            </View>
            <View
              style={{
                padding: 10,
              }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Add Address');
              }} >
                <Text
                  style={{
                    color: 'green',
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  + Add new address
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                {' '}
                Your saved addresses{' '}
              </Text>
            </View>
            <View>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  justifyContent: 'space-between',
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
                  <HomeIcon size={20} color="#fac107" />
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Home
                  </Text>
                  <Text
                    style={{
                      textAlign: 'justify',
                      width: screenWidth * 0.7,
                      color: 'black',
                    }}>
                    house no. 686, gali no. 8, near panwadi ki dukan, ghatiya
                    colony,delhi
                  </Text>
                </View>
                <EllipsisVerticalIcon color="black" size={20} />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
