import React from 'react';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/cartSlice';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {MinusSmallIcon, PlusSmallIcon} from 'react-native-heroicons/solid';

export const QuantityButton = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const screenWidth = Dimensions.get('window').width;

  const isItemInCart = cartItems.find(i => i._id === item._id);
  const itemQuantity = isItemInCart ? isItemInCart.quantity : 0;

  return (
    <SafeAreaView style={{
      // width:screenWidth*0.5,
      // height:"max-content"
    }} >
      <View style={styles.container}>
        {isItemInCart ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                dispatch(ADD_TO_CART({...item, quantity: -1}));
              }}>
              <MinusSmallIcon size={10} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{itemQuantity}</Text>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                dispatch(ADD_TO_CART({...item, quantity: 1}));
              }}>
              <PlusSmallIcon size={10} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(ADD_TO_CART({...item, quantity: 1}));
            }}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#018f14',
    borderRadius: 5,
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#bbfcc0',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 1,
  },
  addButtonText: {
    fontWeight: 'bold',
    color: 'green',
  },
});
