// import { configureStore } from "@reduxkjs/toolit";
import { createStore } from 'redux';
import chatReducer from './reducers';

// const store = configureStore(chatReducer);
const store = createStore(chatReducer);


export default store;
