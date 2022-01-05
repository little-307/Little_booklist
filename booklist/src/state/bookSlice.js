import {createSlice} from '@reduxjs/toolkit';

import BookData from '../data/BookData';

export const bookSlice = createSlice ({
    name: 'content',
    initialState: {
        content: BookData
    },
    reducers: {
        contentReducer: (state, action) => {
            
            state.content.push({...action.payload})
            console.log(state.content)
        }
    }
})

export const { contentReducer } = bookSlice.actions;
export const selectContent = (state) => state.content.content;

export default bookSlice.reducer;