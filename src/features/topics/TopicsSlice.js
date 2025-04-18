import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/QuizzesSlice";

//Create Slice
const topicsSlice = createSlice ({
    name: 'topics',
    initialState: {
        topics: {},
    },

    reducers: {
        addTopic: (state,action) => {
            const {id, name, icon} = action.payload;
            const newTopic = {
                id: id,
                name: name,
                icon: icon,
                quizIds: [],
            };
            state.topics[id] = newTopic;
        },

        extraReducers: (builder) => {
            builder.addCase(addQuiz, (state, action) => {
                const { id, topicId } = action.payload;
                state.topics[topicId].quizIds.push(id);
            })
        }
    },
})

// Selector to select the topics object
export const selectTopics = (state) => state.topics.topics;

// Export the action creators and reducer
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;