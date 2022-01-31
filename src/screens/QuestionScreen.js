import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function QuestionScreen() {
  const tailwind = useTailwind();

  return (
    <View>
      <Text style={tailwind('text-xl text-blue-600')}>Question</Text>
    </View>
  );
}

export default QuestionScreen;
