import { combineReducers } from "redux";

import LikeReducer from './LikeReducer';
import EmojiReducer from './EmojiReducer';

export const rootReducers = combineReducers({
    LikeReducer,
    EmojiReducer,
});