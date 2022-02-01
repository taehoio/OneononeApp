import React from 'react';
import {View, Button, Text} from 'react-native';
import {RootStacknavigationProp} from '../App';
import {useTailwind} from 'tailwind-rn';
import CategoryList from '../components/CategoryList';
import categories from '../categories';

function HomeScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('py-1')}>
      <CategoryList categories={categories} />
    </View>
  );
}

export default HomeScreen;
