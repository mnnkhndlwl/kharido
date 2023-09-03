import React, {useState} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {HeaderComponent} from './components/HeaderComponent';
import {Highlight} from './components/Highlight';
import { CategorySection } from './components/CategorySection';
import { Footer } from '../../components/Footer';

export const Home = () => {

  return (
    <>
      <StatusBar backgroundColor="#f01f1f" />
      <SafeAreaView style={{
        marginBottom: false ? 70 : 140
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
