import { GET_EMOJIS } from '../constants/EmojiConstants';

const initialState = {
    emojis: []
}

const EmojiReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case GET_EMOJIS:
            return {
                ...state,
                emojis: [...action.payload],
            }
    }

    return state;
}

export default EmojiReducer;