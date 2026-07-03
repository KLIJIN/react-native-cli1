import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@react-native-vector-icons/entypo';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import HomeScreen, { ProductItem } from './src/screen/HomeScreen';
import ProductDetails from './src/screen/ProductDetails';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CartScreen from './src/screen/CartScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeStack: undefined;
      Reorder: undefined;
      ProductDetails: {
        item: ProductItem;
      };
    }
  }
}

export const SCREENS = {
  Home: 'home',
  HomeStack: 'HomeStack',
  Reorder: 'Reorder',
  ProductDetails: 'ProductDetails',
  Cart: 'Cart',
  Account: 'Account',
} as const;

function ReorderScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ReorderScreen Screen</Text>
      <Button onPress={() => navigation.navigate(SCREENS.HomeStack)}>
        Go to Home
      </Button>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CartScreen </Text>
    </View>
  );
}

const HomeTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <Entypo name="home" color={color} size={size} />;

const ReorderTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <MaterialIcons name="reorder" color={color} size={size} />;

const CartTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <MaterialIcons name="shopping-cart" color={color} size={size} />;

const AccountTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <MaterialIcons name="person" color={color} size={size} />;

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={SCREENS.Home} component={HomeScreen} />
      <HomeStack.Screen
        name={SCREENS.ProductDetails}
        component={ProductDetails}
        options={{ title: 'Product Details' }}
      />
    </HomeStack.Navigator>
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E96E6e',
        // tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={SCREENS.HomeStack}
        component={MyHomeStack}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name={SCREENS.Reorder}
        component={ReorderScreen}
        options={{ tabBarIcon: ReorderTabIcon }}
      />
      <Tab.Screen
        name={SCREENS.Cart}
        component={CartScreen}
        options={{ tabBarIcon: CartTabIcon }}
      />
      <Tab.Screen
        name={SCREENS.Account}
        component={AccountScreen}
        options={{ tabBarIcon: AccountTabIcon }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
