import React, {useState} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import {HeaderComponent} from './components/HeaderComponent';
import {Highlight} from './components/Highlight';
import { CategorySection } from './components/CategorySection';

export const Home = () => {

  return (
    <>
      <StatusBar backgroundColor="#f01f1f" />
      <SafeAreaView>
        <ScrollView>
          <HeaderComponent />
          <Highlight />
          <CategorySection />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
