import { SAVE_LIKE, DELETE_LIKE } from '../constants/LikeConstants';

const initialState = {
    likes: []
};

const LikeReducer = (state = initialState, action) => {

    switch(action.type) {

        case SAVE_LIKE:
            console.log(state.likes);
            return {
                ...state,
                likes: [...state.likes, action.payload]
            };

        case DELETE_LIKE:
            const likes = state.likes.filter( emoji => emoji.slug !== action.payload);
            console.log(likes);
            return {
                ...state,
                likes: [...likes]
            };
    }

    return state;
}

export default LikeReducer;
