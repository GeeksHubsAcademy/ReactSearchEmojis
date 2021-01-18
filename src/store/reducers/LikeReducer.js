import { SAVE_LIKE } from '../constants/LikeConstants';

const initialState = {
    likes: []
};

export const LikeReducer = (state = initialState, action) => {

    switch(action.type) {

        case SAVE_LIKE:
            return state;

        default: 
        break;
    }

    return state;
}

