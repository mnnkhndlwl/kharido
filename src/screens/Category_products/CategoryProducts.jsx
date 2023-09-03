import React from 'react';
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
import { ProductCard } from './ProductCard';
import { Footer } from '../../components/Footer';

export const CategoryProducts = ({route, navigation}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          marginBottom: false ? 70 : 140
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
            margin:10
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
            gap:10
          }}
            style={{ marginTop: 10 , padding:10}}>
            <View style={{
              flexDirection:"row",
              flexWrap:"wrap",
              justifyContent:"space-between",
              gap:10
            }} >
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
            </View>
            </ScrollView>
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </>
  );
};
