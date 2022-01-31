import React from 'react';
import {View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStacknavigationProp} from '../App';
import {useTailwind} from 'tailwind-rn';
import Card from '../components/Card';

function HomeScreen() {
  const navigation = useNavigation();
  const tailwind = useTailwind();

  return (
    <View>
      <Button
        title="Open Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={tailwind('flex')}>
        <Card style={tailwind('')}></Card>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Card style={tailwind('basis-1/4')}></Card>
        <Card style={tailwind('basis-1/4')}></Card>
        <Card style={tailwind('basis-1/4')}></Card>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Card style={tailwind('basis-1/3')}></Card>
        <Card style={tailwind('basis-1/3')}></Card>
        <Card style={tailwind('basis-1/3')}></Card>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Card style={tailwind('basis-1/2')}></Card>
        <Card style={tailwind('basis-1/2')}></Card>
        <Card style={tailwind('basis-1/2')}></Card>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Card style={tailwind('basis-1/2')}></Card>
        <Card style={tailwind('basis-1/2')}></Card>
        <Card style={tailwind('basis-1/2')}></Card>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Text style={tailwind('basis-1/2')}>Hi~</Text>
        <Text style={tailwind('basis-1/2')}>Hi~</Text>
        <Text style={tailwind('basis-1/2')}>Hi~</Text>
      </View>
      <View style={tailwind('flex flex-row')}>
        <Text style={tailwind('basis-1/4')}>Hi~</Text>
        <Text style={tailwind('basis-1/4')}>Hi~</Text>
        <Text style={tailwind('basis-1/4')}>Hi~</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
