import { SAVE_LIKE, DELETE_LIKE } from '../constants/LikeConstants';

export const addLike = (emoji) => {
    return {
        type: SAVE_LIKE,
        payload: emoji
    }
}

export const deleteLike = (slug) => {
    return {
        type: DELETE_LIKE,
        payload: slug
    }
}