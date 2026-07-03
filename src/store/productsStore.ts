import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductItem } from '../screen/HomeScreen';

interface ProductsStore {
  products: ProductItem[];
  addProducts: (products: ProductItem[]) => void;
  toggleLike: (id: string) => void;
  getLikedProducts: () => ProductItem[];
}

export const useProductsStore = create<ProductsStore>()(
  persist(
    (set, get) => ({
      products: [],

      /** добавление массива продуктов в стор */
        addProducts: (products) => {
        set({ products }); // Просто заменяем массив
      },

      /** добавление/удаление лайка в элементе массива продуктов */
      toggleLike: (id: string) => {
        set(state => ({
          products: state.products.map(product => {
            if (product.id !== id) return product;

            const newItem: Partial<ProductItem> = { ...product };

            if (newItem.isLiked) {
              delete newItem.isLiked;
              return newItem as ProductItem;
            }

            return { ...product, isLiked: true };
          }),
        }));
      },

      /** получение всех лайкнутых продуктов */
      getLikedProducts: () => {
        const { products } = get();
        return products.filter(product => product.isLiked === true);
      },
    }),
    {
      name: 'products-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
