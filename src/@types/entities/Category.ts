import type { ProductProps } from './Product';

export interface CategoryProps {
  id: number;
  name: string;
  listItems?: ProductProps[];
}
