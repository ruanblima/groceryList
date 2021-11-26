import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

import type { CategoryProps } from '~/@types/entities/Category';
import type { GroceryProps } from '~/@types/entities/Grocery';
import type { ProductProps } from '~/@types/entities/Product';

export const insertItem = (
  groceryList: GroceryProps[],
  category: CategoryProps,
  name: string,
  amount: number,
  price: number,
  image: string,
  unity: string,
) => {
  const newList = groceryList;
  newList.map(categoryCurrent => {
    if (categoryCurrent.id === category.id) {
      const newItem: ProductProps = {
        id: uuidv4(),
        name,
        category: { id: category.id, name: category.name },
        amount,
        price,
        image_url: image,
        unity,
      };
      return categoryCurrent.listItems.push(newItem);
    }
    return null;
  });

  return newList;
};
