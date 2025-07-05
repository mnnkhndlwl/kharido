import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  HomeIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';

const styles = StyleSheet.create({
  but: {
    width: 'max-content',
    height: 30,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  butSelect: {
    width: 'max-content',
    height: 30,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    backgroundColor: '#aefaac',
  },
});

export const AddressType = ({type,setType}) => {
  return (
    <View style={{
      height:50
    }} >
    <ScrollView
      horizontal
      style={{
        paddingVertical: 10,
      }}
      contentContainerStyle={{
        gap: 10,
      }}>
      <TouchableOpacity onPress={() => setType('home')} style={ type === 'home' ? styles.butSelect : styles.but}>
        <HomeIcon size={20} color="yellow" />
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType('office')} style={ type === 'office' ? styles.butSelect : styles.but}>
        <BriefcaseIcon size={20} color="yellow" />
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
          }}>
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType('hotel')} style={ type === 'hotel' ? styles.butSelect : styles.but}>
        <BuildingOfficeIcon size={20} color="yellow" />
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
          }}>
          Hotel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType('other')} style={ type === 'other' ? styles.butSelect : styles.but}>
        <MapPinIcon size={20} color="yellow" />
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
          }}>
          Other
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};
