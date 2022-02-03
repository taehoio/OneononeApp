import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';
import {useTailwind} from 'tailwind-rn';
import {useQuery} from 'react-query';

import Question from '../components/Question';
import {getQuestion, getRandomQuestionByCategoryId} from '../api/question';

function QuestionScreen() {
  const navigation = useNavigation();

  const {params} = useRoute();
  const {questionId, categoryId, categoryName} = params;

  const tailwind = useTailwind();

  const {data, isLoading, refetch, isRefetching} = useQuery(
    ['question', questionId, categoryId],
    () => getQuestionWithOrWithoutCategoryId(questionId, categoryId),
    {
      cacheTime: 0,
    },
  );

  if (data) {
    if (questionId !== 'random') {
      navigation.setOptions({
        title: `Question - ${categoryName}`,
      });

      return (
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                const explicitQuestionId = data.question.id;
                navigation.navigate('Question', {
                  categoryId,
                  categoryName,
                  questionId: 'random',
                });
              }}
              refreshing={isRefetching}
            />
          }>
          <Question style={tailwind('h-full w-full bg-teal-500')}>
            {data.question.question}
          </Question>
        </ScrollView>
      );
    }

    setTimeout(() => {
      const explicitQuestionId = data.question.id;
      navigation.navigate('Question', {
        categoryId,
        categoryName,
        questionId: explicitQuestionId,
      });
    });
  }

  return <ActivityIndicator size="large" style={tailwind('h-full w-full')} />;
}

function getQuestionWithOrWithoutCategoryId(questionId, categoryId) {
  if (categoryId) {
    return getRandomQuestionByCategoryId(categoryId);
  }
  return getQuestion(questionId);
}

export default QuestionScreen;
