import React from 'react'
import {TextInput, View} from 'react-native';
import {
  MagnifyingGlassIcon
} from 'react-native-heroicons/mini';
import {MicrophoneIcon} from "react-native-heroicons/solid"

export const SearchBar = ({place}) => {
  return (
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
        style={{
          width: '80%',
        }}></TextInput>
      <MicrophoneIcon size="30" color="black" />
    </View>
  </View>
  )
}
