import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Entypo from '@react-native-vector-icons/entypo';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  hasTitle?: boolean;
}

function Header({ hasTitle = false }: HeaderProps) {
  const navigation = useNavigation();

  const clickHanler = () => {
    navigation.navigate('HomeStack');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        {hasTitle ? (
          <TouchableOpacity onPress={clickHanler}>
            <Entypo name="chevron-left" color={'#ca3333'} size={24} />
          </TouchableOpacity>
        ) : (
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.vectorIcon}
          />
        )}
      </View>
      {hasTitle && <Text style={styles.title}> Корзина</Text>}
      {/* girls */}
      <Image
        source={require('../../assets/Ellipse.png')}
        style={styles.ellipseIcon}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 45,
    alignItems: 'center',

    // paddingHorizontal: 32,
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },
  vectorIcon: {
    height: 28,
    width: 28,
  },
  ellipseIcon: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 28,
    // backgroundColor: 'lime'
  },
});
