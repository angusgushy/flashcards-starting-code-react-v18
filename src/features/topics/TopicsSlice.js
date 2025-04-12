import { createSlice } from "@reduxjs/toolkit";

//Create Slice
const topicsSlice = createSlice ({
    name: 'allTopics',
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
    },
})

// Selector to select the topics object
export const selectTopics = (state) => state.allTopics.topics;

// Export the action creators and reducer
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;