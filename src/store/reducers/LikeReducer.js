import { SAVE_LIKE } from '../constants/LikeConstants';

const initialState = {
    likes: []
};

const LikeReducer = (state = initialState, action) => {

    switch(action.type) {

        case SAVE_LIKE:
            console.log(action.payload);
            return {
                ...state,
                likes: [...state.likes, action.payload]
            };
    }

    return state;
}

export default LikeReducer;
