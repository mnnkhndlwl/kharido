import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  ShoppingBagIcon,
  HomeIcon,
  ShareIcon,
  InformationCircleIcon,
  StarIcon,
  PowerIcon,
} from 'react-native-heroicons/outline';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const Item = ({data}) => (
  <TouchableOpacity onPress={data.action}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            backgroundColor: '#d7f3fa',
            padding: 5,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <data.icon color="black" size={20} />
        </View>
        <Text>{data.title}</Text>
      </View>
      <ChevronRightIcon color="black" size={20} />
    </View>
  </TouchableOpacity>
);

export const Information = ({screenWidth}) => {
  const navigation = useNavigation();

  const DATA = [
    {
      icon: ShoppingBagIcon,
      title: 'Your Orders',
      action: () => {
        navigation.navigate('Your Orders');
      },
    },
    {
      icon: HomeIcon,
      title: 'Address Book',
      action: () => {},
    },
  ];

  const DATATWO = [
    {
      icon: ShareIcon,
      title: 'Share the app',
      action: () => {},
    },
    {
      icon: InformationCircleIcon,
      title: 'About us',
      action: () => {},
    },
    {
      icon: StarIcon,
      title: 'Rate us on the play store',
      action: () => {},
    },
    {
      icon: PowerIcon,
      title: 'Logout',
      action: () => {},
    },
  ];

  return (
    <SafeAreaView
      style={{
        width: screenWidth * 0.95,
        padding: 5,
      }}>
      <View>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
          }}>
          {' '}
          Your Information{' '}
        </Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </View>
      <View
        style={{
          height: 30,
        }}
      />
      <View>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
          }}>
          {' '}
          Other Information{' '}
        </Text>
        <FlatList
          data={DATATWO}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </View>
    </SafeAreaView>
  );
};
