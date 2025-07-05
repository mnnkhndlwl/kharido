import React, {useEffect} from 'react';
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from 'react-native-heroicons/outline';
import {View, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

export const Bar = ({
  isRecording,
  setIsRecording,
  startRecording,
  stopRecording,
  searchQuery,
  setSearchQuery,
  setLoading,
  setSearchResults,
}) => {
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/product/search/products?q=${searchQuery}`,
      );
      // Assuming your API returns an array of products
      const products = response.data;
      setLoading(false);
      setSearchResults(products);
    } catch (error) {
      console.error('Error searching for products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          flex: 1,
          padding: 3,
          borderRadius: 20,
        }}>
        <MagnifyingGlassIcon color="black" size="20" onPress={handleSearch} />
        <TextInput
          placeholder="Search products"
          keyboardType="default"
          style={{
            width: '85%',
          }}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity
          onPress={() => (startRecording())}>
          <MicrophoneIcon size="20" color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
