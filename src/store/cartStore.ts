import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductItem } from '../screen/HomeScreen';

export interface CartItem extends ProductItem {
  quantity: number;
  size?: string;
}

interface CartStore {
  cart: ProductItem[];
  addToCart: (product: ProductItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      /** добавление продукта в корзину */
      addToCart: product => {
        set(state => {
          const isExist = state.cart.findIndex(el => el.id === product.id);

          return isExist === -1
            ? {
                cart: [...state.cart, product],
              }
            : {
                cart: state.cart,
              };
        });
      },

      /** удаление одного элемента из корзины */
      removeFromCart: (id) => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== id),
        }));
      },

      /** очистка корзины */
      clearCart: () => {
        set({ cart: [] });
      },

      /** получение общей суммы */
      getTotalPrice: () => {
        const { cart } = get();
        return cart.reduce((total, item) => {
            return total + item.price
        }, 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
