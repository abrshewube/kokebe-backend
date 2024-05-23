import React, { useState } from 'react';
import Quiz from 'react-quiz-component';


const quiz = {
  quizTitle: 'Grade 10 Chemistry Solutions Quiz',
  quizSynopsis: 'Test your knowledge about solutions in chemistry!',
  nrOfQuestions: '4',
  questions: [
    {
      question: 'Which of the following is a homogeneous mixture?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Saltwater', 'Sand and water mixture', 'Oil and water mixture', 'Iron and sulfur mixture'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Saltwater is a solution, where salt (solute) is dissolved in water (solvent) to form a homogeneous mixture.',
      point: '20'
    },
    {
      question: 'What happens to the solubility of most solid solutes in water as temperature increases?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Decreases', 'Increases', 'Remains constant', 'Depends on the specific solute'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'For many solid solutes, their solubility in water increases as temperature increases. This is a common trend, but there are exceptions.',
      point: '20'
    },
    {
      question: 'What is the solute in a solution made by dissolving sugar in water?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Sugar', 'Water', 'Both sugar and water', 'None of the above'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'The solute is the substance being dissolved in a solution. In this case, sugar is being dissolved in water, so sugar is the solute.',
      point: '10'
    },
    {
      question: 'What is the process called when a gas turns into a liquid?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Sublimation', 'Deposition', 'Condensation', 'Evaporation'],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Condensation is the process by which a gas turns into a liquid. It is the opposite process of vaporization.',
      point: '30'
    }
  ]
};

function App() {
  const [quizState, setQuizState] = useState(null);

  // Callback to handle user's answer change
  const handleAnswerChange = (questionIndex, selectedAnswers) => {
    const updatedState = { ...quizState };
    updatedState.questions[questionIndex].userAnswer = selectedAnswers;
    setQuizState(updatedState);
  };

  return (
    <div className="mt-16 bg-gray-100 min-h-screen flex items-center mb-16 justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded shadow-lg">
       
        <Quiz
          quiz={quiz}
          showDefaultResult={true}
          callback={handleAnswerChange}
          quizState={quizState}
          shuffle={true}
          answerSelectionType="multiple"
        />
      </div>
    </div>
  );
}

export default App;
