import type { CategoryProps } from '~/@types/entities/Category';

export const listCategory: CategoryProps[] = [
  {
    id: 1,
    name: 'Limpeza',
    listItems: [
      { id: 1, name: 'Detergente' },
      { id: 2, name: 'Sabão' },
    ],
  },
  {
    id: 2,
    name: 'Carnes',
    listItems: [
      { id: 1, name: 'Picanha' },
      { id: 2, name: 'Frango' },
    ],
  },
  {
    id: 3,
    name: 'Frutas',
    listItems: [
      { id: 1, name: 'Mamão' },
      { id: 2, name: 'Acerola' },
    ],
  },
];
