import React from 'react';
import {FlatList} from 'react-native';
import CategoryListItem from './CategoryListItem';

function CategoryList({categories}) {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <CategoryListItem category={item} />}
    />
  );
}

export default CategoryList;
