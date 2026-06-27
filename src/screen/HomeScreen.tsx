import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import Header from '../components/Header';
import Category from '../components/Category';
import { useState } from 'react';

const categoriesList = ['Trending', 'All', 'New', 'Mens', 'Womans'];

function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  const navigation = useNavigation();

  const pressHandler = () => navigation.navigate('Reorder');

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

        <FlatList
          data={categoriesList}
          renderItem={({ item }) => {
            console.log('item', item);
            return (
              <Category item={item} onPress={el => setSelectedCategory(el)}  isSelected ={ selectedCategory ===  item}   />
            );
          }}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
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
  home: { flex: 1, paddingHorizontal: 32 },
});
