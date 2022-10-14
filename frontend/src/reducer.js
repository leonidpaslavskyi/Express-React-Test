import { combineReducers } from 'redux'

import translationItemSlice from './components/translationItemSlice'

const rootReducer = combineReducers({
  translationItem: translationItemSlice
})

export default rootReducer
