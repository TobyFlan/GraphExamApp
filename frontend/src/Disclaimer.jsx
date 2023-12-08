import React from 'react';
import { Link as RouterLink } from 'react-router-dom';



const Disclaimer = () => {

    return(
        <div>
            <h1>About the Survey</h1>

            <p>During the survey, you will be shown many graphs and asked to answer questions based on each graph.</p>
            <p>Select an option and click "Next" to proceed. You cannot return to previous questions.</p>
            <p>Your response times and correctness will be recorded, and no personal data will be stored.</p>

            <p>Press the button below to agree to the recording of your responses and start the exam:</p>
            <RouterLink to="/question">
            <button>I Agree, Start Exam</button>
            </RouterLink>
            <RouterLink to="/">
                <button>I Disagree</button>
            </RouterLink>
        </div>
    )

}

export default Disclaimer;