import React, { useState } from "react";
import "./Quiz1.css";

const questions = [
  {
    question: "What does a debit transaction do to your bank account?",
    options: ["Increases the balance", "Decreases the balance", "Transfers funds between accounts", "Has no effect on the balance"],
    correct: 1,
  },
  {
    question: "Which of the following is an example of a credit transaction?",
    options: ["Paying your electricity bill", "Withdrawing cash from an ATM", "Receiving your salary", "Purchasing groceries"],
    correct: 2,
  },
  {
    question: "How can the term debit be defined in simple terms?",
    options: ["Money flowing into your account", "Money flowing out of your account", "No change to your account balance", "Blocking an account transaction"],
    correct: 1,
  },
  {
    question: "If you use your debit card to buy groceries, what happens?",
    options: ["Your bank account is credited", "Your bank account is debited", "No change to the account", "Your bank sends you interest"],
    correct: 1,
  },
  {
    question: "In banking terms, what does 'credit' mean for your account?",
    options: ["You lose money", "More money is added to your account", "The account is frozen", "Money is withdrawn"],
    correct: 1,
  },
];

const Quiz1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleOptionChange = (index, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const nextPage = () => {
    setCurrentStep(1);
  };

  const submitQuiz = () => {
    const calculatedScore = answers.reduce((total, answer, index) => {
      return answer === questions[index].correct ? total + 1 : total;
    }, 0);
    setScore(calculatedScore);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz on Debit & Credit</h2>
      
      <div className="quiz-questions">
        {questions.slice(currentStep * 3, currentStep * 3 + 3).map((q, qIndex) => (
          <div key={qIndex} className="quiz-card">
            <p className="question">{q.question}</p>
            <div className="options">
              {q.options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="radio"
                    name={`question-${qIndex + currentStep * 3}`}
                    checked={answers[qIndex + currentStep * 3] === index}
                    onChange={() => handleOptionChange(qIndex + currentStep * 3, index)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {score === null ? (
        <div className="quiz-navigation">
          {currentStep === 0 ? (
            <button className="next-btn" onClick={nextPage}>Next →</button>
          ) : (
            <button className="submit-btn" onClick={submitQuiz}>Submit</button>
          )}
        </div>
      ) : (
        <div className="quiz-result">
          <h3>Your Score: {score} / 5</h3>
          <p>{score === 5 ? "Excellent! 🎉" : score >= 3 ? "Good job! Keep learning. 👍" : "Keep practicing! 💪"}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz1;
