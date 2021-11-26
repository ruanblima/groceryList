import type { CategoryProps } from './Category';

export interface ProductProps {
  id: string;
  name: string;
  amount: number;
  price?: number;
  unity: string;
  image_url?: string;
  category: CategoryProps;
}
