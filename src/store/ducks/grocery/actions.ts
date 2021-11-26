import { action } from 'typesafe-actions';

import type { GroceryProps } from '~/@types/entities/Grocery';

import type { InsertItemActionProps } from './types';
import { GroceryTypes } from './types';

export const insertItemAction = (
  groceryList: GroceryProps[],
): InsertItemActionProps => action(GroceryTypes.INSERT_ITEM, { groceryList });
