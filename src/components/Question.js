import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function prettify(question) {
  return question.replace(/\?/g, '?\n\n');
}

function Question({style, children}) {
  const tailwind = useTailwind();

  return (
    <View style={[style, tailwind('justify-center')]}>
      <Text
        style={tailwind(
          'p-4 text-center text-4xl font-bold tracking-wide leading-10 text-gray-100',
        )}>
        {prettify(children)}
      </Text>
    </View>
  );
}

export default Question;
