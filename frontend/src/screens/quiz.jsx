import React, { useState, useEffect } from 'react';
import marsImage from '../assets/mars.avif';
import parisImage from '../assets/paris.jpg';

const quizData = [
  {
    id: 1,
    question: 'What is the capital of France?',
    image: parisImage,
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    image: marsImage,
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    image: marsImage,
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 4,
    question: 'Which planet is known as the Red Planet?',
    image: marsImage,
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    id: 5,
    question: 'Which planet is known as the Red Planet?',
    image: marsImage,
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(330); // 300 seconds = 5 minutes
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleFinish();
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

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

  const handleFinish = () => {
    // Implement finish logic (e.g., show results or submit answers)
    console.log('Quiz finished!');
    setQuizFinished(true);
  };

  return (
    <div>
      {!quizFinished && (
        <div
          style={{
            float: 'right',
            position: 'fixed',
            top: '8px',
            right: '20px',
            color: timer <= 300 && timer > 0 ? 'red' : 'white',
          }}
        >
          Timer: {formatTime(timer)}
        </div>
      )}
      <h2>Quiz App</h2>
      {!quizFinished ? (
        <>
          <div>
            <h3>{quizData[currentQuestion].question}</h3>
            <img
              src={quizData[currentQuestion].image}
              alt={`Question ${currentQuestion + 1}`}
              style={{ width: '200px', height: 'auto' }}
            />
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
          <div>
            <button onClick={handleFinish} style={{ marginTop: '20px' }}>
              Finish
            </button>
          </div>
        </>
      ) : (
        <p>Quiz completed. Thank you!</p>
      )}
    </div>
  );
};

export default QuizApp;
