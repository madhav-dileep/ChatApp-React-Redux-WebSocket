const initialState = {
  messages: [],
  users: []
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user !== action.payload)
      };
    case 'SET_USER_LIST':
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default chatReducer;
