import { ResolverWithoutParent } from '../../../types';
import { Animal } from '../../graphql.types';

const fakeRewards: Animal[] = [
  {
    id: '1',
    name: 'Мурзик',
    age: 1.1,
    __typename: 'Cat',
  },
  {
    id: '2',
    name: 'Барсик',
    age: 0.3,
    __typename: 'Cat',
  },
  {
    id: '3',
    name: 'Бобик',
    age: 1.1,
    __typename: 'Dog',
  },
  {
    id: '4',
    name: 'Барбос',
    age: 0.3,
    __typename: 'Dog',
  },
  {
    id: '5',
    name: 'Тузик',
    age: 1.3,
    __typename: 'Dog',
  },
];

export const animals: ResolverWithoutParent<never, Animal[] | Error> = async () => fakeRewards;