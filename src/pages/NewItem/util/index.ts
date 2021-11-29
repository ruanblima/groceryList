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
  amount: string,
  price: string,
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
        isAdded: false,
      };
      return categoryCurrent.listItems.push(newItem);
    }
    return null;
  });

  return newList;
};

export const editItem = (
  groceryList: GroceryProps[],
  idCategory: string,
  idItem: string,
  name: string,
  amount: string,
) => {
  const list = cloneDeep(groceryList);

  const indexCategory = list.findIndex(
    (obj: GroceryProps) => obj.id === idCategory,
  );

  const indexItem = list[indexCategory].listItems.findIndex(
    obj => obj.id === idItem,
  );

  list[indexCategory].listItems[indexItem].name = name;
  list[indexCategory].listItems[indexItem].amount = amount;

  return list;
};
