import React from 'react';
import {FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Animated, {Layout} from 'react-native-reanimated';

import CategoryListItem from './CategoryListItem';

function CategoryList({categories, refresh, isRefreshing}) {
  const tailwind = useTailwind();

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <CategoryListItem category={item} />}
    />
  );
}

export default CategoryList;
