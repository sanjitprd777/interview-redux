// Create Redux action types
export const GET_INTERVIEW = 'GET INTERVIEW'
export const GET_INTERVIEW_SUCCESS = 'GET_INTERVIEW_SUCCESS'
export const GET_INTERVIEW_FAILURE = 'GET_INTERVIEW_FAILURE'

// Create Redux action creators that return an action
export const getInterview = () => ({
    type: GET_INTERVIEW,
})

export const getInterviewSuccess = showData => ({
    type: GET_INTERVIEW_SUCCESS,
    payload: showData,
})

export const getInterviewFailure = () => ({
    type: GET_INTERVIEW_FAILURE,
})


// Combine them all in an asynchronous thunk
export function fetchShows() {
  return async dispatch => {
    dispatch(getInterview())

    try {

      const pageUrl = window.location.href
      console.log(pageUrl);
      const id = pageUrl.substring(33);
      console.log(id);
      
      // const iid = this.props.match.params.id;

      // console.log(iid);
      
      const url = "http://localhost:3000/interviews/" + id;
  
      const response = await fetch(url)
      const data = await response.json()
      dispatch(getInterviewSuccess(data))
    } catch (error) {
      dispatch(getInterviewFailure())
    }
  }
}