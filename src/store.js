import { configureStore } from '@reduxjs/toolkit';
// import rootred from './redux/reducers/main';
import { cartreducer } from './redux/reducers/reducer';

const store = configureStore({
    reducer: {
      cartreducer
    },
   
  });

export default store;