import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';

function CategoryListItem({category}) {
  const navigation = useNavigation();
  const onPress = () => {
    if (category.id === 0) {
      navigation.navigate('Question', {
        questionId: 'random',
      });
      return;
    }

    navigation.navigate('Category', {
      categoryId: category.id,
    });
  };

  const tailwind = useTailwind();

  const {name} = category;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={tailwind('px-4 py-1')}>
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
