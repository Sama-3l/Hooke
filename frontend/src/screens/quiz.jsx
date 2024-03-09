import React, { useState } from 'react';

const quizData = [
  {
    id: 1,
    question: 'What is the capital of France?',
    image: import('../assets/paris.jpg').then((image) => image.default),
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    image: import('../assets/mars.avif').then((image) => image.default),
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    image: import('../assets/mars.avif').then((image) => image.default),
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 4,
    question: 'Which planet is known as the Red Planet?',
    image: import('../assets/mars.avif').then((image) => image.default),
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 5,
    question: 'Which planet is known as the Red Planet?',
    image: import('../assets/mars.avif').then((image) => image.default),
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleSave = () => {
    // You can handle saving the user's response here
    console.log(`Saved response for question ${currentQuestion + 1}: ${selectedOption}`);
  };

  const handleNext = () => {
    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    // Reset selected option
    setSelectedOption(null);
  };

  const handlePrevious = () => {
    // Move to the previous question
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
    // Reset selected option
    setSelectedOption(null);
  };

  const handleQuestionJump = (questionIndex) => {
    // Jump to a specific question
    setCurrentQuestion(questionIndex);
    // Reset selected option
    setSelectedOption(null);
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {currentQuestion < quizData.length ? (
        <>
          <div>
            <h3>{quizData[currentQuestion].question}</h3>
            <img src={quizData[currentQuestion].image} alt={`Question ${currentQuestion + 1}`} />
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="options"
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleNext}>Next</button>
          </div>
          <div>
            <p>Question {currentQuestion + 1} of {quizData.length}</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            {/* Grid of numbers for direct navigation */}
            {quizData.map((_, index) => (
              <span
                key={index}
                style={{
                  cursor: 'pointer',
                  marginRight: '5px',
                  fontWeight: index === currentQuestion ? 'bold' : 'normal',
                  display: 'inline-block',
                  padding: '8px',
                  borderRadius: '8px',
                  border: `2px solid ${index === currentQuestion ? 'currentColor' : 'transparent'}`,
                }}
                onClick={() => handleQuestionJump(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </>
      ) : (
        <p>Quiz completed. Thank you!</p>
      )}
    </div>
  );
};

export default QuizApp;
