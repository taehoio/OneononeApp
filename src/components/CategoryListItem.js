import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function CategoryListItem({category}) {
  const tailwind = useTailwind();
  const {name} = category;

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={tailwind('px-4 pt-2')}>
        <View style={tailwind('w-full rounded-lg bg-blue-500')}>
          <Text
            style={tailwind(
              'p-4 text-gray-100 text-4xl font-bold text-center',
            )}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryListItem;
