import React from 'react';
import {View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStacknavigationProp} from '../App';
import {useTailwind} from 'tailwind-rn';
import CategoryList from '../components/CategoryList';

function HomeScreen() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  const categories = [
    {
      name: 'Random',
    },
    {
      name: 'About Manager',
    },
    {
      name: 'Career development',
    },
    {
      name: 'Conversation starters',
    },
    {
      name: 'Job satisfaction',
    },
    {
      name: 'Other',
    },
    {
      name: 'Team and company',
    },
    {
      name: 'Work-life',
    },
  ];

  return (
    <View>
      <CategoryList categories={categories} />
    </View>
  );
}

export default HomeScreen;
