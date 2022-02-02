import React from 'react';
import {FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';

import CategoryListItem from './CategoryListItem';

function CategoryList({categories}) {
  const tailwind = useTailwind();

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <CategoryListItem category={item} />}
    />
  );
}

export default CategoryList;
