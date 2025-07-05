import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {AddressType} from './AddressType';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {Loader} from '../../components/Loader';
import {useNavigation} from '@react-navigation/native';

export const EnterAddress = ({show, setShow, latitude, longitude}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [completeAddress, setCompleteAddress] = useState('');
  const [type, setType] = useState('home');
  const {currentUser} = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function saveAddress() {
    try {
      setLoading(true);
      const res = await axios.post(
        `http://localhost:8000/customer/address`,
        {
          type: type,
          completeAddress: completeAddress,
          latitude: latitude,
          longitude: longitude,
        },
        {
          headers: {
            'Authorization': `Bearer ${currentUser.token}`,
            // You can also include other headers as needed.
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

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
          <SafeAreaView>
            <View
              style={{
                height: screenHeight * 0.5,
              }}></View>

            <SafeAreaView
              style={{
                height: 'auto',
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 20,
                position: 'absolute',
                bottom: 0,
                right: 10,
                left: 10,
                top: 50,
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                }}
                onPress={() => setShow(!show)}>
                <XMarkIcon size={20} color="black" />
              </TouchableOpacity>
              <Text>Save address as *</Text>
              <AddressType type={type} setType={setType} />
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 20,
                    marginBottom: 10,
                  }}>
                  Enter Complete Address
                </Text>
                <TextInput
                  onChangeText={text => setCompleteAddress(text)}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
              {loading ? (
                <Loader screenWidth={screenWidth} />
              ) : (
                <TouchableOpacity
                  onPress={() => saveAddress()}
                  style={{
                    width: '100%',
                    backgroundColor: 'green',
                    marginTop: 10,
                    padding: 20,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    Save Address
                  </Text>
                </TouchableOpacity>
              )}
            </SafeAreaView>
          </SafeAreaView>
        </View>
      )}
    </>
  );
};
