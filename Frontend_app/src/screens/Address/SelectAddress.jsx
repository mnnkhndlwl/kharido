import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {
  EllipsisVerticalIcon,
  HomeIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  XCircleIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {Loader} from '../../components/Loader';

export const SelectAddress = ({show, setShow}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const {currentUser} = useSelector(state => state.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function saveAddress() {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/customer/addresses`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          // You can also include other headers as needed.
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    saveAddress();
  }, []);

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
              <TouchableOpacity
                onPress={() => {
                  setShow(!show);
                  navigation.navigate('Add Address');
                }}>
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
            {loading ? (
              <>
                <Loader screenWidth={screenWidth} />
              </>
            ) : (
              <View>
                {data?.map(item => {
                  return (
                    <View
                      key={item.type}
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
                        {(item.type === 'home' && (
                          <HomeIcon size={20} color="#fac107" />
                        )) ||
                          (item.type === 'office' && (
                            <BriefcaseIcon size={20} color="#fac107" />
                          )) ||
                          (item.type === 'hotel' && (
                            <BuildingOfficeIcon size={20} color="#fac107" />
                          )) ||
                          (item.type === 'other' && (
                            <MapPinIcon size={20} color="#fac107" />
                          ))}
                      </View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('Delivery',{
                          address : item,
                        } )
                      }} >
                      <View style={{}}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          {item.type}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'justify',
                            width: screenWidth * 0.7,
                            color: 'black',
                          }}>
                          {item.completeAddress}
                        </Text>
                      </View>
                      </TouchableOpacity>
                      <EllipsisVerticalIcon color="black" size={20} />
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};
