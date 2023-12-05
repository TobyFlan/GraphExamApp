import React from 'react';
import { Link as RouterLink } from 'react-router-dom';



const Disclaimer = () => {

    return(
        <div>
            <h1>About the Survey</h1>

            <p>During the survey, you will be shown many graphs, and will be asked to
                answer some questions based on each graph shown to you.
            </p>
            <br></br>

            <p>In order to answer, select one of the 4 options and click "next" to go
                to the next question. You can not return to previously answered questions.
            </p>
            <br></br>
            <p>Your response times and correctness will be recorded, however we will store
                no personal data about you.
            </p>
            <br></br>

            <p>press the button below to agree to the recording of your responses, and to
                view your first question</p>
            <button onClick={() => console.log("clidked dis shi")}>I Agree, Start Exam</button>
            <RouterLink to="/">
                <button onClick={() => console.log("DISAGREED")}>I Disagree, Don't talk to me!</button>
            </RouterLink>
        </div>
    )

}

export default Disclaimer;