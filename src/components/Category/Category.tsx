import { Text, StyleSheet, Pressable } from 'react-native';

interface Props {
  readonly item: string;
  onPress: (el: string) => void;
  isSelected?: boolean;
}

function Category({ item, onPress, isSelected = false }: Props) {

  const pressHandler = () => {
    onPress(item);
  };

  return (
    <Pressable
      onPress={pressHandler}
      // style={[isSelected ? styles.selected : styles.unselected]}
    >
      <Text
        style={[
          isSelected ? styles.selected : styles.unselected,
          styles.categoryText,
        ]}
      >
        {item}
      </Text>
    </Pressable>
  );
}

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    // backgroundColor: '#E96E6E',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    borderRadius: 16,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selected: {
    backgroundColor: '#E96E6E', // primary color
    color: '#FFFFFF',
  },
  unselected: {
    backgroundColor: '#F5F5F5', // secondary color (light gray)
    color: '#5c5c5c',
  },
});
