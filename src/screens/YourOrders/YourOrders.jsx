import React, {useState, useEffect} from 'react';
import {View, ScrollView, Dimensions, Text,ToastAndroid } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {Loader} from '../../components/Loader';
import { formatDate } from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/userSlice';

export const YourOrders = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const {currentUser} = useSelector(state => state.user);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function getOrders() {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/shopping/orders`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          // You can also include other headers as needed.
          'Content-Type': 'application/json',
        },
      });
      if(res.data.message === 'Not Authorized') {
        dispatch(logout());
        setLoading(false);
          ToastAndroid.show('Your Session has been expired !', ToastAndroid.SHORT);
          navigation.navigate('Home');
      }
      setLoading(false);
      setResult(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: screenHeight,
              width: screenWidth,
            }}>
            <Loader screenWidth={screenWidth} />
          </View>
        </>
      ) : (
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            marginTop:10
          }}>
          {result?.map(item => {
            return (
              <View
                key={item._id}
                style={{
                  width: screenWidth * 0.95,
                  height: 'max-content',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Date : { formatDate(item?.createdAt) }
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Address : {item?.address?.type}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 25,
                      alignItems: 'center',
                      padding: 5,
                      width: 'auto',
                      backgroundColor: 'green',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      {item?.status}
                    </Text>
                  </View>
                </View>
                <>
                  {item?.products.map(i => {
                    return (
                      <View
                        key={i._id}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop:10
                        }}>
                        <Text>
                          {' '}
                          {i?.name} X {i?.quantity}{' '}
                        </Text>
                        <Text> ₹ {i?.quantity * i.price} </Text>
                      </View>
                    );
                  })}
                </>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderTopWidth: 0.5,
                    marginTop: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Delivery
                    </Text>
                  </View>
                  <View>
                    <Text>{item?.total > 99 ? 'FREE' : '₹ 15'}</Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Total
                    </Text>
                  </View>
                  <View>
                    <Text>₹ {item?.total}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
