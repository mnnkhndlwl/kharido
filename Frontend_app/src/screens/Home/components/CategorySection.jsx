import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {CategoryData} from '../../../constants/CategoryData';
import {useNavigation} from '@react-navigation/native';
import {axiosInstance} from '../../../config';
import {Loader} from '../../../components/Loader';

export const CategorySection = () => {
  const screenWidth = Dimensions.get('screen').width;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchCategories() {
    setLoading(true);
    try {
      const res = await axiosInstance.get('/product/get/categories');
      setLoading(false);
      console.log(res);
      setData(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const navigation = useNavigation();
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
        <SafeAreaView
          style={{
            margin: 10,
            flexDirection: 'column',
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Shop by Category
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 10,
            }}> 
            {data?.map(item => {
              return (
                <TouchableOpacity
                  key={item?.CategoryName}
                  onPress={() => {
                    navigation.navigate('Category', {
                      category: item?.CategoryName,
                      id : item?._id 
                    });
                  }}>
                  <View
                    style={{
                      margin: 10,
                      height: 120,
                      width: 80,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#afeded',
                        borderRadius: 10,
                        height: 100,
                        width: 80,
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: 90,
                          width: '100%',
                          position: 'absolute',
                          bottom: 0,
                        }}
                        source={{uri: item.CategoryImage?.image_url}}
                      />
                    </View>
                    <Text
                      style={{
                        fontWeight: '900',
                        textAlign: 'center',
                        color: 'black',
                        textTransform:"capitalize"
                      }}>
                      {item?.CategoryName}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};
