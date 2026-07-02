import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface CartItemProps {
  item?: {
    id: number | string;
    image: string;
    title: string;
    price: number;
    isLiked?: boolean;
    size?: string;
  };
  handleDelete: (item: any) => void;
}

const CartItem = ({ item }: CartItemProps) => {
  console.log(item);

  const imageUrl =
    'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/cvafl35dv9wzisdsgtd6.png';

  const pressHandler = () => {
    console.log('loajflksa');
  };

  return (
    <View style={styles.container}>
      {
        <>
          <Image source={{ uri: imageUrl }} style={styles.productImage} />
          <View style={styles.content}>
            <Text style={styles.title}>{item?.title || 'Jacket Jeans'}</Text>
            <Text style={styles.price}>$37.9</Text>
            <View style={styles.details}>
              <View style={styles.color} />
              <View style={styles.size}>
                <Text style={styles.title}>{item?.size || 'L'}</Text>
              </View>
            </View>
          </View>
          <Pressable onPress={pressHandler} style={styles.close}>
            <MaterialIcons name="clear" color="#F68CB5" size={22} />
          </Pressable>
        </>
      }
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 15,
    marginBottom: 27,
  },
  productImage: {
    height: 125,
    width: 95,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins',
    color: '#444444',
    fontWeight: 500,
    fontSize: 18,
  },
  price: {
    fontFamily: 'Poppins',
    color: '#797979',
    fontWeight: 700,
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    columnGap: 16,
  },

  color: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#7094C1',
  },
  size: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
});
