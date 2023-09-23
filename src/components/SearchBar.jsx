import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/mini';
import {MicrophoneIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export const SearchBar = ({place}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Search');
      }}>
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
            placeholder={place}
            keyboardType="default"
            editable={false}
            style={{
              width: '80%',
            }}></TextInput>
          <MicrophoneIcon size="30" color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
