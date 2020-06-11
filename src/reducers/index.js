import { combineReducers } from 'redux'

import interviewsReducer from './interviewsReducer'
import showReducer from './showReducer'

// Step 2: Add reducer to rootReducer
const rootReducer = combineReducers({
  interviews: interviewsReducer,
  showDatas: showReducer,
})

export default rootReducer