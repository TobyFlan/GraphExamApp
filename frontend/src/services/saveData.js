import axios from 'axios';
const baseUrl = '/questions';


const saveSurveyData = async (userId, responseCorrectness, responseTimes) => {
  try {
    const response = await axios.post(`${baseUrl}/save-response`, {
      userId,
      responses: responseCorrectness.map((correctness, index) => ({
        questionId: index + 1,
        responseTime: responseTimes[index],
        isCorrect: Boolean(correctness),
      })),
    });

    console.log(response.data.message);
  } catch (error) {
    console.error('Error saving survey data:', error);
  }
};

export default saveSurveyData;
