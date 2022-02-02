import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useTailwind} from 'tailwind-rn';

function CategoryListItem({category}) {
  const navigation = useNavigation();
  const onPress = () => {
    let categoryId = '';
    if (category.type === 'category') {
      categoryId = category.id;
    }

    navigation.navigate('Question', {
      categoryId,
      questionId: 'random',
    });
  };

  const tailwind = useTailwind();
  const backgroundColorText = category.backgroundColorText || 'cyan';

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={tailwind('px-4 py-1')}>
        <View
          style={tailwind(`w-full rounded-lg bg-${backgroundColorText}-500`)}>
          <View style={tailwind('bg-fuchsia-500 bg-cyan-500')} />
          <Text
            style={tailwind(
              'p-4 text-gray-100 text-4xl font-bold text-center',
            )}>
            {category.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryListItem;
