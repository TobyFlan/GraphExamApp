import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//placeholder question component for prototype
const Question = (props) => {

    //store usestate to render correct question numbr
    const [questionID, updateQuestionID] = useState(0);

    //store usestate to store response times for all questions
    const [responseTimes, updateResponseTimes] = useState([]);


    //handle question number increase
    const handleClick = () => {
        updateQuestionID(questionID + 1);
    }


    //if response time is less than 20 (there will be 20 questions), keep increasing question number
    if(questionID < 20){

        return(
            <div>
                <h1>QUESTION {questionID + 1}</h1>
                <p>there are questions going on.</p>
                <button onClick={handleClick}>Next</button>
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