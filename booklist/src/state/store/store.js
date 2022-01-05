import { configureStore } from '@reduxjs/toolkit';

import contentReducer from '../bookSlice';

export const store = configureStore({
    reducer:{
        content: contentReducer
    }
})