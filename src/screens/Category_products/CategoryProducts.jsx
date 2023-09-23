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

export const CategoryProducts = ({route, navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector(state => state.cart);

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
            {AllCategoryProducts.map(item => {
              if (item.category === route.params.category) {
                return item.products.map(product => {
                  return (
                    <SidebarCards
                      key={product.name}
                      name={product.name}
                      path={product.path}
                    />
                  );
                });
              }
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
                  return <ProductCard key={item._id} item={item} />;
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
