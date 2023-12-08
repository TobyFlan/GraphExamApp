import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import saveSurveyData from './services/saveData';


// Placeholder data for questions
const questionsData = [
    {
        id: 1,
        image: `src/assets/Question_1.png`,
        question: 'Which country got the highest number of medals in 2003?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Japan',
    },
    {
        id: 2,
        image: `src/assets/Question_2.png`,
        question: 'Which country got the highest number of medals in 2003?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Japan', 
      },
      {
        id: 3,
        image: `src/assets/Question_3.png`,
        question: 'Which country has the second highest total medal count in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'USA',
      },
      {
        id: 4,
        image: `src/assets/Question_4.png`,
        question: 'Which country has the highest total medal count in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Russia',
      },
      {
        id: 5,
        image: `src/assets/Question_5.png`,
        question: 'Which country scored exactly 15 medals in 2001?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'GB',
      },
      {
        id: 6,
        image: `src/assets/Question_6.png`,
        question: 'Which country scored the most medals in 2004?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'USA', 
      },
      {
        id: 7,
        image: `src/assets/Question_7.png`,
        question: 'Which country has the second lowest medal count in 2001?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Russia',
      },
      {
        id: 8,
        image: `src/assets/Question_8.png`,
        question: 'Which country has the second lowest medal count in 2001?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Japan',
      },
      {
        id: 9,
        image: `src/assets/Question_9.png`,
        question: 'Which country scored the highest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Russia',
      },
      {
        id: 10,
        image: `src/assets/Question_10.png`,
        question: 'Which country scored the highest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'GB',
      },
      {
        id: 11,
        image: `src/assets/Question_11.png`,
        question: 'Which country scored the lowest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'China',
      },
      {
        id: 12,
        image: `src/assets/Question_12.png`,
        question: 'Which country scored the lowest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'China', 
      },
      {
        id: 13,
        image: `src/assets/Question_13.png`,
        question: 'Which country scored the lowest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'GB',
      },
      {
        id: 14,
        image: `src/assets/Question_14.png`,
        question: 'Which country scored the lowest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Japan',
      },
      {
        id: 15,
        image: `src/assets/Question_15.png`,
        question: 'Which country scored the highest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'China',
      },
      {
        id: 16,
        image: `src/assets/Question_16.png`,
        question: 'Which country scored the highest total medal count accross all years?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'USA',
      },
      {
        id: 17,
        image: `src/assets/Question_17.png`,
        question: 'Who scored the second highest number of medals in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Russia',
      },
      {
        id: 18,
        image: `src/assets/Question_18.png`,
        question: 'Who scored the second highest number of medals in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'Japan',
      },
      {
        id: 19,
        image: `src/assets/Question_19.png`,
        question: 'Who scored the second highest number of medals in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'USA',
      },
      {
        id: 20,
        image: `src/assets/Question_20.png`,
        question: 'Who scored the second highest number of medals in 2002?',
        options: ['USA', 'Japan', 'Russia', 'GB', 'China'],
        correctAnswer: 'USA',
      }

];



//placeholder question component for prototype
const Question = () => {

    //store usestate to render correct question numbr
    const [questionID, updateQuestionID] = useState(0);

    const [selectedAnswer, updateSelectedAnswer] = useState(null);
    const [responseTimes, updateResponseTimes] = useState([]);
    const [responseCorrectness, updateResponseCorrectness] = useState([]);

    const currentQuestion = questionsData[questionID];


    //tracking the timer
    const [timer, setTimer] = useState(0);

    //start the timer 
    useEffect(() => {
        const timerId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
        }, 1); // Update every millisecond

        // Cleanup function to clear the interval when the component unmounts or when the question changes
        return () => clearInterval(timerId);
    }, [questionID]);


    //handle question number increase
    const handleSubmit = (correct) => {

        // Stop the timer when the user clicks "Next"
        clearInterval(timer);

        // Log the response time for the current question
        updateResponseTimes([...responseTimes, timer])

        //reset timer
        setTimer(0);


        updateQuestionID(questionID + 1);

        //insert thing to handle response times here
        updateResponseCorrectness([...responseCorrectness, Number(correct)]); 

        updateSelectedAnswer(null);

    }
    
    //debug print this out properly 
    useEffect(() => {
        console.log('correctness = ', responseCorrectness);
        console.log('times = ', responseTimes);
      }, [responseCorrectness]);
    

    //handle when option is selected
    const handleOptionSelect = (selectedOption) => {
        updateSelectedAnswer(selectedOption);
    }


    //if response time is less than 20 (there will be 20 questions), keep increasing question number
    if(questionID < questionsData.length){

        return(
            <div>
                <h1>QUESTION {questionID + 1}</h1>
                <img className="responsive-image" src={currentQuestion.image} alt={`Question ${currentQuestion.id}`}></img>
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
            <button onClick={() => {
                handleSubmit(selectedAnswer == currentQuestion.correctAnswer);
            }} disabled={!selectedAnswer}>
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
                <RouterLink
                    to={'/results'}
                    state={[responseTimes, responseCorrectness]}
                    >
                    <button onClick={() => {
                        saveSurveyData(1, responseCorrectness, responseTimes);
                        console.log("finished test!");
                    }}>
                        Send data and view results
                    </button>
                </RouterLink>

            </div>
        )

    }

}

export default Question;