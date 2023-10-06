import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {Bar} from './Bar';
import {ProductCard} from '../../components/ProductCard';
import {Loader} from '../../components/Loader';
import Voice from '@react-native-voice/voice';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const [isRecording, setIsRecording] = useState(false);

  Voice.isAvailable = () =>{
    console.log("available");
  }

  Voice.onSpeechStart = () => {
    console.log(isRecording);
    setIsRecording(true);
  };

  Voice.onSpeechEnd = () => {
    console.log(isRecording);
    setIsRecording(false);
  };

  Voice.onSpeechError = err => {
    console.log(err);
  };

  Voice.onSpeechResults = result => {
    setSearchQuery(result.value[0]);
  };

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <Bar
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
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
