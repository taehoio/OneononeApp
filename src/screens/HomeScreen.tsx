import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStacknavigationProp} from '../App';

function HomeScreen() {
  const navigation = useNavigation<RootStacknavigationProp>();

  return (
    <View>
      <Button
        title="Open Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;
