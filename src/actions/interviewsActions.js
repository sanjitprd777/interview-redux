// Create Redux action types
export const GET_INTERVIEWS = 'GET INTERVIEWS'
export const GET_INTERVIEWS_SUCCESS = 'GET_INTERVIEWS_SUCCESS'
export const GET_INTERVIEWS_FAILURE = 'GET_INTERVIEWS_FAILURE'

// Create Redux action creators that return an action
export const getInterviews = () => ({
    type: GET_INTERVIEWS,
})

export const getInterviewsSuccess = interviews => ({
    type: GET_INTERVIEWS_SUCCESS,
    payload: interviews,
})

export const getInterviewsFailure = () => ({
    type: GET_INTERVIEWS_FAILURE,
})


// Combine them all in an asynchronous thunk
export function fetchInterviews() {
  return async dispatch => {
    dispatch(getInterviews())

    try {
      const response = await fetch('http://localhost:3000/interviews')
      const data = await response.json()

      dispatch(getInterviewsSuccess(data))
    } catch (error) {
      dispatch(getInterviewsFailure())
    }
  }
}