import type { Action } from 'redux';

import type { GroceryProps } from '~/@types/entities/Grocery';

export enum GroceryTypes {
  INSERT_ITEM = '@grocery/INSERT_ITEM',
}

export interface GroceryState {
  groceryList: GroceryProps[];
}
