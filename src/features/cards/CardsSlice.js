import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {},
    },

    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back,
            };

        }
    }
})

//Selector to select the card with given id
export const selectCardById = (id) => (state) => state.cards.cards[id];

//export the action creator and reducer
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;