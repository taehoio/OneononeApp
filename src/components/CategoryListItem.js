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
import Animated, {FadeInDown} from 'react-native-reanimated';

function CategoryListItem({category}) {
  const navigation = useNavigation();
  const onPress = () => {
    let categoryId = '';
    let categoryName = 'Random';

    if (category.type === 'category') {
      categoryId = category.id;
      categoryName = category.name;
    }

    navigation.navigate('Question', {
      categoryId,
      categoryName,
      questionId: 'random',
    });
  };

  const tailwind = useTailwind();
  const backgroundColorText = category.backgroundColorText || 'cyan';

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.5}
      onPress={onPress}>
      <Animated.View entering={FadeInDown} style={tailwind('px-4 py-1')}>
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
      </Animated.View>
    </TouchableOpacity>
  );
}

export default CategoryListItem;
