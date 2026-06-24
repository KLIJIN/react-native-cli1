import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen() {
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
        <Text>Home Screen</Text>

        <Pressable onPress={pressHandler}>
          <Text>Go to ReorderScreen</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  home: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
