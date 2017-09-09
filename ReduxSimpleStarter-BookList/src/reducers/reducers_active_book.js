// State argument is not Application State, only the State this
// Reducer is Responsible for

export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
