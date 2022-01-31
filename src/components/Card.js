import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function Card({style}) {
  const tailwind = useTailwind();

  return (
    <View style={style}>
      <View style={tailwind('h-14 border-solid border-2 border-sky-500')}>
        <View></View>
        <Text>Hi~</Text>
      </View>
    </View>
  );
}

export default Card;
