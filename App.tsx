import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Text,
  Button,
  Pressable,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; // NavigationContainer — контейнер для всей навигации, как мозг приложения
import { createStackNavigator } from '@react-navigation/stack'; // createStackNavigator — создает навигацию в стиле "стопки страниц" (как в браузере: вперед/назад)
import { StackNavigationProp } from '@react-navigation/stack';

/** Это словарь маршрутов — здесь мы говорим: "У нас есть два экрана: Home и Details, и ни один из них не принимает параметры (undefined)". Это TypeScript помогает избежать ошибок. */
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();

/** главная страница home page приложения */
function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const pressHandler = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главная страница!</Text>
      {/* <Button title="Перейти к деталям" onPress={pressHandler} /> */}

      <Pressable
        onPress={pressHandler}
        style={{
          backgroundColor: 'aqua',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
           borderRadius: 25
        }}
      >
        <Text>Перейти к деталям</Text>
      </Pressable>
    </View>
  );
}

/** DetailsScreen — экран деталей */
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>пустая страница с деталями</Text>
    </View>
  );
}

function AppContent() {
  return (
    // NavigationContainer — обертка-менеджер всей навигации
    <NavigationContainer>
      {/* Stack.Navigator — создаем "стопку" экранов. initialRouteName="Home" — первый экран при запуске 


      */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Главная!' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Детали.' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      {/* // StatusBar верхняя полоска телефона (где время, батарея)*/}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FF6B00"
        translucent={false}
      />

      {/* контент */}
      <AppContent />
    </SafeAreaProvider>
  );
}

export default App;
