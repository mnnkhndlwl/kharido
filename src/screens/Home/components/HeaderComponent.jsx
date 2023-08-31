import React from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from 'react-native-heroicons/outline';
import { HeaderCards } from './HeaderCards';

export const HeaderComponent = () => {
  return (
    <View style={styles.headComponent}>
      <View style={styles.top}>
        <View>
          <Text style={{color: 'white', fontWeight: 'bold'}}>DELIVERY IN</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
            13 minutes
          </Text>
          <Text style={{color: 'white', fontWeight: '400'}}>
            khasra no. 301, mundka,delhi{' '}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require('../../../images/account.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
            padding: 3,
            borderRadius: 20,
          }}>
          <MagnifyingGlassIcon color="black" size="30" />
          <TextInput
            placeholder="Search in 'gift items'"
            keyboardType="default"
            style={{
              width: '80%',
            }}></TextInput>
          <MicrophoneIcon size="30" color="black" />
        </View>
      </View>
      <HeaderCards />
    </View>
  );
};
