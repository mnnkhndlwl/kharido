import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ClockIcon } from 'react-native-heroicons/outline';
import { QuantityButton } from './QuantityButton';

export const ProductCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.banner }} />
      <View style={styles.infoContainer}>
        <View style={styles.timeContainer}>
          <ClockIcon color="black" size={15} />
          <Text style={styles.timeText}>19 MINS</Text>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.weight}>{item.weight}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{item.regular_price}</Text>
          <QuantityButton item={item} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
    width: '45%', // 45% width for responsiveness
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 100, // Adjust the height as needed
    width: '100%', // Take up 100% width
    objectFit:"contain"
  },
  infoContainer: {
    padding: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3e1dc',
    padding: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  timeText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'justify',
  },
  weight: {
    color: 'black',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    gap:10
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
  },
});
