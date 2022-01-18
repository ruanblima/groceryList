import type { CategoryProps } from '~/@types/entities/Category';

export enum CategoryTypes {
  INSERT_CATEGORY = '@category/INSERT_CATEGORY',
}

export interface CategoryState {
  categoryList: CategoryProps[];
}
