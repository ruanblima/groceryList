import type { CategoryProps } from './Category';

export interface ProductProps {
  id: string;
  name: string;
  amount: string;
  price?: string;
  unity: string;
  image_url?: string;
  category: CategoryProps;
  isAdded: boolean;
}
