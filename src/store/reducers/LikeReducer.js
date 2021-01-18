import { SAVE_LIKE } from '../constants/LikeConstants';

const initialState = {
    likes: []
};

export const LikeReducer = (state = initialState, action) => {

    switch(action.type) {

        case SAVE_LIKE:
            console.log(action.payload);
            return state.likes.push(action.payload);

        default: 
        break;
    }

    return state;
}

