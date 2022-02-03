import React from 'react';
import {View, Button, Text, ActivityIndicator} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useQuery} from 'react-query';

import CategoryList from '../components/CategoryList';
import {listCategories} from '../api/category';

function toCategoryListItems(categories) {
  const categoryListItems = categories.map(category => {
    return {
      ...category,
      type: 'category',
      backgroundColorText: 'cyan',
    };
  });

  return [
    {
      id: 'random',
      name: 'Random',
      type: 'random',
      backgroundColorText: 'fuchsia',
    },
    ...categoryListItems,
  ];
}

function HomeScreen() {
  const tailwind = useTailwind();
  const {data, isLoading} = useQuery('categories', listCategories);

  if (!data) {
    return <ActivityIndicator size="large" style={tailwind('h-full w-full')} />;
  }

  return (
    <View style={tailwind('py-1 flex-1 flex-row')}>
      <CategoryList categories={toCategoryListItems(data.categories)} />
    </View>
  );
}

export default HomeScreen;
