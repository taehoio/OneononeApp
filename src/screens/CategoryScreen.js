import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function CategoryScreen() {
  const tailwind = useTailwind();

  return (
    <View>
      <Text style={tailwind('text-xl text-blue-600')}>Category</Text>
    </View>
  );
}

export default CategoryScreen;
