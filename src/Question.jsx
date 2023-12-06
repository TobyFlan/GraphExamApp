import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';


// Placeholder data for questions (replace with your actual data)
const questionsData = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      question: 'What is the capital of France?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A', // Replace with the correct answer
    },

];



//placeholder question component for prototype
const Question = () => {

    //store usestate to render correct question numbr
    const [questionID, updateQuestionID] = useState(0);

    const [selectedAnswer, updateSelectedAnswer] = useState(null);
    const [responseTimes, updateResponseTimes] = useState([]);
    const [responseCorrectness, updateResponseCorrectness] = useState([]);

    //update to [questionsID] once i have 20 questions.
    const currentQuestion = questionsData[questionID];

    //handle question number increase
    const handleSubmit = () => {

        updateQuestionID(questionID + 1);

        //insert thing to handle response times here

        updateSelectedAnswer(null);
    }


    //handle when option is selected
    const handleOptionSelect = (selectedOption) => {
        updateSelectedAnswer(selectedOption);
    }


    //if response time is less than 20 (there will be 20 questions), keep increasing question number
    if(questionID < questionsData.length){

        return(
            <div>
                <h1>QUESTION {questionID + 1}</h1>
                <img src={currentQuestion.image} alt={`Question ${currentQuestion.id}`}></img>
                <p>{currentQuestion.question}</p>
                <div className="question-options">
                {currentQuestion.options.map((option, index) => (
                    <div key={index} className="option">
                    <input
                        type="radio"
                        id={option}
                        name="options"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => handleOptionSelect(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                    </div>
            ))}
            </div>
            <button onClick={handleSubmit} disabled={!selectedAnswer}>
            Next
            </button>
        </div>
        )

    }

    else{

        //reroute to final page and send data to database
        return(
            <div>
                <h1>TEST IS OVER</h1>
                <button onClick={() => {console.log("finished test!")}}>Exit</button>
            </div>
        )

    }



}

export default Question;