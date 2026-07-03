import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import data from '../data/data.json';

import Header from '../components/Header';
import Category from '../components/Category';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProductsStore } from '../store/productsStore';
import { useCartStore } from '../store/cartStore';

const categoriesList = ['Trending', 'All', 'New', 'Mens', 'Womans'];

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  price: number;
  isLiked?: boolean;
  color?: string;
  size?: string;
}

function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  const { products, addProducts, toggleLike } = useProductsStore();
    const { cart } = useCartStore();
    
  const navigation = useNavigation();

  const pressHandler = () => navigation.navigate('Reorder');

  useEffect(() => {
     addProducts(data.products);
  }, [addProducts]);

  useEffect(() => {
     console.log("cart", cart)
  }, [cart]);

  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <View style={styles.home}>
        <Header />
        <Text style={styles.matchText}>Выбери свой стиль</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Поиск" />
          <View style={styles.iconContainer}>
            <MaterialIcons name="search" color="#C0C0C0" size={26} />
          </View>
        </View>

        <Pressable onPress={pressHandler}>
          <Text>Go to ReorderScreen</Text>
        </Pressable>

        {/* массив категорий */}
        <FlatList
          data={categoriesList}
          renderItem={({ item }) => {
            return (
              <Category
                item={item}
                onPress={el => setSelectedCategory(el)}
                isSelected={selectedCategory === item}
              />
            );
          }}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* массив каточек */}
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard item={item} likeHandler={toggleLike} />
          )}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          contentContainerStyle={styles.productsContainer}
          columnWrapperStyle={styles.productsRow}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  productsContainer: {
    marginTop: 10,
    paddingHorizontal: 32,
    paddingBottom: 20,
  },

  productsRow: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 10,
    marginRight: 5,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  textInput: {
    marginLeft: 10,
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
  },
  matchText: {
    fontSize: 28,
    fontWeight: 400,
    fontFamily: 'Poppins',
    marginTop: 25,
    marginBottom: 25,
  },
  home: {
    // flex: 1,
    paddingHorizontal: 32,
  },

  // productCardContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center' /* вертикально */,
  //   alignItems: 'center' /* горизонтально */,
  //   marginTop: 27,
  //   paddingHorizontal: 32,
  //   columnGap: 18,
  //   flexWrap: 'wrap',
  // },
});
