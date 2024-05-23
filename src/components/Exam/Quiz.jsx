import React, { useState } from 'react';
import Quiz from 'react-quiz-component';

const quiz = {
  quizTitle: 'Grade 10 Chemistry Solutions Quiz',
  quizSynopsis: 'Test your knowledge about solutions in chemistry!',
  nrOfQuestions: '10',
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
    },
    {
      question: 'What is the chemical symbol for gold?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Au', 'Ag', 'Cu', 'Fe'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! Au is the chemical symbol for gold.',
      messageForIncorrectAnswer: 'Incorrect. The chemical symbol for gold is Au.',
      explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum."',
      point: '15'
    },
    {
      question: 'Which of the following is a universal solvent?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Water', 'Acetone', 'Benzene', 'Ethanol'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! Water is often referred to as the universal solvent.',
      messageForIncorrectAnswer: 'Incorrect. Water is the universal solvent.',
      explanation: 'Water can dissolve a wide range of substances, earning it the title of universal solvent.',
      point: '15'
    },
    {
      question: 'What is the chemical formula for table salt?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['NaCl', 'H2O', 'CO2', 'C6H12O6'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! NaCl is the chemical formula for table salt.',
      messageForIncorrectAnswer: 'Incorrect. The chemical formula for table salt is NaCl.',
      explanation: 'NaCl, or sodium chloride, is commonly known as table salt.',
      point: '15'
    },
    {
      question: 'What is the main component of air?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! Nitrogen is the main component of air.',
      messageForIncorrectAnswer: 'Incorrect. Nitrogen makes up the majority of Earth\'s atmosphere.',
      explanation: 'Nitrogen gas (N2) comprises about 78% of the Earth\'s atmosphere by volume.',
      point: '15'
    },
    // Add 2 more questions here
    {
      question: 'What is the molecular formula of water?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['H2O', 'CO2', 'O2', 'CH4'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! H2O is the molecular formula of water.',
      messageForIncorrectAnswer: 'Incorrect. The molecular formula of water is H2O.',
      explanation: 'Water consists of two hydrogen atoms and one oxygen atom bonded together, forming the molecule H2O.',
      point: '15'
    },
    {
      question: 'What is the pH scale used to measure?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Acidity or alkalinity of a substance', 'Temperature', 'Pressure', 'Density'],
      correctAnswer: '0',
      messageForCorrectAnswer: 'Correct! The pH scale measures acidity or alkalinity of a substance.',
      messageForIncorrectAnswer: 'Incorrect. The pH scale is used to measure acidity or alkalinity.',
      explanation: 'The pH scale ranges from 0 to 14, with 7 considered neutral. Values below 7 are acidic, and above 7 are alkaline (basic).',
      point: '15'
    },
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
    <div className="mt-4 bg-gray-100 min-h-screen flex items-center mb-16 justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded shadow-lg">
        <Quiz
          quiz={quiz}
          showDefaultResult={true}
          callback={handleAnswerChange}
          quizState={quizState}
          // shuffle={true}
          answerSelectionType="multiple"
        />
      </div>
    </div>
  );
}

export default App;
