export const sendMessage = (message) => ({
  type: 'SEND_MESSAGE',
  payload: message
});

export const receiveMessage = (message) => ({
  type: 'RECEIVE_MESSAGE',
  payload: message
});

export const addUser = (username) => ({
  type: 'ADD_USER',
  payload: username
});

export const removeUser = (username) => ({
  type: 'REMOVE_USER',
  payload: username
});

export const setUserlist = (users) => ({
  type: 'SET_USER_LIST',
  payload: users
})