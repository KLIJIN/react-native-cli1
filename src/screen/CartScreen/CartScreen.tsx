import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';

import data from '../../data/data.json';

const cartItems = data.products.slice(0, 6);

const CartScreen = () => {
  const pressHandler = () => {
    console.log('loajflksa');
  };

  const handleDeleteItem = (item: any) => {
    console.log(item);
  };

  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.cartContainer}>
        <Header hasTitle />
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem item={item} handleDelete={handleDeleteItem} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
          ListFooterComponent={
            <>
              <View style={styles.totalContainer}>
                <View style={styles.totalRow}>
                  <Text>Total:</Text>
                  <Text>$119.7</Text>
                </View>
                <View style={styles.totalRow}>
                  <Text>Shipping:</Text>
                  <Text>$0.0</Text>
                </View>
                <View style={styles.driver} />
                <View style={styles.totalRow}>
                  <Text>Grand Total:</Text>
                  <Text>$119.7</Text>
                </View>
              </View>
              <Pressable onPress={pressHandler} style={styles.checkout}>
                <Text style={styles.checkoutText}>Checkout</Text>
              </Pressable>
            </>
          }
        />
      </View>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartContainer: {
    paddingHorizontal: 32,
  },
  totalContainer: {
    rowGap: 15,
    marginBottom: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins',
    color: '#757575',
    fontWeight: 500,
    fontSize: 18,
  },
  driver: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  checkout: {
    backgroundColor: '#E96E6E',
    width: '100%',
    height: 66,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 18,
  },
});
