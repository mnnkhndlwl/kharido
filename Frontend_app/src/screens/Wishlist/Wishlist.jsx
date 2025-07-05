import React, {useState, useEffect} from 'react';
import {View, ScrollView, Dimensions, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader} from '../../components/Loader';
import axios from 'axios';
import {ProductCard} from '../../components/ProductCard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/userSlice';

export const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const {currentUser} = useSelector(state => state.user);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function getWishlist() {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/customer/wishlist`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          // You can also include other headers as needed.
          'Content-Type': 'application/json',
        },
      });
      if (res.data.message === 'Not Authorized') {
        dispatch(logout());
        setLoading(false);
        ToastAndroid.show(
          'Your Session has been expired !',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      }
      setLoading(false);
      console.log('-------------------Wishlist-------------------------');
      console.log(res?.data);
      setWishlist(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      {loading ? (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loader screenWidth={screenWidth} />
        </SafeAreaView>
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{
              gap: 5,
            }}
            style={{marginTop: 10, padding: 5}}>
            {wishlist.length === 0 ? (
              <>
                <View
                  style={{
                    height: screenHeight * 0.8,
                    width: screenWidth,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                    }}
                    source={require('../../images/wishlist.png')}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 15,
                      color: 'black',
                    }}>
                    {' '}
                    Your Wishlist is empty!{' '}
                  </Text>
                </View>
              </>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  gap: 2,
                  marginBottom: 80,
                }}>
                {wishlist?.map(item => {
                  return (
                    <ProductCard
                      key={item._id}
                      item={item}
                      wishlist={wishlist}
                      onToggleWishlist={async productId => {
                        try {
                          // Send a request to your server to add/remove the product from the wishlist
                          const resp = await axios.put(
                            'http://localhost:8000/product/wishlist',
                            {
                              _id: productId,
                            },
                            {
                              headers: {
                                Authorization: `Bearer ${currentUser.token}`,
                                // You can also include other headers as needed.
                                'Content-Type': 'application/json',
                              },
                            },
                          );
                          // Update the wishlist state on success
                          if (resp?.data) {
                            setWishlist([...wishlist, item]);
                          } else {
                            setWishlist(
                              wishlist.filter(
                                wishlistItem => wishlistItem._id !== productId,
                              ),
                            );
                          }
                        } catch (error) {
                          console.log(error?.response);
                        }
                      }}
                    />
                  );
                })}
              </View>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};
