import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Results = (props) => {
    const {state} = useLocation();

    var countCorrect = 0;

    var responseTimes = [];
    var responseCorrectness = [];
    // Access the state data from the location object
    if(state){
        responseTimes = state[0];
        responseCorrectness = state[1];
    }

  
    //find score /20
    countCorrect = responseCorrectness.reduce(
      (total, current) => total + current,
      0
    );

    //find total time taken
    const sum = responseTimes.reduce(
        (total, current) => total + current, 
        0
    );

    console.log('Response Times:', responseTimes);
    console.log('Number of Correct Responses:', countCorrect);

  return (
    <div>
      <h1>Results Page</h1>
      <h3>You got {countCorrect}/{responseCorrectness.length}</h3>
      <p>With an average response time of {sum/responseTimes.length} milliseconds</p>
    </div>
  );
};

export default Results;
