// Combine them all in an asynchronous thunk
export const saveInterview = (data) => {
    return async dispatch => {
    //   dispatch(getInterviews())
  
      try {
        const options = {
            method: 'POST',            
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(`http://localhost:3000/interviews`, options);
        console.log(response);
    
        // dispatch(getInterviewsSuccess(data))
      } catch (error) {
        // dispatch(getInterviewsFailure())
      }
    }
}