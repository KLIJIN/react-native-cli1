import { View, StyleSheet, Image } from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.vectorIcon}
        />
      </View>

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
});
