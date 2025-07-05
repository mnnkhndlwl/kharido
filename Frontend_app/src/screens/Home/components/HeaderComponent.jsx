import React from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import { HeaderCards } from './HeaderCards';
import { SearchBar } from '../../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

export const HeaderComponent = () => {

  const navigation = useNavigation();

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
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Profile");
          }} >
            <Image source={require('../../../images/account.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar place={"Search in 'gifts'"} />
      <HeaderCards />
    </View>
  );
};
