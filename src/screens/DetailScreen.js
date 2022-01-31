import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function DetailScreen() {
  const tailwind = useTailwind();

  return (
    <View>
      <Text style={tailwind('text-xl text-blue-600')}>Detail</Text>
    </View>
  );
}

export default DetailScreen;
