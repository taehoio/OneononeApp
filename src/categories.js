const questions = [
  {
    id: 0,
    question: 'What is your name?',
  },
  {
    id: 1,
    question: 'What is your job?',
  },
  {
    id: 2,
    question: 'What is your age?',
  },
];

const categories = [
  {
    id: 0,
    name: 'Random',
    questions: [questions[0], questions[1], questions[2]],
  },
  {
    id: 1,
    name: 'About Manager',
    questions: [questions[1], questions[2]],
  },
  {
    id: 2,
    name: 'Career development',
  },
  {
    id: 3,
    name: 'Conversation starters',
  },
  {
    id: 4,
    name: 'Job satisfaction',
  },
  {
    id: 5,
    name: 'Other',
  },
  {
    id: 6,
    name: 'Team and company',
  },
  {
    id: 7,
    name: 'Work-life',
  },
];

export default categories;
