import { SAVE_LIKE } from '../constants/LikeConstants';

export const addLike = (emoji) => {
    return {
        type: SAVE_LIKE,
        payload: emoji
    }
}