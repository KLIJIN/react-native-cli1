import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@react-native-vector-icons/entypo';
import { ProductItem } from '../../screen/HomeScreen';
import { SCREENS } from '../../../App';

interface Props {
  item: ProductItem;
  likeHandler: (id: string) => void;
}

function ProductCard({ item, likeHandler }: Props) {
  const navigation = useNavigation();

  const pressHandler = () => {
    likeHandler(String(item.id));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.ProductDetails, { item });
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {item.title}</Text>
        </View>
        <Text style={styles.price}> $ {item.price}</Text>
      </View>

      <Pressable style={styles.likeContainer} onPress={pressHandler}>
        <Entypo
          name={item.isLiked ? 'heart' : 'heart-outlined'}
          size={20}
          color={'#E55B5B'}
        />
      </Pressable>
    </TouchableOpacity>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    position: 'relative',
    width: '47%',
    // marginBottom: 20,
  },
  productImage: {
    height: 256,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
    // marginHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    color: '#444444',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 16,
  },
  price: {
    color: '#9C9C9C',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 16,
  },
  content: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  likeContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',

    position: 'absolute',
    right: 10,
    top: 24,
  },
  cartButton: {
    marginTop: 3,
    backgroundColor: '#E96E6E',
    width: '100%',
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
