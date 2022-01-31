import React from 'react';
import {View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStacknavigationProp} from '../App';
import {useTailwind} from 'tailwind-rn';
import CategoryList from '../components/CategoryList';
import categories from '../categories';

function HomeScreen() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  return (
    <View>
      <CategoryList categories={categories} />
    </View>
  );
}

export default HomeScreen;
