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

interface Props {
  item: {
    id: number | string;
    image: string;
    title: string;
    price: number;
    isLiked?: boolean;
  };
  handleLiked: (id: string) => void;
}

function ProductCard({ item, handleLiked }: Props) {
  // const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const pressHandler = () => {
    handleLiked(String(item.id));
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetails', { item });
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.content}>
        <Text style={styles.title}> {item.title}</Text>
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
  title: {
    color: '#444444',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
  },
  price: {
    color: '#9C9C9C',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 18,
  },
  content: {
    paddingLeft: 3,
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
});
