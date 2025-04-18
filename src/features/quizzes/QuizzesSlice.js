import { createSlice } from '@reduxjs/toolkit';

//Create Slice
const quizzesSlice = createSlice ({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },

    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        }
    }
})

// Selector to select the quizzes object
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Export the action creators and reducer
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;