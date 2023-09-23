import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import {Bar} from './Bar';
import {ProductCard} from '../../components/ProductCard';
import {Loader} from '../../components/Loader';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <Bar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setLoading={setLoading}
        />
        {loading ? (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Loader screenWidth={screenWidth} />
            </View>
          </>
        ) : (
          <ScrollView
            contentContainerStyle={{
              gap: 5,
            }}
            style={{marginTop: 10, padding: 5}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                gap: 2,
                marginBottom: 80,
              }}>
              {searchResults?.map(item => {
                return <ProductCard key={item._id} item={item} />;
              })}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
