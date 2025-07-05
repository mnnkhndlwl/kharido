import React from 'react';
import {StatusBar, View,Dimensions } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Account } from './Account';
import { Bar } from './Bar';
import { Information } from './Information';

export const Profile = () => {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:"white",
        height:screenHeight
      }} >
        <Account />
        <Bar screenWidth={screenWidth} screenHeight={screenHeight} />
        <Information screenWidth={screenWidth} />
      </SafeAreaView>
    </>
  );
};
