import React, {useState} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {HeaderComponent} from './components/HeaderComponent';
import {Highlight} from './components/Highlight';
import { CategorySection } from './components/CategorySection';
import { Footer } from '../../components/Footer';
import {useSelector} from 'react-redux';

export const Home = () => {
  const cartItems = useSelector(state => state.cart);
  
  return (
    <>
      <StatusBar backgroundColor="#f01f1f" />
      <SafeAreaView style={{
        marginBottom: cartItems.length !== 0 ? 140 : 70
      }} >
        <ScrollView>
          <HeaderComponent />
          <Highlight />
          <CategorySection />
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </>
  );
};
