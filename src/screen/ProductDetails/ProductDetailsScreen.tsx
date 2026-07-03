import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import { ProductItem } from '../HomeScreen';
import { useCartStore } from '../../store/cartStore';

type HomeStackParamList = {
  Home: undefined;
  ProductDetails: {
    item: ProductItem;
  };
};

type ProductDetailsRouteProp = RouteProp<HomeStackParamList, 'ProductDetails'>;

const sizeList = ['S', 'M', 'L', 'XL'];
const colorsList = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const ProductDetails = () => {
  const [selectSize, setSelectSize] = useState<string | null>(sizeList[1]);
  const [selectedColor, setSelectedColor] = useState(colorsList[1]);

  const { addToCart } = useCartStore();

  const route = useRoute<ProductDetailsRouteProp>();
  const navigation = useNavigation();
  const { item } = route.params;

  const handleAddToCart = () => {
    console.log('asf');
    // product.color = selectedColor;
    // product.size = selectedSize;

    addToCart(item);
    navigation.goBack();
  };

  console.log('ProductDetails', item);
  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Header />
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {/* title */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        {/* size */}
        <View>
          <Text style={styles.sizeText}> Size</Text>
          <View style={styles.sizeContainer}>
            {sizeList.map(sizeEl => {
              return (
                <Pressable
                  key={sizeEl}
                  style={styles.sizeElement}
                  onPress={() => setSelectSize(sizeEl)}
                >
                  <Text
                    style={[
                      styles.sizeValue,
                      selectSize === sizeEl && styles.sizeValueActive,
                    ]}
                  >
                    {sizeEl}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* colors */}
        <View>
          <Text style={styles.title}>Colors</Text>
          <View style={{ flexDirection: 'row' }}>
            {colorsList.map(color => {
              return (
                <TouchableOpacity
                  key={color}
                  onPress={() => setSelectedColor(color)}
                >
                  <View
                    style={[
                      styles.borderColorButton,
                      // eslint-disable-next-line react-native/no-inline-styles
                      selectedColor === color && {
                        borderColor: color,
                        borderWidth: 2,
                        borderRadius: 24,
                      },
                    ]}
                  >
                    <View
                      style={[styles.colorCircle, { backgroundColor: color }]}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 32,
  },
  productImage: {
    height: 390,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins',
    color: '#444444',
    fontWeight: 500,
    fontSize: 20,
  },
  price: {
    color: '#4D4C4C',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 600,
  },
  sizeContainer: {
    flexDirection: 'row',
    columnGap: 12,
  },
  sizeText: {
    fontFamily: 'Poppins',
    color: '#444444',
    fontWeight: 500,
    fontSize: 20,
  },
  sizeValue: {
    fontSize: 18,
    color: '#444444',
    fontWeight: 500,
  },
  sizeValueActive: {
    color: '#E55B5B',
  },
  sizeElement: {
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 35,
  },
  borderColorButton: {
    height: 48,
    width: 48,
    marginTop: 10,
    padding: 5,
    marginRight: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: '#E96E6E',
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
});
