import * as actions from '../actions/showActions'

export const initialState = {
  showDatas: [],
  loading: false,
  hasErrors: false,
}

export default function showReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_INTERVIEW:
      return { ...state, loading: true }
    case actions.GET_INTERVIEW_SUCCESS:
      return { showDatas: action.payload, loading: false, hasErrors: false }
    case actions.GET_INTERVIEW_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}