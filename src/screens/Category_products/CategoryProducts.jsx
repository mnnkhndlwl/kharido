import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  StatusBar,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AllCategoryProducts} from '../../constants/AllCategoryProducts';
import {useNavigation} from '@react-navigation/native';
import {SidebarCards} from './SidebarCards';
import {
  ArrowsUpDownIcon,
  ChevronDoubleDownIcon,
} from 'react-native-heroicons/outline';
import {ProductCard} from '../../components/ProductCard';
import {Footer} from '../../components/Footer';
import * as Progress from 'react-native-progress';
import {axiosInstance} from '../../config';
import {useSelector} from 'react-redux';
import {Loader} from '../../components/Loader';
import axios from 'axios';

export const CategoryProducts = ({route, navigation}) => {
  const [products, setProducts] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const id = route?.params?.id;
  const {currentUser} = useSelector(state => state.user);

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
      setLoading(false);
      setWishlist(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(
          `/product/category/${route.params.category}`,
        );
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    async function getCategoryData() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/product/get/category/${id}`);
        setSubCat(res?.data?.subcategory);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getCategoryData();
    getWishlist();
    getProducts();
  }, []);

  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <StatusBar backgroundColor="white" />
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
        <SafeAreaView
          style={{
            flexDirection: 'row',
            marginBottom: cartItems.length !== 0 ? 140 : 70,
          }}>
          <ScrollView
            style={{
              width: screenWidth * 0.2,
              padding: 5,
              backgroundColor: 'white',
            }}
            contentContainerStyle={{
              gap: 10,
            }}>
            {subcat?.map(item => {
              return (
                <SidebarCards
                  key={item.name}
                  name={item.name}
                  path={item?.image?.image_url}
                />
              );
            })}
          </ScrollView>
          <ScrollView
            style={{
              width: screenWidth * 0.8,
              flexDirection: 'column',
              padding: 2,
            }}>
            <ScrollView
              style={{
                margin: 10,
              }}
              contentContainerStyle={{
                gap: 10,
              }}
              horizontal>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 6,
                  borderRadius: 10,
                  shadowOffset: 40,
                  backgroundColor: 'white',
                }}>
                <ArrowsUpDownIcon size="15" color="black" />
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 10,
                  }}>
                  Sort
                </Text>
                <ChevronDoubleDownIcon size="15" color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 10,
                  shadowOffset: 40,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 10,
                  }}>
                  Brand
                </Text>
                <ChevronDoubleDownIcon size="15" color="black" />
              </TouchableOpacity>
            </ScrollView>
            <ScrollView
              contentContainerStyle={{
                gap: 2,
              }}
              style={{marginTop: 10, padding: 2}}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  gap: 2,
                }}>
                {products.map(item => {
                  return (
                    <ProductCard
                      key={item._id}
                      item={item}
                      wishlist={wishlist}
                      onToggleWishlist={async (productId) => {
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
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      )}
      <Footer />
    </>
  );
};
