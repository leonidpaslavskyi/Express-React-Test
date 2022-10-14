const initialState = {
  text: ''
}

export default function translationItemSlice(state = initialState, action) {
  switch (action.type) {
    case 'translationItemSlice/textChanged': {
      return {
        ...state,
        text: action.payload,
      }
    }
    default:
      return state
  }
}