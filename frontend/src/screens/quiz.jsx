import React, { useState, useEffect } from 'react';
import q2 from '../assets/q2.jpg';
import q1 from '../assets/q1.jpg';
import q3 from '../assets/q3.jpg';
import q4 from '../assets/q4.jpg';
import q5 from '../assets/q5.jpg';

const quizData = [
  {
    id: 1,
    question: q1
  },
  {
    id: 2,
    question: q2
  },
  {
    id: 3,
    question: q3
  },
  {
    id: 4,
    question: q4
  },
  {
    id: 5,
    question: q5
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(300); // 300 seconds = 5 minutes
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
    <div style={{ textAlign: 'center' }}>
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
      {!quizFinished ? (
        <>
          <div>
            <img
              src={quizData[currentQuestion].question}
              alt={`Question ${currentQuestion + 1}`}
              style={{height: '100px', width: '700px'}}
            />
            <div style={{ textAlign: 'center' }}>
              <input
                type="radio"
                id="optionA"
                name="options"
                checked={selectedOption === 'A'}
                onChange={() => handleOptionChange('A')}
              />
              <label htmlFor="optionA">A</label>

              <input
                type="radio"
                id="optionB"
                name="options"
                checked={selectedOption === 'B'}
                onChange={() => handleOptionChange('B')}
              />
              <label htmlFor="optionB">B</label>

              <input
                type="radio"
                id="optionC"
                name="options"
                checked={selectedOption === 'C'}
                onChange={() => handleOptionChange('C')}
              />
              <label htmlFor="optionC">C</label>

              <input
                type="radio"
                id="optionD"
                name="options"
                checked={selectedOption === 'D'}
                onChange={() => handleOptionChange('D')}
              />
              <label htmlFor="optionD">D</label>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <span style={{ margin: '0 8px' }} />
            <button onClick={handleSave}>Save</button>
            <span style={{ margin: '0 8px' }} />
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