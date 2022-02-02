import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';
import {useTailwind} from 'tailwind-rn';
import {useQuery} from 'react-query';

import Question from '../components/Question';
import {getQuestion} from '../api/question';

function QuestionScreen() {
  const navigation = useNavigation();

  const {params} = useRoute();
  const {questionId} = params;

  const tailwind = useTailwind();

  const {data, isLoading} = useQuery(
    ['question', questionId],
    () => getQuestion(questionId),
    {
      cacheTime: 0,
    },
  );

  if (data) {
    if (questionId !== 'random') {
      return (
        <Question style={tailwind('h-full w-full bg-teal-500')}>
          {data.question.question}
        </Question>
      );
    }

    setTimeout(() => {
      const explicitQuestionId = data.question.id;
      navigation.navigate('Question', {
        questionId: explicitQuestionId,
      });
    });
  }

  return <ActivityIndicator size="large" style={tailwind('h-full w-full')} />;
}

export default QuestionScreen;
