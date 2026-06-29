import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@react-native-vector-icons/entypo';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import HomeScreen from './src/screen/HomeScreen';
import ProductDetails from './src/screen/ProductDetails';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Reorder: undefined;
      ProductDetails: {
        item: {
          id: number | string;
          image: string;
          title: string;
          price: number;
          isLiked?: boolean;
        };
      };
    }
  }
}

function ReorderScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ReorderScreen Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CartScreen </Text>
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
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Product Details',
        }}
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
        name="HomeStack"
        component={MyHomeStack}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Reorder"
        component={ReorderScreen}
        options={{ tabBarIcon: ReorderTabIcon }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarIcon: CartTabIcon }}
      />
      <Tab.Screen
        name="Account"
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
