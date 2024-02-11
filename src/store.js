import { createStoreHook } from 'react-redux';  
import rootred from './redux/reducers/main';

const store = createStoreHook(
    rootred
);

export default store;